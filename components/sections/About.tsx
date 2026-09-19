import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { BRAND_INFO, SOCIAL_LINKS } from '../../constants';
import FounderPhoto from '../FounderPhoto';

const About: React.FC = () => {
  const highlights = [
    "Atendo empresas e profissionais de todo o Brasil",
    "Você acompanha cada etapa, do início à entrega",
    "Continuo por perto depois, para suporte e melhorias"
  ];

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 max-w-sm w-full mx-auto lg:mx-0"
          >
            <FounderPhoto className="w-full aspect-[4/5] rounded-2xl text-7xl" />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-8 space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              04 · Quem sou eu
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Você fala direto com quem <span className="text-zinc-400 font-light">programa o seu projeto.</span>
            </h2>

            <div className="space-y-5 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              <p>
                Sou o <strong className="text-white font-semibold">{BRAND_INFO.founder}</strong>, desenvolvedor de software e fundador da ValeTech. Transformo problemas do dia a dia de empresas e profissionais em sistemas, sites e aplicativos que funcionam de verdade.
              </p>
              <p>
                Comigo não tem atendente, gerente de contas nem intermediário: você explica o que precisa, eu digo qual é o melhor caminho e acompanho tudo até o projeto estar no ar.
              </p>
            </div>

            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-300 font-sans">
                  <svg className="w-4 h-4 mt-0.5 shrink-0 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(255,255,255,0.15)] text-center"
              >
                Falar no WhatsApp
              </a>
              <Link
                to="/sobre"
                className="px-8 py-4 rounded-full bg-black/50 hover:bg-white/[0.06] text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase transition-all duration-300 text-center"
              >
                Conhecer minha história
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
