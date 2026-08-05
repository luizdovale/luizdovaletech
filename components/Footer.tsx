import React from 'react';
import { SOCIAL_LINKS, BRAND_INFO } from '../constants';
// @ts-ignore
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/[0.08] pt-20 pb-10 relative overflow-hidden bg-black">
      {/* Linha de luz superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Grid principal */}
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">

          {/* Coluna 1: Branding */}
          <div className="md:col-span-5 space-y-6">
            <button onClick={handleScrollToTop} className="inline-block cursor-pointer group" aria-label="Voltar ao topo">
              <img
                src="/logo.png"
                alt="LDV — Tecnologia & Inovação"
                className="h-[7.5rem] w-auto object-contain select-none brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                draggable={false}
              />
            </button>
            <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xs">
              Criamos soluções digitais inteligentes, sistemas personalizados e experiências tecnológicas de alto padrão para empresas que querem evoluir.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] text-zinc-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              São Paulo · Brasil
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold font-mono mb-5">Navegação</h4>
            <nav className="flex flex-col space-y-3">
              <button
                onClick={handleScrollToTop}
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors text-left cursor-pointer w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                Início
              </button>
              <button
                onClick={() => handleScrollTo('about')}
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors text-left cursor-pointer w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                Sobre a LDV
              </button>
              <button
                onClick={() => handleScrollTo('services')}
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors text-left cursor-pointer w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                Serviços
              </button>
              <button
                onClick={() => handleScrollTo('projects')}
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors text-left cursor-pointer w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                Projetos & Cases
              </button>
              <button
                onClick={() => handleScrollTo('faq')}
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors text-left cursor-pointer w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                FAQ
              </button>
              <Link
                to="/sobre"
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                Empresa & História
              </Link>
              <Link
                to="/blog"
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors w-fit group flex items-center gap-2"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                Blog & Conteúdo
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contato & Ação */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold font-mono">Conecte-se</h4>

            <div className="flex flex-col space-y-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-white text-sm font-light transition-colors flex items-center gap-2 group w-fit"
              >
                <span className="w-3 h-[1px] bg-white/20 group-hover:w-5 group-hover:bg-white transition-all duration-300" />
                WhatsApp
              </a>
            </div>

            <Link
              to="/briefing"
              className="inline-block px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300"
            >
              Solicitar Projeto
            </Link>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-600 font-mono">
          <p>© {BRAND_INFO.year} {BRAND_INFO.fullName}. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>React</span>
            <span className="text-white/20">·</span>
            <span>TypeScript</span>
            <span className="text-white/20">·</span>
            <span>Node.js</span>
            <span className="text-white/20">·</span>
            <span>Supabase</span>
            <span className="text-white/20">·</span>
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;