import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getContract } from '../api';
import { formatDateTime } from '../format';
import type { ContractEvent, ContractFull } from '../types';
import PartyBlock from '../components/PartyBlock';
import { ContractDocument, Spinner } from '../components/ui';

const EVENT_LABEL: Record<string, string> = {
  created: 'Contrato gerado',
  viewed: 'Contrato aberto pelo link',
  sign_failed: 'Tentativa de assinatura recusada',
  signed: 'Assinatura registrada',
  cancelled: 'Contrato cancelado',
  extended: 'Validade do link prorrogada',
};

/** Página própria para "Imprimir / Salvar como PDF": contrato + assinaturas + relatório de auditoria. */
const Comprovante: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const [data, setData] = useState<{ contract: ContractFull; events: ContractEvent[] } | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getContract(id)
      .then(setData)
      .catch((e) => setError(e instanceof Error ? e.message : 'Não foi possível carregar.'));
  }, [id]);

  if (error) return <p className="p-8 text-red-600">{error}</p>;
  if (!data)
    return (
      <div className="flex min-h-screen items-center justify-center text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );

  const { contract, events } = data;
  const labelOf = (signerId: string | null) => contract.contract_signers.find((s) => s.id === signerId)?.role_label ?? 'Administrador';

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <div className="no-print sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[820px] items-center gap-3 px-5 py-3">
          <Link to={`/contratos/contrato/${contract.id}`} className="text-sm font-bold text-slate-500 hover:text-slate-800">← Voltar</Link>
          <button
            onClick={() => window.print()}
            className="ml-auto rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow"
          >
            Imprimir / Salvar como PDF
          </button>
        </div>
      </div>

      <main className="mx-auto max-w-[820px] px-5 py-8 print:p-0">
        <ContractDocument html={contract.body_html} />

        <section className="avoid-break mt-10">
          <div className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">Assinaturas eletrônicas</div>
          <div className="grid gap-3 sm:grid-cols-2">
            {contract.contract_signers.map((s) => (
              <PartyBlock key={s.role} party={{ label: s.role_label, name: s.name, signed_at: s.signed_at, signature_png: s.signature_png }} />
            ))}
          </div>
        </section>

        <section className="mt-12" style={{ breakBefore: 'page' }}>
          <h2 className="text-[15px] font-extrabold uppercase tracking-wide text-slate-900">Relatório de assinaturas e trilha de auditoria</h2>
          <dl className="mt-4 space-y-1 text-sm text-slate-700">
            <div><dt className="inline font-bold">Contrato: </dt><dd className="inline">{contract.title}</dd></div>
            <div><dt className="inline font-bold">Identificação: </dt><dd className="inline">{contract.label}</dd></div>
            <div><dt className="inline font-bold">Gerado em: </dt><dd className="inline">{formatDateTime(contract.created_at)}</dd></div>
            <div><dt className="inline font-bold">Situação: </dt><dd className="inline">{contract.status}{contract.completed_at ? ` em ${formatDateTime(contract.completed_at)}` : ''}</dd></div>
            <div className="break-all"><dt className="inline font-bold">SHA-256 do texto: </dt><dd className="inline font-mono text-xs">{contract.body_sha256}</dd></div>
            <div className="break-all"><dt className="inline font-bold">Código do contrato: </dt><dd className="inline font-mono text-xs">{contract.id}</dd></div>
          </dl>

          <h3 className="mt-8 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Assinantes</h3>
          <div className="mt-3 space-y-4">
            {contract.contract_signers.map((s) => (
              <div key={s.role} className="avoid-break rounded-xl border border-slate-200 p-4 text-sm">
                <div className="font-bold text-slate-900">{s.role_label}: {s.name}</div>
                <dl className="mt-2 space-y-1 text-xs text-slate-700">
                  <div><dt className="inline font-bold">CPF cadastrado: </dt><dd className="inline">{s.cpf}</dd></div>
                  {s.signed_at ? (
                    <>
                      <div><dt className="inline font-bold">Nome digitado: </dt><dd className="inline">{s.signed_name}{s.name_matches === false ? ' (difere do cadastrado)' : ''}</dd></div>
                      <div><dt className="inline font-bold">CPF informado: </dt><dd className="inline">{s.signed_cpf}</dd></div>
                      <div><dt className="inline font-bold">Assinou em (servidor): </dt><dd className="inline">{formatDateTime(s.signed_at)}</dd></div>
                      <div><dt className="inline font-bold">IP: </dt><dd className="inline">{s.ip ?? '—'}</dd></div>
                      <div><dt className="inline font-bold">Dispositivo: </dt><dd className="inline break-words">{s.user_agent ?? '—'}</dd></div>
                      <div><dt className="inline font-bold">Leu o contrato até o fim: </dt><dd className="inline">{s.read_to_end ? 'sim' : 'não'}</dd></div>
                      <div className="break-all"><dt className="inline font-bold">Selo da assinatura (SHA-256): </dt><dd className="inline font-mono text-[10.5px]">{s.seal_sha256}</dd></div>
                    </>
                  ) : (
                    <div className="font-semibold text-amber-700">Ainda não assinou.</div>
                  )}
                </dl>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Trilha de auditoria</h3>
          <table className="mt-3 w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-300 text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-1.5 pr-3">Quando</th>
                <th className="py-1.5 pr-3">O quê</th>
                <th className="py-1.5 pr-3">Quem</th>
                <th className="py-1.5">IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {events.map((ev) => (
                <tr key={ev.id} className="align-top">
                  <td className="py-1.5 pr-3 whitespace-nowrap">{formatDateTime(ev.created_at)}</td>
                  <td className="py-1.5 pr-3">{EVENT_LABEL[ev.kind] ?? ev.kind}</td>
                  <td className="py-1.5 pr-3">{labelOf(ev.signer_id)}</td>
                  <td className="py-1.5 font-mono">{ev.ip ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-6 text-[11px] leading-relaxed text-slate-400">
            Documento assinado eletronicamente. As partes reconheceram, na cláusula de assinatura eletrônica do contrato, a validade deste registro como prova de autoria e integridade (art. 10, §2º, da MP 2.200-2/2001 e Lei 14.063/2020). Datas e horários no fuso de Brasília.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Comprovante;
