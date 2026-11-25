'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import bgImg from '@/assets/home/features/feature_power.webp';

const PASOS = [
  {
    n: '01',
    titulo: 'Definimos el plan',
    texto: 'Nos contás cuántos empleados sumarías y armamos el plan según tu nómina. Se ajusta a tu empresa, no al revés.',
  },
  {
    n: '02',
    titulo: 'Firmamos el convenio',
    texto: 'Te mandamos el material listo para tu canal interno: un mail para reenviar y una placa para tu cartelera.',
  },
  {
    n: '03',
    titulo: 'Tu gente se da de alta',
    texto: 'Cada empleado se anota en la sede que elija, con el código de tu empresa. RC gestiona el resto.',
  },
];

export const ComoFuncionaEmpresas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative w-full py-20 lg:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-black/88" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/75 to-black" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            El proceso
          </p>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
            Cómo funciona
          </h2>
        </motion.div>

        <div className="space-y-5">
          {PASOS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-7 flex items-start gap-5"
            >
              <span className="text-3xl lg:text-4xl font-black italic text-red-500 shrink-0">
                {p.n}
              </span>
              <div>
                <h3 className="text-lg font-bold mb-1">{p.titulo}</h3>
                <p className="text-sm lg:text-base text-white/70 leading-relaxed">{p.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
