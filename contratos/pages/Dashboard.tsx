import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listContracts, listTemplates } from '../api';
import { formatDate } from '../format';
import type { ContractSummary, ContractTemplate } from '../types';
import { StatusChip, Spinner } from '../components/ui';

const Dashboard: React.FC = () => {
  const [templates, setTemplates] = useState<ContractTemplate[] | null>(null);
  const [contracts, setContracts] = useState<ContractSummary[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([listTemplates(), listContracts()])
      .then(([t, c]) => {
        setTemplates(t);
        setContracts(c);
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Não foi possível carregar.'));
  }, []);

  if (error) return <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>;
  if (!templates)
    return (
      <div className="flex justify-center py-20 text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );

  const stats = (templateId: string) => {
    const list = contracts.filter((c) => c.template_id === templateId);
    return {
      total: list.length,
      signed: list.filter((c) => c.status === 'assinado').length,
      waiting: list.filter((c) => c.status === 'aguardando' || c.status === 'parcial').length,
    };
  };

  const nameOf = (templateId: string) => templates.find((t) => t.id === templateId)?.name ?? '';

  return (
    <div>
      <div className="mb-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">Painel</div>
        <h1 className="mt-1 text-[28px] font-extrabold tracking-tight text-slate-900">Seus contratos</h1>
        <p className="mt-1 text-[15px] text-slate-500">Escolha um modelo para gerar um novo contrato ou acompanhar os já enviados.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => {
          const s = stats(t.id);
          return (
            <Link
              key={t.id}
              to={`/contratos/modelo/${t.slug}`}
              className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_40px_-16px_rgba(59,130,246,0.35)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl ring-1 ring-blue-100">📄</span>
                <span className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-500">›</span>
              </div>
              <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">Modelo</div>
              <div className="mt-1 text-[22px] font-extrabold tracking-tight text-slate-900">{t.name}</div>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{t.description || t.title}</p>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 text-xs font-semibold">
                <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600">{s.total} contrato(s)</span>
                {s.waiting > 0 && <span className="rounded-full bg-amber-50 px-2.5 py-1 text-amber-700 ring-1 ring-amber-200">{s.waiting} aguardando</span>}
                {s.signed > 0 && <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700 ring-1 ring-emerald-200">{s.signed} assinado(s)</span>}
              </div>
            </Link>
          );
        })}

        <Link
          to="/contratos/novo-modelo"
          className="flex min-h-[220px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 p-6 text-center text-slate-400 transition hover:border-blue-300 hover:bg-blue-50/40 hover:text-blue-600"
        >
          <span className="text-3xl leading-none">+</span>
          <span className="mt-3 text-[15px] font-bold">Novo modelo de contrato</span>
          <span className="mt-1 text-sm">Cadastre outro tipo de contrato</span>
        </Link>
      </div>

      {contracts.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-3 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Últimos contratos</h2>
          <div className="divide-y divide-slate-100 rounded-3xl border border-slate-200/80 bg-white">
            {contracts.slice(0, 6).map((c) => (
              <Link
                key={c.id}
                to={`/contratos/contrato/${c.id}`}
                className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-4 transition first:rounded-t-3xl last:rounded-b-3xl hover:bg-slate-50"
              >
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[15px] font-bold text-slate-900">{c.label}</div>
                  <div className="text-xs text-slate-500">
                    {nameOf(c.template_id)} · criado em {formatDate(c.created_at)}
                  </div>
                </div>
                <StatusChip status={c.status} expiresAt={c.expires_at} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Dashboard;
