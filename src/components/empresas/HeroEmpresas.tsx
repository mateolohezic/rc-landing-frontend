'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { trackEmpresas } from './EmpresasTracker';
import heroImg from '@/assets/home/trainer_2.webp';

export const HeroEmpresas = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Clase funcional grupal en RC Gym"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/45 to-black/90"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]"
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-32 lg:py-40 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 text-white/80 text-xs lg:text-sm uppercase tracking-[0.25em] font-bold"
        >
          Convenio para empresas de Tucumán
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
        >
          Un beneficio real
          <span className="block text-red-500">para tu equipo</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 lg:mt-8 text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          Tus empleados entrenan en cualquiera de las 6 sedes de RC, con descuento. Musculación,
          funcional, clases grupales y pileta climatizada en Terrazas. Vos elegís el plan según tu
          empresa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 lg:mt-12"
        >
          <Link
            href="#contacto"
            onClick={() => trackEmpresas('hero_cta_click')}
            className="px-10 py-4 lg:px-12 lg:py-5 text-base lg:text-lg font-black uppercase tracking-widest bg-gradient-to-r from-red-600 to-red-500 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-2xl shadow-red-500/40 inline-block"
          >
            Quiero el convenio
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Mirá más</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
