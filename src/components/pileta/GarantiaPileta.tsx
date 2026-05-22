'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon } from '@/icons';
import { trackPileta } from './PiletaTracker';

const BENEFICIOS = [
  'Una clase completa, no un tour',
  'Con profe, no nado libre',
  'Sin tarjeta, sin seña',
  'Si seguís, arrancamos tu plan',
];

export const GarantiaPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-16 lg:py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border-2 border-red-500/40 bg-gradient-to-br from-red-950/50 via-neutral-950 to-black"
        >
          {/* Glow */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
            className="absolute -top-20 -right-20 w-80 h-80 bg-red-500/20 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 p-6 sm:p-10 lg:p-14 text-center">
            {/* Sello rectangular */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-3 px-4 py-2 lg:px-5 lg:py-2.5 rounded-lg bg-red-600 shadow-lg shadow-red-500/30 mb-6 lg:mb-8"
            >
              <span className="text-[10px] lg:text-xs uppercase tracking-[0.25em] text-red-100 font-bold">
                Garantía
              </span>
              <span className="size-1 bg-red-300 rounded-full" aria-hidden />
              <span className="text-sm lg:text-base font-black uppercase tracking-wider">
                1ra clase gratis
              </span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-[0.95] max-w-3xl mx-auto">
              Probá tu primera clase.
              <span className="block text-red-500 mt-2">
                Si no te gusta, no pagás nada.
              </span>
            </h2>

            <p className="mt-5 lg:mt-6 text-base lg:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Te reservamos tu cupo, venís, nadás y conocés a los profes. Recién después decidís
              si seguís. Sin compromiso, sin letra chica.
            </p>

            {/* Beneficios */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm lg:text-base text-white/85 max-w-xl mx-auto text-left">
              {BENEFICIOS.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckIcon className="text-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="#reservar"
              onClick={() => trackPileta('garantia_cta_click')}
              className="mt-10 lg:mt-12 inline-flex items-center justify-center gap-2 px-8 py-4 lg:px-10 lg:py-5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:scale-[1.02] active:scale-[0.99] transition-transform duration-200 text-base lg:text-lg font-black uppercase tracking-wider shadow-2xl shadow-red-500/40 w-full sm:w-auto"
            >
              Reservar mi clase gratis
              <span aria-hidden>→</span>
            </Link>

            <p className="mt-4 text-xs lg:text-sm text-white/50">
              Te respondemos por WhatsApp.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
