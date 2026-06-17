import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featuredPlaceholders = [
    {
      title: 'Como otimizar o SEO técnico do seu site institucional para o Google',
      category: 'SEO',
      date: 'Em breve',
      desc: 'Um guia completo sobre Core Web Vitals, metadados, estrutura semântica HTML e técnicas de indexação para ranquear no topo.'
    },
    {
      title: 'Sistemas personalizados vs Sistemas de prateleira: Qual escolher?',
      category: 'Tecnologia',
      date: 'Em breve',
      desc: 'Saiba quando investir em um software sob medida (ERP/CRM) para o seu negócio e quando usar soluções prontas.'
    },
    {
      title: 'A importância da experiência do usuário (UX/UI) na conversão de leads',
      category: 'Design & Conversão',
      date: 'Em breve',
      desc: 'Como pequenos ajustes visuais e de navegação em landing pages podem aumentar drasticamente a taxa de captação de clientes.'
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-tech-dark pt-32 pb-20 min-h-[80vh]">
      <div className="absolute top-20 left-10 w-96 h-96 bg-tech-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs uppercase tracking-widest text-tech-gold font-mono font-bold px-4 py-1.5 border border-tech-gold/20 rounded-full bg-tech-gold/5"
          >
            Blog ValeTech Soluções
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            INSIGHTS DE <span className="text-tech-electric italic text-glow-blue">NEGÓCIOS & TECNOLOGIA</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-tech-gray text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Artigos sobre criação de sites, SEO técnico, automações inteligentes com Inteligência Artificial e sistemas customizados.
          </motion.p>
        </div>

        {/* Placeholder List */}
        <div className="space-y-8">
          {featuredPlaceholders.map((article, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className="glass-panel p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row justify-between gap-6 hover:border-tech-electric/20 transition-all duration-300"
            >
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4 text-xs font-mono">
                  <span className="text-tech-electric font-bold">{article.category}</span>
                  <span className="text-tech-gray/50">•</span>
                  <span className="text-tech-gray">{article.date}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-tech-electric transition-colors">
                  {article.title}
                </h3>
                <p className="text-tech-gray text-sm font-light leading-relaxed">
                  {article.desc}
                </p>
              </div>

              <div className="flex items-end">
                <span className="text-xs font-mono text-tech-gray/40 font-bold uppercase tracking-wider">Publicação em breve</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lead Capture form for future posts */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 glass-panel p-8 md:p-12 rounded-3xl border border-white/5 text-center space-y-6"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold text-white">
            Quer receber estes artigos primeiro?
          </h2>
          <p className="text-tech-gray text-sm font-light max-w-md mx-auto">
            Inscreva-se na nossa newsletter técnica para receber novidades sobre tecnologia, SEO e performance de sites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-1 bg-tech-blue/30 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-tech-electric"
              disabled
            />
            <button 
              className="px-6 py-3 bg-tech-electric hover:bg-tech-electric/90 text-white font-display text-sm font-bold rounded-xl transition-all cursor-not-allowed opacity-80"
              disabled
            >
              INSCREVER
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
