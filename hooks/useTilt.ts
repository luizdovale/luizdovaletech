import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring, type MotionValue } from 'framer-motion';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface TiltOptions {
  /** Inclinação máxima em graus. Mantenha discreto: 4–8 já lê como "premium". */
  max?: number;
  /** Chamado a cada movimento com a posição normalizada do ponteiro (0–1, 0–1) dentro do elemento. */
  onMove?: (px: number, py: number) => void;
  onLeave?: () => void;
}

interface TiltBind<T extends HTMLElement> {
  ref: React.RefObject<T>;
  style: { rotateX: MotionValue<number>; rotateY: MotionValue<number>; transformPerspective: number };
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
  /** true em touch ou "reduzir movimento": os handlers viram no-op, então nem vale ligá-los. */
  disabled: boolean;
}

/**
 * Inclinação 3D sutil que segue o ponteiro, tipo cartão físico reagindo à luz.
 * Usada nos cards de projeto e na foto do "Sobre mim" — nunca em touch (o dedo
 * não paira) nem quando o visitante pede menos movimento.
 */
export function useTilt<T extends HTMLElement = HTMLElement>({
  max = 7,
  onMove,
  onLeave,
}: TiltOptions = {}): TiltBind<T> {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isCoarsePointer, setIsCoarsePointer] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(pointer: coarse)');
    setIsCoarsePointer(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsCoarsePointer(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const disabled = prefersReducedMotion || isCoarsePointer;

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 22, mass: 0.6 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * max * 2);
    rotateX.set((0.5 - py) * max * 2);
    onMove?.(px, py);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    onLeave?.();
  };

  return {
    ref,
    style: { rotateX: springRotateX, rotateY: springRotateY, transformPerspective: 800 },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    disabled,
  };
}

export default useTilt;
