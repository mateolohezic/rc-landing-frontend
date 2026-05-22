'use client';

import { motion } from 'framer-motion';

const items = [
  '25 m semiolímpica',
  'Climatizada todo el año',
  'Profes que te miran',
  'Única en gimnasios de Tucumán',
  '+1.000 socios en RC',
  '+10 años de trayectoria',
  '4.5★ en Google',
];

export const ProofBarPileta = () => {
  return (
    <section className="w-full py-4 lg:py-5 bg-red-600 overflow-hidden border-y border-red-500/40">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        className="flex items-center gap-8 lg:gap-12 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-8 lg:gap-12 text-white text-sm lg:text-base shrink-0"
          >
            <span className="font-bold uppercase tracking-[0.2em]">{text}</span>
            <span className="size-1 bg-white/40 rounded-full shrink-0" aria-hidden />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
