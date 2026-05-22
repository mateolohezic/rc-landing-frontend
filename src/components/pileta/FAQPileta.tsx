'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FAQ } from './constants';

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

export const FAQPileta = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="w-full py-20 lg:py-28 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-base text-white/70">
            Si tu duda no está acá, te respondemos por WhatsApp.
          </p>
        </motion.div>

        <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-4 lg:p-8">
          {FAQ.map((f, i) => (
            <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
