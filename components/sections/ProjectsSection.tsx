import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, SOCIAL_LINKS } from '../../constants';

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabs = [
    { id: 'all', label: 'Todos' },
    { id: 'sites', label: 'Sites Institucionais' },
    { id: 'sistemas', label: 'Sistemas Web' },
    { id: 'apps', label: 'Aplicativos' },
    { id: 'empresarial', label: 'Soluções Empresariais' }
  ];

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="font-display text-4xl md:text-6xl font-black text-white">
              PORTFÓLIO <span className="text-tech-electric italic text-glow-blue">SELECIONADO</span>
            </h2>
            <p className="text-tech-gray text-xl font-light max-w-xl">
              Projetos reais desenvolvidos para gerar resultados de negócios e presença digital robusta.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-24 bg-tech-electric/30 hidden md:block"></div>
              <span className="text-tech-electric font-mono text-sm tracking-[0.3em] uppercase font-bold">Explorar Projetos</span>
            </div>
          </motion.div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/5 pb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-3 rounded-full font-display text-sm font-bold tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'text-white bg-tech-electric shadow-lg shadow-tech-electric/20'
                    : 'text-tech-gray hover:text-white bg-white/5 border border-white/5 hover:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-12 lg:gap-16 min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                layout
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="group block relative bg-tech-surface border border-white/5 rounded-[20px] p-4 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300"
              >
                {/* Image Card */}
                <div className="relative aspect-[16/10] bg-tech-blue/20 rounded-xl overflow-hidden border border-white/5 transition-all duration-700">
                  <img
                    src={project.image}
                    alt={`Captura de tela do projeto ${project.title} - ValeTech Soluções`}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    loading="lazy"
                    width="640"
                    height="400"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-surface via-transparent to-transparent opacity-80"></div>
                  
                  {/* External Link Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 border border-white/20">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  {/* Float Tags */}
                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-3 py-1 bg-tech-electric/80 backdrop-blur-md text-white font-bold rounded-lg uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Text Content */}
                <div className="mt-6 space-y-4 px-2 pb-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-tech-electric transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-tech-gray text-lg leading-relaxed font-light line-clamp-2 italic">
                    "{project.desc}"
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs font-mono text-tech-gray/60 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-tech-electric"></span>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-2 flex flex-col items-center justify-center py-20 text-center space-y-4">
              <span className="text-4xl">💼</span>
              <p className="text-tech-gray text-lg font-light">Nenhum projeto nesta categoria disponível no momento.</p>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="text-tech-electric font-bold hover:underline">
                Seja o primeiro a contratar esta solução →
              </a>
            </div>
          )}
        </motion.div>

        {/* Footer CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <button 
            onClick={() => window.open(SOCIAL_LINKS.whatsapp, '_blank')}
            className="inline-flex items-center gap-4 text-white font-display text-xl border-b-2 border-tech-gold pb-2 hover:text-tech-gold transition-all group"
          >
            QUER UM PROJETO PERSONALIZADO COMO ESTES? 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
