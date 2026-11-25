'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon } from '@/icons';
import { PLANES_EMPRESA } from './constants';
import { trackEmpresas } from './EmpresasTracker';

export const PlanesEmpresas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="planes" className="w-full py-20 lg:py-32 px-4 bg-black bg-grid relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Los planes
          </p>
          <h2 className="text-3xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            Armamos el plan
            <span className="block text-red-500">con vos</span>
          </h2>
          <p className="mt-6 text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Estos son los tres puntos de partida más comunes. El número de empleados y el
            descuento final se definen en la reunión, según la nómina real de tu empresa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {PLANES_EMPRESA.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-7 lg:p-8 flex flex-col overflow-hidden ${
                p.destacado
                  ? 'bg-gradient-to-b from-red-950/70 to-neutral-900/80 border border-red-500/50 shadow-2xl shadow-red-500/20 md:scale-105 md:z-10'
                  : 'glass-card'
              }`}
            >
              {p.destacado && (
                <div
                  aria-hidden
                  className="absolute -top-24 -right-24 w-56 h-56 bg-red-500/25 rounded-full blur-3xl pointer-events-none"
                />
              )}
              <span
                aria-hidden
                className="absolute top-4 right-6 text-7xl font-black italic text-white/[0.06] leading-none select-none pointer-events-none"
              >
                0{i + 1}
              </span>
              {p.destacado && (
                <span className="relative self-start mb-4 text-[11px] font-black uppercase tracking-widest text-red-400 bg-red-500/15 border border-red-500/30 px-3 py-1 rounded-full">
                  Más elegido
                </span>
              )}
              <h3 className="relative text-2xl font-black uppercase tracking-tight">{p.nombre}</h3>
              <p className="relative mt-1 text-sm text-white/60">{p.adherentes}</p>
              <p className="relative mt-4 text-lg font-bold text-red-400">{p.descuento}</p>

              <ul className="relative mt-6 space-y-3 flex-1">
                {p.incluye.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <CheckIcon className="text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contacto"
                onClick={() => trackEmpresas('plan_cta_click', { plan: p.id })}
                className="relative mt-8 w-full text-center py-3 rounded-xl border border-white/20 hover:border-red-500/60 hover:bg-red-500/10 transition-colors font-bold uppercase tracking-wide text-sm"
              >
                Consultar este plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
