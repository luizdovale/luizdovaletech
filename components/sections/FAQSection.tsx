import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../../constants';
import SectionHeader from '../SectionHeader';

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      {/* Dados estruturados para o Google mostrar as perguntas nos resultados */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="container mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeader
          align="center"
          className="mb-14"
          eyebrow="Dúvidas"
          title="Perguntas"
          highlight="frequentes."
          lead="As dúvidas mais comuns de quem está pensando em contratar. Não achou a sua? É só me chamar."
        />

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className={`overflow-hidden rounded-card border transition-colors duration-300 ${
                  isOpen ? 'border-accent/30 bg-tint/40' : 'border-line bg-white hover:border-ink/15'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 p-6 text-left sm:p-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-ink sm:text-lg">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? 'rotate-180 border-accent bg-accent text-white' : 'border-line bg-white text-ink'
                    }`}
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 text-[15px] leading-relaxed text-muted sm:px-7 sm:pb-7 sm:text-base">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
