import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-tech-dark pt-32 pb-20 min-h-[85vh] flex items-center justify-center">
      <div className="absolute top-20 left-10 w-96 h-96 bg-tech-electric/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-2xl text-center space-y-8">
        <span className="text-xs uppercase tracking-widest text-tech-gold font-mono font-bold px-4 py-1.5 border border-tech-gold/20 rounded-full bg-tech-gold/5">
          Artigo do Blog
        </span>

        <h1 className="font-display text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter">
          Artigo: <span className="text-tech-electric italic">"{slug}"</span>
        </h1>

        <p className="text-tech-gray text-lg font-light leading-relaxed">
          Este artigo está sendo escrito e revisado com dados atualizados do mercado para garantir a melhor informação.
        </p>

        <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
          <span className="text-sm text-white/80 font-bold block">Assuntos a serem abordados:</span>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-white/5 text-tech-gray text-xs rounded-lg border border-white/5">SEO Técnico</span>
            <span className="px-3 py-1 bg-white/5 text-tech-gray text-xs rounded-lg border border-white/5">Performance Web</span>
            <span className="px-3 py-1 bg-white/5 text-tech-gray text-xs rounded-lg border border-white/5">Geração de Leads</span>
            <span className="px-3 py-1 bg-white/5 text-tech-gray text-xs rounded-lg border border-white/5">Desenvolvimento Web</span>
          </div>
        </div>

        <div>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-tech-electric hover:underline text-sm font-bold tracking-wider"
          >
            ← Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
