'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CountdownPileta } from './CountdownPileta';
import { trackPileta } from './PiletaTracker';
import heroImg from '@/assets/pileta/crawl-mujer-1.webp';

export const HeroPileta = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background image — absolute, primer hijo, sin z-index negativo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg}
          alt="Pileta climatizada de RC Terrazas en el corazón de Yerba Buena"
          placeholder="blur"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Overlays sutiles — dejan ver la foto, mantienen legibilidad del texto */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-gradient-to-b from-black/35 via-black/25 to-black/85"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.55)_100%)]"
      />

      {/* Main content centered */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-32 lg:py-40 text-center flex flex-col items-center">
        {/* Promise headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-black uppercase leading-[0.95] tracking-tight max-w-4xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
        >
          Preventa
          <span className="block">Pileta semiolímpica</span>
          <span className="block text-red-500">climatizada</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-6 lg:mt-8 text-base lg:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
        >
          Más de 30 años cuidando a Tucumán nos llevaron acá. Mismos profes, misma comunidad,
          misma confianza. Ahora también dentro del agua.
        </motion.p>

        {/* CTA + Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 lg:mt-12 w-full flex flex-col items-center gap-5"
        >
          <Link
            href="#reservar"
            onClick={() => trackPileta('hero_cta_click')}
            className="px-10 py-4 lg:px-12 lg:py-5 text-base lg:text-lg font-black uppercase tracking-widest bg-gradient-to-r from-red-600 to-red-500 rounded-xl hover:scale-[1.02] transition-transform duration-300 shadow-2xl shadow-red-500/40"
          >
            Reservá tu cupo
          </Link>
          <CountdownPileta variant="hero" />
        </motion.div>

        {/* Bottom proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 lg:mt-16 text-xs lg:text-sm uppercase tracking-[0.3em] text-white/55 font-bold"
        >
          Climatizada todo el año · Acompañamiento profesional · Yerba Buena
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
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
