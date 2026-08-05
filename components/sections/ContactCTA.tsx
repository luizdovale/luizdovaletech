import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-8 text-center relative z-10 max-w-4xl">
        <div className="space-y-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Pronto para transformar sua <span className="text-zinc-400 font-light">presença digital?</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto">
              Desenvolva sistemas, landing pages e plataformas digitais com a ValeTech.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
          >
            <Link
              to="/briefing"
              className="w-full sm:w-auto flex-1 px-8 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center"
            >
              Solicitar Orçamento
            </Link>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex-1 px-8 py-4 bg-black/50 hover:bg-white/[0.06] text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 text-center"
            >
              Falar no WhatsApp
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
