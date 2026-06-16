'use client';

import { motion } from 'framer-motion';
import { EVENTO } from './constants';
import { trackRunning } from './RunningTracker';

export const CTAFinalRunning = () => {
  return (
    <section className="relative w-full section-padding px-4 bg-neutral-950 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.28, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
          Te esperamos el <span className="text-red-500">28 de junio</span>
        </h2>
        <p className="mt-4 text-base lg:text-lg text-white/70">
          {EVENTO.fechaLarga}, de {EVENTO.horario} h, en {EVENTO.sede}. Inscribite y asegurá tu
          lugar. Cupos limitados.
        </p>
        <a
          href="#inscripcion"
          onClick={() => trackRunning('cta_final_click')}
          className="inline-block mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-lg font-black uppercase tracking-wider hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300"
        >
          Inscribite
        </a>
      </motion.div>
    </section>
  );
};
