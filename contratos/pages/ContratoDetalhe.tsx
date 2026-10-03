import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { cancelContract, extendContract, getContract, signingUrl } from '../api';
import { formatDate, formatDateTime, onlyDigits } from '../format';
import type { ContractEvent, ContractFull, SignerFull } from '../types';
import { Card, ContractDocument, CopyButton, GhostButton, Spinner, StatusChip, effectiveStatus } from '../components/ui';

const EVENT_LABEL: Record<string, string> = {
  created: 'Contrato gerado',
  viewed: 'Contrato aberto pelo link',
  sign_failed: 'Tentativa de assinatura recusada (CPF não conferiu)',
  signed: 'Assinatura registrada',
  cancelled: 'Contrato cancelado',
  extended: 'Validade do link prorrogada',
};

function whatsappShare(signer: SignerFull, contract: ContractFull): string {
  const url = signingUrl(signer.token);
  const text = `Olá! Segue o link para você ler e assinar o contrato (${contract.label}): ${url}`;
  const phoneDigits = onlyDigits(contract.field_values.contratante_telefone ?? '');
  const phone = phoneDigits.length >= 10 ? `55${phoneDigits}` : '';
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

const ContratoDetalhe: React.FC = () => {
  const { id = '' } = useParams<{ id: string }>();
  const location = useLocation();
  const justCreated = Boolean((location.state as { created?: boolean } | null)?.created);

  const [data, setData] = useState<{ contract: ContractFull; events: ContractEvent[] } | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [showText, setShowText] = useState(false);

  const load = useCallback(async () => {
    try {
      setData(await getContract(id));
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Não foi possível carregar o contrato.');
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  const run = async (action: () => Promise<unknown>, confirmText?: string) => {
    if (confirmText && !window.confirm(confirmText)) return;
    setBusy(true);
    setError('');
    try {
      await action();
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'A ação não pôde ser concluída.');
    } finally {
      setBusy(false);
    }
  };

  if (error && !data) return <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>;
  if (!data)
    return (
      <div className="flex justify-center py-20 text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );

  const { contract, events } = data;
  const open = contract.status === 'aguardando' || contract.status === 'parcial';
  const expired = effectiveStatus(contract.status, contract.expires_at) === 'expirado';
  const anySigned = contract.contract_signers.some((s) => s.signed_at);
  const labelOf = (signerId: string | null) => contract.contract_signers.find((s) => s.id === signerId)?.role_label ?? '';

  return (
    <div className="space-y-6 pb-10">
      <div>
        <Link to={`/contratos/modelo/${contract.template_slug}`} className="text-sm font-bold text-slate-500 hover:text-slate-800">
          ← {contract.template_slug}
        </Link>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-[28px] font-extrabold tracking-tight text-slate-900">{contract.label}</h1>
            <p className="mt-1 text-sm text-slate-500">
              Gerado em {formatDateTime(contract.created_at)} · link válido até {formatDate(contract.expires_at)}
            </p>
          </div>
          <StatusChip status={contract.status} expiresAt={contract.expires_at} />
        </div>
      </div>

      {justCreated && open && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm leading-relaxed text-emerald-800">
          <b>Contrato gerado.</b> O texto foi congelado e não pode mais ser alterado. Assine você primeiro (ou depois) e envie o link ao contratante.
        </div>
      )}
      {error && <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p>}

      <Card className="p-6">
        <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Links de assinatura</h2>
        <p className="mt-1 text-sm text-slate-500">Cada parte tem o seu link. Quem tem o link consegue abrir o contrato, então envie só para a pessoa certa.</p>
        <div className="mt-5 space-y-4">
          {contract.contract_signers.map((s, i) => {
            const url = signingUrl(s.token);
            return (
              <div key={s.role} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{s.role_label}</div>
                    <div className="text-[15px] font-bold text-slate-900">{s.name}</div>
                  </div>
                  {s.signed_at ? (
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
                      ✓ Assinou em {formatDateTime(s.signed_at)}
                    </span>
                  ) : (
                    <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">
                      Aguardando{s.failed_attempts > 0 ? ` · ${s.failed_attempts} tentativa(s) com CPF errado` : ''}
                    </span>
                  )}
                </div>
                {!s.signed_at && open && (
                  <>
                    <input
                      readOnly
                      value={url}
                      onFocus={(e) => e.currentTarget.select()}
                      className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 font-mono text-xs text-slate-600"
                    />
                    <div className="mt-3 flex flex-wrap gap-2">
                      <CopyButton text={url} />
                      <Link to={`/contratos/assinar/${s.token}`} className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                        {i === 0 ? 'Assinar agora' : 'Abrir'}
                      </Link>
                      {i > 0 && (
                        <a
                          href={whatsappShare(s, contract)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 hover:bg-emerald-100"
                        >
                          Enviar por WhatsApp
                        </a>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
          {open && (
            <GhostButton disabled={busy} onClick={() => run(() => extendContract(contract.id, 7), expired ? undefined : undefined)}>
              {expired ? 'Reativar links por 7 dias' : 'Prorrogar por 7 dias'}
            </GhostButton>
          )}
          {open && (
            <GhostButton
              disabled={busy}
              onClick={() => run(() => cancelContract(contract.id), 'Cancelar este contrato? Os links deixam de funcionar. As assinaturas já feitas continuam registradas.')}
              className="!text-red-600"
            >
              Cancelar contrato
            </GhostButton>
          )}
          {anySigned && (
            <a
              href={`/contratos/comprovante/${contract.id}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Comprovante em PDF
            </a>
          )}
          <GhostButton onClick={() => setShowText((v) => !v)}>{showText ? 'Ocultar texto' : 'Ver texto do contrato'}</GhostButton>
        </div>
      </Card>

      {showText && (
        <Card className="p-6 sm:p-9">
          <ContractDocument html={contract.body_html} />
        </Card>
      )}

      {anySigned && (
        <Card className="p-6">
          <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Assinaturas registradas</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {contract.contract_signers.filter((s) => s.signed_at).map((s) => (
              <div key={s.role} className="rounded-2xl border border-slate-200 p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{s.role_label}</div>
                <div className="mt-2 flex h-20 items-center justify-center rounded-xl bg-slate-50">
                  {s.signature_png && <img src={s.signature_png} alt={`Assinatura de ${s.name}`} className="max-h-[72px] max-w-full object-contain" />}
                </div>
                <dl className="mt-3 space-y-1 text-xs text-slate-600">
                  <div><dt className="inline font-bold">Nome digitado: </dt><dd className="inline">{s.signed_name} {s.name_matches === false && <span className="font-semibold text-amber-600">(difere do cadastrado: {s.name})</span>}</dd></div>
                  <div><dt className="inline font-bold">CPF: </dt><dd className="inline">{s.signed_cpf}</dd></div>
                  <div><dt className="inline font-bold">Data e hora (servidor): </dt><dd className="inline">{formatDateTime(s.signed_at)}</dd></div>
                  <div><dt className="inline font-bold">IP: </dt><dd className="inline">{s.ip ?? '—'}</dd></div>
                  <div><dt className="inline font-bold">Dispositivo: </dt><dd className="inline break-words">{s.user_agent ?? '—'}</dd></div>
                  <div><dt className="inline font-bold">Leu até o fim: </dt><dd className="inline">{s.read_to_end ? 'sim' : 'não'}</dd></div>
                  <div className="break-all"><dt className="inline font-bold">Selo: </dt><dd className="inline font-mono text-[10.5px]">{s.seal_sha256}</dd></div>
                </dl>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Card className="p-6">
        <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Trilha de auditoria</h2>
        <p className="mt-1 break-all font-mono text-[11px] text-slate-400">Integridade do texto (SHA-256): {contract.body_sha256}</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                <th className="py-2 pr-3">Quando</th>
                <th className="py-2 pr-3">O quê</th>
                <th className="py-2 pr-3">Quem</th>
                <th className="py-2">IP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {events.map((ev) => (
                <tr key={ev.id} className="align-top">
                  <td className="py-2 pr-3 whitespace-nowrap text-slate-600">{formatDateTime(ev.created_at)}</td>
                  <td className="py-2 pr-3 text-slate-800">{EVENT_LABEL[ev.kind] ?? ev.kind}</td>
                  <td className="py-2 pr-3 text-slate-600">{labelOf(ev.signer_id) || 'Administrador'}</td>
                  <td className="py-2 font-mono text-xs text-slate-500">{ev.ip ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ContratoDetalhe;
