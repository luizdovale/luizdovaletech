import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import PageMeta from '../components/PageMeta';

const motion = m as any;

const NotFound: React.FC = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 pb-12 pt-28">
      <PageMeta
        title="Página não encontrada — ValeTech Soluções"
        description="Esse endereço não existe ou mudou de lugar."
        path="/404"
        noindex
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(50%_70%_at_50%_0%,rgb(var(--c-tint))_0%,transparent_75%)]"
      />

      <div className="relative max-w-md space-y-6 text-center">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="select-none font-display text-8xl font-extrabold tracking-tighter text-accent sm:text-9xl"
        >
          404
        </motion.h1>
        
        <div className="space-y-2">
          <span className="eyebrow block">Página não encontrada</span>
          <p className="text-base leading-relaxed text-muted">
            Esse endereço não existe ou mudou de lugar. Volte para o início para continuar.
          </p>
        </div>

        <div>
          <Link to="/" className="btn btn-dark">
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;