'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiStar } from 'react-icons/fi';

interface Testimonio {
  nombre: string;
  rol: string;
  texto: string;
  estrellas: number;
}

// Reseñas reales extraídas de directorios públicos que indexan reviews de Google
// (educacionfisica.com.ar, gimnasios.com, suamarillas, top10place, argentinafirm).
// Los autores en Google son nombres de pila — los dejamos como "Reseña en Google"
// para mantener privacidad y porque no los recuperamos individualmente.
const TESTIMONIOS: Testimonio[] = [
  {
    nombre: 'Reseña en Google',
    rol: 'Socio de RC · 5 estrellas',
    texto:
      'Excelente gimnasio, atendido por sus dueños con clases de muy buen nivel. Lugar súper recomendable.',
    estrellas: 5,
  },
  {
    nombre: 'Reseña en Google',
    rol: 'Socio de RC · 5 estrellas',
    texto:
      'Un lugar increíble para practicar el deporte que te gusta. Excelente servicio y muy buenos profesionales dictando clases.',
    estrellas: 5,
  },
  {
    nombre: 'Reseña en Google',
    rol: 'Socio de RC · 5 estrellas',
    texto:
      'Las máquinas están en perfecto estado y son de última generación. El ambiente es espacioso, climatizado e impecablemente limpio.',
    estrellas: 5,
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <FiStar
        key={i}
        className={`size-3.5 lg:size-4 ${
          i < n ? 'fill-red-500 text-red-500' : 'text-white/20'
        }`}
      />
    ))}
  </div>
);

export const TestimoniosPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-gradient-to-b from-black via-neutral-950 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Lo que dicen los que ya entrenan en RC
          </p>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-[0.95]">
            La pileta llega
            <span className="block text-red-500">a una casa con historia</span>
          </h2>
        </motion.div>

        {/* Google rating badge */}
        <motion.a
          href="https://www.google.com/search?q=RC+Gym+Tucumán"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="block mx-auto mb-10 lg:mb-14 max-w-md group"
        >
          <div className="bg-white/[0.04] hover:bg-white/[0.06] border border-white/10 hover:border-white/20 rounded-2xl px-5 py-4 lg:px-6 lg:py-5 flex items-center gap-4 lg:gap-5 transition-colors duration-300">
            {/* Google "G" logo (inline SVG, multi-color) */}
            <div className="size-10 lg:size-12 rounded-full bg-white flex items-center justify-center shrink-0">
              <svg className="size-6 lg:size-7" viewBox="0 0 48 48" aria-hidden>
                <path
                  fill="#FFC107"
                  d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.3 14.7l6.6 4.8c1.8-4.4 6.1-7.5 11.1-7.5 3.1 0 5.8 1.2 8 3l5.7-5.7C34.5 6.1 29.5 4 24 4 16 4 9.1 8.6 6.3 14.7z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.4 0 10.3-2.1 14-5.5l-6.5-5.5c-2 1.5-4.6 2.5-7.5 2.5-5.2 0-9.6-3.3-11.3-8l-6.5 5C9 39.4 16 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.3-4.1 5.7l6.5 5.5C40.7 35 44 30 44 24c0-1.3-.1-2.4-.4-3.5z"
                />
              </svg>
            </div>
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-2xl lg:text-3xl font-black tracking-tight leading-none">4.5</span>
                <Stars n={5} />
              </div>
              <p className="text-xs lg:text-sm text-white/60 mt-1">
                +2.000 reseñas en Google · RC Gym Tucumán
              </p>
            </div>
            <span className="hidden sm:block text-xs uppercase tracking-widest text-white/40 group-hover:text-red-400 transition-colors">
              Ver →
            </span>
          </div>
        </motion.a>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {TESTIMONIOS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              className="bg-neutral-900/70 border border-white/10 rounded-2xl p-6 lg:p-7 flex flex-col"
            >
              <Stars n={t.estrellas} />
              <blockquote className="mt-4 text-sm lg:text-base text-white/85 leading-relaxed flex-1">
                &ldquo;{t.texto}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-white/10">
                <p className="text-sm lg:text-base font-bold text-white">{t.nombre}</p>
                <p className="text-xs text-white/50 mt-0.5">{t.rol}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-xs lg:text-sm text-white/40 mt-8 italic"
        >
          Reseñas reales de socios de RC en Google. La pileta abre el martes 26 de mayo — los
          primeros en nadar van a ser los que reserven en preventa.
        </motion.p>
      </div>
    </section>
  );
};
