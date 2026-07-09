import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, SOCIAL_LINKS } from '../../constants';

const ServicesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'globe':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'target':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'server':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        );
      case 'brain':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'mobile':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'electric':
        return {
          bg: 'bg-tech-electric/10',
          border: 'border-tech-electric/30',
          text: 'text-tech-electric',
          hoverBg: 'from-tech-electric/10 to-transparent',
          hoverBorder: 'hover:border-tech-electric/40'
        };
      case 'gold':
        return {
          bg: 'bg-tech-gold/10',
          border: 'border-tech-gold/30',
          text: 'text-tech-gold',
          hoverBg: 'from-tech-gold/10 to-transparent',
          hoverBorder: 'hover:border-tech-gold/40'
        };
      case 'purple':
        return {
          bg: 'bg-tech-purple/10',
          border: 'border-tech-purple/30',
          text: 'text-tech-purple',
          hoverBg: 'from-tech-purple/10 to-transparent',
          hoverBorder: 'hover:border-tech-purple/40'
        };
      case 'cyan':
        return {
          bg: 'bg-tech-cyan/10',
          border: 'border-tech-cyan/30',
          text: 'text-tech-cyan',
          hoverBg: 'from-tech-cyan/10 to-transparent',
          hoverBorder: 'hover:border-tech-cyan/40'
        };
      case 'green':
        return {
          bg: 'bg-tech-green/10',
          border: 'border-tech-green/30',
          text: 'text-tech-green',
          hoverBg: 'from-tech-green/10 to-transparent',
          hoverBorder: 'hover:border-tech-green/40'
        };
      default:
        return {
          bg: 'bg-white/10',
          border: 'border-white/20',
          text: 'text-white',
          hoverBg: 'from-white/10 to-transparent',
          hoverBorder: 'hover:border-white/30'
        };
    }
  };

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-tech-electric/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-tech-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter">
            NOSSOS <span className="text-tech-electric">SERVIÇOS</span>
          </h2>
          <p className="text-tech-gray text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Desenvolvemos soluções digitais completas e de alta performance focadas em gerar resultados reais para a sua empresa.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const cls = getColorClasses(service.color);
            return (
              <motion.div key={service.id} variants={itemVariants} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-b ${cls.hoverBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>
                
                <div className={`relative bg-tech-surface p-8 md:p-10 rounded-[20px] border border-white/5 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 ${cls.hoverBorder} transition-all duration-300 h-full flex flex-col justify-between`}>
                  <div>
                    {/* Icon */}
                    <div className={`w-14 h-14 ${cls.bg} rounded-2xl flex items-center justify-center mb-8 ${cls.text} border ${cls.border} group-hover:scale-110 transition-transform duration-500`}>
                      {getIcon(service.icon)}
                    </div>
                    
                    {/* Header */}
                    <span className="text-xs uppercase tracking-widest font-mono text-tech-gray/60 block mb-2">{service.subtitle}</span>
                    <h3 className="font-display text-2xl font-bold text-white mb-4">{service.title}</h3>
                    
                    {/* Desc */}
                    <p className="text-tech-gray text-sm font-light leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Service features list */}
                  <div className="border-t border-white/5 pt-6 mt-auto">
                    <ul className="space-y-3">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-xs text-tech-gray group-hover:text-white/80 transition-colors">
                          <span className={`w-1.5 h-1.5 rounded-full ${cls.bg} border ${cls.border}`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Link to briefing */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-display text-sm font-bold tracking-wider transition-all"
          >
            PRECISA DE UMA SOLUÇÃO PERSONALIZADA?
            <span className="text-tech-electric group-hover:translate-x-1 transition-transform">FALE COMIGO →</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
