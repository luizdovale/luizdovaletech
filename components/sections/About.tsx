import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const capabilities = [
    {
      title: "Sistemas Personalizados",
      desc: "ERPs, CRMs e plataformas administrativas desenhadas sob medida para as regras operacionais da sua empresa.",
      metric: "Arquitetura Sob Medida"
    },
    {
      title: "Aplicações Web de Alta Performance",
      desc: "Portais institucionais, SaaS e landing pages projetadas com máxima velocidade de carregamento e SEO técnico.",
      metric: "Core Web Vitals 100%"
    },
    {
      title: "Aplicativos Mobile & PWA",
      desc: "Experiências móveis fluidas para iOS e Android com suporte a operação offline e sincronização em nuvem.",
      metric: "Multiplataforma"
    },
    {
      title: "Automação & Inteligência Artificial",
      desc: "Integração de APIs, processamento inteligente de fluxos e agentes de IA para eliminar tarefas manuais.",
      metric: "Eficiência Máxima"
    }
  ];

  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header da Seção */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              01 · Sobre a LDV
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Transformamos ideias em <span className="text-zinc-400 font-light">soluções digitais.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7 space-y-6 text-zinc-400 text-base sm:text-lg font-light leading-relaxed"
          >
            <p>
              A <strong className="text-white font-semibold">LDV</strong> nasceu para redefinir a forma como empresas utilizam a tecnologia. Desenvolvemos ecossistemas digitais robustos, elegantes e escaláveis que impulsionam o crescimento real dos nossos clientes.
            </p>
            <p>
              Não usamos templates genéricos ou soluções de prateleira que engessam o seu negócio. Cada linha de código é construída sob medida com as melhores práticas da engenharia de software global, garantindo segurança, performance impecável e liberdade total de evolução.
            </p>
          </motion.div>
        </div>

        {/* Grid de Capacidades Tecnológicas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between space-y-8"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="text-[11px] font-mono text-zinc-300 uppercase tracking-wider block">
                  {cap.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
