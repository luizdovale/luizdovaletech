import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants';
import { WhatsAppIcon } from '../Icons';
import { useTilt } from '../../hooks/useTilt';

const TRUST_POINTS = [
  { title: 'Sob medida', desc: 'Nada de template pronto' },
  { title: 'Direto comigo', desc: 'Sem atendente nem intermediário' },
  { title: 'Resposta em até 24h', desc: 'Pelo WhatsApp ou formulário' },
];

const Hero: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };

  // Inclinação discreta que segue o mouse, só no computador e só para quem não pediu menos movimento.
  const tilt = useTilt<HTMLDivElement>({ max: 4 });

  const handleScrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative overflow-hidden pb-14 pt-28 sm:pt-32 md:pb-16">
      {/* tom azul-claro no canto, no lugar das luzes e partículas do tema escuro */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_88%_0%,rgb(var(--c-tint))_0%,transparent_70%)]"
      />

      <div className="container relative mx-auto grid max-w-7xl items-center gap-14 px-6 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Texto */}
        <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-7">
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-muted shadow-soft"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
            </span>
            Disponível para novos projetos
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-[3.6rem]"
          >
            Sistemas, sites e aplicativos sob medida para o seu negócio{' '}
            <span className="text-accent">funcionar melhor.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="max-w-xl text-lg leading-relaxed text-muted">
            Sou o Luiz, desenvolvedor. Resolvo problemas do dia a dia da sua empresa, do controle de estoque ao site que traz clientes, com tecnologia feita só para você, sem template pronto.
          </motion.p>

          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Falar no WhatsApp
              </a>
              <button onClick={() => handleScrollTo('projects')} className="btn btn-secondary">
                Ver projetos
              </button>
            </div>
            <Link
              to="/briefing"
              className="inline-block text-[15px] text-muted underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink/40"
            >
              Prefere escrever? Peça um orçamento pelo formulário
            </Link>
          </motion.div>

          <motion.dl variants={fadeInUp} className="grid gap-5 border-t border-line pt-7 sm:grid-cols-3">
            {TRUST_POINTS.map((point) => (
              <div key={point.title}>
                <dt className="font-display text-base font-bold text-ink">{point.title}</dt>
                <dd className="mt-0.5 text-sm text-muted">{point.desc}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Prova real: captura do sistema no ar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-xl pb-8 lg:max-w-none"
        >
          <motion.div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={tilt.disabled ? undefined : tilt.style}
            className="relative"
          >
            <div className="overflow-hidden rounded-[22px] border border-line bg-white shadow-float">
              <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D3D8E0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D3D8E0]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D3D8E0]" />
                <span className="ml-3 truncate rounded-full border border-line bg-white px-3 py-0.5 text-[11px] text-muted">
                  jpserp.valetechsolucoes.com.br
                </span>
              </div>
              <img
                src="/projects/jps-erp.jpg"
                alt="Painel do sistema GearTech, com faturamento, estoque e vendas de uma loja de autopeças"
                width={1600}
                height={808}
                className="block h-auto w-full"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-7 -left-2 w-[34%] overflow-hidden rounded-2xl border-[3px] border-white shadow-float sm:-left-5">
              <img
                src="/projects/jornada360.jpg"
                alt="Aplicativo Jornada360, de controle de jornada e horas extras"
                width={969}
                height={595}
                className="block h-auto w-full"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="absolute -bottom-4 right-3 flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-bold text-ink shadow-float sm:right-5">
              <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />
              GearTech · Sistema de gestão
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
