import { useEffect, useState } from 'react';

/**
 * Verdadeiro quando o sistema do visitante pede menos animação
 * (Reduzir Movimento, no macOS/iOS/Windows). Toda animação nova
 * (parallax 3D, inclinação de cards, entrada com profundidade)
 * deve checar isso e cair para uma versão estática/só-fade.
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
};

export default usePrefersReducedMotion;
