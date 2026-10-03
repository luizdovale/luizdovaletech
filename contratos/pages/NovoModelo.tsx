import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createTemplate, listTemplates } from '../api';
import { humanizeKey, slugify } from '../format';
import type { FieldType, TemplateSigner, TemplateVariable } from '../types';
import { Card, FieldLabel, inputClass, PrimaryButton, Spinner } from '../components/ui';

const TYPES: { value: FieldType; label: string }[] = [
  { value: 'text', label: 'Texto' },
  { value: 'textarea', label: 'Texto longo' },
  { value: 'cpf', label: 'CPF' },
  { value: 'cnpj', label: 'CNPJ' },
  { value: 'email', label: 'E-mail' },
  { value: 'tel', label: 'Telefone' },
  { value: 'date', label: 'Data' },
  { value: 'money', label: 'Valor (R$)' },
  { value: 'number', label: 'Número' },
];

const PLACEHOLDER = /\{\{([a-z0-9_]+)\}\}/g;
const FORBIDDEN = /<\s*(script|iframe|object|embed|link|style|form|input|button)\b|\son[a-z]+\s*=|javascript:/i;

const EXAMPLE = `<h1>Contrato de Prestação de Serviços</h1>
<p>CONTRATANTE: {{contratante_nome}}, CPF {{contratante_cpf}}.</p>
<h2>Cláusula 1 – Objeto</h2>
<p><b>1.1.</b> Descreva aqui o objeto do contrato.</p>`;

type Config = Record<string, { label: string; type: FieldType; required: boolean; default: string; group: string }>;

const NovoModelo: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [days, setDays] = useState(7);
  const [body, setBody] = useState('');
  // Os dados de quem assina como contratada vêm do último modelo salvo no banco (nunca escritos no código,
  // porque este repositório é público).
  const [issuer, setIssuer] = useState({ name: '', cpf: '', email: '' });
  const [client, setClient] = useState({ name: '{{contratante_nome}}', cpf: '{{contratante_cpf}}', email: '' });
  const [config, setConfig] = useState<Config>({});
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const slug = slugify(name);

  useEffect(() => {
    listTemplates()
      .then((templates) => {
        const previous = templates.flatMap((t) => t.signers).find((s) => s.role === 'contratada');
        if (previous) setIssuer((current) => (current.name || current.cpf ? current : { name: previous.name, cpf: previous.cpf, email: previous.email ?? '' }));
      })
      .catch(() => { /* sem modelo anterior: os campos ficam em branco para preencher */ });
  }, []);

  const keys = useMemo(() => {
    const found = new Set<string>();
    [body, issuer.name, issuer.cpf, issuer.email, client.name, client.cpf, client.email].forEach((t) => {
      for (const m of t.matchAll(PLACEHOLDER)) found.add(m[1]);
    });
    return Array.from(found);
  }, [body, issuer, client]);

  const cfg = (key: string) =>
    config[key] ?? {
      label: humanizeKey(key),
      type: (/cpf/.test(key) ? 'cpf' : /cnpj/.test(key) ? 'cnpj' : /email/.test(key) ? 'email' : /telefone|celular/.test(key) ? 'tel' : /valor/.test(key) ? 'money' : /data/.test(key) ? 'date' : 'text') as FieldType,
      required: true,
      default: '',
      group: key.startsWith('contratante') ? 'Contratante' : 'Dados do contrato',
    };

  const update = (key: string, patch: Partial<Config[string]>) => setConfig((prev) => ({ ...prev, [key]: { ...cfg(key), ...patch } }));

  const save = async () => {
    setError('');
    if (!name.trim() || !slug) return setError('Dê um nome ao modelo.');
    if (!title.trim()) return setError('Informe o título do contrato.');
    if (body.trim().length < 20) return setError('Cole o texto do contrato.');
    if (FORBIDDEN.test(body)) return setError('O texto tem uma tag ou atributo não permitido (script, iframe, formulário ou eventos on…).');
    if (!issuer.name.trim() || !issuer.cpf.trim()) return setError('Preencha nome e CPF de quem assina como contratada.');
    if (!client.name.trim() || !client.cpf.trim()) return setError('Preencha nome e CPF (ou os campos {{...}}) de quem assina como contratante.');

    const variables: TemplateVariable[] = keys.map((key) => {
      const c = cfg(key);
      return { key, label: c.label, type: c.type, required: c.required, default: c.default, group: c.group };
    });
    const signers: TemplateSigner[] = [
      { role: 'contratada', label: 'CONTRATADA', ...issuer },
      { role: 'contratante', label: 'CONTRATANTE', ...client },
    ];

    setBusy(true);
    try {
      await createTemplate({ slug, name: name.trim(), title: title.trim(), description: description.trim(), body_html: body, variables, signers, link_valid_days: days });
      navigate(`/contratos/modelo/${slug}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Não foi possível salvar o modelo.');
      setBusy(false);
    }
  };

  return (
    <div className="pb-10">
      <Link to="/contratos" className="text-sm font-bold text-slate-500 hover:text-slate-800">← Painel</Link>
      <div className="mt-4 mb-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">Novo modelo</div>
        <h1 className="mt-1 text-[28px] font-extrabold tracking-tight text-slate-900">Cadastrar outro contrato</h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-500">
          Cole o texto em HTML e marque, com <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[13px]">{'{{nome_do_campo}}'}</code>, cada dado que muda de cliente para cliente. Esses campos viram o formulário na hora de gerar o contrato.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <FieldLabel required htmlFor="nm">Nome do modelo (aparece no card)</FieldLabel>
              <input id="nm" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: site-institucional" className={inputClass} />
              {slug && <p className="mt-1.5 px-1 text-xs text-slate-400">Endereço: /contratos/modelo/{slug}</p>}
            </div>
            <div>
              <FieldLabel htmlFor="dias">Link válido por (dias)</FieldLabel>
              <input id="dias" type="number" min={1} max={90} value={days} onChange={(e) => setDays(Math.min(90, Math.max(1, Number(e.target.value) || 1)))} className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel required htmlFor="tt">Título do contrato</FieldLabel>
              <input id="tt" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Ex.: Contrato de Criação de Site — Cliente X" className={inputClass} />
            </div>
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="ds">Descrição (opcional)</FieldLabel>
              <input id="ds" value={description} onChange={(e) => setDescription(e.target.value)} className={inputClass} />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="mb-4 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Quem assina</h2>
          <p className="mb-5 text-sm text-slate-500">Use texto fixo (os seus dados) ou campos <code className="rounded bg-slate-100 px-1 text-[12px]">{'{{...}}'}</code> (os dados do cliente).</p>
          {([['CONTRATADA (você)', issuer, setIssuer], ['CONTRATANTE (cliente)', client, setClient]] as const).map(([label, value, set]) => (
            <div key={label} className="mb-5 last:mb-0">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{label}</div>
              <div className="grid gap-3 sm:grid-cols-3">
                <input aria-label={`${label}: nome`} value={value.name} onChange={(e) => set({ ...value, name: e.target.value })} placeholder="Nome completo" className={inputClass} />
                <input aria-label={`${label}: CPF`} value={value.cpf} onChange={(e) => set({ ...value, cpf: e.target.value })} placeholder="CPF" className={inputClass} />
                <input aria-label={`${label}: e-mail`} value={value.email} onChange={(e) => set({ ...value, email: e.target.value })} placeholder="E-mail (opcional)" className={inputClass} />
              </div>
            </div>
          ))}
        </Card>

        <Card className="p-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Texto do contrato (HTML)</h2>
            {!body && (
              <button type="button" onClick={() => setBody(EXAMPLE)} className="text-sm font-bold text-blue-600">Inserir exemplo</button>
            )}
          </div>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={16}
            spellCheck={false}
            placeholder="<h1>Título</h1> <p>Texto com {{campo}}…</p>"
            className={`${inputClass} font-mono text-[13px] leading-relaxed`}
          />
          <p className="mt-2 px-1 text-xs text-slate-400">Tags aceitas: h1, h2, h3, p, b, i, ol/li, table. O texto é congelado quando um contrato é gerado.</p>
        </Card>

        {keys.length > 0 && (
          <Card className="p-6">
            <h2 className="mb-4 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Campos encontrados ({keys.length})</h2>
            <div className="space-y-3">
              {keys.map((key) => {
                const c = cfg(key);
                return (
                  <div key={key} className="grid items-center gap-3 rounded-2xl border border-slate-200 p-3 sm:grid-cols-[150px_1fr_130px_1fr_auto]">
                    <code className="truncate text-xs font-bold text-slate-500">{`{{${key}}}`}</code>
                    <input aria-label={`Rótulo de ${key}`} value={c.label} onChange={(e) => update(key, { label: e.target.value })} className={`${inputClass} !py-2.5 !text-sm`} />
                    <select aria-label={`Tipo de ${key}`} value={c.type} onChange={(e) => update(key, { type: e.target.value as FieldType })} className={`${inputClass} !py-2.5 !text-sm`}>
                      {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
                    </select>
                    <input aria-label={`Valor padrão de ${key}`} value={c.default} onChange={(e) => update(key, { default: e.target.value })} placeholder="Valor padrão" className={`${inputClass} !py-2.5 !text-sm`} />
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                      <input type="checkbox" checked={c.required} onChange={(e) => update(key, { required: e.target.checked })} className="h-4 w-4 rounded border-slate-300" />
                      Obrigatório
                    </label>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        {error && <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</div>}

        <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-6">
          <Link to="/contratos" className="px-3 py-2 text-sm font-bold text-slate-500 hover:text-slate-800">Cancelar</Link>
          <PrimaryButton type="button" onClick={save} disabled={busy}>
            {busy ? <><Spinner className="h-4 w-4" /> Salvando…</> : 'Salvar modelo'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NovoModelo;
