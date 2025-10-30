'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: '¿Tengo que pagar entrada?',
    answer: 'NO. El evento es 100% gratuito. Solo reservás tu lugar.',
  },
  {
    question: '¿Puedo ir sin disfraz?',
    answer: 'Sí, pero te perdés la chance de ganar hasta $420.000 en entrenamiento gratis.',
  },
  {
    question: '¿Tengo que ser socio de RC para ir?',
    answer: 'NO. El evento es abierto. Vení con quien quieras.',
  },
  {
    question: '¿Hay límite de edad?',
    answer: 'El evento es para mayores de 16 años. Menores acompañados por adultos.',
  },
  {
    question: '¿Qué pasa si no consigo cupo?',
    answer: 'Te quedás afuera. No hay segunda oportunidad este año.',
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-white/10 last:border-0"
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ x: 10 }}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg lg:text-2xl font-bold group-hover:text-red-500 transition-colors duration-300">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-red-500 ml-4"
        >
          ▼
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ y: -10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              className="pb-4 lg:pb-6 lg:pl-12 text-lg lg:text-xl text-white/80"
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export const FAQAccordion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl lg:text-8xl font-highrise-bold uppercase mb-6">
            Preguntas frecuentes
          </h2>
        </motion.div>
        <div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 lg:p-10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}