'use client';

import { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tiltOptions?: {
    max?: number;
    speed?: number;
    glare?: boolean;
    'max-glare'?: number;
    scale?: number;
  };
}

export default function TiltCard({ children, className = '', style, tiltOptions = {} }: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = tiltRef.current;
    if (!el) return;

    VanillaTilt.init(el, {
      max: tiltOptions.max ?? 12,
      speed: tiltOptions.speed ?? 400,
      glare: tiltOptions.glare ?? true,
      'max-glare': tiltOptions['max-glare'] ?? 0.15,
      scale: tiltOptions.scale ?? 1.03,
    });

    return () => {
      (el as HTMLElement & { vanillaTilt?: { destroy: () => void } }).vanillaTilt?.destroy();
    };
  }, [tiltOptions]);

  return (
    <div ref={tiltRef} className={className} style={style}>
      {children}
    </div>
  );
}
