'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bannerImg from '@/assets/terrazas/terrazas_2.webp';

export const BannerEmpresas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative w-full h-[60svh] min-h-[420px] overflow-hidden">
      <Image
        src={bannerImg}
        alt="Pileta climatizada de RC Terrazas"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-black/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/50"
      />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 flex items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <p className="text-red-400 uppercase tracking-widest text-sm font-bold mb-4">
            Por qué le sirve a tu empresa
          </p>
          <p className="text-3xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight">
            Vas a saber cuánta gente lo usa.
          </p>
          <p className="mt-5 text-white/70 text-sm lg:text-base">
            Con RC Empresa y RC Corporativo recibís un informe de altas y frecuencia de uso — no
            firmás un beneficio y te quedás sin saber si sirvió. Las empresas con programas de
            bienestar consolidados reportan menos rotación que las que no los tienen: es un
            patrón general de la industria, no una promesa numérica de RC.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
