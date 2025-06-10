'use client'

import { motion } from 'framer-motion';
import { FitnessIcon, GroupIcon, GroupWorkIcon } from "@/icons"
import { useState } from 'react';

export const Bienvenido = () => {
    const [inView, setInView] = useState<boolean>(false)
    return (
        <motion.section
            initial={{ opacity: 0, y: '50%' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            onViewportEnter={() => setInView(true)}
            className="w-full max-w-7xl px-4 xl:px-0 mb-12 lg:my-24 text-center lg:text-start"
        >
            <h2 className="sr-only lg:not-sr-only lg:text-9xl font-highrise-bold uppercase leading-[0.8]">Bienvenido a RC</h2>
            <div className="mt-4 lg:mt-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
                <p className="lg:text-white/75 font-thin sr-only lg:not-sr-only">En RC Gym, creemos que el fitness es más que un objetivo: es un estilo de vida. Diseñamos un espacio motivador y profesional, pensado para ayudarte a superar tus metas y sentirte mejor cada día. ¡Únete a nuestra comunidad y transforma tu cuerpo y mente!</p>
                { inView &&
                    <div className="flex flex-col gap-8 lg:gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col lg:flex-row items-center gap-4"
                        >
                            <div className="size-12 shrink-0 bg-white/10 rounded-xl flex justify-center items-center">
                                <FitnessIcon className="size-8"/>
                            </div>
                            <div className="grow flex flex-col gap-1">
                                <h3 className="font-black uppercase tracking-widest">Instalaciones de primer nivel</h3>
                                <p className="text-sm text-white/75">Entrena con equipos de última tecnología y disfruta de un ambiente diseñado para maximizar tu rendimiento y comodidad.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.125 + 0.5 }}
                            className="flex flex-col lg:flex-row items-center gap-4"
                        >
                            <div className="size-12 shrink-0 bg-white/10 rounded-xl flex justify-center items-center">
                                <GroupIcon className="size-8"/>
                            </div>
                            <div className="grow flex flex-col gap-1">
                                <h3 className="font-black uppercase tracking-widest">Entrenadores profesionales</h3>
                                <p className="text-sm text-white/75">Recibe guía personalizada de expertos en fitness, listos para acompañarte en cada paso de tu transformación.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + 0.5 }}
                            className="flex flex-col lg:flex-row items-center gap-4"
                        >
                            <div className="size-12 shrink-0 bg-white/10 rounded-xl flex justify-center items-center">
                                <GroupWorkIcon className="size-8"/>
                            </div>
                            <div className="grow flex flex-col gap-1">
                                <h3 className="font-black uppercase tracking-widest">Clases grupales motivadoras</h3>
                                <p className="text-sm text-white/75">Desde yoga hasta HIIT, participa en una variedad de clases que se adaptan a tus objetivos y te mantienen inspirado.</p>
                            </div>
                        </motion.div>
                    </div>
                }
            </div>
        </motion.section>
    )
}
