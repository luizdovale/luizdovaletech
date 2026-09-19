import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, DELIVERY_TIMES } from '../../constants';

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-white/[0.02] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">

        {/* Header da Seção */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            03 · Como funciona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Do primeiro contato <span className="text-zinc-400 font-light">até o projeto no ar.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Um caminho simples, em três passos e sem surpresas.
          </p>
        </div>

        {/* Passos */}
        <div className="grid md:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col space-y-4"
            >
              <span className="font-display text-4xl font-bold text-white/30">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Prazos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 glass-panel rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
        >
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-500 font-semibold">
            Prazos médios
          </span>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-12 flex-1">
            {DELIVERY_TIMES.map((item) => (
              <div key={item.label} className="space-y-1">
                <span className="font-display text-xl font-bold text-white block">{item.time}</span>
                <span className="text-zinc-400 text-sm font-light">{item.label}</span>
              </div>
            ))}
          </div>
          <span className="text-zinc-500 text-xs font-light md:max-w-[12rem]">
            O prazo exato é combinado na proposta.
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
