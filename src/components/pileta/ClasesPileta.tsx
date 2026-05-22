'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CLASES } from './constants';

export const ClasesPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Para cada etapa, un profe
          </p>
          <h2 className="text-4xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            Clases para todos
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Niños, adultos, adultos mayores, embarazadas, principiantes y avanzados.
            Cupos chicos para que el profe te mire de verdad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {CLASES.map((c, i) => (
            <motion.div
              key={c.nombre}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 hover:border-red-500/50 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-red-500 mb-4">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="text-lg lg:text-xl font-black uppercase leading-tight tracking-tight">
                {c.nombre}
              </h3>
              <p className="mt-3 text-white/70 text-sm lg:text-base leading-relaxed">{c.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <span className="size-1.5 bg-red-500 rounded-full" />
                Turnos de 6 a 22 hs
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
