import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Lado do Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 text-center"
          >
            <div className="space-y-6 flex flex-col items-center">
              <h2 className="font-display text-4xl md:text-5xl font-black text-white italic leading-none">
                Sobre <span className="text-tech-electric underline decoration-2 underline-offset-8">Mim</span>.
              </h2>
              <div className="w-20 h-2 bg-tech-gold rounded-full"></div>
            </div>

            <div className="space-y-8">
              <p className="text-tech-gray text-lg md:text-xl font-light leading-relaxed">
                Sou <span className="text-white font-medium">Luiz Fernando</span>, fundador da <span className="text-white font-bold">ValeTech Soluções</span> e desenvolvedor Full Stack especializado na criação de sites institucionais, sistemas web e soluções digitais personalizadas.
              </p>

              <p className="text-tech-gray text-lg md:text-xl font-light leading-relaxed">
                Meu objetivo é transformar ideias em ferramentas digitais que ajudem empresas a <span className="text-white font-medium">vender mais, otimizar processos e fortalecer sua presença online</span>.
              </p>

              <p className="text-tech-gray text-lg md:text-xl font-light leading-relaxed">
                Trabalho desenvolvendo projetos sob medida, sempre priorizando desempenho, usabilidade, segurança e resultados reais para cada cliente. Cada projeto é desenvolvido com atenção aos detalhes, comunicação transparente e foco total nas necessidades do negócio.
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-center">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-tech-electric"></div>
                  <span className="text-white/80 text-sm font-bold tracking-tight">Criação de Sites & Sistemas</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-tech-gold"></div>
                  <span className="text-white/80 text-sm font-bold tracking-tight">Desenvolvedor Full Stack</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
