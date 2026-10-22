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
    <div className="relative min-h-[85vh] w-full overflow-hidden bg-white pb-28 pt-32">

      <div className="container relative mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center space-y-4 mb-20">
          <span className="eyebrow block">Publicações Técnicas · ValeTech</span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            Insights de <span className="text-muted">Tecnologia & Inovação</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-xl text-base leading-relaxed text-muted sm:text-lg"
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
              className="card card-hover flex flex-col justify-between gap-6 p-8 sm:flex-row"
            >
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3 text-sm">
                  <span className="font-bold text-accent">{article.category}</span>
                  <span className="text-faint">/</span>
                  <span className="text-muted">{article.date}</span>
                </div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                  {article.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted">
                  {article.desc}
                </p>
              </div>

              <div className="flex items-end">
                <span className="rounded-full bg-surface px-3.5 py-1.5 text-xs font-bold text-muted">
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
          className="mt-20 space-y-6 rounded-[28px] bg-surface p-8 text-center sm:p-12"
        >
          <h2 className="font-display text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
            Deseja acompanhar nossos lançamentos técnicos?
          </h2>
          <p className="mx-auto max-w-md text-[15px] text-muted">
            Novos conteúdos e estudos de caso de engenharia serão publicados regularmente.
          </p>
          <div>
            <Link to="/briefing" className="btn btn-dark">
              Iniciar um Projeto com a ValeTech
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
