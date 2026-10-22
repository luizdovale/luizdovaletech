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
    <div className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-white pb-28 pt-32">

      <div className="container relative mx-auto max-w-2xl space-y-8 px-6 text-center md:px-8">
        <span className="eyebrow block">Artigo Técnico · ValeTech</span>

        <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Publicação: <span className="text-muted">"{slug}"</span>
        </h1>

        <p className="text-base leading-relaxed text-muted">
          Este artigo está em fase de revisão técnica e diagramação para publicação em nosso portal.
        </p>

        <div className="space-y-4 rounded-card bg-surface p-6">
          <span className="block text-sm font-bold text-ink">Tópicos em Destaque</span>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink">Arquitetura de Software</span>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink">Core Web Vitals</span>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink">Design de Sistemas</span>
            <span className="rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink">Engenharia Web</span>
          </div>
        </div>

        <div>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover"
          >
            ← Voltar para o Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
