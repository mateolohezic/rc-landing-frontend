'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiHeart, FiShield, FiZap, FiSun, FiTrendingUp, FiUsers } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { BENEFICIOS_NADO } from './constants';

const ICONS: IconType[] = [FiHeart, FiShield, FiZap, FiSun, FiTrendingUp, FiUsers];

export const BeneficiosNado = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Sabías que…
          </p>
          <h2 className="text-4xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            Nadar es el ejercicio
            <span className="block text-red-500">más completo</span>
            <span className="block">que existe</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            No importa si recién arrancás o si ya entrenás hace años. La pileta suma a tu salud
            como ninguna otra disciplina.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {BENEFICIOS_NADO.map((b, i) => {
            const Icon = ICONS[i] ?? FiHeart;
            return (
              <motion.div
                key={b.titulo}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-neutral-900/70 border border-white/10 hover:border-red-500/40 rounded-2xl p-6 lg:p-8 transition-colors duration-300"
              >
                <Icon className="text-red-500 size-12 lg:size-14 mb-5" strokeWidth={1.5} />
                <h3 className="text-lg lg:text-xl font-black uppercase leading-tight mb-3 tracking-tight">
                  {b.titulo}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm lg:text-base">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
