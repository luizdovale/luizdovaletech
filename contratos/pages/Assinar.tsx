import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getContractByToken, getSigningData, signContract, SIGN_ERRORS } from '../api';
import { formatDate, formatDateLong, formatDateTime, isValidCpf, maskCpf } from '../format';
import type { ContractFull, SigningData } from '../types';
import SignaturePad, { SignaturePadHandle } from '../components/SignaturePad';
import PartyBlock from '../components/PartyBlock';
import SendToSigner from '../components/SendToSigner';
import { BrandLogo, BrandMark, ContractDocument, FieldLabel, FullPageMessage, inputClass, Spinner } from '../components/ui';

type Phase = 'loading' | 'error' | 'ready';

const Assinar: React.FC = () => {
  const { token = '' } = useParams<{ token: string }>();
  const [phase, setPhase] = useState<Phase>('loading');
  const [loadError, setLoadError] = useState('');
  const [data, setData] = useState<SigningData | null>(null);

  const [readToEnd, setReadToEnd] = useState(false);
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [signatureEmpty, setSignatureEmpty] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [formError, setFormError] = useState('');
  const [legalOpen, setLegalOpen] = useState(false);

  const padRef = useRef<SignaturePadHandle>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const docRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const load = useCallback(async () => {
    try {
      const result = await getSigningData(token);
      if (!result) {
        setLoadError('invalid');
        setPhase('error');
        return;
      }
      setData(result);
      setPhase('ready');
    } catch (e) {
      setLoadError(e instanceof Error ? e.message : 'Não foi possível abrir o contrato.');
      setPhase('error');
    }
  }, [token]);

  useEffect(() => {
    load();
  }, [load]);

  // página privada: nada de indexação e nada de vazar o link por Referer
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [token]);

  const state = data?.state;

  // Quem emitiu o contrato (administrador logado) acabou de assinar e a outra parte ainda não: oferece o envio do link.
  // Para qualquer outra pessoa a busca volta vazia e nada aparece.
  const [adminContract, setAdminContract] = useState<ContractFull | null>(null);
  const issuerWaitingOther = data?.state === 'assinado' && data.parties[0]?.is_you === true && data.contract.status !== 'assinado';
  useEffect(() => {
    if (!issuerWaitingOther) return;
    let alive = true;
    getContractByToken(token).then((c) => alive && setAdminContract(c));
    return () => {
      alive = false;
    };
  }, [issuerWaitingOther, token]);
  const sendTarget = adminContract?.contract_signers.find((s) => !s.signed_at && s.token !== token) ?? null;

  // barra de progresso de leitura + liberação da assinatura.
  // A liberação checa a cada rolagem se o "fim do documento" já apareceu OU ficou para trás: quem rola rápido,
  // arrasta a barra ou aperta End pula o marcador, e um IntersectionObserver nunca dispararia nesse caso.
  // Depois de liberada, nunca volta a travar.
  useEffect(() => {
    if (phase !== 'ready') return;
    const update = () => {
      const doc = docRef.current;
      if (doc) {
        const rect = doc.getBoundingClientRect();
        const total = rect.height - window.innerHeight * 0.6;
        const done = -rect.top + window.innerHeight * 0.4;
        setProgress(Math.max(0, Math.min(1, total <= 0 ? 1 : done / total)));
      }
      const end = endRef.current;
      if (end && end.getBoundingClientRect().top <= window.innerHeight - 24) setReadToEnd(true);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [phase, data]);

  const nameOk = name.trim().length >= 5 && name.trim().includes(' ');
  const cpfOk = isValidCpf(cpf);

  const submit = async () => {
    setShowErrors(true);
    setFormError('');
    if (!nameOk || !cpfOk || signatureEmpty || !padRef.current) {
      setFormError(
        !nameOk
          ? 'Digite seu nome completo.'
          : !cpfOk
            ? 'Digite um CPF válido.'
            : 'Faça sua assinatura no quadro.',
      );
      return;
    }
    setSubmitting(true);
    try {
      const result = await signContract({
        token,
        name: name.trim(),
        cpf,
        signature: padRef.current.toDataURL(),
        readToEnd,
      });
      if (result.ok === false) {
        let message = SIGN_ERRORS[result.error] ?? 'Não foi possível concluir a assinatura.';
        if (result.error === 'dados_nao_conferem' && typeof result.attempts_left === 'number') {
          message += result.attempts_left > 0 ? ` Restam ${result.attempts_left} tentativa(s).` : ' Esta foi a última tentativa.';
        }
        setFormError(message);
        if (['ja_assinado', 'link_expirado', 'contrato_cancelado'].includes(result.error)) await load();
        return;
      }
      await load();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      setFormError(e instanceof Error ? e.message : 'Não foi possível concluir a assinatura.');
    } finally {
      setSubmitting(false);
    }
  };

  /* ───────── estados de tela cheia ───────── */

  if (phase === 'loading') {
    return (
      <div className="flex min-h-screen min-h-dvh items-center justify-center bg-white text-slate-400">
        <Spinner className="h-7 w-7" />
      </div>
    );
  }

  if (phase === 'error' || !data) {
    return loadError === 'invalid' ? (
      <FullPageMessage title="Link inválido" icon="🔒">
        Este endereço não corresponde a nenhum contrato. Confira se o link foi copiado por inteiro ou peça um novo a quem o enviou.
      </FullPageMessage>
    ) : (
      <FullPageMessage title="Não foi possível abrir o contrato">
        {loadError}
        <div className="mt-5">
          <button onClick={() => { setPhase('loading'); load(); }} className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white">
            Tentar de novo
          </button>
        </div>
      </FullPageMessage>
    );
  }

  if (data.state === 'expirado') {
    return (
      <FullPageMessage title="Este link expirou" icon="⏳">
        O prazo para assinar terminou. Peça a quem enviou o contrato que gere um novo link.
      </FullPageMessage>
    );
  }
  if (data.state === 'cancelado') {
    return (
      <FullPageMessage title="Contrato cancelado" icon="🚫">
        Este contrato foi cancelado por quem o enviou e não pode mais ser assinado.
      </FullPageMessage>
    );
  }

  /* ───────── contrato disponível ───────── */

  const signed = data.state === 'assinado';
  const issuer = data.parties[0];
  const youAreIssuer = issuer?.is_you;
  const allSigned = data.contract.status === 'assinado';
  const unlocked = readToEnd;

  return (
    <div className="min-h-screen min-h-dvh bg-white pb-40 font-sans text-slate-900 print:min-h-0 print:pb-0">
      {/* Cabeçalho fixo + barra de leitura */}
      <header className="no-print fixed inset-x-0 top-0 z-30 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-[760px] items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-3.5">
          <BrandLogo className="h-6 shrink-0 sm:h-8" />
          <div className="min-w-0 text-right leading-tight">
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Contrato</div>
            <div className="max-w-[34vw] truncate text-[12px] font-extrabold uppercase text-slate-800 sm:max-w-[300px] sm:text-[13px]">
              {data.contract.title.split('—').pop()?.trim()}
            </div>
          </div>
        </div>
        <div className="h-[3px] w-full bg-slate-100">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-[width] duration-150"
            style={{ width: `${Math.round((signed ? 1 : progress) * 100)}%` }}
          />
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-4 pt-[80px] sm:pt-[92px] print:max-w-none print:px-0 print:pt-0">
        {/* Cartão de convite / confirmação */}
        <section className="no-print rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_-24px_rgba(15,23,42,0.25)] sm:p-7">
          {signed ? (
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xl text-emerald-600 ring-1 ring-emerald-100 sm:h-14 sm:w-14 sm:text-2xl">✓</div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-600">Assinatura registrada</div>
                <h1 className="mt-1 text-[19px] font-extrabold leading-snug text-slate-900 sm:text-[22px]">
                  Você assinou este contrato
                </h1>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
                  Assinado por <b className="text-slate-700">{data.you.name}</b> em {formatDateTime(data.you.signed_at)}.{' '}
                  {allSigned
                    ? 'Todas as partes já assinaram: o contrato está concluído.'
                    : 'Agora falta a assinatura da outra parte. Você pode guardar uma cópia em PDF.'}
                </p>
                {adminContract && sendTarget && (
                  <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-4">
                    <div className="text-[14px] font-extrabold text-slate-900">Próximo passo: envie ao contratante</div>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
                      Falta a assinatura de <b className="text-slate-700">{sendTarget.name}</b>. Mande o link agora.
                    </p>
                    <SendToSigner className="mt-3" contract={adminContract} signer={sendTarget}>
                      <Link
                        to={`/contratos/contrato/${adminContract.id}`}
                        className="inline-flex min-h-[44px] items-center justify-center rounded-2xl px-3 py-2.5 text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Ver no painel
                      </Link>
                    </SendToSigner>
                  </div>
                )}
                {data.you.seal && (
                  <p className="mt-3 break-all rounded-xl bg-slate-50 px-3 py-2 font-mono text-[11px] text-slate-400">
                    Selo da assinatura: {data.you.seal}
                  </p>
                )}
                <button
                  onClick={() => window.print()}
                  className="mt-4 min-h-[44px] rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Salvar cópia em PDF
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="relative shrink-0">
                <BrandMark className="h-[52px] w-[52px] sm:h-16 sm:w-16" />
                <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[12px] text-white ring-2 ring-white">✓</span>
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-500">Convite para assinar</div>
                <h1 className="mt-1 text-[19px] font-extrabold leading-snug text-slate-900 sm:text-[22px]">
                  {youAreIssuer
                    ? `Assine o contrato como ${data.you.label.toLowerCase()}`
                    : `${issuer?.name ?? 'Seu contratado'} enviou um contrato para você`}
                </h1>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-500 sm:text-[15px]">
                  Leia com calma e assine quando estiver de acordo. A assinatura eletrônica fica registrada com data, hora e dados do dispositivo.
                </p>
              </div>
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-[12px] font-bold text-slate-600 sm:px-3.5 sm:py-2 sm:text-[13px]">📄 Documento</span>
            {!signed && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-[12px] font-bold text-amber-700 ring-1 ring-amber-200 sm:px-3.5 sm:py-2 sm:text-[13px]">
                ⏱ Válido até {formatDate(data.contract.expires_at)}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-[12px] font-bold text-emerald-700 ring-1 ring-emerald-200 sm:px-3.5 sm:py-2 sm:text-[13px]">
              🛡 Lei 14.063/2020
            </span>
          </div>
        </section>

        {/* Passo 1 */}
        <div className="no-print mt-9 flex items-center gap-3 px-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-500 text-[13px] font-extrabold text-white">1</span>
          <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Leia o contrato</h2>
        </div>

        <section
          ref={docRef}
          className="print-plain -mx-4 mt-3 border-y border-slate-200/80 bg-white px-5 py-6 sm:mx-0 sm:rounded-[28px] sm:border sm:p-9 sm:shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)] print:mx-0 print:mt-0"
        >
          {/* timbre: só aparece na cópia impressa/PDF (na tela a logo já está no cabeçalho) */}
          <BrandLogo className="mb-6 hidden h-9 print:block" />
          <ContractDocument html={data.contract.body_html ?? ''} />

          <div className="avoid-break mt-10">
            <div className="mb-3 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400">
              Assinaturas eletrônicas
            </div>
            <p className="mb-4 text-center text-xs leading-relaxed text-slate-400">
              As assinaturas abaixo se referem a todo o conteúdo acima, incluindo os Anexos.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {data.parties.map((p) => (
                <PartyBlock key={p.role} party={p} />
              ))}
            </div>
            <p className="mt-4 break-all text-center font-mono text-[10.5px] text-slate-300 print:text-slate-500">
              Integridade do texto (SHA-256): {data.contract.sha256}
            </p>
          </div>

          <div ref={endRef} className="mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-300">
            <span className="h-px flex-1 bg-slate-200" />
            Fim do documento
            <span className="h-px flex-1 bg-slate-200" />
          </div>
        </section>

        {/* Passo 2 */}
        {!signed && (
          <>
            <div className="no-print mt-9 flex items-center gap-3 px-1">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-extrabold text-white transition-colors ${
                  unlocked ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              >
                2
              </span>
              <h2 className="text-[13px] font-extrabold uppercase tracking-wide text-slate-800">Assine o contrato</h2>
              {!unlocked && <span className="text-xs font-medium text-slate-400">libera ao ler até o fim</span>}
            </div>

            <section
              className={`no-print mt-3 rounded-[28px] border border-slate-200/80 bg-white p-4 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.25)] transition sm:p-8 ${
                unlocked ? '' : 'pointer-events-none select-none opacity-45 grayscale'
              }`}
              aria-disabled={!unlocked}
            >
              <div className="space-y-6">
                <div>
                  <FieldLabel required htmlFor="nome">Nome completo</FieldLabel>
                  <input
                    id="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!unlocked}
                    autoComplete="name"
                    placeholder="Como aparece no seu documento"
                    className={`${inputClass} ${showErrors && !nameOk ? 'border-red-300 bg-red-50/40' : ''}`}
                  />
                </div>

                <div>
                  <FieldLabel required htmlFor="cpf">CPF</FieldLabel>
                  <input
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(maskCpf(e.target.value))}
                    disabled={!unlocked}
                    inputMode="numeric"
                    autoComplete="off"
                    placeholder="000.000.000-00"
                    className={`${inputClass} ${showErrors && !cpfOk ? 'border-red-300 bg-red-50/40' : ''}`}
                  />
                  <p className="mt-2 px-1 text-sm text-slate-500">
                    Precisa ser o CPF informado no contrato{data.you.cpf_masked ? ` (${data.you.cpf_masked})` : ''}. É assim que confirmamos que é você.
                  </p>
                </div>

                <div>
                  <FieldLabel required>Sua assinatura</FieldLabel>
                  <SignaturePad
                    ref={padRef}
                    disabled={!unlocked}
                    invalid={showErrors && signatureEmpty}
                    onChange={setSignatureEmpty}
                  />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/70">
                  <button
                    type="button"
                    onClick={() => setLegalOpen((v) => !v)}
                    aria-expanded={legalOpen}
                    className="flex w-full items-center gap-3 p-4 text-left"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-lg ring-1 ring-blue-100">🛡</span>
                    <span className="flex-1">
                      <span className="block text-[15px] font-bold text-slate-700">Validade jurídica e dados auditados</span>
                      <span className="block text-sm text-slate-500">Toque para ver detalhes</span>
                    </span>
                    <span className={`text-slate-400 transition-transform ${legalOpen ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {legalOpen && (
                    <div className="space-y-2 px-4 pb-4 text-sm leading-relaxed text-slate-600">
                      <p>Ao assinar, ficam gravados: a data e a hora do nosso servidor, o seu IP e o dispositivo usado, o nome e o CPF informados, a sua assinatura e um código (SHA-256) que prova que o texto não foi alterado.</p>
                      <p>As partes aceitam, na cláusula de assinatura eletrônica do próprio contrato, que esse registro vale como prova de autoria e integridade (art. 10, §2º, da MP 2.200-2/2001 e Lei 14.063/2020).</p>
                    </div>
                  )}
                </div>

                {formError && (
                  <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {formError}
                  </div>
                )}
              </div>
            </section>
          </>
        )}

        <p className="no-print mt-10 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-slate-300">
          ValeTech · Assinatura digital
        </p>
      </main>

      {/* Barra fixa com o botão */}
      {!signed && (
        <div className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-slate-100 bg-white/95 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur">
          <div className="mx-auto max-w-[760px]">
            <button
              type="button"
              onClick={submit}
              disabled={!unlocked || submitting}
              className={`flex h-[56px] w-full items-center justify-center gap-2 rounded-2xl text-[16px] font-bold text-white transition ${
                unlocked
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-[0_14px_30px_-12px_rgba(79,70,229,0.6)] active:scale-[0.99] disabled:opacity-70'
                  : 'cursor-not-allowed bg-slate-300'
              }`}
            >
              {!unlocked ? (
                'Role até o fim para liberar'
              ) : submitting ? (
                <>
                  <Spinner /> Registrando assinatura…
                </>
              ) : (
                <>Assinar contrato ›</>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assinar;
