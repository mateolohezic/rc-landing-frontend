'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const prizes = [
  {
    position: '🥇',
    title: 'Primer Lugar',
    prize: '1 Año Gratis en RC',
    value: 840000,
    features: [
      '12 meses de entrenamiento',
      'Acceso a todas las sedes',
      'Clases ilimitadas',
    ],
    highlight: true,
  },
  {
    position: '🥈',
    title: 'Segundo Lugar',
    prize: '6 Meses Gratis en RC',
    value: 420000,
    features: [
      'Medio año transformando tu cuerpo',
      'Sin excusas, sin pretextos',
    ],
    highlight: false,
  },
  {
    position: '🥉',
    title: 'Tercer Lugar',
    prize: '3 Meses Gratis en RC',
    value: 210000,
    features: [
      'El empujón que necesitabas',
    ],
    highlight: false,
  },
];

const bonusPrize = {
  icon: '🍔',
  title: 'Premio Sede Ganadora',
  prize: 'Combo Burguer para el equipo',
  subtitle: '+ Gaseosas + Snacks',
  description: 'La celebración perfecta',
};

const PrizeCard = ({ prize, index }: { prize: typeof prizes[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className={`
        ${prize.highlight ? 'bg-gradient-to-br from-red-600 to-red-500 border-yellow-400' : 'bg-neutral-800/80 border-red-500/50'}
        border-4 rounded-2xl p-8 shadow-2xl relative overflow-hidden
      `}
    >
      {prize.highlight && (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"
        />
      )}

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
          transition={{ duration: 0.5 }}
          className="text-6xl lg:text-7xl mb-4 text-center"
        >
          {prize.position}
        </motion.div>
        <h3 className="text-2xl lg:text-3xl font-highrise-bold uppercase text-center mb-2">
          {prize.title}
        </h3>
        <p className="text-xl lg:text-2xl font-bold text-center mb-6">
          {prize.prize}
        </p>
        <div className="text-center mb-6">
          <p className="text-5xl lg:text-6xl font-highrise-bold">
            <small className="text-2xl">$ </small>
            {prize.value.toLocaleString('es-AR')}
          </p>
          <p className="text-sm text-white/70 mt-2">Valor real del premio</p>
        </div>
        <ul className="space-y-3">
          {prize.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-base lg:text-lg">
              <span className="text-yellow-400">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export const PrizeCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 lg:py-24 px-4 bg-gradient-to-b from-neutral-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-8xl font-highrise-bold uppercase mb-4">
            Los premios que están
          </h2>
          <p className="text-4xl lg:text-6xl font-highrise-bold uppercase text-red-500">
            en juego
          </p>
          <p className="text-xl lg:text-2xl mt-4 text-white/70">
            (Valor real: <span className="text-yellow-400 font-bold">$1.500.000</span>)
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-4 lg:mb-8">
          {prizes.map((prize, index) => (
            <PrizeCard key={index} prize={prize} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileHover={{ scale: 1.02 }}
          className="max-w-2xl mx-auto bg-neutral-800/80 border-2 border-orange-500/50 rounded-2xl p-8 text-center"
        >
          <span className="text-6xl block mb-4">{bonusPrize.icon}</span>
          <h3 className="text-2xl lg:text-3xl font-highrise-bold uppercase mb-2">
            {bonusPrize.title}
          </h3>
          <p className="text-xl lg:text-2xl font-bold mb-2">
            {bonusPrize.prize}
          </p>
          <p className="text-lg text-white/80 mb-4">{bonusPrize.subtitle}</p>
          <p className="text-base text-white/70 mt-2 italic">{bonusPrize.description}</p>
        </motion.div>
      </div>
    </section>
  );
}