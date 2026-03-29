import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';

const SkillsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
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
    <section id="skills" className="py-32 relative overflow-hidden bg-tech-dark">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tech-electric/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter">
            STACK <span className="text-tech-electric">TECNOLÓGICO</span>
          </h2>
          <p className="text-tech-gray text-lg max-w-2xl mx-auto font-light">
            Arsenal de ferramentas e linguagens que utilizo para criar soluções de alto impacto.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Categoria: Frontend */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-tech-electric/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative glass-panel p-10 rounded-3xl border border-white/5 hover:border-tech-electric/40 transition-all duration-500 h-full">
              <div className="w-14 h-14 bg-tech-electric/20 rounded-2xl flex items-center justify-center mb-8 text-tech-electric border border-tech-electric/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">Interfaces & Mobile</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.frontend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 text-tech-gray text-sm rounded-xl border border-white/5 group-hover:border-tech-electric/30 group-hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Categoria: Backend */}
          <motion.div variants={itemVariants} className="group relative">
             <div className="absolute inset-0 bg-gradient-to-b from-tech-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative glass-panel p-10 rounded-3xl border border-white/5 hover:border-tech-gold/40 transition-all duration-500 h-full">
              <div className="w-14 h-14 bg-tech-gold/10 rounded-2xl flex items-center justify-center mb-8 text-tech-gold border border-tech-gold/30">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">Backend & Cloud</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.backend.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 text-tech-gray text-sm rounded-xl border border-white/5 group-hover:border-tech-gold/30 group-hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Categoria: Ferramentas */}
          <motion.div variants={itemVariants} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            <div className="relative glass-panel p-10 rounded-3xl border border-white/5 hover:border-white/30 transition-all duration-500 h-full">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-white/60 border border-white/10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-6">Ecossistema</h3>
              <div className="flex flex-wrap gap-3">
                {SKILLS.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 text-tech-gray text-sm rounded-xl border border-white/5 group-hover:border-white/20 group-hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
