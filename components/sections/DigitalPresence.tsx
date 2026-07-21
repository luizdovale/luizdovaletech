import React from 'react';
import { motion } from 'framer-motion';

const DigitalPresence: React.FC = () => {
  const cards = [
    {
      icon: "🌐",
      title: "Credibilidade Automática",
      desc: "Não ter um site hoje gera desconfiança. Uma página profissional mostra que seu negócio é sério e estabelecido no mercado."
    },
    {
      icon: "🧲",
      title: "Captação de Clientes 24/7",
      desc: "Um site ou landing page não dorme. É um 'vendedor' trabalhando o tempo todo para capturar leads enquanto você descansa."
    },
    {
      icon: "🎯",
      title: "Destaque da Concorrência",
      desc: "Se o seu cliente procurar pelo seu serviço no Google e não te achar, ele fechará com o concorrente. Esteja onde ele procura."
    },
    {
      icon: "🏰",
      title: "Seu Terreno Próprio",
      desc: "Redes sociais mudam algoritmos o tempo todo (terreno alugado). Um site é a SUA casa na internet, onde você dita as regras."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="presenca-digital" className="py-24 relative overflow-hidden bg-tech-dark/50">
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tech-electric/10 border border-tech-electric/20 text-tech-electric text-sm font-bold tracking-wide uppercase"
          >
            Realidade do Mercado
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Se a sua empresa não está no Google, <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-gold to-yellow-400">ela não existe.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-tech-gray text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
          >
            Depender apenas de boca a boca ou do Instagram já não é suficiente. Veja por que ter um site ou landing page é crucial hoje em dia:
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="p-8 rounded-[24px] bg-[#0F172A]/40 border border-white/5 hover:border-tech-electric/30 hover:bg-[#1E293B]/40 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-tech-electric/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-tech-electric/20 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-tech-gray/80 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalPresence;
