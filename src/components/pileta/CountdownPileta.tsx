'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PREVENTA_END_ISO } from './constants';

interface CountdownPiletaProps {
  end?: string;
  variant?: 'hero' | 'inline' | 'big';
}

const calcLeft = (target: number) => {
  const distance = target - Date.now();
  if (distance <= 0) return { d: 0, h: 0, m: 0, s: 0, expired: true };
  return {
    d: Math.floor(distance / 86_400_000),
    h: Math.floor((distance % 86_400_000) / 3_600_000),
    m: Math.floor((distance % 3_600_000) / 60_000),
    s: Math.floor((distance % 60_000) / 1000),
    expired: false,
  };
};

export const CountdownPileta = ({ end = PREVENTA_END_ISO, variant = 'inline' }: CountdownPiletaProps) => {
  const target = new Date(end).getTime();
  const [left, setLeft] = useState(() => calcLeft(target));

  useEffect(() => {
    const t = setInterval(() => setLeft(calcLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  if (left.expired) {
    return (
      <p className="text-sm uppercase tracking-widest text-white/60">
        Preventa cerrada — contactanos por WhatsApp
      </p>
    );
  }

  const items = [
    { v: left.d, l: 'D' },
    { v: left.h, l: 'H' },
    { v: left.m, l: 'M' },
    { v: left.s, l: 'S' },
  ];

  if (variant === 'hero') {
    return (
      <div className="inline-flex items-center gap-3 lg:gap-4 bg-black/60 border border-red-500/40 backdrop-blur-md rounded-xl px-4 lg:px-6 py-3">
        <span className="text-xs lg:text-sm uppercase tracking-widest text-white/70 hidden sm:inline">
          Cierra en
        </span>
        <div className="flex items-center gap-2 lg:gap-3">
          {items.map((it) => (
            <div key={it.l} className="flex items-baseline gap-1">
              <span className="text-2xl lg:text-3xl font-black tracking-tight text-red-500 tabular-nums">
                {String(it.v).padStart(2, '0')}
              </span>
              <span className="text-xs text-white/60">{it.l}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'big') {
    return (
      <div className="flex justify-center gap-3 sm:gap-6">
        {items.map((it) => (
          <motion.div
            key={it.l}
            whileHover={{ scale: 1.05 }}
            className="bg-black/50 border-2 border-red-500/60 rounded-lg px-3 py-3 sm:px-6 sm:py-5 min-w-[72px] sm:min-w-[110px] text-center flex flex-col items-center justify-center"
          >
            <div className="text-3xl sm:text-5xl lg:text-6xl font-black text-red-500 tabular-nums leading-none">
              {String(it.v).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-widest mt-2 text-white/70">
              {it.l}
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      {items.map((it, i) => (
        <span key={it.l} className="font-black tracking-tight tabular-nums">
          {String(it.v).padStart(2, '0')}
          {i < items.length - 1 && <span className="text-red-500 mx-1">:</span>}
        </span>
      ))}
    </div>
  );
};
