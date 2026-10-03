import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTemplateBySlug, listContracts } from '../api';
import { formatDate } from '../format';
import type { ContractSummary, ContractTemplate } from '../types';
import { StatusChip, Spinner } from '../components/ui';

const Modelo: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const [template, setTemplate] = useState<ContractTemplate | null | undefined>(undefined);
  const [contracts, setContracts] = useState<ContractSummary[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getTemplateBySlug(slug)
      .then(async (t) => {
        setTemplate(t);
        if (t) setContracts(await listContracts(t.id));
      })
      .catch((e) => setError(e instanceof Error ? e.message : 'Não foi possível carregar.'));
  }, [slug]);

  if (error) return <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>;
  if (template === undefined)
    return (
      <div className="flex justify-center py-20 text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );
  if (template === null)
    return (
      <div className="py-16 text-center">
        <p className="text-slate-500">Modelo não encontrado.</p>
        <Link to="/contratos" className="mt-3 inline-block text-sm font-bold text-blue-600">← Voltar ao painel</Link>
      </div>
    );

  return (
    <div>
      <Link to="/contratos" className="text-sm font-bold text-slate-500 hover:text-slate-800">← Painel</Link>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="min-w-0">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-blue-500">Modelo</div>
          <h1 className="mt-1 text-[28px] font-extrabold tracking-tight text-slate-900">{template.name}</h1>
          <p className="mt-1 max-w-2xl text-[15px] text-slate-500">{template.title}</p>
        </div>
        <Link
          to={`/contratos/modelo/${template.slug}/novo`}
          className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(79,70,229,0.55)] transition hover:brightness-105"
        >
          + Novo contrato
        </Link>
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">
          Contratos gerados ({contracts.length})
        </h2>
        {contracts.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 px-6 py-14 text-center">
            <p className="text-[15px] font-semibold text-slate-600">Nenhum contrato gerado ainda.</p>
            <p className="mt-1 text-sm text-slate-500">Clique em “Novo contrato”, confira os dados do contratante e gere os links.</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 rounded-3xl border border-slate-200/80 bg-white">
            {contracts.map((c) => (
              <Link
                key={c.id}
                to={`/contratos/contrato/${c.id}`}
                className="flex flex-wrap items-center gap-x-5 gap-y-2 px-5 py-4 transition first:rounded-t-3xl last:rounded-b-3xl hover:bg-slate-50"
              >
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[16px] font-bold text-slate-900">{c.label}</div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    Criado em {formatDate(c.created_at)} · link válido até {formatDate(c.expires_at)}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                  {c.contract_signers.map((s) => (
                    <span key={s.role} className="flex items-center gap-1">
                      <span className={s.signed_at ? 'text-emerald-500' : 'text-slate-300'}>{s.signed_at ? '●' : '○'}</span>
                      {s.role_label.charAt(0) + s.role_label.slice(1).toLowerCase()}
                    </span>
                  ))}
                </div>
                <StatusChip status={c.status} expiresAt={c.expires_at} />
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Modelo;
