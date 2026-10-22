import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * Logo oficial da ValeTech para fundo claro (public/assets/logo-fundo-claro.png, proporção ~6,8:1).
 * Defina a altura por className (ex.: "h-7"); a largura acompanha.
 */
export const LogoMain: React.FC<LogoProps> = ({ className = 'h-7' }) => (
  <img
    src="/assets/logo-fundo-claro.png"
    alt="ValeTech Soluções"
    width={1165}
    height={171}
    className={`w-auto select-none ${className}`}
    draggable={false}
  />
);

/** Logo da barra de navegação. */
export const LogoType: React.FC<LogoProps> = ({ className = '' }) => (
  <LogoMain className={`h-6 sm:h-7 ${className}`} />
);
