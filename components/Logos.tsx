import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showText?: boolean;
}

/**
 * LOGO OFICIAL ValeTech — Baseada em public/logonova.png
 * Proporções perfeitas, otimizada para fundo preto e interfaces minimalistas.
 */
export const LogoMain: React.FC<LogoProps> = ({ className = "", size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-6 md:h-7',
    md: 'h-8 md:h-10',
    lg: 'h-12 md:h-14',
    xl: 'h-16 md:h-20',
    hero: 'h-20 sm:h-24 md:h-32'
  };

  return (
    <img 
      src="/logo.png" 
      alt="ValeTech — Tecnologia & Inovação" 
      className={`${sizeClasses[size]} w-auto object-contain select-none transition-transform duration-300 ${className}`}
      draggable={false}
    />
  );
};

/**
 * COMPONENTE PARA O NAVBAR
 */
export const LogoType: React.FC<LogoProps> = ({ className = "" }) => (
  <div className={`flex items-center gap-3 select-none ${className}`}>
    <LogoMain size="md" className="hover:opacity-90" />
  </div>
);

/**
 * COMPONENTE PARA O FOOTER
 */
export const LogoFooter: React.FC<LogoProps> = ({ className = "" }) => (
  <div className={`flex flex-col items-start gap-2 select-none ${className}`}>
    <LogoMain size="md" />
  </div>
);

/**
 * ÍCONE / SÍMBOLO REDUZIDO
 */
export const LogoIcon: React.FC<LogoProps> = ({ className = "" }) => (
  <img 
    src="/logo.png" 
    alt="ValeTech" 
    className={`w-9 h-9 object-contain select-none ${className}`}
    draggable={false}
  />
);

export const LogoSquare = LogoIcon;
export const LogoMinimal = LogoIcon;
export const LogoCircle = LogoIcon;
export const LogoGlow = LogoType;
export const LogoHero: React.FC<LogoProps> = ({ className = "" }) => (
  <LogoMain size="hero" className={className} />
);