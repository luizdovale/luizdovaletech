import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, SOCIAL_LINKS } from '../../constants';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-tech-dark relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
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
              Uma vitrine de soluções reais desenvolvidas com precisão cirúrgica e design moderno.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-24 bg-tech-electric/30 hidden md:block"></div>
              <span className="text-tech-electric font-mono text-sm tracking-[0.3em] uppercase font-bold">Scroll para explorar</span>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group block relative"
            >
              {/* Card de Imagem com Efeito de Escala */}
              <div className="relative aspect-[16/10] bg-tech-blue/20 rounded-3xl overflow-hidden border border-white/5 transition-all duration-700 group-hover:border-tech-electric/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                />
                
                {/* Overlay de Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-transparent to-transparent opacity-80"></div>
                
                {/* Ícone de Link Externo */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500 border border-white/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Tags Rápidas (Flutuantes na Imagem) */}
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-3 py-1 bg-tech-electric/80 backdrop-blur-md text-white font-bold rounded-lg uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conteúdo Informativo */}
              <div className="mt-8 space-y-4 px-2">
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
        </div>

        {/* Botão de Ver Mais Otimizado */}
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
            QUER UM PROJETO COMO ESSES? 
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
