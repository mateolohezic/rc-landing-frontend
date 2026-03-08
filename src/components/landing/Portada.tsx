'use client'

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckIcon } from "@/icons";
import portada from "@/assets/home/portada.webp";

const letterAnimation = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.3 + i * 0.04,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const words = ["Cambiá", "tu", "estilo", "de", "vida."];

const checkpoints = [
    "Empezá el cambio hoy",
    "Abierto domingos y feriados",
    "Para todas las edades",
];

export const Portada = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section ref={ref} className="w-full min-h-svh flex flex-col justify-center items-center relative overflow-hidden">
            {/* Parallax background */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    priority
                    src={portada}
                    alt="RC Gym"
                    className="size-full object-cover"
                    placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
            </motion.div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid opacity-30 z-[1]" />

            {/* Content */}
            <motion.div style={{ opacity }} className="w-full max-w-6xl px-6 flex flex-col justify-center items-center text-center relative z-10 pt-20">
                {/* Main heading with word reveal */}
                <h2 className="overflow-hidden">
                    <span className="flex flex-wrap justify-center gap-x-4 lg:gap-x-6">
                        {words.map((word, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterAnimation}
                                initial="hidden"
                                animate="visible"
                                className="text-5xl sm:text-7xl md:text-[6rem] lg:text-[8rem] xl:text-[9rem] font-highrise-bold uppercase leading-[0.9] tracking-tight"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </span>
                </h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-6 lg:mt-8 max-w-2xl text-base lg:text-xl text-white leading-relaxed"
                >
                    Descubrí cómo un <span className="font-semibold">cambio gradual</span> y sostenido en tus hábitos te va a llevar a conseguir un estado de <span className="text-red-400 font-semibold">bienestar y plenitud</span>.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-10 lg:mt-12 flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Link
                        href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
                        target="_blank"
                        className="group relative px-8 py-4 bg-red-600 rounded-full text-lg lg:text-xl font-bold uppercase tracking-wide overflow-hidden hover:shadow-2xl hover:shadow-red-600/30 transition-all duration-300"
                    >
                        <span className="relative z-10">Conseguí tu día de prueba</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                    <Link
                        href="#sedes"
                        className="px-8 py-4 rounded-full text-lg font-medium text-white/80 border border-white/20 hover:border-white/40 hover:text-white transition-all duration-300"
                    >
                        Conocé las sedes
                    </Link>
                </motion.div>

                {/* Checkpoints */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="mt-12 lg:mt-16 flex flex-col sm:flex-row items-center gap-3 sm:gap-8"
                >
                    {checkpoints.map((text, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 + i * 0.1 }}
                            className="flex items-center gap-2 text-sm text-white/70"
                        >
                            <CheckIcon className="text-red-500 text-base shrink-0" />
                            <span>{text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5"
                >
                    <motion.div className="w-1 h-1.5 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};
