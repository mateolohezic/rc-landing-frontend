'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FormEmpresas } from './FormEmpresas';
import ctaImg from '@/assets/home/features/feature_lessons.webp';

export const CTAFinalEmpresas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="relative w-full py-20 lg:py-28 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={ctaImg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-red-950/75 to-black/95" />
      </div>

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/15 rounded-full blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-4xl lg:text-7xl font-black tracking-tight uppercase leading-[0.95]">
            Armemos el
            <span className="block text-red-500">convenio</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-white/85 max-w-2xl mx-auto">
            Dejanos tus datos y te contactamos para definir el plan según tu empresa.
          </p>
        </motion.div>

        <FormEmpresas />
      </div>
    </section>
  );
};
