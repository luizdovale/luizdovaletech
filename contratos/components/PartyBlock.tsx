import React from 'react';
import { formatDateTime } from '../format';

export interface PartyBlockData {
  label: string;
  name: string;
  signed_at: string | null;
  signature_png: string | null;
}

/** Bloco de assinatura de uma das partes, no fim do documento (tela de assinatura e comprovante em PDF). */
const PartyBlock: React.FC<{ party: PartyBlockData }> = ({ party }) => (
  <div className="avoid-break rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-400">{party.label}</div>
    <div className="mt-2 flex h-20 items-center justify-center rounded-xl bg-white ring-1 ring-slate-100">
      {party.signature_png ? (
        <img src={party.signature_png} alt={`Assinatura de ${party.name}`} className="max-h-[72px] max-w-full object-contain" />
      ) : (
        <span className="text-sm font-medium text-slate-300">Aguardando assinatura</span>
      )}
    </div>
    <div className="mt-3 border-t border-slate-200 pt-3">
      <div className="text-sm font-bold text-slate-900">{party.name}</div>
      <div className="text-xs text-slate-500">
        {party.signed_at ? `Assinado em ${formatDateTime(party.signed_at)}` : 'Ainda não assinou'}
      </div>
    </div>
  </div>
);

export default PartyBlock;
