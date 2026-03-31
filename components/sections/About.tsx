import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-tech-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">

          {/* Lado Visual / Experiência */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="flex-1 space-y-8 relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-tech-blue/20 rounded-2xl border border-white/5 backdrop-blur-3xl p-8 flex flex-col justify-end">
                  <span className="block text-4xl font-bold text-tech-gold mb-1">+4 anos</span>
                  <span className="text-tech-gray text-xs uppercase tracking-widest font-bold">Experiência</span>
                </div>
                <div className="h-64 bg-tech-electric/20 rounded-2xl border border-tech-electric/20 backdrop-blur-3xl p-8 group overflow-hidden relative">
                  <div className="absolute inset-0 bg-tech-electric/30 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
                  <span className="block text-4xl font-bold text-white mb-1">+30</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest font-bold">Projetos Entregues</span>
                </div>
              </div>
              <div className="space-y-4 sm:translate-y-8">
                <div className="h-64 bg-tech-blue/20 rounded-2xl border border-white/5 backdrop-blur-3xl p-8 flex flex-col justify-end">
                  <span className="block text-4xl font-bold text-white mb-1">100%</span>
                  <span className="text-tech-gray text-xs uppercase tracking-widest font-bold">De Satisfação</span>
                </div>
                <div className="h-48 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-3xl p-8 flex flex-col justify-end">
                  <span className="block text-4xl font-bold text-tech-electric mb-1">∞</span>
                  <span className="text-tech-gray text-xs uppercase tracking-widest font-bold">Possibilidades</span>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 -top-20 -left-20 w-80 h-80 bg-tech-electric/10 blur-[130px]"></div>
          </motion.div>

          {/* Lado do Texto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-black text-white italic leading-none">
                ValeTech <span className="text-tech-electric underline decoration-2 underline-offset-8">Soluções</span>.
              </h2>
              <div className="w-20 h-2 bg-tech-gold rounded-full"></div>
            </div>

            <div className="space-y-10">
              <p className="text-tech-gray text-xl md:text-2xl font-light leading-relaxed">
                Nossa missão é simples: <span className="text-white font-medium">transformar sua visão em realidade tecnológica</span>. Com domínio profundo das tecnologias web e mobile modernas, a <span className="text-white font-bold">ValeTech</span> entrega mais que código — entregamos <span className="italic">soluções estratégicas</span>.
              </p>

              <div className="space-y-8">
                <p className="text-tech-gray text-lg md:text-xl font-light leading-relaxed">
                  Trabalho focado em performance absoluta, escalabilidade e uma experiência de usuário (UX) que cativa. Cada linha de código é pensada para impulsionar negócios e facilitar vidas.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-tech-electric"></div>
                    <span className="text-white/80 text-sm font-bold tracking-tight">Especialista em Flutter</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-tech-gold"></div>
                    <span className="text-white/80 text-sm font-bold tracking-tight">Fullstack Web Sênior</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
