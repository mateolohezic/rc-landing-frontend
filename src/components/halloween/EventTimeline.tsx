'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    time: '19:00',
    icon: '🎮',
    title: 'Kermés arranca',
    description: 'Jugás, ganás, votás.',
  },
  {
    time: '19:40',
    icon: '💪',
    title: 'Competencia brutal',
    description: 'Las sedes se destrozan.',
  },
  {
    time: '20:40',
    icon: '👻',
    title: 'Desfile de disfraces',
    description: 'Tu momento de gloria.',
  },
  {
    time: '22:00',
    icon: '🏆',
    title: 'Coronación',
    description: 'Se anuncian ganadores.',
  },
];

const TimelineItem = ({ event, index, isLast }: { event: typeof timelineEvents[0]; index: number; isLast: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex gap-6 relative"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="shrink-0 w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex flex-col items-center justify-center border-4 border-neutral-900 shadow-xl relative z-10"
      >
        <span className="text-xl lg:text-2xl font-black">{event.time}</span>
      </motion.div>
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : { height: 0 }}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
          className="absolute left-12 lg:left-16 top-24 lg:top-32 w-1 bg-gradient-to-b from-red-500 to-red-600"
          style={{ height: 'calc(100% + 2rem)' }}
        />
      )}
      <div className="flex-1 pb-4 lg:pb-16">
        <motion.div
          whileHover={{ x: 10 }}
          className="bg-neutral-800/50 border-2 border-red-500/30 rounded-xl p-4 lg:p-6 hover:border-red-500 transition-all duration-300"
        >
          <div className="flex items-end gap-4 mb-2">
            <span className="hidden lg:inline-block lg:text-5xl">{event.icon}</span>
            <h3 className="text-lg font-black lg:text-3xl lg:font-highrise-bold uppercase text-red-500">
              {event.title}
            </h3>
          </div>
          <p className="lg:text-xl text-white/80 lg:ml-20">
            {event.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export const EventTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 lg:py-24 px-4 bg-neutral-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl lg:text-8xl font-highrise-bold uppercase mb-4">
            Una noche especial,
          </h2>
          <p className="text-4xl lg:text-6xl font-highrise-bold uppercase text-red-500">
            minuto a minuto
          </p>
        </motion.div>

        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              index={index}
              isLast={index === timelineEvents.length - 1}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center text-lg lg:text-2xl text-white/70 mt-12 italic"
        >
          4 horas. 3 competencias. Infinitas historias.
        </motion.p>
      </div>
    </section>
  );
}