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
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 md:px-0 overflow-hidden">
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
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6.5xl font-black leading-[1.15] mb-6 tracking-tighter"
          >
            <span className="block text-white drop-shadow-sm text-balance">Desenvolvimento de Sites, Sistemas Web e <span className="text-tech-electric">Soluções Digitais Sob Medida</span></span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-white/95 text-lg md:text-xl font-semibold mb-4 max-w-xl mx-auto md:mx-0 leading-relaxed font-display"
          >
            Ajudo empresas a fortalecer sua presença digital, automatizar processos e crescer com tecnologia.
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-tech-gray text-base md:text-lg mb-10 max-w-xl mx-auto md:mx-0 font-light leading-relaxed opacity-90"
          >
            Sites profissionais, sistemas personalizados e soluções digitais desenvolvidas para gerar resultados reais para o seu negócio.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
          >
            <Link
              to="/briefing"
              className="group relative px-8 py-4 bg-tech-electric hover:bg-blue-500 rounded-xl font-bold font-display tracking-wide text-white overflow-hidden shadow-lg shadow-tech-electric/20 transition-all duration-300 text-center flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span>
                SOLICITAR ORÇAMENTO
              </span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-white/10 rounded-xl font-display text-tech-gray hover:text-white hover:bg-white/5 transition-all duration-300 backdrop-blur-sm tracking-wide font-bold text-sm"
            >
              VER PROJETOS
            </button>
          </motion.div>
        </motion.div>

        {/* Lado do Código (IDE Mockup) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 md:order-2 w-full max-w-lg mx-auto relative flex justify-center items-center"
        >
          {/* Elementos Decorativos de Fundo - Blob Orgânico Animado */}
          <div className="absolute inset-0 bg-tech-electric/20 rounded-full blur-[100px] z-0"></div>
          <motion.div
            animate={{ 
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "50% 50% 20% 80% / 25% 80% 20% 75%", "70% 30% 30% 70% / 70% 70% 30% 30%", "50% 50% 80% 20% / 75% 20% 80% 25%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-10 bg-gradient-to-tr from-tech-electric/30 via-tech-blue/20 to-tech-gold/20 blur-[40px] z-0 opacity-70"
          ></motion.div>
          
          <motion.div 
            animate={{ 
              y: [-15, 10, -15],
              rotate: [-2, 1, -2] 
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="w-full relative z-10"
          >
            {/* O Editor de Código - Mais arredondado e moderno */}
            <div className="rounded-[2rem] overflow-hidden bg-[#0F172A]/70 border border-white/15 shadow-[0_20px_60px_rgba(37,99,235,0.2)] backdrop-blur-3xl">
              {/* Topbar do Editor */}
              <div className="flex items-center px-6 py-4 border-b border-white/10 bg-[#1E293B]/50">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] shadow-sm"></div>
                </div>
                <div className="ml-5 text-[13px] text-tech-gray font-mono opacity-60">valetech_solution.tsx</div>
              </div>
              
              {/* Área do Código */}
              <div className="p-7 text-[13px] md:text-[15px] font-mono leading-[1.8] overflow-x-auto text-left">
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">1</span>
                  <span><span className="text-[#ff7b72]">import</span> <span className="text-[#d2a8ff]">{'{'}</span> <span className="text-[#c9d1d9]">Innovation</span> <span className="text-[#d2a8ff]">{'}'}</span> <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'@valetech/core'</span><span className="text-[#c9d1d9]">;</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">2</span>
                  <span className="text-tech-gray/40"></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">3</span>
                  <span><span className="text-[#ff7b72]">export const</span> <span className="text-[#d2a8ff]">buildDigitalSolution</span> <span className="text-[#ff7b72]">=</span> <span className="text-[#c9d1d9]">()</span> <span className="text-[#ff7b72]">{"=>"}</span> <span className="text-[#c9d1d9]">{"{"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">4</span>
                  <span className="ml-4"><span className="text-[#ff7b72]">return</span> <span className="text-[#c9d1d9]">(</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">5</span>
                  <span className="ml-8"><span className="text-[#7ee787]">{"<"}Valetech</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">6</span>
                  <span className="ml-12"><span className="text-[#79c0ff]">focus</span><span className="text-[#c9d1d9]">={"{["}</span><span className="text-[#a5d6ff]">'Sistemas Web'</span><span className="text-[#c9d1d9]">,</span> <span className="text-[#a5d6ff]">'Automação'</span><span className="text-[#c9d1d9]">{"]}"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">7</span>
                  <span className="ml-12"><span className="text-[#79c0ff]">quality</span><span className="text-[#c9d1d9]">={"{"}</span><span className="text-[#79c0ff]">Premium</span><span className="text-[#c9d1d9]">{"}"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">8</span>
                  <span className="ml-12"><span className="text-[#79c0ff]">scalable</span><span className="text-[#c9d1d9]">={"{"}</span><span className="text-[#79c0ff]">true</span><span className="text-[#c9d1d9]">{"}"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">9</span>
                  <span className="ml-8"><span className="text-[#7ee787]">{">"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">10</span>
                  <span className="ml-12"><span className="text-[#7ee787]">{"<"}ClientSuccess</span> <span className="text-[#79c0ff]">level</span><span className="text-[#c9d1d9]">={"{"}</span><span className="text-[#79c0ff]">Maximum</span><span className="text-[#c9d1d9]">{"}"}</span> <span className="text-[#7ee787]">{"/>"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">11</span>
                  <span className="ml-8"><span className="text-[#7ee787]">{"</"}Valetech{">"}</span></span>
                </div>
                <div className="flex">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">12</span>
                  <span className="ml-4"><span className="text-[#c9d1d9]">);</span></span>
                </div>
                <div className="flex mt-1">
                  <span className="text-tech-gray/30 select-none pr-5 text-right w-8">13</span>
                  <span><span className="text-[#c9d1d9]">{"}"};</span></span>
                  {/* Cursor piscante */}
                  <motion.div 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2.5 h-[1.2em] bg-tech-electric inline-block ml-1 align-baseline translate-y-1.5"
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Tags Flutuantes adaptadas (agora mais circulares também) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-8 -right-8 z-20 px-7 py-3.5 bg-[#0F172A]/70 backdrop-blur-3xl border border-white/15 rounded-full shadow-2xl hidden lg:block"
            >
              <p className="text-white font-bold text-sm tracking-tight flex items-center gap-2.5">
                🚀 <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-electric to-blue-400">Soluções Escaláveis</span>
              </p>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 -left-8 z-20 px-7 py-3.5 bg-[#0F172A]/70 backdrop-blur-3xl border border-white/15 rounded-full shadow-2xl hidden lg:block"
            >
              <p className="text-white font-bold text-sm tracking-tight flex items-center gap-2.5">
                ⚡ <span className="bg-clip-text text-transparent bg-gradient-to-r from-tech-gold to-yellow-400">Alta Performance</span>
              </p>
            </motion.div>

          </motion.div>
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
