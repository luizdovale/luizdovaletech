import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import PageMeta from '../components/PageMeta';

const motion = m as any;

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6 pt-24 pb-12">
      <PageMeta
        title="Página não encontrada — ValeTech Soluções"
        description="Esse endereço não existe ou mudou de lugar."
        path="/404"
        noindex
      />

      {/* Background sutil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]"></div>

      <div className="text-center relative z-10 max-w-md space-y-6">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-8xl sm:text-9xl font-bold text-white tracking-tighter select-none"
        >
          404
        </motion.h1>
        
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            Página não encontrada
          </span>
          <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            Esse endereço não existe ou mudou de lugar. Volte para o início para continuar.
          </p>
        </div>

        <div>
          <Link 
            to="/"
            className="inline-block px-8 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;