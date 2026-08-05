import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featuredPlaceholders = [
    {
      title: 'Engenharia de Software de Alto Desempenho e Core Web Vitals no Google',
      category: 'Engenharia & SEO',
      date: 'Em breve',
      desc: 'Como a arquitetura moderna em React, Vite e Edge Functions posiciona aplicações no topo das buscas do Google.'
    },
    {
      title: 'Sistemas Proprietários vs Softwares de Prateleira: A decisão estratégica de escala',
      category: 'Estratégia Digital',
      date: 'Em breve',
      desc: 'Uma análise técnica e financeira sobre quando construir um ERP/CRM sob medida para sua operação.'
    },
    {
      title: 'Design Minimalista e UX de Alta Conversão na Retenção de Clientes',
      category: 'Design & UX',
      date: 'Em breve',
      desc: 'Princípios de microinterações, tipografia e contraste visual que aumentam métricas de conversão.'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black pt-20 pb-28 min-h-[85vh]">
      {/* Luz ambiente */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-4xl">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
            Publicações Técnicas · ValeTech
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Insights de <span className="text-zinc-400 font-light">Tecnologia & Inovação</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed"
          >
            Artigos aprofundados sobre arquitetura de software, SEO técnico, interfaces de alta performance e escala empresarial.
          </motion.p>
        </div>

        {/* Lista de Artigos */}
        <div className="space-y-6">
          {featuredPlaceholders.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col sm:flex-row justify-between gap-6"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-white font-medium">{article.category}</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-zinc-400">{article.date}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  {article.title}
                </h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  {article.desc}
                </p>
              </div>

              <div className="flex items-end">
                <span className="text-[11px] font-mono text-zinc-400 font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02]">
                  Em breve
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter / Contato */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 glass-panel p-8 sm:p-12 rounded-3xl text-center space-y-6"
        >
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
            Deseja acompanhar nossos lançamentos técnicos?
          </h2>
          <p className="text-zinc-400 text-sm font-light max-w-md mx-auto">
            Novos conteúdos e estudos de caso de engenharia serão publicados regularmente.
          </p>
          <div>
            <Link
              to="/briefing"
              className="inline-block px-8 py-3.5 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              Iniciar um Projeto com a ValeTech
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
