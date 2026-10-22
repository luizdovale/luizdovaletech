import React from 'react';
import { motion } from 'framer-motion';
// @ts-ignore
import { Link } from 'react-router-dom';
import { PRINCIPLES, TOOLS, SOCIAL_LINKS, BRAND_INFO } from '../constants';
import PageMeta from '../components/PageMeta';
import FounderPhoto from '../components/FounderPhoto';
import { WhatsAppIcon } from '../components/Icons';

const Sobre: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Página Inicial', item: 'https://www.valetechsolucoes.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Sobre mim', item: 'https://www.valetechsolucoes.com.br/sobre' },
    ],
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white pb-24 pt-32 sm:pt-36">
      <PageMeta
        title="Sobre mim — Luiz Fernando, desenvolvedor | ValeTech Soluções"
        description="Sou o Luiz Fernando, desenvolvedor de software e fundador da ValeTech. Ajudo empresas e profissionais a resolver problemas do dia a dia com sistemas, sites e aplicativos sob medida."
        path="/sobre"
      />

      {/* Breadcrumbs para o Google */}
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>

      {/* tom azul-claro no canto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_88%_0%,rgb(var(--c-tint))_0%,transparent_70%)]"
      />

      <div className="container relative mx-auto max-w-6xl px-6 md:px-8">
        {/* Cabeçalho */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-20 border-b border-line pb-14"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl space-y-5">
            <span className="eyebrow block">Sobre mim · ValeTech Soluções</span>
            <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-6xl">
              Oi, eu sou o{' '}
              <span className="text-accent">
                {BRAND_INFO.founder}
                <span className="-ml-[0.09em]">.</span>
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted sm:text-xl">
              Desenvolvedor de software e fundador da ValeTech. Ajudo empresas e profissionais a resolver problemas do dia a dia com sistemas, sites e aplicativos feitos sob medida.
            </p>
          </motion.div>
        </motion.div>

        {/* História e cartão pessoal */}
        <div className="mb-28 grid items-start gap-12 md:grid-cols-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-base leading-relaxed text-muted sm:text-lg md:col-span-7"
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Tecnologia que resolve problemas de verdade
            </h2>
            <div className="h-1 w-12 rounded-full bg-accent" />
            <p>
              Muita empresa e muito profissional perdem tempo e dinheiro com planilhas, processos manuais e ferramentas que não foram feitas para o jeito deles de trabalhar. A <strong className="font-bold text-ink">ValeTech</strong> existe para mudar isso.
            </p>
            <p>
              Por isso eu não vendo modelos prontos. Escuto o seu problema, entendo como o seu negócio funciona e construo a solução certa: um sistema de gestão, um site que traz clientes, um aplicativo ou uma automação que tira as tarefas repetitivas do seu dia.
            </p>
            <p>Você fala direto comigo, do primeiro contato até a entrega, e depois dela também, para suporte e melhorias.</p>
          </motion.div>

          {/* Cartão pessoal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="card space-y-6 p-7 md:col-span-5"
          >
            <div className="flex items-center gap-4">
              <FounderPhoto className="h-16 w-16 shrink-0 rounded-full text-lg" />
              <div>
                <h3 className="font-display text-lg font-extrabold text-ink">{BRAND_INFO.founder}</h3>
                <span className="text-sm text-muted">Desenvolvedor de software · Fundador da ValeTech</span>
              </div>
            </div>
            <p className="text-[15px] italic leading-relaxed text-muted">
              "Boa tecnologia é a que o seu dia a dia realmente usa, e que resolve um problema de verdade."
            </p>
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-sm">
              <span className="text-muted">{BRAND_INFO.location}</span>
              <span className="flex items-center gap-5">
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="font-bold text-accent hover:underline">
                  LinkedIn
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="font-bold text-accent hover:underline">
                  GitHub
                </a>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Como eu trabalho */}
        <div className="mb-28">
          <div className="mb-14 space-y-4 text-center">
            <span className="eyebrow block">Como eu trabalho</span>
            <h2 className="section-title">O que você pode esperar de mim</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="card card-hover space-y-3 p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-tint font-display text-sm font-extrabold text-accent">
                  {idx + 1}
                </span>
                <h3 className="font-display text-lg font-extrabold tracking-tight text-ink">{item.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ferramentas (para quem é da área) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-28 space-y-5 rounded-[24px] bg-surface p-7 sm:p-9"
        >
          <h3 className="font-display text-xl font-extrabold text-ink">Ferramentas que eu uso</h3>
          <p className="max-w-3xl text-[15px] leading-relaxed text-muted">
            Para quem é da área, ou só tem curiosidade: estas são as tecnologias por trás dos meus projetos. São ferramentas consolidadas, o que facilita a manutenção no futuro.
          </p>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span key={tool} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium text-ink">
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
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-line bg-surface px-6 py-14 text-center sm:px-12 md:py-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_50%_0%,rgb(var(--c-tint))_0%,transparent_75%)]"
          />
          <div className="relative space-y-6">
            <h2 className="section-title">Vamos conversar sobre o seu projeto?</h2>
            <p className="mx-auto max-w-xl text-base text-muted sm:text-lg">Me conte o que você precisa. Eu respondo em até 24 horas.</p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-3 sm:flex-row">
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary flex-1">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Falar no WhatsApp
              </a>
              <Link to="/briefing" className="btn btn-secondary flex-1">
                Pedir orçamento
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sobre;
