import React from 'react';
import { motion } from 'framer-motion';
import { WHY_VALETECH } from '../../constants';

const WhyValetech: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-ldv" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            04 · Nossos Diferenciais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Por que escolher a <span className="text-zinc-400 font-light">LDV?</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Metodologia rigorosa e padrões globais de engenharia para transformar o ecossistema tecnológico do seu negócio.
          </p>
        </div>

        {/* Grid dos 5 Pilares */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {WHY_VALETECH.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col items-center text-center justify-between space-y-6 group"
            >
              <div className="space-y-4 flex flex-col items-center">
                <span className="text-3xl select-none filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  {item.icon}
                </span>
                <h3 className="font-display text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] w-full">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                  Pilar 0{idx + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyValetech;
