import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';
import PageMeta from '../components/PageMeta';
import { WhatsAppIcon } from '../components/Icons';

const Success: React.FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pb-12 pt-28">
      <PageMeta
        title="Pedido enviado — ValeTech Soluções"
        description="Recebi o seu pedido e respondo em até 24 horas."
        path="/sucesso"
        noindex
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_70%_at_50%_0%,rgb(var(--c-tint))_0%,transparent_75%)]"
      />

      <div className="card relative max-w-lg space-y-8 rounded-[28px] p-10 text-center sm:p-14">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-tint text-accent">
          <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="space-y-3">
          <span className="eyebrow block">Tudo certo</span>
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Recebi o seu pedido.
          </h1>
          <p className="text-base leading-relaxed text-muted">
            Obrigado! Vou olhar com atenção e respondo em até 24 horas. Se preferir não esperar, pode me chamar agora no WhatsApp.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
          <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Falar no WhatsApp
          </a>
          <Link to="/" className="btn btn-secondary">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
