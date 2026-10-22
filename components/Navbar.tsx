import React, { useState, useEffect } from 'react';
// @ts-ignore
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { LogoType } from './Logos';
import { NAV_LINKS } from '../constants';

const motion = m as any;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu do celular ao trocar de página ou apertar Esc.
  useEffect(() => setIsOpen(false), [location.pathname]);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Destaca no menu a seção que está no meio da tela — só existe o que seguir na Home.
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveId('');
      return;
    }

    const ids = NAV_LINKS.map((link) => link.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Guarda quem está na faixa observada agora (não só quem mudou neste callback),
    // senão ao voltar pro topo — sem nenhuma seção entrando — o último link marcado fica preso.
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });
        setActiveId(ids.find((id) => intersecting.has(id)) ?? '');
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const linkClasses = (id: string) =>
    `cursor-pointer rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
      activeId === id ? 'bg-surface text-ink' : 'text-muted hover:bg-surface hover:text-ink'
    }`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
    >
      <nav
        aria-label="Principal"
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border bg-white/85 py-2 pl-5 pr-2 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? 'border-line shadow-float' : 'border-line/70 shadow-soft'
        }`}
      >
        <Link to="/" className="flex items-center" aria-label="ValeTech Soluções, página inicial">
          <LogoType />
        </Link>

        {/* Menu do computador */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => handleScrollTo(link.id)} className={linkClasses(link.id)}>
              {link.label}
            </button>
          ))}
          <Link to="/briefing" className="btn btn-dark btn-sm ml-2">
            Pedir orçamento
          </Link>
        </div>

        {/* Botão do menu no celular */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-surface lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="menu-mobile"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Menu do celular */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="menu-mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="card absolute left-0 right-0 top-full mt-2 p-3 lg:hidden"
            >
              <div className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    className={`rounded-xl px-4 py-3 text-left text-base transition-colors ${
                      activeId === link.id ? 'bg-surface font-bold text-ink' : 'font-medium text-muted hover:bg-surface hover:text-ink'
                    }`}
                    onClick={() => handleScrollTo(link.id)}
                  >
                    {link.label}
                  </button>
                ))}
                <Link to="/briefing" className="btn btn-primary mt-2">
                  Pedir orçamento
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navbar;
