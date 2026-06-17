import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SKILLS, WHY_VALETECH } from '../constants';

const Sobre: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // BreadcrumbList and Person Structured Data JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Página Inicial",
        "item": "https://luizdovaletech.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sobre",
        "item": "https://luizdovaletech.vercel.app/#/sobre"
      }
    ]
  };

  const processSteps = [
    { num: '01', title: 'Briefing e Alinhamento', desc: 'Entendimento profundo do seu modelo de negócio, público-alvo e necessidades técnicas.' },
    { num: '02', title: 'Design & Prototipagem', desc: 'Criação de interfaces visuais modernas e funcionais com foco na melhor experiência de usuário.' },
    { num: '03', title: 'Desenvolvimento Ágil', desc: 'Codificação limpa, escalável e segura usando as tecnologias web mais modernas e eficientes.' },
    { num: '04', title: 'Testes & Garantia', desc: 'Verificação minuciosa de performance, compatibilidade mobile e segurança do projeto.' },
    { num: '05', title: 'Lançamento e Suporte', desc: 'Publicação profissional em servidores rápidos com acompanhamento e suporte contínuo.' }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-tech-dark pt-32 pb-20">
      {/* Dynamic Schema Injection */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Decorative Lights */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-tech-electric/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-tech-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        {/* Header Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center md:text-left space-y-6 mb-24"
        >
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter"
          >
            A VALETECH <span className="text-tech-electric italic text-glow-blue">SOLUÇÕES</span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-tech-gray text-xl md:text-2xl font-light max-w-3xl leading-relaxed"
          >
            Focados em criar valor de negócios através de tecnologias digitais de ponta.
          </motion.p>
        </motion.div>

        {/* História & Apresentação */}
        <div className="grid md:grid-cols-12 gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
              Transformando ideias em ferramentas de crescimento
            </h2>
            <div className="w-16 h-1 bg-tech-gold rounded-full"></div>
            <p className="text-tech-gray text-lg font-light leading-relaxed">
              Fundada por <strong>Luiz Fernando</strong>, desenvolvedor Full Stack com ampla experiência no ecossistema web, a ValeTech Soluções nasceu com a missão de aproximar pequenas, médias e grandes empresas da excelência tecnológica.
            </p>
            <p className="text-tech-gray text-lg font-light leading-relaxed">
              Acreditamos que o código é apenas o meio para atingir um fim estratégico: gerar mais vendas, otimizar fluxos de trabalho cotidianos, reter clientes e estabelecer uma presença de autoridade online.
            </p>
            <p className="text-tech-gray text-lg font-light leading-relaxed">
              Trabalhamos desenvolvendo desde Landing Pages de altíssima conversão até Sistemas Web complexos como ERPs e CRMs customizados. Cada linha de código é escrita sob medida, garantindo que o seu sistema atenda perfeitamente aos processos da sua empresa.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel p-8 rounded-3xl border border-white/5 space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-tech-blue border border-tech-electric/30">
                <img 
                  src="/avatar.png" 
                  alt="Luiz Fernando - Fundador da ValeTech"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold text-tech-electric">LF</span>';
                    e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                  }}
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Luiz Fernando</h3>
                <span className="text-xs text-tech-gray">Fundador & Diretor de Tecnologia</span>
              </div>
            </div>
            <blockquote className="text-tech-gray/80 text-sm font-light italic leading-relaxed">
              "Para mim, tecnologia premium é aquela que soluciona problemas reais e gera lucros para a sua empresa de forma elegante, segura e simples."
            </blockquote>
          </motion.div>
        </div>

        {/* Processo de Trabalho */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="font-display text-3xl md:text-5xl font-black text-white tracking-tighter">
              NOSSO <span className="text-tech-electric">PROCESSO</span> DE TRABALHO
            </h2>
            <p className="text-tech-gray text-lg max-w-xl mx-auto font-light leading-relaxed">
              Como garantimos qualidade de ponta a ponta em cada projeto entregue.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4 hover:border-tech-electric/20 transition-all duration-300"
              >
                <span className="font-display text-3xl font-black text-tech-electric/40 block">{step.num}</span>
                <h3 className="font-display text-base font-bold text-white tracking-tight">{step.title}</h3>
                <p className="text-tech-gray text-xs font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stack Técnico e Diferenciais */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-32">
          {/* Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Tecnologias Utilizadas
            </h2>
            <p className="text-tech-gray text-base font-light leading-relaxed">
              Selecionamos o arsenal tecnológico ideal para cada tipo de solução, focando sempre em performance de carregamento, facilidade de manutenção e segurança de ponta.
            </p>
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-tech-electric font-bold block mb-2">Frontend</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frontend.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-tech-gray text-xs rounded-lg border border-white/5">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-tech-gold font-bold block mb-2">Backend & Cloud</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.backend.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-tech-gray text-xs rounded-lg border border-white/5">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Diferenciais */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Nossos Diferenciais
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {WHY_VALETECH.slice(0, 4).map((diff, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 space-y-2">
                  <span className="text-2xl">{diff.icon}</span>
                  <h3 className="font-display text-sm font-bold text-white">{diff.title}</h3>
                  <p className="text-tech-gray text-xs font-light leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-10 md:p-16 rounded-3xl border border-tech-electric/20 relative overflow-hidden text-center space-y-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-tech-electric/5 to-transparent"></div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-white relative z-10 leading-tight">
            Pronto para evoluir o nível digital do seu negócio?
          </h2>
          <p className="text-tech-gray text-lg max-w-xl mx-auto relative z-10 font-light leading-relaxed">
            Fale conosco hoje mesmo e agende uma consultoria gratuita para planejar as melhores soluções digitais sob medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 max-w-md mx-auto">
            <Link 
              to="/briefing" 
              className="flex-1 px-8 py-4 bg-tech-electric hover:bg-tech-electric/90 text-white font-bold font-display tracking-widest rounded-xl transition-all shadow-xl"
            >
              SOLICITAR ORÇAMENTO
            </Link>
            <a 
              href="https://wa.me/5512974033027" 
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold font-display tracking-widest rounded-xl transition-all shadow-xl"
            >
              WHATSAPP
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Sobre;
