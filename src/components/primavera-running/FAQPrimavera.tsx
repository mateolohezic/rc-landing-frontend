'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headlineFont } from './fonts';
import { FAQ } from './constants';

export const FAQPrimavera = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-black px-6 py-24">
      <div className="max-w-2xl mx-auto">
        <h2 className={`${headlineFont.className} text-4xl sm:text-6xl lg:text-7xl text-[#fbf1dd] text-center uppercase mb-12`}>
          Preguntas
        </h2>

        <div>
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-base">{f.q}</span>
                  <span
                    className={`shrink-0 text-[#e2941f] text-xl leading-none transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="pb-5 text-sm text-white/75 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
