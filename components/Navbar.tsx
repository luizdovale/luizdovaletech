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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
    scrolled
      ? 'bg-black/80 backdrop-blur-2xl border-b border-white/[0.08] py-3.5 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
      : 'bg-transparent py-5'
  }`;

  const linkClasses = "font-sans text-[13px] font-medium text-white/70 hover:text-white transition-colors tracking-wide relative group cursor-pointer py-1";
  const activeHighlight = "absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full";

  const handleScrollTo = (id: string) => {
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={navClasses}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center max-w-7xl">
        <Link to="/" className="flex items-center group">
          <LogoType className="group-hover:opacity-90 transition-opacity" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-7">
          {NAV_LINKS.map((link) => (
            <button key={link.id} onClick={() => handleScrollTo(link.id)} className={linkClasses}>
              {link.label} <span className={activeHighlight}></span>
            </button>
          ))}

          <Link
            to="/briefing"
            className="px-5 py-2.5 rounded-full bg-white text-black font-semibold font-sans text-xs tracking-wider uppercase hover:bg-neutral-200 transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Pedir orçamento
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button
            className="text-white p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  className="text-left text-white/90 font-sans text-base py-2 hover:text-white"
                  onClick={() => handleScrollTo(link.id)}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/briefing"
                onClick={() => setIsOpen(false)}
                className="text-center py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-colors mt-2"
              >
                Pedir orçamento
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
