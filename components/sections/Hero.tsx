import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreeScene from '../ThreeScene';
import { SOCIAL_LINKS } from '../../constants';

const Hero: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-6 overflow-hidden bg-black">
      {/* Three.js Monochromatic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ThreeScene />
      </div>

      {/* Iluminação Radial Branca Difusa */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-7 flex flex-col items-center max-w-4xl"
        >
          {/* Badge de Status Minimalista */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.12] backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-zinc-300 font-mono text-[11px] tracking-[0.2em] uppercase font-medium">
              Disponível para novos projetos
            </span>
          </motion.div>

          {/* Marca */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col justify-center items-center group"
          >
            {/* brilho difuso atrás da logo */}
            <div className="absolute inset-0 bg-white/[0.06] rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 scale-150" />
            <img
              src="/assets/logo hero.png"
              alt="ValeTech Soluções"
              className="relative z-10 h-24 sm:h-28 md:h-32 w-auto object-contain select-none
                         brightness-0 invert
                         drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]
                         transition-transform duration-500 hover:scale-[1.02]"
              draggable={false}
            />
            <div className="relative z-10 text-center flex flex-col items-center w-full">
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 leading-none w-full">
                VALETECH
              </p>
              <span className="font-sans text-[10px] sm:text-xs tracking-[0.5em] sm:tracking-[0.7em] uppercase text-zinc-500 font-medium pl-1 sm:pl-2 mt-1">
                Soluções
              </span>
            </div>
          </motion.div>

          {/* O que eu faço, em uma frase */}
          <motion.h1
            variants={fadeInUp}
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15] max-w-3xl"
          >
            Sistemas, sites e aplicativos sob medida para o seu negócio{' '}
            <span className="text-zinc-400 font-light">funcionar melhor.</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Sou o Luiz, desenvolvedor. Resolvo problemas do dia a dia da sua empresa, do controle de estoque ao site que traz clientes, com tecnologia feita só para você, sem template pronto.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div
            variants={fadeInUp}
            className="pt-1 flex flex-col items-center gap-4 w-full"
          >
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center"
              >
                Falar no WhatsApp
              </a>

              <button
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-white/[0.06] text-white border border-white/20 hover:border-white/40 font-medium text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md cursor-pointer"
              >
                Ver projetos
              </button>
            </div>

            <Link
              to="/briefing"
              className="text-zinc-400 hover:text-white text-sm font-light underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors"
            >
              Prefere escrever? Peça um orçamento pelo formulário
            </Link>
          </motion.div>

          {/* Pontos de confiança */}
          <motion.div
            variants={fadeInUp}
            className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 border-t border-white/[0.08] w-full max-w-3xl"
          >
            <div className="space-y-1">
              <span className="font-display text-lg sm:text-xl font-bold text-white block">Sob medida</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Nada de template pronto</span>
            </div>
            <div className="space-y-1">
              <span className="font-display text-lg sm:text-xl font-bold text-white block">Direto comigo</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Sem atendente nem intermediário</span>
            </div>
            <div className="space-y-1">
              <span className="font-display text-lg sm:text-xl font-bold text-white block">Resposta em até 24h</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">WhatsApp ou formulário</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Rolagem Minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer hidden sm:block"
        onClick={() => handleScrollTo('services')}
        aria-label="Rolar para a próxima seção"
      >
        <div className="w-5 h-9 rounded-full border border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
