import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { PRINCIPLES, TOOLS, SOCIAL_LINKS, BRAND_INFO } from '../constants';
import PageMeta from '../components/PageMeta';
import FounderPhoto from '../components/FounderPhoto';

const Sobre: React.FC = () => {
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
        "item": "https://www.valetechsolucoes.com.br/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sobre mim",
        "item": "https://www.valetechsolucoes.com.br/sobre"
      }
    ]
  };

  return (
    <div className="relative w-full overflow-hidden bg-black pt-28 pb-28 min-h-screen">
      <PageMeta
        title="Sobre mim — Luiz Fernando, desenvolvedor | ValeTech Soluções"
        description="Sou o Luiz Fernando, desenvolvedor de software e fundador da ValeTech. Ajudo empresas e profissionais a resolver problemas do dia a dia com sistemas, sites e aplicativos sob medida."
        path="/sobre"
      />

      {/* Schema.org Breadcrumbs */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Luz ambiente sutil */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 max-w-6xl">

        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-8 border-b border-white/[0.08] pb-16"
        >
          <motion.div variants={fadeInUp} className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              Sobre mim · ValeTech Soluções
            </span>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
              Oi, eu sou o <span className="text-zinc-400 font-light">{BRAND_INFO.founder}.</span>
            </h1>
            <p className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed">
              Desenvolvedor de software e fundador da ValeTech. Ajudo empresas e profissionais a resolver problemas do dia a dia com sistemas, sites e aplicativos feitos sob medida.
            </p>
          </motion.div>

          <div className="hidden lg:block">
            <img
              src="/assets/logo hero.png"
              alt=""
              aria-hidden="true"
              className="h-36 w-auto object-contain select-none brightness-0 invert opacity-70"
              draggable={false}
            />
          </div>
        </motion.div>

        {/* História & cartão pessoal */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6 text-zinc-400 text-base sm:text-lg font-light leading-relaxed"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tecnologia que resolve problemas de verdade
            </h2>
            <div className="w-12 h-[2px] bg-white"></div>
            <p>
              Muita empresa e muito profissional perdem tempo e dinheiro com planilhas, processos manuais e ferramentas que não foram feitas para o jeito deles de trabalhar. A <strong className="text-white font-semibold">ValeTech</strong> existe para mudar isso.
            </p>
            <p>
              Por isso eu não vendo modelos prontos. Escuto o seu problema, entendo como o seu negócio funciona e construo a solução certa: um sistema de gestão, um site que traz clientes, um aplicativo ou uma automação que tira as tarefas repetitivas do seu dia.
            </p>
            <p>
              Você fala direto comigo, do primeiro contato até a entrega, e depois dela também, para suporte e melhorias.
            </p>
          </motion.div>

          {/* Cartão pessoal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-5 glass-panel p-8 rounded-2xl border border-white/[0.08] space-y-6"
          >
            <div className="flex items-center gap-4">
              <FounderPhoto className="w-16 h-16 rounded-full text-lg shrink-0" />
              <div>
                <h3 className="font-display text-lg font-bold text-white">{BRAND_INFO.founder}</h3>
                <span className="text-xs text-zinc-400 font-sans">Desenvolvedor de software · Fundador da ValeTech</span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm font-light leading-relaxed italic">
              "Boa tecnologia é a que o seu dia a dia realmente usa, e que resolve um problema de verdade."
            </p>
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>{BRAND_INFO.location}</span>
              <span className="flex items-center gap-4">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-white hover:underline">LinkedIn</a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-white hover:underline">GitHub</a>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Como eu trabalho */}
        <div className="mb-32">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500 block font-semibold">
              Como eu trabalho
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
              O que você pode esperar de mim
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-3"
              >
                <span className="text-xs font-mono text-zinc-500 block font-semibold">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-lg font-bold text-white tracking-tight">{item.title}</h3>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ferramentas (para quem é da área) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-2xl space-y-5 mb-32"
        >
          <h3 className="font-display text-xl font-bold text-white">Ferramentas que eu uso</h3>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Para quem é da área, ou só tem curiosidade: estas são as tecnologias por trás dos meus projetos. São ferramentas consolidadas, o que facilita a manutenção no futuro.
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span key={tool} className="px-3 py-1.5 bg-white/[0.03] text-zinc-300 text-xs font-mono rounded-lg border border-white/[0.08]">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Chamada final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-10 md:p-16 rounded-3xl text-center space-y-8 max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Vamos conversar sobre o seu projeto?
          </h2>
          <p className="text-zinc-400 text-base font-light max-w-xl mx-auto">
            Me conte o que você precisa. Eu respondo em até 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex-1 px-8 py-4 bg-white text-black font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center"
            >
              Falar no WhatsApp
            </a>
            <Link
              to="/briefing"
              className="flex-1 px-8 py-4 bg-black/60 text-white border border-white/20 hover:border-white/40 font-semibold text-xs tracking-wider uppercase rounded-full transition-all duration-300 text-center"
            >
              Pedir orçamento
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Sobre;
