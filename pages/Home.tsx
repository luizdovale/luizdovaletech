import React from 'react';
// @ts-ignore
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import ThreeScene from '../components/ThreeScene';
import { PROJECTS, SKILLS, SOCIAL_LINKS } from '../constants';
import { LogoSquare } from '../components/Logos';

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
  // URL do Avatar configurado:
  // Cabelo curto castanho (hairColor=2c1b18), barba curta (beardLight),
  // Óculos (accessories=prescription01), roupa preta, fundo azul tech
  const avatarUrl = "https://api.dicebear.com/9.x/avataaars/svg?top=shortFlat&accessories=prescription01&accessoriesProbability=100&hairColor=2c1b18&facialHair=beardLight&facialHairColor=2c1b18&clothing=collarAndSweater&clothingColor=262e33&skinColor=edb98a&mouth=smile&eyebrows=default&backgroundColor=1d2946";

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
              <span className="text-tech-gold font-mono text-xs tracking-widest uppercase animate-pulse">Available for Work</span>
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
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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

          {/* Avatar Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center relative"
          >
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Pulsing Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-tech-gold/30 animate-ping opacity-20"></div>
                <div className="absolute inset-[-20px] rounded-full border border-tech-electric/30 animate-[spin_10s_linear_infinite]"></div>
                
                {/* Avatar Container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-tech-blue shadow-[0_0_40px_rgba(26,102,191,0.5)] bg-tech-surface z-10 group cursor-pointer">
                  <img 
                    src={avatarUrl}
                    alt="Avatar Luiz" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Effect on Hover */}
                  <div className="absolute inset-0 bg-tech-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Floating Tech Badge */}
                <motion.div 
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 z-20 bg-tech-dark border border-tech-gold px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
                >
                   <LogoSquare className="w-6 h-6" />
                   <span className="text-tech-gold font-bold font-display text-sm">Flutter Expert</span>
                </motion.div>
             </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-tech-gray/50 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-tech-dark relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="glass-panel p-8 md:p-12 rounded-2xl max-w-4xl mx-auto border-l-4 border-tech-gold"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-6">Sobre Mim</h2>
            <p className="text-tech-gray text-lg leading-relaxed">
              Sou <span className="text-tech-electric font-bold">luizdovaletech</span>, desenvolvedor Web e Flutter. 
              Crio soluções digitais modernas, responsivas e de alta performance. Desenvolvo apps completos, 
              PWAs instaláveis, landing pages e sistemas web personalizados. Meu foco é unir design futurista, 
              tecnologia de ponta e performance para entregar resultados reais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-tech-dark via-tech-blue/10 to-tech-dark pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center font-display text-4xl font-bold text-white mb-16 text-glow"
          >
            Arsenal Tecnológico
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Front-end", skills: SKILLS.frontend, icon: "💻" },
              { title: "Back-end", skills: SKILLS.backend, icon: "⚙️" },
              { title: "Ferramentas", skills: SKILLS.tools, icon: "🛠️" },
            ].map((cat, idx) => (
              <motion.div 
                variants={fadeInUp}
                key={idx} 
                className="group bg-tech-surface/50 backdrop-blur-sm border border-tech-blue/20 p-8 rounded-2xl hover:border-tech-gold/50 transition-all duration-300 hover:-translate-y-2"
              >
                 <div className="text-4xl mb-6">{cat.icon}</div>
                 <h3 className="text-xl font-display font-bold text-white mb-6 border-b border-tech-gray/20 pb-4 group-hover:text-tech-gold transition-colors">
                   {cat.title}
                 </h3>
                 <div className="flex flex-wrap gap-3">
                   {cat.skills.map((skill) => (
                     <span key={skill} className="px-3 py-1 bg-tech-dark border border-tech-blue/30 rounded text-sm text-tech-gray hover:text-white hover:border-tech-electric transition-colors cursor-default">
                       {skill}
                     </span>
                   ))}
                 </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-tech-dark">
        <div className="container mx-auto px-6">
           <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center font-display text-4xl font-bold text-white mb-4"
           >
            Projetos Recentes
          </motion.h2>
          <p className="text-center text-tech-gray mb-16 max-w-2xl mx-auto">
            Uma seleção de aplicações web, mobile e landing pages desenvolvidas com foco em performance e design.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.a 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                key={index}
                className="group relative block h-[300px] perspective-1000"
              >
                <div className="absolute inset-0 bg-tech-surface rounded-2xl border border-tech-blue/20 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_0_30px_rgba(26,102,191,0.3)]">
                  
                  {/* Background Image (Dimmed) */}
                  <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity" style={{ backgroundImage: `url(${project.image})` }}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-tech-dark/80 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 bg-tech-electric/20 text-tech-electric border border-tech-electric/30 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-tech-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-tech-gray text-sm mb-4 border-l-2 border-tech-gold pl-3">
                      {project.desc}
                    </p>
                    <span className="text-tech-electric text-sm font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                      Visualizar Projeto <span>→</span>
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/briefing" className="inline-block px-10 py-4 bg-transparent border border-tech-gold text-tech-gold font-display font-bold tracking-widest rounded hover:bg-tech-gold hover:text-black transition-all hover:shadow-[0_0_20px_rgba(252,227,0,0.5)]">
               SOLICITAR ORÇAMENTO
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-blue/5 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass-panel rounded-3xl p-8 md:p-12 border border-tech-blue/30"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Vamos Conversar?</h2>
            
            <form 
              action={SOCIAL_LINKS.formAction} 
              method="POST" 
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://luizdovaletech-portfolio.vercel.app/#/sucesso" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-tech-gray uppercase tracking-widest">Nome</label>
                  <input required type="text" name="name" className="w-full bg-tech-dark/50 border border-tech-blue/30 rounded p-3 text-white focus:border-tech-gold focus:outline-none transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-tech-gray uppercase tracking-widest">Email</label>
                  <input required type="email" name="email" className="w-full bg-tech-dark/50 border border-tech-blue/30 rounded p-3 text-white focus:border-tech-gold focus:outline-none transition-colors" placeholder="seu@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-tech-gray uppercase tracking-widest">Mensagem</label>
                <textarea required name="message" rows={4} className="w-full bg-tech-dark/50 border border-tech-blue/30 rounded p-3 text-white focus:border-tech-gold focus:outline-none transition-colors" placeholder="Como posso ajudar no seu projeto?"></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-tech-gradient rounded text-white font-bold font-display tracking-widest hover:opacity-90 transition-opacity shadow-lg">
                ENVIAR MENSAGEM
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;