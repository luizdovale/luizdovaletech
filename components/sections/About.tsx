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
                Transformar ideias em soluções digitais eficientes é o que move o meu trabalho. À frente da <span className="text-white font-bold">ValeTech Soluções</span>, desenvolvo <span className="text-white font-medium">sites institucionais, landing pages, sistemas web e aplicações personalizadas</span> que ajudam empresas a fortalecer sua presença digital, conquistar novos clientes e otimizar seus processos.
              </p>

              <p className="text-tech-gray text-lg md:text-xl font-light leading-relaxed">
                Com experiência em desenvolvimento <span className="text-white font-medium">Full Stack</span>, cada projeto é planejado de forma estratégica para unir design moderno, alta performance, segurança, responsividade e excelente experiência do usuário. Mais do que criar sites, meu objetivo é entregar ferramentas que gerem valor real para o negócio e contribuam para o crescimento dos meus clientes.
              </p>

              <p className="text-tech-gray text-lg md:text-xl font-light leading-relaxed">
                Acredito que cada empresa possui necessidades únicas. Por isso, trabalho de forma próxima ao cliente, entendendo seus objetivos e transformando suas ideias em soluções personalizadas, com comunicação transparente, atenção aos detalhes e foco total em resultados.
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
