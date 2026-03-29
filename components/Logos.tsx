import React from 'react';

interface LogoProps {
  className?: string;
}

/**
 * LOGO OFICIAL (Garante altura controlada sempre)
 */
export const LogoMain: React.FC<LogoProps> = ({ className = "" }) => (
  <img 
    src="/assets/logo.png" 
    alt="ValeTech Soluções Logo" 
    className={`h-7 md:h-9 w-auto object-contain ${className}`}
    draggable={false}
  />
);

/**
 * COMPONENTE PARA O NAVBAR
 */
export const LogoType: React.FC<LogoProps> = ({ className = "" }) => (
  <div className={`flex items-center leading-none ${className}`}>
     <LogoMain />
  </div>
);

/**
 * COMPONENTE PARA O FOOTER
 */
export const LogoFooter: React.FC<LogoProps> = ({ className = "" }) => (
  <div className={`flex items-center leading-none ${className}`}>
     <LogoMain className="h-7 md:h-9" />
  </div>
);

/**
 * ÍCONE / FAVICON STYLE
 */
export const LogoIcon: React.FC<LogoProps> = ({ className = "" }) => (
  <img 
    src="/assets/logo.png" 
    alt="ValeTech" 
    className={`w-8 h-8 object-contain ${className}`}
    draggable={false}
  />
);

export const LogoSquare = LogoIcon;
export const LogoMinimal = LogoIcon;
export const LogoCircle = LogoIcon;
export const LogoGlow = LogoType;