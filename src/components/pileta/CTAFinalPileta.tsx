'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CountdownPileta } from './CountdownPileta';
import { FormPreventaPileta } from './FormPreventaPileta';

export const CTAFinalPileta = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="reservar"
      className="w-full py-20 lg:py-28 px-4 bg-gradient-to-br from-red-950 via-black to-neutral-950 relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
            La preventa cierra el lunes 25 de mayo · 23:59
          </p>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95]">
            En tu casa de siempre,
            <span className="block text-red-500">ahora también con pileta</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-3xl mx-auto">
            Reservá tu cupo ahora y entrá a la pileta el día que abrimos. No tenés que pagar
            nada en este paso. Te contactamos por WhatsApp para confirmar tu plan y pago.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-10 lg:mb-12"
        >
          <p className="text-center text-xs uppercase tracking-widest text-white/60 mb-4">
            Tiempo restante
          </p>
          <CountdownPileta variant="big" />
        </motion.div>

        <FormPreventaPileta />
      </div>
    </section>
  );
};
