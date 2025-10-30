'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gabi from "@/assets/halloween/gabi.webp"
import raquel from "@/assets/halloween/raquel.webp"
import seba from "@/assets/halloween/seba.webp"
import Image from 'next/image';

const jury = [
  {
    name: 'Gaby Papa',
    image: gabi
  },
  {
    name: 'Seba Finkelstein',
    image: seba
  },
  {
    name: 'Raquel Soaje',
    image: raquel
  },
];

const JuryCard = ({ judge }: { judge: typeof jury[0] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -30 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-neutral-800/80 border-2 border-red-500/50 rounded-2xl overflow-hidden shadow-2xl hover:border-red-500 transition-all duration-300"
    >
      <div className="aspect-[3/4] bg-gradient-to-br from-neutral-700 to-neutral-900 relative overflow-hidden">
        <div className="size-full flex items-center justify-center">
          <Image src={judge.image} alt={judge.name} className='size-full object-cover'/>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-neutral-900 to-transparent" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl lg:text-3xl font-highrise-bold uppercase mb-2">
          {judge.name}
        </h3>
        <p className="text-lg text-red-400 uppercase font-black">Jurado</p>
      </div>
    </motion.div>
  );
}

export const JurySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 lg:py-24 px-4 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl lg:text-8xl font-highrise-bold uppercase">
            Ellos decidirán
          </h2>
          <p className="text-3xl lg:text-5xl font-highrise-bold uppercase text-red-500">
            tu destino
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {jury.map((judge, index) => (
            <JuryCard key={index} judge={judge} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl lg:text-2xl text-white/80">
            3 expertos. <span className="text-red-500 font-bold">Una decisión definitiva.</span>
          </p>
          <p className="text-lg lg:text-xl text-white/70 mt-2 italic">
            ¿Estarás a la altura?
          </p>
        </motion.div>
      </div>
    </section>
  );
}