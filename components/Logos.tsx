import React from 'react';

interface LogoProps {
  className?: string;
}

// 1. Logo com LVT Neon (Principal)
export const LogoMain: React.FC<LogoProps> = ({ className = "w-32" }) => (
  <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 10 L20 50 L50 50" stroke="#1A66BF" strokeWidth="4" strokeLinecap="round"/>
    <path d="M70 10 L85 50 L100 10" stroke="#FCE300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M120 10 L150 10 M135 10 L135 50" stroke="#1A66BF" strokeWidth="4" strokeLinecap="round"/>
    <rect x="10" y="5" width="150" height="50" rx="4" stroke="#1A66BF" strokeWidth="1" strokeOpacity="0.3" className="animate-pulse"/>
    <circle cx="180" cy="30" r="4" fill="#FCE300">
      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
    </circle>
  </svg>
);

// 2. Versão Quadrada (Ícone/Favicon)
export const LogoSquare: React.FC<LogoProps> = ({ className = "w-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="20" fill="#0C0F17" stroke="#1A66BF" strokeWidth="2"/>
    <path d="M25 25 L25 75 L50 75" stroke="#1A66BF" strokeWidth="6" strokeLinecap="round"/>
    <path d="M50 25 L62.5 75 L75 25" stroke="#FCE300" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 3. Versão Circular
export const LogoCircle: React.FC<LogoProps> = ({ className = "w-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="#1A66BF" strokeWidth="2" fill="#121620"/>
    <path d="M35 35 L35 65 L50 65" stroke="#FCE300" strokeWidth="4" strokeLinecap="round"/>
    <path d="M60 35 L70 65" stroke="#1A66BF" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="40" stroke="#1A66BF" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" className="animate-spin-slow" style={{transformOrigin: 'center'}}/>
  </svg>
);

// 4. Versão Tipográfica (Navbar)
export const LogoType: React.FC<LogoProps> = ({ className = "w-48" }) => (
  <div className={`flex items-center gap-2 font-display tracking-tighter ${className}`}>
    <span className="text-tech-electric font-bold text-2xl">L</span>
    <span className="text-white font-bold text-2xl">V</span>
    <span className="text-tech-electric font-bold text-2xl">T</span>
    <div className="h-6 w-[1px] bg-tech-gray/30 mx-2"></div>
    <span className="flex flex-col leading-none">
      <span className="text-white text-sm font-bold tracking-widest">LUIZDOVALE</span>
      <span className="text-tech-gold text-[10px] tracking-[0.2em] uppercase">Tech Solutions</span>
    </span>
  </div>
);

// 5. Versão Minimalista
export const LogoMinimal: React.FC<LogoProps> = ({ className = "w-8" }) => (
  <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 10 H30 V30 H10 Z" stroke="#FCE300" strokeWidth="2"/>
    <circle cx="20" cy="20" r="4" fill="#1A66BF"/>
  </svg>
);

// 6. Versão Glow Completa (Hero)
export const LogoGlow: React.FC<LogoProps> = ({ className = "w-64" }) => (
  <svg className={className} viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="4" result="blur"/>
        <feComposite in="SourceGraphic" in2="blur" operator="over"/>
      </filter>
    </defs>
    <path d="M50 20 L50 80 L90 80" stroke="#1A66BF" strokeWidth="6" strokeLinecap="round" filter="url(#glow)"/>
    <path d="M110 20 L130 80 L150 20" stroke="#FCE300" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
    <path d="M170 20 L210 20 M190 20 L190 80" stroke="#1A66BF" strokeWidth="6" strokeLinecap="round" filter="url(#glow)"/>
    <circle cx="250" cy="80" r="5" fill="#FCE300" className="animate-pulse"/>
  </svg>
);