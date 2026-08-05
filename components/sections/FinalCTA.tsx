import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente central sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.03] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 text-center relative z-10 max-w-5xl">
        <div className="space-y-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              08 · Próximo Passo
            </span>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Pronto para evoluir o seu <span className="text-zinc-400 font-light">ecossistema digital?</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-xl font-light leading-relaxed max-w-2xl mx-auto">
              Desenvolva um sistema exclusivo, rápido e preparado para a próxima década com a LDV.
            </p>
          </motion.div>

          {/* Botões de Ação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto"
          >
            <Link
              to="/briefing"
              className="w-full sm:w-auto flex-1 px-8 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_25px_rgba(255,255,255,0.2)] text-center flex items-center justify-center gap-2"
            >
              <span>Solicitar Orçamento</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex-1 px-8 py-4 bg-black/50 hover:bg-white/[0.06] text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 backdrop-blur-md text-center flex items-center justify-center gap-2"
            >
              <span>Falar no WhatsApp</span>
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-15.680-2.03-.967-.272-.297-.471-.446-.966-.446-.495 0-.867.198-1.313.693-.446.495-1.707 1.671-1.707 4.071s1.746 4.716 1.993 5.063c.248.347 3.438 5.253 8.327 7.366 4.889 2.113 4.889 1.412 5.78 1.336.891-.075 2.894-1.19 3.316-2.338.422-1.149.422-2.133.297-2.338z" />
              </svg>
            </a>
          </motion.div>

          {/* Garantias de Engenharia */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-white/[0.06] max-w-2xl mx-auto text-center"
          >
            <div className="space-y-1">
              <span className="text-white font-mono text-sm font-semibold block">24h</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Resposta Inicial</span>
            </div>
            <div className="space-y-1">
              <span className="text-white font-mono text-sm font-semibold block">100%</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Código Proprietário</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-white font-mono text-sm font-semibold block">NDA & Sigilo</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Proteção de Dados</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
