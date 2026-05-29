'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon } from '@/icons';
import { PILETA_SPECS } from './constants';
import mariposaHombre from '@/assets/pileta/mariposa-hombre.webp';

export const SolucionPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-32 px-4 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        >
          <Image
            src={mariposaHombre}
            alt="Nadador haciendo mariposa en la pileta climatizada de RC"
            className="object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8">
            <p className="text-sm uppercase tracking-widest text-red-400 font-bold mb-2">RC Pileta</p>
            <p className="text-xl lg:text-2xl font-black uppercase leading-tight tracking-tight">
              25 metros · 12 de ancho · Climatizada
            </p>
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4"
          >
            La pileta
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight"
          >
            La única pileta climatizada
            <span className="block text-red-500">de un gimnasio</span>
            <span className="block">en Tucumán</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg lg:text-xl text-white/80"
          >
            25 metros, semiolímpica, climatizada los 12 meses del año. Con un profe presente en
            cada clase corrigiendo técnica clase a clase.
          </motion.p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PILETA_SPECS.map((spec, i) => (
              <motion.li
                key={spec}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/10"
              >
                <CheckIcon className="text-red-500 shrink-0" />
                <span className="text-sm lg:text-base text-white/85">{spec}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
