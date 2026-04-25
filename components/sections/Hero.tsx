import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ThreeScene from '../ThreeScene';

const Hero: React.FC = () => {
  const avatarUrl = "/avatar.png";

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 md:px-0 overflow-hidden bg-tech-dark/50">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Conteúdo de Texto */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center md:text-left order-2 md:order-1"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 border border-tech-electric/30 rounded-full bg-tech-electric/10 backdrop-blur-md shadow-[0_0_15px_rgba(26,102,191,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-gold"></span>
            </span>
            <span className="text-white/80 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
              Disponível para novos projetos
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 tracking-tighter"
          >
            <span className="block text-white drop-shadow-sm text-balance">Desenvolvedor de<span className="block text-tech-electric">Software</span></span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tech-gray via-white/70 to-tech-gray text-lg sm:text-2xl md:text-4xl mt-4 sm:mt-6 font-medium tracking-widest uppercase">
              Dev Web & <span className="text-tech-electric font-bold">Flutter</span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-tech-gray text-lg md:text-xl mb-12 max-w-xl mx-auto md:mx-0 font-light leading-relaxed opacity-90"
          >
            Transformo conceitos complexos em experiências digitais impecáveis.
            Especialista em construir aplicações escaláveis com foco absoluto em performance e design.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            <Link
              to="/briefing"
              className="group relative px-10 py-5 bg-tech-electric rounded-xl font-bold font-display tracking-widest text-white overflow-hidden shadow-[0_0_30px_rgba(26,102,191,0.4)] hover:shadow-[0_0_50px_rgba(26,102,191,0.6)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-3">
                INICIAR PROJETO
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 border border-white/10 rounded-xl font-display text-white/60 hover:text-white hover:border-tech-electric hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
            >
              VER PORTFÓLIO
            </button>
          </motion.div>
        </motion.div>

        {/* Lado do Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Elementos Decorativos de Fundo */}
            <div className="absolute inset-0 bg-tech-electric/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute inset-[-40px] rounded-full border border-tech-electric/10 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-[-20px] rounded-full border border-tech-gold/10 animate-[spin_15s_linear_infinite_reverse]"></div>

            {/* Container do Avatar */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-tech-surface shadow-2xl z-10 group transform-gpu">
              <img
                src={avatarUrl}
                alt="Avatar Luiz"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'bg-tech-blue/30');
                  e.currentTarget.parentElement!.innerHTML = '<div class="text-4xl font-bold text-tech-electric/40 tracking-tighter uppercase p-8 text-center italic leading-none select-none">LUIZ<br/>DOVALE</div>';
                }}
              />

              {/* Overlay Holográfico */}
              <div className="absolute inset-0 bg-gradient-to-tr from-tech-electric/20 via-transparent to-tech-gold/10 opacity-40 group-hover:opacity-20 transition-opacity"></div>

              {/* Moldura Glass */}
              <div className="absolute inset-0 border-[16px] border-tech-dark/20 rounded-full pointer-events-none"></div>
            </div>

            {/* Tags Flutuantes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-20 px-6 py-3 bg-tech-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-white font-bold text-sm tracking-tight flex items-center gap-2">
                🚀 <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-electric to-blue-400">Desenvolvedor Sênior</span>
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-6 z-20 px-6 py-3 bg-tech-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-6 h-6 rounded-full bg-tech-blue border border-tech-dark"></div>
                  ))}
                </div>
                <p className="text-tech-gray text-xs font-medium">+20 Projetos Ativos</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Indicador de Scroll Minimalista */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-tech-electric via-tech-electric/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
