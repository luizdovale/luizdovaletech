import React from 'react';
import { motion } from 'framer-motion';
import { WHY_VALETECH } from '../../constants';

const WhyValetech: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-valetech" className="py-32 relative overflow-hidden bg-tech-dark/50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-tech-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tighter">
            POR QUE ESCOLHER A <span className="text-tech-gold">VALETECH</span>?
          </h2>
          <p className="text-tech-gray text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Diferenciais pensados para entregar o máximo de retorno sobre o seu investimento em tecnologia.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {WHY_VALETECH.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative h-full"
            >
              {/* Border glow decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-gold/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative glass-panel p-6 rounded-2xl border border-white/5 hover:border-tech-gold/20 hover:bg-tech-blue/20 transition-all duration-500 h-full flex flex-col items-center text-center justify-start">
                <span className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 select-none">
                  {item.icon}
                </span>
                <h3 className="font-display text-base font-bold text-white mb-2 tracking-tight group-hover:text-tech-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-tech-gray text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyValetech;
