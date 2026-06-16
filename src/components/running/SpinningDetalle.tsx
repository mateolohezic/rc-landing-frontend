'use client';

import { motion } from 'framer-motion';

const CLAVES = [
  { titulo: '40 lugares', texto: 'La clase tiene 40 cupos. Se reservan por orden de inscripción.' },
  { titulo: 'Todos los niveles', texto: 'No necesitás experiencia previa. La profesora ajusta la intensidad.' },
  { titulo: 'Con las profesoras de RC', texto: 'La dictan las profesoras de spinning de RC, en grupo y con música.' },
  { titulo: 'Llevá agua y toalla', texto: 'Es la actividad más intensa de la jornada. Vení con qué hidratarte.' },
];

export const SpinningDetalle = () => {
  return (
    <section id="spinning" className="relative w-full section-padding px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-red-400 font-bold mb-3">
            40 cupos disponibles
          </span>
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight leading-tight">
            Masterclass de spinning
          </h2>
          <p className="mt-4 text-base lg:text-lg text-white/70 max-w-2xl">
            Una clase grupal de spinning con las profesoras de RC, en bici y con música. Apta para
            todos los niveles. Tiene 40 cupos, así que conviene reservar al inscribirte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CLAVES.map((c, i) => (
            <motion.div
              key={c.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <h3 className="text-base font-black uppercase tracking-tight text-red-400 mb-2">
                {c.titulo}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">{c.texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
