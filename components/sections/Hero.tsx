import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreeScene from '../ThreeScene';

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
    <section className="relative min-h-screen flex items-center justify-center pt-16 pb-16 px-4 md:px-6 overflow-hidden bg-black">
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
          className="space-y-8 flex flex-col items-center max-w-4xl"
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

          {/* Logo Oficial — Hero central, branca e maior */}
          <motion.div
            variants={fadeInUp}
            className="relative flex flex-col justify-center items-center group py-4"
          >
            {/* brilho difuso atrás da logo */}
            <div className="absolute inset-0 bg-white/[0.06] rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 scale-150" />
            <img
              src="/logo.png"
              alt="ValeTech — Tecnologia & Inovação"
              className="relative z-10 h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain select-none
                         brightness-0 invert
                         drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]
                         transition-transform duration-500 hover:scale-[1.02] mb-0 sm:mb-1"
              draggable={false}
            />
            <div className="relative z-10 text-center flex flex-col items-center mt-0 w-full">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 mb-1 sm:mb-2 leading-none w-full">
                VALETECH
              </h1>
              <span className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.5em] sm:tracking-[0.7em] md:tracking-[0.9em] uppercase text-zinc-500 font-medium pl-1 sm:pl-2">
                Soluções
              </span>
            </div>
          </motion.div>

          {/* Mensagem Institucional de Posicionamento */}
          <motion.p
            variants={fadeInUp}
            className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Criamos soluções digitais inteligentes, sistemas personalizados e experiências tecnológicas para empresas que querem evoluir.
          </motion.p>

          {/* Botões de Ação Minimalistas */}
          <motion.div
            variants={fadeInUp}
            className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center"
          >
            <Link
              to="/briefing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center"
            >
              Solicitar Projeto
            </Link>

            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/40 hover:bg-white/[0.06] text-white border border-white/20 hover:border-white/40 font-medium text-sm tracking-wider uppercase transition-all duration-300 backdrop-blur-md cursor-pointer"
            >
              Conheça nossos projetos
            </button>
          </motion.div>

          {/* Métricas / Pilares Tecnológicos Minimalistas */}
          <motion.div
            variants={fadeInUp}
            className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/[0.08] w-full max-w-3xl"
          >
            <div className="space-y-1">
              <span className="font-display text-xl sm:text-2xl font-bold text-white block">100% Sob Medida</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Zero Templates Genéricos</span>
            </div>
            <div className="space-y-1">
              <span className="font-display text-xl sm:text-2xl font-bold text-white block">Core Web Vitals</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Performance & SEO Máximos</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="font-display text-xl sm:text-2xl font-bold text-white block">Full Stack & IA</span>
              <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Sistemas & Automações</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Rolagem Minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => handleScrollTo('about')}
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
