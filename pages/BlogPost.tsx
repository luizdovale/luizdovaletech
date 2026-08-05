import React, { useEffect } from 'react';
// @ts-ignore
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-black pt-20 pb-28 min-h-[85vh] flex items-center justify-center">
      {/* Luz ambiente */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-2xl text-center space-y-8">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
          Artigo Técnico · ValeTech
        </span>

        <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
          Publicação: <span className="text-zinc-400 font-light">"{slug}"</span>
        </h1>

        <p className="text-zinc-400 text-base font-light leading-relaxed">
          Este artigo está em fase de revisão técnica e diagramação para publicação em nosso portal.
        </p>

        <div className="glass-panel p-6 rounded-2xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">Tópicos em Destaque</span>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-white/[0.03] text-zinc-300 text-xs rounded-md border border-white/[0.08]">Arquitetura de Software</span>
            <span className="px-3 py-1 bg-white/[0.03] text-zinc-300 text-xs rounded-md border border-white/[0.08]">Core Web Vitals</span>
            <span className="px-3 py-1 bg-white/[0.03] text-zinc-300 text-xs rounded-md border border-white/[0.08]">Design de Sistemas</span>
            <span className="px-3 py-1 bg-white/[0.03] text-zinc-300 text-xs rounded-md border border-white/[0.08]">Engenharia Web</span>
          </div>
        </div>

        <div>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white hover:text-zinc-300 text-xs font-mono uppercase tracking-wider transition-colors"
          >
            ← Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
