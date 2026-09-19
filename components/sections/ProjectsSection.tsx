import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORY_LABEL, SOCIAL_LINKS } from '../../constants';
// @ts-ignore
import { Link } from 'react-router-dom';

const TABS = [
  { id: 'all', label: 'Todos' },
  { id: 'sistemas', label: 'Sistemas de gestão' },
  { id: 'sites', label: 'Sites' },
  { id: 'apps', label: 'Apps e ferramentas' }
];

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden bg-black border-t border-white/[0.06]">
      {/* Luz ambiente sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">

        {/* Header da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 max-w-2xl mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            02 · Projetos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            Projetos que já entreguei <span className="text-zinc-400 font-light">e estão no ar.</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            Cada um nasceu de um problema real. Clique para ver funcionando.
          </p>
        </motion.div>

        {/* Tabs de Filtro Minimalistas */}
        <div className="flex flex-wrap gap-2.5 mb-14 border-b border-white/[0.06] pb-6">
          {TABS.map((tab) => {
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

        {/* Grid de Projetos */}
        <motion.div
          layout
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.a
                layout
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex flex-col glass-panel glass-panel-hover p-4 sm:p-5 rounded-2xl transition-all duration-300"
              >
                {/* Imagem do Projeto */}
                <div className="relative aspect-[16/10] bg-neutral-900 rounded-xl overflow-hidden border border-white/[0.06] mb-6">
                  <img
                    src={project.image}
                    alt={`Projeto ${project.title}, desenvolvido pela ValeTech Soluções`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    loading="lazy"
                    width="640"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Detalhes do Projeto */}
                <div className="px-2 pb-2 flex flex-col flex-1 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider text-right">
                      {PROJECT_CATEGORY_LABEL[project.category]}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                    {project.audience}
                  </p>

                  <p className="text-zinc-400 text-sm font-light leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-sans text-zinc-400 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Chamada visível também no celular, onde não existe hover */}
                  <span className="mt-auto pt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-white">
                    Ver projeto no ar
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Convite ao final da seção */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center space-y-6"
        >
          <p className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
            Tem um problema parecido com algum desses?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              Falar no WhatsApp
            </a>
            <Link
              to="/briefing"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/50 hover:bg-white/[0.06] text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              Pedir orçamento
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
