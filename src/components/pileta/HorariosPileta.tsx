'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin } from 'react-icons/fi';
import {
  HORARIOS_PILETA,
  HORARIOS_PILETA_SABADO,
  PILETA_CAT_LABELS,
  type PiletaCat,
  type PiletaSlot,
} from './constants';

const DAYS: { key: 'lun' | 'mar' | 'mie' | 'jue' | 'vie'; label: string }[] = [
  { key: 'lun', label: 'Lun' },
  { key: 'mar', label: 'Mar' },
  { key: 'mie', label: 'Mié' },
  { key: 'jue', label: 'Jue' },
  { key: 'vie', label: 'Vie' },
];

// Color por categoría — Adultos neutro, Niños rojo (acento RC), Aquagym cyan, Libre verde
const CAT_TEXT: Record<PiletaCat, string> = {
  adultos: 'text-white/90',
  ninos: 'text-red-400',
  aquagym: 'text-sky-400',
  libre: 'text-emerald-400',
};

const CAT_DOT: Record<PiletaCat, string> = {
  adultos: 'bg-white/50',
  ninos: 'bg-red-500',
  aquagym: 'bg-sky-400',
  libre: 'bg-emerald-400',
};

const LEGEND: PiletaCat[] = ['adultos', 'ninos', 'aquagym', 'libre'];

function Slot({ slot }: { slot: PiletaSlot }) {
  return (
    <span className={`block leading-tight break-words hyphens-auto ${CAT_TEXT[slot.cat]}`}>
      {slot.prof ? (
        <>
          <span className="font-semibold">{slot.prof}</span>
          <span className="block text-[9px] sm:text-[10px] uppercase tracking-wider opacity-70">
            {PILETA_CAT_LABELS[slot.cat]}
          </span>
        </>
      ) : (
        <span className="font-semibold">{PILETA_CAT_LABELS[slot.cat]}</span>
      )}
    </span>
  );
}

export const HorariosPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="horarios" className="w-full py-20 lg:py-28 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Horarios 2026
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            La grilla de
            <span className="block text-red-500">la pileta</span>
          </h2>
          <p className="mt-5 inline-flex items-center gap-2 text-base lg:text-lg text-white/70">
            <FiMapPin className="text-red-500 shrink-0" />
            Sede Terrazas · Av. Perón 2400
          </p>
        </motion.div>

        {/* Leyenda de categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6"
        >
          {LEGEND.map((cat) => (
            <span key={cat} className="inline-flex items-center gap-2 text-xs lg:text-sm text-white/70">
              <span className={`size-2.5 rounded-full ${CAT_DOT[cat]}`} />
              {PILETA_CAT_LABELS[cat]}
            </span>
          ))}
        </motion.div>

        {/* Grilla */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-3xl border border-white/10 bg-neutral-950/60 overflow-hidden"
        >
          <table className="w-full table-fixed">
            <caption className="sr-only">
              Horarios de la pileta RC Terrazas 2026, por franja horaria y día de la semana.
            </caption>
            <thead>
              <tr className="border-b border-white/10 bg-black/40">
                <th scope="col" className="py-3 px-1.5 lg:px-3 w-[52px] lg:w-[80px]">
                  <span className="sr-only">Franja horaria</span>
                </th>
                {DAYS.map((d) => (
                  <th
                    key={d.key}
                    scope="col"
                    className="py-3 px-1 text-center text-[11px] lg:text-sm font-black uppercase tracking-widest text-white/50"
                  >
                    {d.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {HORARIOS_PILETA.map((row, i) => (
                <tr
                  key={row.franja}
                  className={`border-b border-white/[0.05] last:border-0 ${i % 2 !== 0 ? 'bg-white/[0.02]' : ''}`}
                >
                  <th
                    scope="row"
                    className="py-3 px-1.5 lg:px-3 text-left text-red-400 font-bold text-[10px] lg:text-xs font-mono whitespace-nowrap align-top"
                  >
                    {row.franja}
                    <span className="block text-white/30 font-sans">hs</span>
                  </th>
                  {DAYS.map((d) => {
                    const slots = row[d.key];
                    return (
                      <td key={d.key} className="py-3 px-1 text-center align-top">
                        {slots && slots.length > 0 ? (
                          <div className="flex flex-col gap-1.5 text-[10px] sm:text-[11px] lg:text-xs">
                            {slots.map((slot) => (
                              <Slot key={`${slot.cat}-${slot.prof ?? 'libre'}`} slot={slot} />
                            ))}
                          </div>
                        ) : (
                          <span className="text-white/15 text-xs">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Sábado — franja destacada */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-t border-white/10 bg-emerald-500/[0.06] px-4 py-4 text-center">
            <span className="text-sm lg:text-base font-black uppercase tracking-widest text-emerald-400">
              Sábados
            </span>
            <span className="text-sm lg:text-base text-white/80">{HORARIOS_PILETA_SABADO}</span>
          </div>
        </motion.div>

        <p className="mt-5 text-center text-xs lg:text-sm text-white/40">
          La pileta tiene su propia suscripción. Los horarios pueden ajustarse según la demanda de cada turno.
        </p>
      </div>
    </section>
  );
};
