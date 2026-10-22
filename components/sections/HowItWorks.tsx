import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, DELIVERY_TIMES } from '../../constants';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import SectionHeader from '../SectionHeader';

const HowItWorks: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="how" className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          className="mb-14"
          eyebrow="Como funciona"
          title="Do primeiro contato"
          highlight="até o projeto no ar."
          lead="Um caminho simples, em três passos e sem surpresas."
        />

        {/* Passos */}
        <div className="grid gap-5 md:grid-cols-3" style={{ perspective: 1000 }}>
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25, rotateX: prefersReducedMotion ? 0 : 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ transformPerspective: 1000 }}
              className="card card-hover flex flex-col space-y-4 p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tint font-display text-base font-extrabold text-accent">
                {step.number}
              </span>
              <h3 className="font-display text-xl font-extrabold tracking-tight text-ink">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Prazos */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-6 rounded-[24px] bg-surface p-7 sm:p-9 md:flex-row md:items-center md:gap-12"
        >
          <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-ink">Prazos médios</span>
          <div className="grid flex-1 gap-6 sm:grid-cols-2 md:gap-12">
            {DELIVERY_TIMES.map((item) => (
              <div key={item.label}>
                <span className="block font-display text-2xl font-extrabold tracking-tight text-ink">{item.time}</span>
                <span className="text-[15px] text-muted">{item.label}</span>
              </div>
            ))}
          </div>
          <span className="text-sm text-muted md:max-w-[12rem]">O prazo exato é combinado na proposta.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
