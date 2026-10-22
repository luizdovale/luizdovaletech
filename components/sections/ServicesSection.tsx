import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
// @ts-ignore
import { Link } from 'react-router-dom';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import SectionHeader from '../SectionHeader';
import { ArrowRightIcon, CheckIcon } from '../Icons';

const getIcon = (icon: string) => {
  const common = { className: 'h-6 w-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', 'aria-hidden': true } as const;
  switch (icon) {
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" strokeWidth="1.6" />
          <path strokeLinecap="round" strokeWidth="1.6" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        </svg>
      );
    case 'server':
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="7" rx="2" strokeWidth="1.6" />
          <rect x="2" y="14" width="20" height="7" rx="2" strokeWidth="1.6" />
          <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.6" />
          <line x1="11" y1="18" x2="13" y2="18" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

const ServicesSection: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  // Os cartões "tombam" levemente para o lugar ao entrar (8°), desligado para quem pede menos movimento.
  const itemVariants = {
    hidden: { opacity: 0, y: 25, rotateX: prefersReducedMotion ? 0 : 8 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="services" className="bg-white py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader
          className="mb-14"
          eyebrow="O que eu faço"
          title="Como eu posso"
          highlight="ajudar o seu negócio."
          lead="Escolha o problema que mais se parece com o seu. Eu cuido da parte técnica."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
          style={{ perspective: 1000 }}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              style={{ transformPerspective: 1000 }}
              className="card card-hover group flex h-full flex-col justify-between p-7"
            >
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-tint text-accent">
                  {getIcon(service.icon)}
                </div>

                <span className="mb-2 block text-sm font-bold text-accent">“{service.problem}”</span>

                <h3 className="mb-3 font-display text-xl font-extrabold tracking-tight text-ink">{service.title}</h3>

                <p className="mb-6 text-[15px] leading-relaxed text-muted">{service.desc}</p>
              </div>

              <ul className="space-y-3 border-t border-line pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Algo que não está na lista */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-start justify-between gap-6 rounded-[24px] bg-surface p-7 md:flex-row md:items-center md:p-9"
        >
          <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            <strong className="font-bold text-ink">Precisa de algo que não está na lista?</strong> Se nenhum programa pronto resolve o seu caso, eu construo a ferramenta certa, de calculadoras técnicas a sistemas para vender por assinatura.
          </p>
          <Link to="/briefing" className="btn btn-dark shrink-0">
            Pedir orçamento
            <ArrowRightIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
