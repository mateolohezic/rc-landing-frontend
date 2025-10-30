'use client';

import { motion } from 'framer-motion';

const proofItems = [
  { icon: '🏆', text: '5 sedes compitiendo' },
  { icon: '💰', text: '$1.500.000 en premios' },
  { icon: '👥', text: 'Jurado confirmado' },
  { icon: '🎯', text: 'Sponsors oficiales' },
];

export const ProofBar = () => {
  return (
    <section className="w-full py-8 bg-red-600 overflow-hidden">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...proofItems, ...proofItems, ...proofItems].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-white font-highrise text-lg lg:text-xl"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="font-bold uppercase">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}