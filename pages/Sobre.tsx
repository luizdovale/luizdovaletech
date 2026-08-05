import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SKILLS, WHY_VALETECH, SOCIAL_LINKS, BRAND_INFO } from '../constants';
import { LogoHero } from '../components/Logos';

const Sobre: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

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
        "name": "Sobre a ValeTech",
        "item": "https://luizdovaletech.vercel.app/#/sobre"
      }
    ]
  };

  const processSteps = [
    { num: '01', title: 'Diagnóstico & Arquitetura', desc: 'Análise aprofundada dos objetivos de negócio, requisitos técnicos e jornada dos usuários.' },
    { num: '02', title: 'Design & UX de Alta Fidelidade', desc: 'Prototipação de interfaces limpas, minimalistas e otimizadas para retenção e conversão.' },
    { num: '03', title: 'Engenharia de Software', desc: 'Desenvolvimento ágil com código limpo, tipagem estrita e segurança em nível de produção.' },
    { num: '04', title: 'Otimização & QA', desc: 'Testes de carga, validação de Core Web Vitals e auditoria completa de segurança.' },
    { num: '05', title: 'Implantação & Escala', desc: 'Publicação em infraestrutura global em nuvem (Vercel, AWS) com monitoramento ativo.' }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black pt-20 pb-28 min-h-screen">
      {/* Schema.org Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Luz ambiente sutil */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-6xl">
        
        {/* Header Hero */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-6 mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-white/[0.08] pb-16"
        >
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              Institucional · ValeTech
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              ValeTech — <span className="text-zinc-400 font-light">Tecnologia & Inovação</span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed">
              Criamos soluções digitais inteligentes, sistemas personalizados e experiências tecnológicas de alto padrão para empresas que querem evoluir.
            </p>
          </div>

          <div className="hidden lg:block">
            <LogoHero className="scale-75 origin-right opacity-80" />
          </div>
        </motion.div>

        {/* Manifesto & Visão */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6 text-zinc-400 text-base sm:text-lg font-light leading-relaxed"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Excelência técnica aliada a visão de negócios
            </h2>
            <div className="w-12 h-[2px] bg-white"></div>
            <p>
              A <strong className="text-white font-semibold">{BRAND_INFO.fullName}</strong> foi concebida para preencher a lacuna entre design sofisticado e engenharia de software de missão crítica.
            </p>
            <p>
              Em um mercado saturado de soluções genéricas e templates descartáveis, nosso compromisso é construir ferramentas proprietárias que conferem às empresas uma vantagem competitiva real e duradoura.
            </p>
            <p>
              Desde sistemas corporativos complexos (ERPs, CRMs e painéis administrativos) até plataformas web e aplicativos mobile, cuidamos de cada camada do desenvolvimento para entregar segurança, velocidade e escalabilidade incomparáveis.
            </p>
          </motion.div>

          {/* Card do Fundador */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 glass-panel p-8 rounded-2xl border border-white/[0.08] space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-neutral-900 border border-white/20 flex items-center justify-center text-white font-display font-bold text-lg">
                LF
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">Luiz Fernando</h3>
                <span className="text-xs text-zinc-400 font-mono">Fundador & Arquiteto de Software</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed italic">
              "Tecnologia premium não é apenas código elegante: é a capacidade de resolver problemas operacionais complexos e gerar lucro consistente para o seu negócio."
            </p>
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>ValeTech · Brasil</span>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-white hover:underline">LinkedIn →</a>
            </div>
          </motion.div>
        </div>

        {/* Metodologia de Entrega */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              Metodologia Rigorosa
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Como desenvolvemos cada projeto
            </h2>
            <p className="text-zinc-400 text-base font-light max-w-xl mx-auto">
              Processo estruturado e transparente para garantir previsibilidade de prazos e excelência no resultado.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between space-y-6"
              >
                <span className="text-xs font-mono text-zinc-500 block font-semibold">
                  {step.num}
                </span>
                <div className="space-y-2">
                  <h3 className="font-display text-base font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{step.desc}</p>
                </div>
                <div className="w-full h-[1px] bg-white/[0.06]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pilares Técnicos */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl space-y-6"
          >
            <h3 className="font-display text-xl font-bold text-white">Stack de Engenharia</h3>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Utilizamos tecnologias consolidadas que garantem estabilidade a longo prazo e facilidade de manutenção para a sua equipe.
            </p>
            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">Frontend & Interfaces</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.frontend.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white/[0.03] text-zinc-300 text-xs rounded-md border border-white/[0.08]">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">Backend & Cloud</span>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.backend.map((item, i) => (
                    <span key={i} className="px-2.5 py-1 bg-white/[0.03] text-zinc-300 text-xs rounded-md border border-white/[0.08]">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="glass-panel p-8 rounded-2xl space-y-6"
          >
            <h3 className="font-display text-xl font-bold text-white">Diferenciais ValeTech</h3>
            <div className="space-y-4">
              {WHY_VALETECH.slice(0, 3).map((diff, idx) => (
                <div key={idx} className="border-b border-white/[0.06] pb-4 last:border-0 last:pb-0 space-y-1">
                  <h4 className="font-display text-sm font-bold text-white">{diff.title}</h4>
                  <p className="text-zinc-400 text-xs font-light leading-relaxed">{diff.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Final CTA da Página Sobre */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 md:p-16 rounded-3xl text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Vamos planejar a próxima fase digital da sua empresa?
          </h2>
          <p className="text-zinc-400 text-base font-light max-w-xl mx-auto">
            Envie as especificações do seu projeto para uma proposta técnica sob medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link 
              to="/briefing" 
              className="flex-1 px-8 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center"
            >
              Solicitar Orçamento
            </Link>
            <a 
              href={SOCIAL_LINKS.whatsapp}
              target="_blank" 
              rel="noreferrer" 
              className="flex-1 px-8 py-4 bg-black/60 text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 text-center"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Sobre;
