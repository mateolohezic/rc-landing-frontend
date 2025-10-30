'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// [INVENTADO: Necesito los logos reales de los sponsors]
// Placeholder array - reemplazar con logos reales
const sponsors = [
  { name: 'Sponsor 1', logo: '/assets/sponsors/sponsor1.png' },
  { name: 'Sponsor 2', logo: '/assets/sponsors/sponsor2.png' },
  { name: 'Sponsor 3', logo: '/assets/sponsors/sponsor3.png' },
  { name: 'Sponsor 4', logo: '/assets/sponsors/sponsor4.png' },
  { name: 'Sponsor 5', logo: '/assets/sponsors/sponsor5.png' },
  { name: 'Sponsor 6', logo: '/assets/sponsors/sponsor6.png' },
];

export const SponsorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-24 px-4 bg-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-5xl font-highrise-bold uppercase text-white/70">
            Sponsors Oficiales
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              {/* [INVENTADO: Placeholder para logos - reemplazar con componentes Image reales] */}
              <div className="w-full h-20 flex items-center justify-center">
                <span className="text-white/50 text-sm text-center">{sponsor.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-lg text-white/50 mt-12"
        >
          Hacen posible esta experiencia épica.
        </motion.p>
      </div>
    </section>
  );
}