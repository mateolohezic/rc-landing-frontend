'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckIcon } from '@/icons';
import profesGrupo from '@/assets/pileta/profes-pileta.webp';

const ESENCIA = [
  'Profesionales formados en natación y deporte',
  'Te conocen, te corrigen, se acuerdan de tu nombre',
  'Misma calidad que ya conocés del gym de RC',
  'Cada clase con un profe presente, no nado libre',
];

export const ProfesPileta = () => {
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
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            El equipo
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            Profes que te
            <span className="block text-red-500">van a mirar</span>
          </h2>
          <p className="mt-6 text-base lg:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            No es una pileta donde te tirás solo. Cada clase tiene un profesional dedicado
            que corrige tu técnica, controla tu ritmo y te acompaña clase a clase.
          </p>
        </motion.div>

        {/* Foto del equipo — contain para respetar aspect ratio original */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-neutral-900"
        >
          <Image
            src={profesGrupo}
            alt="Equipo de profes de RC Pileta"
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="w-full h-auto object-contain"
            placeholder="blur"
          />
        </motion.div>

        {/* Esencia: qué son, sin nombres ni números */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 lg:mt-14 grid sm:grid-cols-2 gap-3 lg:gap-4 max-w-3xl mx-auto"
        >
          {ESENCIA.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 px-5 py-4 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <CheckIcon className="text-red-500 shrink-0 mt-0.5" />
              <span className="text-sm lg:text-base text-white/85 leading-snug">{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
