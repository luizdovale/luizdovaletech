import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend & UI/UX',
      subtitle: 'Interfaces reativas, acessibilidade e performance visual.',
      skills: SKILLS.frontend
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      subtitle: 'Serviços escaláveis, segurança e arquitetura resiliente.',
      skills: SKILLS.backend
    },
    {
      id: 'infra',
      title: 'Cloud, IA & DevOps',
      subtitle: 'Automação de deploy, banco de dados e agentes inteligentes.',
      skills: SKILLS.infra
    }
  ];

  return (
    <section id="skills" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-white/[0.02] rounded-full blur-[130px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-3xl mb-20 space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            05 · Stack Tecnológico
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Tecnologia de ponta para <span className="text-zinc-400 font-light">aplicações modernas.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Utilizamos as linguagens, frameworks e provedores em nuvem mais consolidados do mercado global.
          </p>
        </div>

        {/* Grid das Categorias de Stack */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.id} 
              variants={itemVariants}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between space-y-8 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
                    Stack 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">
                  {cat.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.06]">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="text-xs font-mono text-zinc-300 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
