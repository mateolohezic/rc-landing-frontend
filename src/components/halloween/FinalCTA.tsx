'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

export const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-24 lg:py-48 px-4 bg-gradient-to-br from-black via-neutral-900 to-red-950 relative overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/20 rounded-full blur-3xl"
      />
      {[
        { emoji: '🎃', x: '10%', y: '20%', delay: 0 },
        { emoji: '👻', x: '85%', y: '30%', delay: 1 },
        { emoji: '🔥', x: '15%', y: '70%', delay: 2 },
        { emoji: '🏆', x: '90%', y: '80%', delay: 1.5 },
      ].map((item, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
          className="absolute text-6xl opacity-10"
          style={{ left: item.x, top: item.y }}
        >
          {item.emoji}
        </motion.div>
      ))}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl lg:text-9xl font-highrise-bold uppercase leading-tight mb-8">
            Tu última <span className="text-red-500">oportunidad</span> <span className="block text-4xl lg:text-6xl">para reservar tu lugar</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 mb-12"
        >
          <p className="text-2xl lg:text-3xl">
            Este <b className="text-red-500">31 de octubre a las 19:00hs</b>, las puertas de RC Terrazas se abren.
          </p>
          <p className="text-3xl lg:text-4xl font-black">
            O estás adentro, <span className="text-red-500">o te la cuentan.</span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={process.env.NEXT_PUBLIC_FORM_HALLOWEEN || '/'}
            target="_blank"
            className="inline-block px-4 lg:px-12 py-2 lg:py-5 text-xl lg:text-4xl font-black bg-gradient-to-r from-red-600 to-red-500 rounded-xl uppercase shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 transition-shadow duration-300"
          >
            Reservar mi cupo gratis ahora
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-8 space-y-2 text-lg lg:text-xl text-white/70"
        >
          <p>🎃 Nos vemos el 31 de octubre</p>
        </motion.div>
      </div>
    </section>
  );
}