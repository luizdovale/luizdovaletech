import React from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  /** Segunda parte do título, em cinza (ex.: "ajudar o seu negócio."). */
  highlight?: string;
  lead?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

// A fonte dos títulos deixa o ponto final um pouco "solto" depois de certas letras (ex.: "negócio ."); este ajuste cola o ponto na palavra.
const withTightPeriod = (text: string) =>
  text.endsWith('.') ? (
    <>
      {text.slice(0, -1)}
      <span className="-ml-[0.09em]">.</span>
    </>
  ) : (
    text
  );

/** Cabeçalho padrão das seções: rótulo em azul, título grande e frase de apoio. */
const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, highlight, lead, align = 'left', className = '' }) => (
  <div className={`max-w-3xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
    <span className="eyebrow block">{eyebrow}</span>
    <h2 className="section-title">
      {title}
      {highlight && <> <span className="text-muted">{withTightPeriod(highlight)}</span></>}
    </h2>
    {lead && <p className="section-lead">{lead}</p>}
  </div>
);

export default SectionHeader;
