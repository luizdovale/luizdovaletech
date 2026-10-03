import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createContract, getTemplateBySlug } from '../api';
import {
  isValidCnpj,
  isValidCpf,
  isValidDateBR,
  isValidEmail,
  maskCnpj,
  maskCpf,
  maskDate,
  maskMoney,
  maskPhone,
  numberToWordsReais,
  onlyDigits,
  parseMoney,
  renderTemplate,
} from '../format';
import type { ContractTemplate, FieldType, TemplateVariable } from '../types';
import { Card, ContractDocument, FieldLabel, GhostButton, inputClass, PrimaryButton, Spinner } from '../components/ui';

function applyMask(type: FieldType, raw: string): string {
  switch (type) {
    case 'cnpj': return maskCnpj(raw);
    case 'cpf': return maskCpf(raw);
    case 'tel': return maskPhone(raw);
    case 'date': return maskDate(raw);
    case 'money': return maskMoney(raw);
    case 'number': return onlyDigits(raw).slice(0, 2);
    default: return raw;
  }
}

const INPUT_MODE: Partial<Record<FieldType, 'numeric' | 'email' | 'tel' | 'text'>> = {
  cnpj: 'numeric', cpf: 'numeric', tel: 'tel', date: 'numeric', money: 'numeric', number: 'numeric', email: 'email',
};

function validate(v: TemplateVariable, value: string): { error?: string; warning?: string } {
  const text = (value || '').trim();
  if (!text) return v.required === false ? {} : { error: 'Preencha este campo.' };
  switch (v.type) {
    case 'cpf': return isValidCpf(text) ? {} : { error: 'CPF inválido.' };
    case 'cnpj': return isValidCnpj(text) ? {} : { warning: 'Este CNPJ não passa na validação. Confira os números.' };
    case 'email': return isValidEmail(text) ? {} : { error: 'E-mail inválido.' };
    case 'date': return isValidDateBR(text) ? {} : { error: 'Use o formato dd/mm/aaaa.' };
    case 'money': return parseMoney(text) > 0 ? {} : { error: 'Informe um valor maior que zero.' };
    case 'number': {
      const n = Number(text);
      if (v.key === 'dia_vencimento' && (n < 1 || n > 28)) return { error: 'Use um dia entre 1 e 28.' };
      return n >= 1 ? {} : { error: 'Informe um número válido.' };
    }
    default: return {};
  }
}

const NovoContrato: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [template, setTemplate] = useState<ContractTemplate | null | undefined>(undefined);
  const [values, setValues] = useState<Record<string, string>>({});
  const [wordsEdited, setWordsEdited] = useState<Set<string>>(new Set());
  const [label, setLabel] = useState('');
  const [labelEdited, setLabelEdited] = useState(false);
  const [days, setDays] = useState(7);
  const [showErrors, setShowErrors] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    getTemplateBySlug(slug)
      .then((t) => {
        setTemplate(t);
        if (!t) return;
        const initial: Record<string, string> = {};
        t.variables.forEach((v) => { initial[v.key] = v.default ?? ''; });
        setValues(initial);
        setDays(t.link_valid_days);
        const source = t.variables.find((v) => /nome_fantasia/.test(v.key)) ?? t.variables.find((v) => /razao/.test(v.key));
        if (source) setLabel(initial[source.key] ?? '');
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Não foi possível carregar o modelo.'));
  }, [slug]);

  const labelSourceKey = useMemo(
    () => (template?.variables.find((v) => /nome_fantasia/.test(v.key)) ?? template?.variables.find((v) => /razao/.test(v.key)))?.key,
    [template],
  );

  const groups = useMemo(() => {
    const map = new Map<string, TemplateVariable[]>();
    template?.variables.forEach((v) => {
      const g = v.group || 'Dados do contrato';
      map.set(g, [...(map.get(g) ?? []), v]);
    });
    return Array.from(map.entries());
  }, [template]);

  const setField = (v: TemplateVariable, raw: string) => {
    const masked = applyMask(v.type, raw.replace(/\s*\n\s*/g, ' ')); // campos de texto longo são áreas de texto, mas o valor nunca leva quebra de linha
    setValues((prev) => {
      const next = { ...prev, [v.key]: masked };
      if (v.type === 'money') {
        template?.variables
          .filter((w) => w.type === 'words' && w.words_of === v.key && !wordsEdited.has(w.key))
          .forEach((w) => { next[w.key] = masked ? numberToWordsReais(parseMoney(masked)) : ''; });
      }
      return next;
    });
    if (v.type === 'words') setWordsEdited((prev) => new Set(prev).add(v.key));
    if (v.key === labelSourceKey && !labelEdited) setLabel(masked);
  };

  const issues = useMemo(() => {
    const result: Record<string, { error?: string; warning?: string }> = {};
    template?.variables.forEach((v) => { result[v.key] = validate(v, values[v.key] ?? ''); });
    return result;
  }, [template, values]);

  const hasErrors = Object.values(issues).some((i) => i.error) || !label.trim();

  const submit = async () => {
    if (!template) return;
    setShowErrors(true);
    setError('');
    if (hasErrors) {
      setError('Corrija os campos marcados em vermelho para gerar o contrato.');
      return;
    }
    setBusy(true);
    try {
      const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]));
      const created = await createContract(template.id, label.trim(), trimmed, days);
      navigate(`/contratos/contrato/${created.contract_id}`, { state: { created: true } });
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Não foi possível gerar o contrato.');
      setBusy(false);
    }
  };

  if (template === undefined && !error)
    return (
      <div className="flex justify-center py-20 text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );
  if (!template)
    return (
      <div className="py-16 text-center">
        <p className="text-slate-500">{error || 'Modelo não encontrado.'}</p>
        <Link to="/contratos" className="mt-3 inline-block text-sm font-bold text-blue-600">← Voltar ao painel</Link>
      </div>
    );

  return (
    <div className="pb-10">
      <Link to={`/contratos/modelo/${template.slug}`} className="-ml-2 inline-flex min-h-[44px] items-center px-2 text-sm font-bold text-slate-500 hover:text-slate-800">
        ← {template.name}
      </Link>
      <div className="mt-4 mb-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">Novo contrato</div>
        <h1 className="mt-1 text-[28px] font-extrabold tracking-tight text-slate-900">Dados do contratante</h1>
        <p className="mt-1 max-w-2xl text-[15px] text-slate-500">
          Confira e complete os campos. Ao gerar, o sistema coloca cada dado no lugar certo do contrato, congela o texto e cria os links de assinatura.
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <div className="grid gap-5 sm:grid-cols-[1fr_180px]">
            <div>
              <FieldLabel required htmlFor="label">Identificação (só para a sua lista)</FieldLabel>
              <input
                id="label"
                value={label}
                onChange={(e) => { setLabel(e.target.value); setLabelEdited(true); }}
                placeholder="Ex.: JPS Auto Peças"
                className={`${inputClass} ${showErrors && !label.trim() ? 'border-red-300 bg-red-50/40' : ''}`}
              />
            </div>
            <div>
              <FieldLabel htmlFor="dias">Link válido por (dias)</FieldLabel>
              <input
                id="dias"
                type="number"
                min={1}
                max={90}
                value={days}
                onChange={(e) => setDays(Math.min(90, Math.max(1, Number(e.target.value) || 1)))}
                className={inputClass}
              />
            </div>
          </div>
        </Card>

        {groups.map(([group, vars]) => (
          <Card key={group} className="p-6">
            <h2 className="mb-5 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">{group}</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {vars.map((v) => {
                const issue = issues[v.key];
                const wide = v.type === 'words' || v.type === 'textarea' || (v.default ?? '').length > 38 || /endereco|condicao/.test(v.key);
                const isMoney = v.type === 'money';
                return (
                  <div key={v.key} className={wide ? 'sm:col-span-2' : ''}>
                    <FieldLabel required={v.required !== false} htmlFor={v.key}>{v.label}</FieldLabel>
                    <div className="relative">
                      {isMoney && <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">R$</span>}
                      {v.type === 'textarea' || (wide && (v.type === 'text' || v.type === 'words')) ? (
                        <textarea
                          id={v.key}
                          rows={v.type === 'textarea' ? 3 : 2}
                          value={values[v.key] ?? ''}
                          onChange={(e) => setField(v, e.target.value)}
                          placeholder={v.placeholder ?? ''}
                          className={`${inputClass} resize-none leading-snug ${
                            showErrors && issue?.error ? 'border-red-300 bg-red-50/40' : ''
                          }`}
                        />
                      ) : (
                        <input
                          id={v.key}
                          value={values[v.key] ?? ''}
                          onChange={(e) => setField(v, e.target.value)}
                          inputMode={INPUT_MODE[v.type]}
                          placeholder={v.placeholder ?? ''}
                          autoComplete="off"
                          className={`${inputClass} ${isMoney ? 'pl-11' : ''} ${
                            showErrors && issue?.error ? 'border-red-300 bg-red-50/40' : ''
                          }`}
                        />
                      )}
                    </div>
                    {showErrors && issue?.error && <p className="mt-1.5 px-1 text-sm font-medium text-red-600">{issue.error}</p>}
                    {issue?.warning && !issue.error && <p className="mt-1.5 px-1 text-sm font-medium text-amber-600">{issue.warning}</p>}
                    {v.type === 'words' && !wordsEdited.has(v.key) && (
                      <p className="mt-1.5 px-1 text-xs text-slate-400">Preenchido automaticamente a partir do valor. Você pode editar.</p>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        ))}

        <div>
          <GhostButton type="button" onClick={() => setPreview((p) => !p)}>
            {preview ? 'Ocultar prévia' : 'Ver prévia do contrato'}
          </GhostButton>
          {preview && (
            <Card className="mt-4 p-6 sm:p-9">
              <ContractDocument html={renderTemplate(template.body_html, values)} />
            </Card>
          )}
        </div>

        {error && (
          <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-100 pt-6">
          <Link to={`/contratos/modelo/${template.slug}`} className="inline-flex min-h-[44px] items-center px-3 text-sm font-bold text-slate-500 hover:text-slate-800">
            Cancelar
          </Link>
          <PrimaryButton type="button" onClick={submit} disabled={busy}>
            {busy ? (
              <>
                <Spinner className="h-4 w-4" /> Gerando…
              </>
            ) : (
              'Gerar contrato e links ›'
            )}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default NovoContrato;
