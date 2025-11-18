import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogoType } from './Logos';

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDark }) => {
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
      ? 'bg-white/90 dark:bg-tech-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-tech-blue/30 py-3 shadow-lg' 
      : 'bg-transparent py-5'
  }`;

  const linkClasses = "font-display text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-tech-blue dark:hover:text-tech-gold transition-colors tracking-wider uppercase relative group cursor-pointer";
  const activeHighlight = "absolute -bottom-1 left-0 w-0 h-0.5 bg-tech-blue dark:bg-tech-gold transition-all group-hover:w-full";

  const isHome = location.pathname === '/';

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
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-tech-gold"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
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
          <button 
            onClick={toggleTheme}
            className="p-2 text-slate-700 dark:text-tech-gold"
          >
             {isDark ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <button className="text-slate-700 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
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
            className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-tech-dark/95 backdrop-blur-xl border-b border-slate-200 dark:border-tech-gold/20 overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col space-y-4">
              <button className="text-left text-slate-800 dark:text-white font-display text-lg" onClick={() => handleScrollTo('about')}>Sobre</button>
              <button className="text-left text-slate-800 dark:text-white font-display text-lg" onClick={() => handleScrollTo('skills')}>Skills</button>
              <button className="text-left text-slate-800 dark:text-white font-display text-lg" onClick={() => handleScrollTo('projects')}>Projetos</button>
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