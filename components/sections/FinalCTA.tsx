import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-tech-dark">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-tech-electric/5 backdrop-blur-3xl"></div>
      <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(10,132,255,0.1),transparent_70%)] animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-0 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
              VAMOS TRANSFORMAR SUA IDEIA EM UMA <span className="text-tech-electric italic drop-shadow-[0_0_15px_rgba(10,132,255,0.3)]">SOLUÇÃO DIGITAL</span>?
            </h2>

            <p className="text-tech-gray text-xl md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
              Entre em contato e receba uma análise personalizada para seu projeto.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto"
          >
            {/* Solicitar Orçamento - Link principal */}
            <Link
              to="/briefing"
              className="group flex-1 flex items-center justify-center gap-4 px-8 py-5 bg-tech-electric hover:bg-tech-electric/90 text-white font-bold rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              SOLICITAR ORÇAMENTO
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            {/* WhatsApp - Conversão Imediata */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group flex-1 flex items-center justify-center gap-4 px-8 py-5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-15.680-2.03-.967-.272-.297-.471-.446-.966-.446-.495 0-.867.198-1.313.693-.446.495-1.707 1.671-1.707 4.071s1.746 4.716 1.993 5.063c.248.347 3.438 5.253 8.327 7.366 4.889 2.113 4.889 1.412 5.78 1.336.891-.075 2.894-1.19 3.316-2.338.422-1.149.422-2.133.297-2.338z" />
              </svg>
              FALAR NO WHATSAPP
            </a>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-12 flex items-center justify-center gap-12 border-t border-white/5 max-w-xl mx-auto"
          >
             <div className="flex flex-col items-center">
                <span className="text-white font-bold text-2xl">⚡ 24h</span>
                <span className="text-tech-gray text-xs uppercase tracking-widest font-mono">Tempo de resposta</span>
             </div>
             <div className="flex flex-col items-center border-l border-white/10 pl-12">
                <span className="text-white font-bold text-2xl">🛡️ Garantia</span>
                <span className="text-tech-gray text-xs uppercase tracking-widest font-mono">De qualidade premium</span>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
