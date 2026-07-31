'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const dolores = [
  {
    titulo: 'Bajan tus ganas',
    desc: 'El frío te corta la rutina. Llegás a casa y ya no querés salir.',
  },
  {
    titulo: 'Tus articulaciones piden ayuda',
    desc: 'Rodillas, espalda, hombros. El gym te exige cuando tu cuerpo necesita descanso.',
  },
  {
    titulo: 'Los chicos sin clases',
    desc: 'Las piletas al aire libre cierran. Y vos perdés el lugar donde mandar a los pibes.',
  },
  {
    titulo: 'Perdés meses de progreso',
    desc: 'Cuando vuelve el calor, hay que arrancar de nuevo. Otra vez.',
  },
];

export const ProblemaPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">
            Llega el frío y todo se complica
          </p>
          <h2 className="text-4xl lg:text-7xl font-black tracking-tight uppercase leading-tight">
            En invierno la mayoría
            <span className="block text-red-500">deja de entrenar.</span>
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            Te suena conocido, ¿no?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {dolores.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-900/70 border border-white/10 rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="size-10 shrink-0 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 font-black tracking-tight">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold uppercase">{d.titulo}</h3>
                  <p className="mt-2 text-white/70 leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-2xl lg:text-3xl font-black tracking-tight uppercase mt-14"
        >
          ¿Y si este año fuera <span className="text-red-500">distinto?</span>
        </motion.p>
      </div>
    </section>
  );
};
