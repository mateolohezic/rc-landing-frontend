'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { METRICAS_RC } from './constants';

const sedes = [
  'Épico',
  'Terrazas',
  'Aconquija',
  'Barrio Sur',
  'Tafí Viejo',
  'Barrio Norte',
];

export const CasaRC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-gradient-to-br from-black via-neutral-950 to-red-950/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            No es un lugar nuevo · Yerba Buena
          </p>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tight uppercase leading-tight">
            En tu casa de
            <span className="block text-red-500">siempre</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-3xl mx-auto">
            Más de <b className="text-white">30 años</b> entrenando a Tucumán, en el{' '}
            <b className="text-white">corazón de Yerba Buena</b>. La pileta no es un proyecto
            nuevo de un club desconocido: es RC sumando lo que el gym no puede darte. Mismo
            equipo, misma comunidad, misma confianza.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-8 max-w-3xl mx-auto"
        >
          {METRICAS_RC.map((m) => (
            <div
              key={m.label}
              className="min-w-0 px-2 sm:px-3 py-6 lg:py-8 rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden"
            >
              <div className="text-2xl sm:text-3xl lg:text-5xl font-black tracking-tight text-red-500 tabular-nums leading-none">
                {m.numero}
              </div>
              <div className="mt-2 text-[10px] sm:text-xs lg:text-sm text-white/70 uppercase tracking-wider leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16"
        >
          <p className="text-xs lg:text-sm uppercase tracking-widest text-white/40 mb-4">
            Sedes en Tucumán
          </p>
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {sedes.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-sm lg:text-base text-white/80"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
