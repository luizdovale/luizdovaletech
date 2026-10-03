import React, { useMemo, useState } from 'react';
import { sanitizeHtml } from '../sanitize';
import type { ContractStatus } from '../types';

/* ───────── texto do contrato ───────── */

export const ContractDocument: React.FC<{ html: string }> = ({ html }) => {
  const safe = useMemo(() => sanitizeHtml(html), [html]);
  return <div className="contrato-doc" dangerouslySetInnerHTML={{ __html: safe }} />;
};

/* ───────── etiquetas de status ───────── */

const STATUS: Record<ContractStatus | 'expirado', { label: string; cls: string }> = {
  aguardando: { label: 'Aguardando assinaturas', cls: 'bg-amber-50 text-amber-700 ring-amber-200' },
  parcial: { label: 'Parcialmente assinado', cls: 'bg-blue-50 text-blue-700 ring-blue-200' },
  assinado: { label: 'Assinado por todos', cls: 'bg-emerald-50 text-emerald-700 ring-emerald-200' },
  cancelado: { label: 'Cancelado', cls: 'bg-slate-100 text-slate-600 ring-slate-200' },
  expirado: { label: 'Link expirado', cls: 'bg-red-50 text-red-700 ring-red-200' },
};

export function effectiveStatus(status: ContractStatus, expiresAt: string): ContractStatus | 'expirado' {
  if ((status === 'aguardando' || status === 'parcial') && new Date(expiresAt).getTime() < Date.now()) return 'expirado';
  return status;
}

export const StatusChip: React.FC<{ status: ContractStatus; expiresAt: string }> = ({ status, expiresAt }) => {
  const s = STATUS[effectiveStatus(status, expiresAt)];
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${s.cls}`}>
      {s.label}
    </span>
  );
};

/* ───────── botões e campos ───────── */

export const PrimaryButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_-8px_rgba(79,70,229,0.55)] transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none ${className}`}
  />
);

export const GhostButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className = '', ...props }) => (
  <button
    {...props}
    className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

export const FieldLabel: React.FC<{ children: React.ReactNode; required?: boolean; htmlFor?: string }> = ({
  children,
  required,
  htmlFor,
}) => (
  <label htmlFor={htmlFor} className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
    {children}
    {required && <span className="ml-1 text-red-500">*</span>}
  </label>
);

export const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-500/10';

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div
    className={`rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_-12px_rgba(15,23,42,0.12)] ${className}`}
  >
    {children}
  </div>
);

export const CopyButton: React.FC<{ text: string; label?: string; className?: string }> = ({ text, label = 'Copiar link', className = '' }) => {
  const [done, setDone] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const area = document.createElement('textarea');
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand('copy');
      area.remove();
    }
    setDone(true);
    window.setTimeout(() => setDone(false), 1800);
  };
  return (
    <GhostButton type="button" onClick={copy} className={className}>
      {done ? '✓ Copiado' : label}
    </GhostButton>
  );
};

/** Logo completa (a mesma do header do site) em versão para fundo claro: "ValeTech" em azul-marinho. */
export const BrandLogo: React.FC<{ className?: string }> = ({ className = 'h-7' }) => (
  <img
    src="/assets/logo-fundo-claro.png"
    alt="ValeTech Soluções"
    width={1165}
    height={171}
    className={`w-auto select-none ${className}`}
    draggable={false}
  />
);

/** Ícone da marca. Passe `size` (px fixos) ou `className` com h-/w- responsivos. */
export const BrandMark: React.FC<{ size?: number; className?: string }> = ({ size, className = '' }) => (
  <img
    src="/assets/icone%20valetech.png"
    alt=""
    width={size ?? 64}
    height={size ?? 64}
    className={`rounded-xl object-cover ${className}`}
    style={size ? { width: size, height: size } : undefined}
    draggable={false}
  />
);

export const Spinner: React.FC<{ className?: string }> = ({ className = 'h-5 w-5' }) => (
  <svg className={`animate-spin ${className}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

export const FullPageMessage: React.FC<{ title: string; children?: React.ReactNode; icon?: string }> = ({
  title,
  children,
  icon = '⚠️',
}) => (
  <div className="flex min-h-screen min-h-dvh items-center justify-center bg-white px-6">
    <div className="max-w-md text-center">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">{icon}</div>
      <h1 className="text-xl font-extrabold text-slate-900">{title}</h1>
      {children && <div className="mt-3 text-[15px] leading-relaxed text-slate-500">{children}</div>}
    </div>
  </div>
);
