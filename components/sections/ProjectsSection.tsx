import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, PROJECT_CATEGORY_LABEL, SOCIAL_LINKS, type ProjectItem } from '../../constants';
// @ts-ignore
import { Link } from 'react-router-dom';
import { useTilt } from '../../hooks/useTilt';
import SectionHeader from '../SectionHeader';
import { ArrowRightIcon, WhatsAppIcon } from '../Icons';

const TABS = [
  { id: 'all', label: 'Todos' },
  { id: 'sistemas', label: 'Sistemas de gestão' },
  { id: 'sites', label: 'Sites' },
  { id: 'apps', label: 'Apps e ferramentas' }
];

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

// AnimatePresence (mode="popLayout") precisa da ref do nó real para medir a saída
// do card ao trocar de filtro; o hook de tilt também precisa da sua própria ref
// para calcular a posição do ponteiro. Como só cabe uma ref no elemento, as duas
// são combinadas aqui.
function mergeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') ref(node);
      else (ref as React.MutableRefObject<T | null>).current = node;
    });
  };
}

// Card com leve inclinação 3D que segue o ponteiro, tipo cartão físico reagindo à luz —
// só no desktop (mouse fino) e só para quem não pediu menos movimento.
const ProjectCard = React.forwardRef<HTMLAnchorElement, ProjectCardProps>(({ project, index }, forwardedRef) => {
  const glareRef = useRef<HTMLDivElement>(null);
  const tilt = useTilt<HTMLAnchorElement>({
    max: 6,
    onMove: (px, py) => {
      glareRef.current?.style.setProperty('--mx', `${px * 100}%`);
      glareRef.current?.style.setProperty('--my', `${py * 100}%`);
    }
  });

  return (
    <motion.a
      layout
      ref={mergeRefs(tilt.ref, forwardedRef)}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.disabled ? undefined : tilt.style}
      className="card card-hover group relative flex flex-col p-4 sm:p-5"
    >
      {/* Brilho que acompanha o ponteiro — some em touch/reduced motion junto com o tilt */}
      {!tilt.disabled && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(47,102,240,0.07), transparent 55%)' }}
        />
      )}

      {/* Imagem do Projeto */}
      <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-surface">
        <img
          src={project.image}
          alt={`Projeto ${project.title}, desenvolvido pela ValeTech Soluções`}
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          width="640"
          height="400"
        />
      </div>

      {/* Detalhes do Projeto */}
      <div className="relative flex flex-1 flex-col space-y-3 px-2 pb-2">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            {project.title}
          </h3>
          <span className="shrink-0 rounded-full bg-tint px-3 py-1 text-xs font-bold text-accent">
            {PROJECT_CATEGORY_LABEL[project.category]}
          </span>
        </div>

        <p className="text-[15px] font-bold leading-relaxed text-ink">
          {project.audience}
        </p>

        <p className="text-[15px] leading-relaxed text-muted">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 border-t border-line pt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Chamada visível também no celular, onde não existe hover */}
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-bold text-accent">
          Ver projeto no ar
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </motion.a>
  );
});
ProjectCard.displayName = 'ProjectCard';

const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<string>('all');

  const filteredProjects = activeTab === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader
            className="mb-12"
            eyebrow="Projetos"
            title="Projetos que já entreguei"
            highlight="e estão no ar."
            lead="Cada um nasceu de um problema real. Clique para ver funcionando."
          />
        </motion.div>

        {/* Filtro por tipo de projeto */}
        <div className="mb-12 flex flex-wrap gap-2.5" role="tablist" aria-label="Filtrar projetos">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-ink text-white shadow-soft'
                    : 'border border-line bg-white text-muted hover:border-ink/25 hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grade de projetos */}
        <motion.div layout className="grid gap-7 md:grid-cols-2 lg:gap-9">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Convite ao final da seção */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[24px] border border-line bg-white p-7 shadow-soft md:flex-row md:items-center md:p-9"
        >
          <p className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Tem um problema parecido com algum desses?
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Falar no WhatsApp
            </a>
            <Link to="/briefing" className="btn btn-secondary">
              Pedir orçamento
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
