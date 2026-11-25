'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { sedes } from '@/data/sedes';

export const SedesEmpresas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Cobertura
          </p>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
            Las 6 sedes
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
            Cada empleado elige la sede que le queda cerca de su casa o de su trabajo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sedes.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/60"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={s.img}
                  alt={`RC Gym ${s.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xl font-black uppercase tracking-tight">{s.title}</p>
                  <p className="mt-1 text-sm text-white/70">{s.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
