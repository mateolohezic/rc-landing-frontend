'use client';

import { useEffect, useState } from 'react';
import { headlineFont } from './fonts';
import { EVENTO_ISO } from './constants';

const UNIDADES = [
  { key: 'dias', label: 'Días' },
  { key: 'horas', label: 'Horas' },
  { key: 'min', label: 'Min' },
  { key: 'seg', label: 'Seg' },
] as const;

const calc = () => {
  const diff = new Date(EVENTO_ISO).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    dias: Math.floor(diff / 86400000),
    horas: Math.floor((diff % 86400000) / 3600000),
    min: Math.floor((diff % 3600000) / 60000),
    seg: Math.floor((diff % 60000) / 1000),
  };
};

export const CountdownPrimavera = () => {
  const [t, setT] = useState<ReturnType<typeof calc>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  if (mounted && !t) return null;

  return (
    <section className="w-full bg-black px-6 py-24 sm:py-32 border-t border-white/10">
      <p
        style={{ fontFamily: 'var(--pr-label)' }}
        className="text-center text-[#e2941f] text-sm uppercase tracking-[0.4em] mb-10"
      >
        Faltan
      </p>
      <div className="max-w-md mx-auto grid grid-cols-4 text-center">
        {UNIDADES.map((u, i) => (
          <div key={u.key} className={i > 0 ? 'border-l border-white/10' : ''}>
            <span className={`${headlineFont.className} block text-4xl sm:text-6xl text-[#fbf1dd] tabular-nums`}>
              {mounted && t ? String(t[u.key]).padStart(2, '0') : '--'}
            </span>
            <span
              style={{ fontFamily: 'var(--pr-label)' }}
              className="block mt-2 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-white/70"
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
