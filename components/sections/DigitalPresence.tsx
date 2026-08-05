import React from 'react';
import { motion } from 'framer-motion';

const DigitalPresence: React.FC = () => {
  const cards = [
    {
      number: "01",
      title: "Autoridade e Credibilidade",
      desc: "Empresas com plataformas digitais exclusivas e bem arquitetadas transmitem segurança imediata e fecham contratos de maior valor."
    },
    {
      number: "02",
      title: "Captação Ativa 24 Horas",
      desc: "Sistemas e páginas otimizadas para conversão capturam clientes e qualificam oportunidades ininterruptamente."
    },
    {
      number: "03",
      title: "Independência de Algoritmos",
      desc: "Construa sua base de dados, clientes e ferramentas em infraestrutura própria, sem ficar vulnerável a oscilações de redes sociais."
    },
    {
      number: "04",
      title: "Eficiência & Automação",
      desc: "Substitua planilhas manuais e gargalos de atendimento por fluxos automatizados, economizando centenas de horas operacionais."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="presenca-digital" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            06 · Impacto Estratégico
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Infraestrutura digital sólida para <span className="text-zinc-400 font-light">empresas que lideram.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Ter um ecossistema próprio e sob medida é o ativo definitivo para autoridade de marca, automação e escalabilidade.
          </p>
        </div>

        {/* Grid dos Cards de Impacto */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                  {card.number}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-white/[0.06]"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DigitalPresence;
