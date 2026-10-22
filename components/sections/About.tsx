import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { BRAND_INFO, SOCIAL_LINKS } from '../../constants';
import FounderPhoto from '../FounderPhoto';
import { useTilt } from '../../hooks/useTilt';
import SectionHeader from '../SectionHeader';
import { CheckIcon, WhatsAppIcon } from '../Icons';

const About: React.FC = () => {
  const highlights = [
    'Atendo empresas e profissionais de todo o Brasil',
    'Você acompanha cada etapa, do início à entrega',
    'Continuo por perto depois, para suporte e melhorias',
  ];

  // Inclinação bem discreta na foto, a mesma sensação dos cartões de projeto.
  const tilt = useTilt<HTMLDivElement>({ max: 4 });

  return (
    <section id="about" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-sm lg:col-span-4 lg:mx-0"
          >
            <motion.div
              ref={tilt.ref}
              onMouseMove={tilt.onMouseMove}
              onMouseLeave={tilt.onMouseLeave}
              style={tilt.disabled ? undefined : tilt.style}
            >
              <FounderPhoto className="aspect-[4/5] w-full rounded-[28px] border-[6px] border-white text-7xl shadow-float" />
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 lg:col-span-8"
          >
            <SectionHeader
              eyebrow="Quem sou eu"
              title="Você fala direto com quem"
              highlight="programa o seu projeto."
            />

            <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Sou o <strong className="font-bold text-ink">{BRAND_INFO.founder}</strong>, desenvolvedor de software e fundador da ValeTech. Transformo problemas do dia a dia de empresas e profissionais em sistemas, sites e aplicativos que funcionam de verdade.
              </p>
              <p>
                Comigo não tem atendente, gerente de contas nem intermediário: você explica o que precisa, eu digo qual é o melhor caminho e acompanho tudo até o projeto estar no ar.
              </p>
            </div>

            <ul className="space-y-3 pt-1">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tint text-accent">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Falar no WhatsApp
              </a>
              <Link to="/sobre" className="btn btn-secondary">
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
