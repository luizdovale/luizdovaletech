import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants';
// @ts-ignore
import { Link } from 'react-router-dom';

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'globe':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
            <path strokeLinecap="round" strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
        );
      case 'server':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="2" y="3" width="20" height="7" rx="2" strokeWidth="1.5" />
            <rect x="2" y="14" width="20" height="7" rx="2" strokeWidth="1.5" />
            <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect x="5" y="2" width="14" height="20" rx="3" strokeWidth="1.5" />
            <line x1="11" y1="18" x2="13" y2="18" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
    }
  };

  return (
    <section id="services" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">

        {/* Header da Seção */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            01 · O que eu faço
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Como eu posso <span className="text-zinc-400 font-light">ajudar o seu negócio.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Escolha o problema que mais se parece com o seu. Eu cuido da parte técnica.
          </p>
        </div>

        {/* Grid dos Serviços */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between group h-full"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all duration-300 mb-6">
                  {getIcon(service.icon)}
                </div>

                <span className="text-sm font-display italic text-zinc-400 block mb-2">
                  “{service.problem}”
                </span>

                <h3 className="font-display text-xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Lista de Features */}
              <div className="pt-6 border-t border-white/[0.06] space-y-3">
                {service.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 font-sans leading-relaxed">
                    <span className="w-1 h-1 mt-1.5 shrink-0 rounded-full bg-white/40 group-hover:bg-white transition-colors"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Algo que não está na lista */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center space-y-6"
        >
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Precisa de algo que não está na lista? Se nenhum programa pronto resolve o seu caso, eu construo a ferramenta certa, de calculadoras técnicas a sistemas para vender por assinatura.
          </p>
          <Link
            to="/briefing"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <span>Pedir orçamento</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
