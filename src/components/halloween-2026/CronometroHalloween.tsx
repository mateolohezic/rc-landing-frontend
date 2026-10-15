'use client';

import { useEffect, useState } from 'react';
import { headlineFont } from './fonts';
import { trackHalloween } from './HalloweenTracker';
import { EVENTO_ISO } from './constants';

const UNIDADES = [
  { key: 'dias', label: 'Días' },
  { key: 'horas', label: 'Horas' },
  { key: 'min', label: 'Minutos' },
  { key: 'seg', label: 'Segundos' },
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

// Cronómetro grande hasta el inicio de la fiesta. Se oculta cuando la fiesta ya empezó.
export const CronometroHalloween = () => {
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
    <section className="w-full bg-[#0a0a0a] px-6 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-8 sm:mb-12">
          Faltan para la fiesta
        </p>
        <div className="grid grid-cols-4">
          {UNIDADES.map((u, i) => (
            <div key={u.key} className={i > 0 ? 'border-l border-white/15' : ''}>
              <span
                className={`${headlineFont.className} italic font-black block text-[17vw] sm:text-8xl lg:text-[9rem] leading-[0.85] tabular-nums text-[#f3ece2]`}
              >
                {mounted && t ? String(t[u.key]).padStart(2, '0') : '--'}
              </span>
              <span className="mt-3 sm:mt-5 block text-[2.6vw] sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#f3ece2]/60">
                {u.label}
              </span>
            </div>
          ))}
        </div>
        <a
          href="#inscripcion"
          onClick={() => trackHalloween('cronometro_cta_click')}
          className="mt-10 sm:mt-14 inline-flex justify-center whitespace-nowrap px-12 py-5 bg-[#c8ff2e] text-black text-base font-semibold uppercase tracking-[0.25em] hover:bg-[#dcff6e] transition-colors"
        >
          Anotarme gratis
        </a>
      </div>
    </section>
  );
};
