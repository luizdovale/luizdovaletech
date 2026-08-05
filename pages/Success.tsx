import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6 pt-24 pb-12">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-lg glass-panel p-10 sm:p-14 rounded-3xl border border-white/[0.08] space-y-8">
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto border border-white/20">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            Solicitação Confirmada
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Briefing Enviado com Sucesso.
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Recebemos os dados do seu projeto. Nossa equipe de engenharia analisará as especificações e responderá em até 24 horas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <a 
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
          >
            <span>Falar no WhatsApp</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-15.680-2.03-.967-.272-.297-.471-.446-.966-.446-.495 0-.867.198-1.313.693-.446.495-1.707 1.671-1.707 4.071s1.746 4.716 1.993 5.063c.248.347 3.438 5.253 8.327 7.366 4.889 2.113 4.889 1.412 5.78 1.336.891-.075 2.894-1.19 3.316-2.338.422-1.149.422-2.133.297-2.338z" />
            </svg>
          </a>
          <Link 
            to="/"
            className="px-6 py-3.5 border border-white/20 rounded-full font-semibold text-xs tracking-wider uppercase text-zinc-400 hover:text-white hover:border-white transition-all text-center"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;