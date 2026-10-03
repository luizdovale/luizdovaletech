import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

export interface SignaturePadHandle {
  clear: () => void;
  isEmpty: () => boolean;
  toDataURL: () => string;
}

interface SignaturePadProps {
  onChange?: (empty: boolean) => void;
  disabled?: boolean;
  invalid?: boolean;
}

type Point = { x: number; y: number };

const HEIGHT = 220;
const MIN_POINTS = 12; // evita aceitar um toque acidental como assinatura

/** Quadro de assinatura com o dedo, caneta ou mouse. Guarda os traços e refaz o desenho se a tela mudar de tamanho. */
const SignaturePad = forwardRef<SignaturePadHandle, SignaturePadProps>(({ onChange, disabled, invalid }, ref) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokes = useRef<Point[][]>([]);
  const drawing = useRef(false);
  const [empty, setEmpty] = useState(true);

  const redraw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const dpr = window.devicePixelRatio || 1;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2.6;
    strokes.current.forEach((stroke) => {
      if (stroke.length === 0) return;
      ctx.beginPath();
      ctx.moveTo(stroke[0].x, stroke[0].y);
      if (stroke.length === 1) ctx.lineTo(stroke[0].x + 0.01, stroke[0].y + 0.01);
      for (let i = 1; i < stroke.length - 1; i++) {
        const mid = { x: (stroke[i].x + stroke[i + 1].x) / 2, y: (stroke[i].y + stroke[i + 1].y) / 2 };
        ctx.quadraticCurveTo(stroke[i].x, stroke[i].y, mid.x, mid.y);
      }
      if (stroke.length > 1) ctx.lineTo(stroke[stroke.length - 1].x, stroke[stroke.length - 1].y);
      ctx.stroke();
    });
  }, []);

  const resize = useCallback(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const width = wrap.clientWidth;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(HEIGHT * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${HEIGHT}px`;
    redraw();
  }, [redraw]);

  useEffect(() => {
    resize();
    const observer = new ResizeObserver(resize);
    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, [resize]);

  const pointFrom = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const totalPoints = () => strokes.current.reduce((n, s) => n + s.length, 0);

  const notify = () => {
    const nowEmpty = totalPoints() < MIN_POINTS;
    setEmpty(nowEmpty);
    onChange?.(nowEmpty);
  };

  const onDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (disabled) return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* alguns navegadores recusam captura de ponteiro inativo; desenhar continua funcionando */
    }
    drawing.current = true;
    strokes.current.push([pointFrom(e)]);
    redraw();
  };

  const onMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawing.current) return;
    const current = strokes.current[strokes.current.length - 1];
    // usa os pontos intermediários do navegador quando existirem: traço mais fiel e fluido
    const native = (e.nativeEvent as PointerEvent).getCoalescedEvents?.() ?? [];
    const rect = e.currentTarget.getBoundingClientRect();
    if (native.length > 0) {
      native.forEach((ev) => current.push({ x: ev.clientX - rect.left, y: ev.clientY - rect.top }));
    } else {
      current.push(pointFrom(e));
    }
    redraw();
  };

  const onUp = () => {
    if (!drawing.current) return;
    drawing.current = false;
    notify();
  };

  const clear = useCallback(() => {
    strokes.current = [];
    redraw();
    setEmpty(true);
    onChange?.(true);
  }, [onChange, redraw]);

  useImperativeHandle(ref, () => ({
    clear,
    isEmpty: () => totalPoints() < MIN_POINTS,
    toDataURL: () => canvasRef.current?.toDataURL('image/png') ?? '',
  }));

  return (
    <div>
      <div
        ref={wrapRef}
        className={`relative rounded-3xl border bg-slate-50/60 overflow-hidden transition-colors ${
          invalid ? 'border-red-300 bg-red-50/40' : 'border-slate-200'
        } ${disabled ? 'opacity-60' : ''}`}
        style={{ height: HEIGHT }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 touch-none cursor-crosshair"
          style={{ touchAction: 'none' }}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          aria-label="Quadro para desenhar a assinatura"
        />
        {empty && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-lg font-medium text-slate-300 select-none">Assine aqui usando o dedo</span>
          </div>
        )}
        <div className="absolute left-6 right-6 bottom-12 border-t border-dashed border-slate-300 pointer-events-none" />
        <div className="absolute left-6 bottom-4 text-[11px] font-bold tracking-[0.18em] uppercase text-slate-400 pointer-events-none select-none">
          × Assinatura
        </div>
        {!empty && !disabled && (
          <button
            type="button"
            onClick={clear}
            className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200 hover:bg-white"
          >
            Limpar
          </button>
        )}
      </div>
      <p className="mt-2 px-1 text-sm text-slate-500">Use o dedo, a caneta digital ou o mouse.</p>
    </div>
  );
});

SignaturePad.displayName = 'SignaturePad';
export default SignaturePad;
