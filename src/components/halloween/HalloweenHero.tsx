'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckIcon } from '@/icons';

export const HalloweenHero = () => {
  return (
    <section className="w-full lg:min-h-svh py-24 lg:pt-28 lg:pb-12 flex flex-col justify-center items-center relative overflow-hidden">
      <div className="size-full bg-background absolute top-0 left-0 z-0">
        <div className="size-full bg-gradient-to-br from-black via-neutral-900 to-red-950" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-neutral-900/80 to-neutral-900 z-10" />
      <div className="relative z-20 max-w-5xl text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl lg:text-9xl font-black uppercase leading-tight">
            Gana <span className="text-red-500 block">1 año gratis</span>
            <span className="block text-5xl lg:text-7xl mt-2">en RC Gym</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-lg lg:text-2xl max-w-3xl mx-auto"
        >
          La noche donde <b className="text-red-500 font-extrabold">5 sedes se enfrentan</b>,
          <br className="hidden lg:block" />
          los disfraces valen oro y <b className="text-red-500 font-extrabold">VOS podes</b> ser el ganador.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-8 inline-flex flex-col gap-2 bg-red-600/20 border-2 border-red-500 rounded-xl px-6 py-4"
        >
          <p className="text-lg lg:text-2xl font-black uppercase">
            Viernes 31 de Octubre | 19:00 hs
          </p>
          <p className="text-lg lg:text-xl">
            RC Terrazas - Av. Perón 2400
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href={process.env.NEXT_PUBLIC_FORM_HALLOWEEN || '/'}
            target="_blank"
            className="inline-block px-10 py-4 text-2xl lg:text-3xl font-black bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:scale-105 transition-transform duration-300 shadow-2xl shadow-red-500/50"
          >
            🔥 Reservar mi lugar gratis 🔥
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 flex flex-wrap justify-center gap-4 text-sm lg:text-base"
        >
          <p className="flex items-center gap-2">
            <CheckIcon className="text-red-500 text-xl" /> Entrada 100% gratuita
          </p>
          <p className="flex items-center gap-2">
            <CheckIcon className="text-red-500 text-xl" /> Cupos limitados
          </p>
        </motion.div>
      </div>
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-10 text-6xl opacity-20"
      >
        👻
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-40 left-10 text-6xl opacity-20"
      >
        🎃
      </motion.div>
    </section>
  );
}