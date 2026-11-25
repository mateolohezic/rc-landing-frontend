'use client';

import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FAQ_EMPRESAS } from './constants';
import faqImg from '@/assets/home/trainer_3.webp';

const FAQItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 lg:py-6 flex items-center justify-between text-left gap-4 group"
      >
        <span className="text-base lg:text-lg font-bold group-hover:text-red-400 transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-red-500 shrink-0"
        >
          ▼
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 lg:pb-6 text-white/75 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQEmpresas = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-neutral-950">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:block relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60"
        >
          <Image
            src={faqImg}
            alt="Socio entrenando en RC Gym"
            fill
            sizes="40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="mb-8 lg:mb-10"
          >
            <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-4">Dudas</p>
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight uppercase leading-tight">
              Preguntas frecuentes
            </h2>
            <p className="mt-3 text-sm lg:text-base text-white/60">
              Si tu duda no está acá, te respondemos por WhatsApp.
            </p>
          </motion.div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-4 lg:p-6">
            {FAQ_EMPRESAS.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
