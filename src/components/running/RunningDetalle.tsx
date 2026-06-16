'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import runnerImg from '@/assets/running/running.webp';

const CIRCUITOS = [
  {
    dist: '3K',
    titulo: 'Para todos',
    texto:
      'Apto para toda la familia. Lo podés correr o caminar. La distancia ideal si recién empezás.',
  },
  {
    dist: '5K',
    titulo: 'Un paso más',
    texto:
      'Para quienes ya entrenan running y quieren más distancia. También a ritmo libre.',
  },
];

const CLAVES = ['A ritmo libre', 'Sin clasificación', 'En familia', 'Al aire libre'];

export const RunningDetalle = () => {
  return (
    <section id="running" className="relative w-full section-padding px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden order-last lg:order-first"
        >
          <Image
            src={runnerImg}
            alt="Grupo de RC corriendo al aire libre"
            placeholder="blur"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover object-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-red-400 font-bold mb-3">
            Running participativo
          </span>
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
            Corré 3K o 5K
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/70">
            Dos recorridos por los espacios verdes de la sede Terrazas, de 3K y 5K. Los hacés a
            ritmo libre, sin cronómetro ni clasificación. Elegís la distancia al inscribirte.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {CIRCUITOS.map((c) => (
              <div key={c.dist} className="glass-card p-6">
                <span className="text-4xl font-black text-red-500 leading-none">{c.dist}</span>
                <h3 className="mt-3 text-base font-black uppercase tracking-tight">{c.titulo}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{c.texto}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {CLAVES.map((k) => (
              <span
                key={k}
                className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white/70 font-bold uppercase tracking-wider"
              >
                {k}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
