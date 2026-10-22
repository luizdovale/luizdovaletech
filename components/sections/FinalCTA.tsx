import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../constants';
import { ArrowRightIcon, WhatsAppIcon } from '../Icons';

const GUARANTEES = [
  { title: 'Até 24h', desc: 'Para a primeira resposta' },
  { title: 'Direto comigo', desc: 'Sem intermediários' },
  { title: 'Sigilo', desc: 'Seu projeto e seus dados protegidos' },
];

const FinalCTA: React.FC = () => {
  return (
    <section className="bg-white pb-24 md:pb-32">
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-16 text-center sm:px-12 md:py-20">
          {/* tom azul-claro no fundo do cartão */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_0%,rgb(var(--c-tint))_0%,transparent_75%)]"
          />

          <div className="relative space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-5"
            >
              <span className="eyebrow block">Próximo passo</span>
              <h2 className="mx-auto max-w-3xl font-display text-[2rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
                Vamos conversar <span className="text-muted">sobre o seu projeto?</span>
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Me conte o que você precisa, mesmo que ainda esteja só na ideia. Eu respondo em até 24 horas com o melhor caminho para o seu caso.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mx-auto flex max-w-lg flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary w-full sm:w-auto">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Falar no WhatsApp
              </a>
              <Link to="/briefing" className="btn btn-secondary w-full sm:w-auto">
                Pedir orçamento
                <ArrowRightIcon />
              </Link>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mx-auto grid max-w-3xl gap-6 border-t border-line pt-10 sm:grid-cols-3"
            >
              {GUARANTEES.map((item) => (
                <div key={item.title}>
                  <dt className="font-display text-base font-bold text-ink">{item.title}</dt>
                  <dd className="mt-0.5 text-sm text-muted">{item.desc}</dd>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
