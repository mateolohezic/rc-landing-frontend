'use client'

import { motion } from 'framer-motion';
import { FitnessIcon, GroupIcon, GroupWorkIcon } from "@/icons";

const features = [
    {
        Icon: FitnessIcon,
        title: "Instalaciones de primer nivel",
        description: "Equipos de última tecnología en un ambiente diseñado para maximizar tu rendimiento y comodidad.",
        gradient: "from-red-500/20 to-transparent",
    },
    {
        Icon: GroupIcon,
        title: "Entrenadores profesionales",
        description: "Guía personalizada de expertos en fitness, listos para acompañarte en cada paso de tu transformación.",
        gradient: "from-orange-500/20 to-transparent",
    },
    {
        Icon: GroupWorkIcon,
        title: "Clases grupales motivadoras",
        description: "Desde yoga hasta HIIT, una variedad de clases que se adaptan a tus objetivos y te mantienen inspirado.",
        gradient: "from-amber-500/20 to-transparent",
    },
];

export const Bienvenido = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 section-padding">
            <div className="text-center mb-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold"
                >
                    Bienvenido a RC
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-4 text-4xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Más que un gimnasio
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 max-w-2xl mx-auto text-white/50 text-lg"
                >
                    En RC Gym, creemos que el fitness es un estilo de vida. Diseñamos un espacio motivador y profesional, pensado para ayudarte a superar tus metas.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="group p-8 glass-card-hover relative overflow-hidden"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative z-10">
                            <div className="size-14 rounded-2xl bg-white/[0.06] border border-white/[0.08] flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.Icon className="size-7 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{feature.title}</h3>
                            <p className="text-white/50 leading-relaxed">{feature.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
