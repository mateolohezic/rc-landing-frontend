'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { InstagramIcon } from '@/icons';
import { COMEDOR } from './constants';
import comedor1 from '@/assets/running/comedor-1.webp';
import comedor2 from '@/assets/running/comedor-2.webp';
import comedor3 from '@/assets/running/comedor-3.webp';

const FOTOS = [
  { src: comedor1, alt: 'Chico de la Fundación Copa de Leche Los Indiecitos' },
  { src: comedor2, alt: 'Chicos en un taller de la Fundación' },
  { src: comedor3, alt: 'Chicos jugando al aire libre' },
];

export const ComedorRunning = () => {
  return (
    <section className="relative w-full section-padding px-4 bg-neutral-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 lg:p-10 border-red-500/20"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-red-400 font-bold mb-4">
            A beneficio de
          </span>
          <h2 className="text-2xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
            {COMEDOR.nombre}
          </h2>

          <p className="mt-3 text-base lg:text-lg text-white/70 font-medium">
            El comedor al que va lo que se recaude en el RC Running.
          </p>

          <p className="mt-5 text-base lg:text-lg text-white/75 leading-relaxed">
            Un equipo de 9 personas trabaja ad honorem y brinda almuerzo y merienda a{' '}
            <b className="text-white font-bold">{COMEDOR.personas} personas</b>, en su mayoría
            chicos y familias, además de apoyo escolar.
          </p>

          <p className="mt-4 text-base text-white/60">
            Por eso la entrada es solidaria. Con tu alimento no perecedero colaborás directamente
            con el comedor.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3 text-sm">
            <span className="text-white/50">{COMEDOR.direccion}</span>
            <a
              href={`https://www.instagram.com/${COMEDOR.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors font-bold"
            >
              <InstagramIcon /> @{COMEDOR.instagram}
            </a>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:gap-3">
            {FOTOS.map((f) => (
              <div
                key={f.alt}
                className="relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  placeholder="blur"
                  fill
                  sizes="(max-width: 768px) 33vw, 220px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
