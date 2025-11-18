import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-tech-dark relative overflow-hidden px-4">
      {/* Glitch Effect Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="text-center z-10">
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="font-display text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-tech-electric to-tech-gold mb-4 select-none"
        >
          404
        </motion.h1>
        
        <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-6 uppercase tracking-widest">
          System Failure
        </h2>
        
        <p className="text-slate-600 dark:text-tech-gray text-lg mb-8 max-w-md mx-auto">
          A página que você procura foi movida para outra dimensão ou não existe neste servidor.
        </p>

        <Link 
          to="/"
          className="inline-block px-8 py-3 bg-tech-gradient text-white font-bold font-display rounded hover:shadow-[0_0_20px_rgba(26,102,191,0.5)] transition-all transform hover:-translate-y-1"
        >
          REINICIAR SISTEMA
        </Link>
      </div>
    </div>
  );
};

export default NotFound;