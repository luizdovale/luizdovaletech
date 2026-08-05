import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, ProjectCategory } from '../../constants';
// @ts-ignore
import { Link } from 'react-router-dom';

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'sistemas', label: 'Sistemas & ERPs' },
    { id: 'web', label: 'Aplicações Web & Portais' },
    { id: 'apps', label: 'Mobile & Engenharia' }
  ];

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => {
        if (activeTab === 'sistemas') return project.category === 'sistemas';
        if (activeTab === 'web') return project.category === 'web';
        if (activeTab === 'apps') return project.category === 'apps' || project.category === 'solucoes';
        return true;
      });

  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        
        {/* Header da Seção */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-2xl"
          >
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              03 · Portfólio & Cases
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Projetos construídos para <span className="text-zinc-400 font-light">gerar impacto.</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
              Explore soluções desenvolvidas pela ValeTech com arquitetura moderna e experiência refinada.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <Link
              to="/briefing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>Solicitar Orçamento</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Tabs de Filtro Minimalistas */}
        <div className="flex flex-wrap gap-2.5 mb-14 border-b border-white/[0.06] pb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full font-sans text-xs tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-black bg-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Projetos Showcase */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                layout
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group block glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl transition-all duration-300"
              >
                {/* Imagem do Projeto */}
                <div className="relative aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-white/[0.06] mb-6">
                  <img
                    src={project.image}
                    alt={`Projeto ${project.title} desenvolvido por ValeTech — Tecnologia & Inovação`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    loading="lazy"
                    width="640"
                    height="400"
                  />
                  
                  {/* Overlay gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Botão de Link Externo Flutuante */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 border border-white/20">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                {/* Detalhes do Projeto */}
                <div className="px-2 pb-2 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tags Tecnológicas */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] font-mono text-zinc-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
