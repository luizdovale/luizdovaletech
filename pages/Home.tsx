import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import { PROJECTS, SKILLS, SOCIAL_LINKS } from '../constants';

const motion = m as any;

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Home: React.FC = () => {

  // 🔥 AVATAR ATUALIZADO
  const avatarUrl =
    "https://api.dicebear.com/9.x/avataaars/svg?seed=LuizTech&skinColor=f8d9ce&top=shortFlat&hairColor=4a312c&facialHair=beardLight&facialHairColor=4a312c&accessories=prescription02&accessoriesColor=000000&eyes=default&eyebrows=default&mouth=smile&clothing=collarAndSweater&clothingColor=262e33";

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-0 overflow-hidden">
        <ThreeScene />

        <div className="container mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center md:text-left order-2 md:order-1"
          >

            <motion.div variants={fadeInUp} className="inline-block px-4 py-1 mb-4 border border-tech-gold/50 rounded-full bg-tech-gold/10 backdrop-blur-sm">
              <span className="text-tech-gold font-mono text-xs tracking-widest uppercase animate-pulse">
                Available for Work
              </span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="block text-white">luizdovale<span className="text-tech-electric">tech</span></span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-tech-gray text-2xl md:text-4xl mt-2 font-light">
                Dev Web & <span className="text-tech-electric text-glow-blue">Flutter</span>
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-tech-gray text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0 font-light">
              Transformo ideias em aplicativos, sites e sistemas modernos, rápidos e eficientes.  
              Especialista em performance e experiência do usuário.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">

              <Link
                to="/briefing"
                className="group relative px-8 py-4 bg-tech-gradient rounded-lg font-bold font-display tracking-wider text-white overflow-hidden shadow-[0_0_20px_rgba(26,102,191,0.4)] hover:shadow-[0_0_30px_rgba(252,227,0,0.4)] transition-all"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  COMEÇAR PROJETO
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              <button
                onClick={scrollToProjects}
                className="px-8 py-4 border border-tech-blue/50 rounded-lg font-display text-tech-gray hover:text-white hover:border-tech-gold transition-colors bg-tech-surface/50 backdrop-blur-sm"
              >
                VER PROJETOS
              </button>

            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">

              <div className="absolute inset-0 rounded-full border-2 border-tech-gold/30 animate-ping opacity-20"></div>
              <div className="absolute inset-[-20px] rounded-full border border-tech-electric/30 animate-[spin_10s_linear_infinite]"></div>

              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-tech-blue shadow-[0_0_40px_rgba(26,102,191,0.5)] bg-tech-surface z-10 group cursor-pointer">
                <img
                  src={avatarUrl}
                  alt="Avatar Luiz"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-tech-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-tech-gray"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-tech-dark relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-tech-blue/30 shadow-2xl max-w-4xl mx-auto relative overflow-hidden">

            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-tech-electric/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-tech-gold/10 to-transparent"></div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 relative z-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-tech-gold rounded-full"></span>
              Sobre Mim
            </h2>

            <p className="text-tech-gray text-lg leading-relaxed relative z-10 text-justify">
              Meu nome é Luiz Fernando e atuo como desenvolvedor Web & Flutter, especializado na criação de aplicações modernas e escaláveis.  
              Trabalho com PWAs instaláveis, interfaces de alta performance e sistemas construídos sob medida para cada necessidade.  
              Meu foco é entregar soluções estáveis, rápidas e preparadas para crescer junto com o seu negócio — sempre unindo design, tecnologia e experiência do usuário.
            </p>

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-white mb-16 text-glow">
            Stack Tecnológico
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {/* FRONTEND */}
            <motion.div whileHover={{ y: -10 }} className="glass-panel p-8 rounded-xl border-t-2 border-tech-electric hover:border-tech-gold transition-colors">
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-tech-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Front-end & Mobile
              </h3>

              <div className="flex flex-wrap gap-3">
                {SKILLS.frontend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-tech-blue/30 text-tech-gray text-sm rounded border border-tech-blue/50 hover:text-white hover:border-tech-gold transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* BACKEND */}
            <motion.div whileHover={{ y: -10 }} className="glass-panel p-8 rounded-xl border-t-2 border-tech-electric hover:border-tech-gold transition-colors">
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-tech-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Back-end & Cloud
              </h3>

              <div className="flex flex-wrap gap-3">
                {SKILLS.backend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-tech-blue/30 text-tech-gray text-sm rounded border border-tech-blue/50 hover:text-white hover:border-tech-gold transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* TOOLS */}
            <motion.div whileHover={{ y: -10 }} className="glass-panel p-8 rounded-xl border-t-2 border-tech-electric hover:border-tech-gold transition-colors">
              <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-tech-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                Ferramentas
              </h3>

              <div className="flex flex-wrap gap-3">
                {SKILLS.tools.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-tech-blue/30 text-tech-gray text-sm rounded border border-tech-blue/50 hover:text-white hover:border-tech-gold transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-20 bg-tech-dark relative">
        <div className="container mx-auto px-4 md:px-6">

          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                Projetos Recentes
              </h2>
              <p className="text-tech-gray">
                Uma seleção de aplicações de alta performance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group block bg-tech-surface rounded-xl overflow-hidden border border-tech-blue/30 hover:border-tech-gold/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(26,102,191,0.3)]"
              >
                <div className="h-48 bg-tech-blue/20 relative overflow-hidden group-hover:bg-tech-blue/30 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-surface to-transparent"></div>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-tech-gold transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-tech-electric font-medium uppercase tracking-wider">
                        {project.subtitle}
                      </p>
                    </div>

                    <svg className="w-5 h-5 text-tech-gray group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>

                  <p className="text-tech-gray text-sm mb-6 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-xs px-2 py-1 rounded bg-tech-blue/20 text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/briefing"
              className="inline-block px-8 py-4 border border-tech-gold text-tech-gold font-bold font-display tracking-widest hover:bg-tech-gold hover:text-tech-dark transition-all rounded"
            >
              INICIAR MEU PROJETO
            </Link>
          </div>

        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-gradient opacity-10"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Pronto para elevar seu negócio?
          </h2>

          <p className="text-tech-gray text-lg mb-8 max-w-2xl mx-auto">
            Vamos criar algo extraordinário juntos. Solicite um orçamento ou entre em contato direto.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-green-600 text-white font-bold rounded shadow-lg hover:bg-green-500 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.466c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.03-.967-.272-.297-.471-.446-.966-.446-.495 0-.867.198-1.313.693-.446.495-1.707 1.671-1.707 4.071s1.746 4.716 1.993 5.063c.248.347 3.438 5.253 8.327 7.366 4.889 2.113 4.889 1.412 5.78 1.336.891-.075 2.894-1.19 3.316-2.338.422-1.149.422-2.133.297-2.338z" />
              </svg>
              Falar no WhatsApp
            </a>

            <Link
              to="/briefing"
              className="px-8 py-4 bg-tech-surface border border-tech-blue text-white font-bold rounded hover:bg-tech-blue/30 transition-all"
            >
              Preencher Briefing
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;