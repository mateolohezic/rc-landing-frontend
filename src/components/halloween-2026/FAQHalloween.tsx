'use client';

import { useState } from 'react';
import { headlineFont } from './fonts';
import { FAQ } from './constants';

export const FAQHalloween = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#0a0a0a] px-6 py-20 sm:px-10 sm:py-28 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <h2 className={`${headlineFont.className} italic font-black uppercase text-4xl sm:text-6xl leading-[0.9] text-[#f3ece2] mb-10`}>
          Preguntas
        </h2>
        <div className="border-t border-white/15">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/15">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-hw-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left text-[#f3ece2] hover:text-[#f26b1d] transition-colors"
                >
                  <span className="text-base sm:text-lg font-medium">{f.q}</span>
                  <span aria-hidden className="text-xl leading-none text-[#f26b1d]">{isOpen ? '−' : '+'}</span>
                </button>
                <div id={`faq-hw-${i}`} hidden={!isOpen} className="pb-6 pr-10 text-[#f3ece2]/75 leading-relaxed">
                  {f.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
