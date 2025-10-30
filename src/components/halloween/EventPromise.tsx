'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

const promises = [
  {
    emoji: '🎮',
    title: 'Zona Kermés',
    subtitle: 'Jugá en 5 estaciones épicas',
    description: 'Cada sede presenta su mejor juego. Ganás premios en cada estación. Tu voto decide la sede campeona.',
    microcopy: 'Diversión + premios + poder de decisión',
  },
  {
    emoji: '💪',
    title: 'Batalla Física',
    subtitle: '5 sedes. 1 sola ganadora.',
    description: '30 atletas compiten en 5 desafíos brutales. ¿Tu sede tiene lo que se necesita? Premio: Combo burguer para 10 personas.',
    microcopy: 'Adrenalina pura + rivalidad sana',
  },
  {
    emoji: '👻',
    title: 'Desfile Épico',
    subtitle: 'Tu disfraz = Tu entrada al paraíso',
    description: 'Jurado profesional elige los 3 mejores. 1° lugar: 1 AÑO GRATIS ($420.000), 2° lugar: 6 MESES ($210.000), 3° lugar: 3 MESES ($105.000)',
    microcopy: 'Un disfraz puede cambiar tu 2026',
  },
];

const PromiseCard = ({ promise, index }: { promise: typeof promises[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-neutral-800/50 border-2 border-red-500/30 rounded-xl p-8 hover:border-red-500 hover:bg-neutral-800 transition-all duration-300 hover:scale-105"
    >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="text-6xl mb-4"
      >
        {promise.emoji}
      </motion.div>
      <h3 className="text-3xl lg:text-4xl font-highrise-bold uppercase text-red-500 mb-2">
        {promise.title}
      </h3>
      <p className="text-xl font-bold mb-4">{promise.subtitle}</p>
      <p className="text-base lg:text-lg text-white/80 mb-4">
        {promise.description}
      </p>
      <p className="text-sm text-red-400 italic border-t border-white/10 pt-4">
        {promise.microcopy}
      </p>
    </motion.div>
  );
}

export const EventPromise = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-12 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl lg:text-8xl font-highrise-bold uppercase text-center mb-4">
            Esto es lo que vas a vivir
          </h2>
          <p className="text-2xl lg:text-3xl uppercase text-center text-red-500 mb-16">
            este 31 de octubre
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {promises.map((promise, index) => (
            <PromiseCard key={index} promise={promise} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 lg:mt-12 text-center"
        >
          <Link
            href={process.env.NEXT_PUBLIC_FORM_HALLOWEEN || '/'}
            target="_blank"
            className="inline-block px-8 py-3 text-xl bg-red-600 hover:bg-red-500 rounded-lg uppercase transition-colors duration-300"
          >
            Sí, quiero estar ahí
          </Link>
        </motion.div>
      </div>
    </section>
  );
}