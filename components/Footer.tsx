import React from 'react';
import { LogoFooter } from './Logos';
import { SOCIAL_LINKS } from '../constants';
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
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleScrollToTop = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-tech-dark border-t border-tech-blue/30 py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-tech-gold/50 blur-[50px]"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 items-center md:items-start">
         {/* Branding */}
         <div className="text-center md:text-left space-y-4">
            <LogoFooter />
            <p className="text-tech-gray text-sm font-light leading-relaxed max-w-xs">
              Elevando o nível digital da sua empresa com websites, landing pages e sistemas sob medida de alto desempenho.
            </p>
         </div>

         {/* Navigation Links */}
         <div className="flex flex-col items-center md:items-start space-y-3 font-display">
            <h4 className="text-xs uppercase tracking-widest text-white/80 font-bold mb-2">Navegação</h4>
            <button onClick={handleScrollToTop} className="text-tech-gray hover:text-tech-electric text-sm transition-colors text-left cursor-pointer">Página Inicial</button>
            <button onClick={() => handleScrollTo('services')} className="text-tech-gray hover:text-tech-electric text-sm transition-colors text-left cursor-pointer">Serviços</button>
            <button onClick={() => handleScrollTo('projects')} className="text-tech-gray hover:text-tech-electric text-sm transition-colors text-left cursor-pointer">Projetos</button>
            <Link to="/sobre" className="text-tech-gray hover:text-tech-electric text-sm transition-colors text-left">Sobre a Empresa</Link>
            <Link to="/briefing" className="text-tech-gray hover:text-tech-electric text-sm transition-colors text-left">Solicitar Orçamento</Link>
         </div>

         {/* Socials & Tech Info */}
         <div className="flex flex-col items-center md:items-end space-y-6">
            <div className="flex space-x-6 font-display font-bold text-xs uppercase tracking-wider">
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-tech-gray hover:text-tech-gold transition-colors">GitHub</a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-tech-gray hover:text-tech-gold transition-colors">LinkedIn</a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-tech-gray hover:text-tech-gold transition-colors">Instagram</a>
            </div>

            {/* Discrete Technologies Disclaimer */}
            <div className="text-center md:text-right">
              <span className="text-[10px] font-mono text-tech-gray/40 block">Tecnologias principais de desenvolvimento:</span>
              <span className="text-[10px] font-mono text-tech-gray/60 block">React · Next.js · TypeScript · Tailwind CSS · Supabase · PWA</span>
            </div>

            <p className="text-xs text-tech-gray/50">
              © {new Date().getFullYear()} ValeTech Soluções. Todos os direitos reservados.
            </p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;