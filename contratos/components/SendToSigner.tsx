import React from 'react';
import { shareLinks } from '../share';
import type { ContractFull, SignerFull } from '../types';
import { CopyButton } from './ui';

const linkGhost =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50';

/**
 * "Enviar para o contratante": um toque abre o WhatsApp com a mensagem e o link prontos (no número do
 * contratante, quando o contrato tem telefone). Também oferece e-mail e copiar o link.
 */
const SendToSigner: React.FC<{
  contract: ContractFull;
  signer: SignerFull;
  className?: string;
  children?: React.ReactNode;
}> = ({ contract, signer, className = '', children }) => {
  const { url, whatsapp, mailto, hasPhone } = shareLinks(contract, signer);
  const label = signer.role === 'contratante' ? 'Enviar para o contratante' : `Enviar para ${signer.name.split(' ')[0]}`;
  return (
    <div className={className}>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3 text-[15px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(79,70,229,0.55)] transition hover:brightness-105 active:scale-[0.99]"
        >
          <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true">
            <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          {label}
        </a>
        {/* no celular e-mail e copiar dividem a linha (ou o copiar ocupa tudo, sem e-mail); no desktop ficam na linha do botão */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-2 sm:contents">
          {mailto && (
            <a href={mailto} className={linkGhost}>
              Por e-mail
            </a>
          )}
          <CopyButton text={url} />
        </div>
        {children}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">
        {hasPhone
          ? 'Abre o WhatsApp no número cadastrado, com a mensagem e o link prontos. É só tocar em enviar.'
          : 'Abre o WhatsApp com a mensagem e o link prontos. Escolha o contato e toque em enviar.'}
      </p>
    </div>
  );
};

export default SendToSigner;
