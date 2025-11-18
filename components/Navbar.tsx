import React, { useState, useEffect } from 'react';
// @ts-ignore
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { LogoType } from './Logos';

const motion = m as any;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-tech-dark/90 backdrop-blur-md border-b border-tech-blue/30 py-3 shadow-lg' 
      : 'bg-transparent py-5'
  }`;

  const linkClasses = "font-display text-sm font-medium text-slate-200 hover:text-tech-gold transition-colors tracking-wider uppercase relative group cursor-pointer";
  const activeHighlight = "absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-gold transition-all group-hover:w-full";

  // Smooth scroll handler
  const handleScrollTo = (id: string) => {
    setIsOpen(false); // Close mobile menu if open

    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
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

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={navClasses}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/">
           <LogoType className="scale-90 md:scale-100 origin-left" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => handleScrollTo('about')} className={linkClasses}>
            Sobre <span className={activeHighlight}></span>
          </button>
          <button onClick={() => handleScrollTo('skills')} className={linkClasses}>
            Skills <span className={activeHighlight}></span>
          </button>
          <button onClick={() => handleScrollTo('projects')} className={linkClasses}>
            Projetos <span className={activeHighlight}></span>
          </button>
          
          <Link 
            to="/briefing" 
            className="px-6 py-2 rounded-full bg-tech-gradient text-white font-bold font-display text-xs tracking-widest hover:shadow-[0_0_15px_rgba(26,102,191,0.5)] transition-all transform hover:scale-105 border border-transparent hover:border-tech-gold"
          >
            INICIAR PROJETO
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
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
            className="md:hidden absolute top-full left-0 w-full bg-tech-dark/95 backdrop-blur-xl border-b border-tech-gold/20 overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              <button className="text-left text-white font-display text-lg" onClick={() => handleScrollTo('about')}>Sobre</button>
              <button className="text-left text-white font-display text-lg" onClick={() => handleScrollTo('skills')}>Skills</button>
              <button className="text-left text-white font-display text-lg" onClick={() => handleScrollTo('projects')}>Projetos</button>
              <Link 
                to="/briefing" 
                onClick={() => setIsOpen(false)}
                className="text-center py-3 rounded bg-tech-gradient text-white font-bold font-display tracking-widest shadow-[0_0_10px_rgba(26,102,191,0.4)]"
              >
                INICIAR PROJETO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;