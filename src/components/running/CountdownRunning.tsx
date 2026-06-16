'use client';

import { useEffect, useState } from 'react';
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

export const CountdownRunning = () => {
  const [t, setT] = useState<ReturnType<typeof calc>>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  // Evento ya ocurrido: no mostramos el bloque
  if (mounted && !t) return null;

  return (
    <section className="relative w-full px-4 py-10 lg:py-12 bg-black border-y border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-red-400 font-bold mb-5">
          Tiempo restante para el evento
        </p>
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {UNIDADES.map((u) => (
            <div key={u.key} className="glass-card py-4 sm:py-6">
              <span className="block text-3xl sm:text-5xl font-black tabular-nums text-white">
                {mounted && t ? String(t[u.key]).padStart(2, '0') : '--'}
              </span>
              <span className="block mt-1 text-[10px] sm:text-xs uppercase tracking-widest text-white/50 font-bold">
                {u.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
