"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRightIcon,
    BeginnerIcon,
    DefinitionIcon,
    MassIcon,
    PerformanceIcon,
    SeniorIcon,
    TeenIcon,
} from "@/icons";
import { IconType } from "react-icons";

interface Entrenamiento {
    nombre: string;
    videoId: string;
    descripcion: string;
    Icon: IconType;
}

const entrenamientos: Entrenamiento[] = [
    {
        nombre: "Principiantes",
        videoId: "2ZVpx85A-VY",
        descripcion: "Entrenamiento general para mejorar tu resistencia, fuerza y bienestar general.",
        Icon: BeginnerIcon,
    },
    {
        nombre: "Definición",
        videoId: "e7eyX-uLLn8",
        descripcion: "Mejorá tu rendimiento en disciplinas específicas con técnicas avanzadas.",
        Icon: DefinitionIcon,
    },
    {
        nombre: "Masa muscular",
        videoId: "kdrgMt0J3w0",
        descripcion: "Programas pensados para rehabilitación, movilidad y mejora integral del cuerpo.",
        Icon: MassIcon,
    },
    {
        nombre: "Alto rendimiento",
        videoId: "4c09mBHzOhI",
        descripcion: "Movimientos naturales para entrenar tu cuerpo como una máquina eficiente.",
        Icon: PerformanceIcon,
    },
    {
        nombre: "Adultos mayores",
        videoId: "j7pCt1G6Mk8",
        descripcion: "Reducción de grasa corporal y tonificación muscular sin perder energía.",
        Icon: SeniorIcon,
    },
    {
        nombre: "Adolescentes",
        videoId: "nk_XolRHQZo",
        descripcion: "Plan adaptado a jóvenes para desarrollo físico y hábitos saludables.",
        Icon: TeenIcon,
    },
];

export const Entrenamientos = () => {
    const [active, setActive] = useState(entrenamientos[0].nombre);
    const entrenamientoActual = entrenamientos.find((e) => e.nombre === active)!;

    return (
        <section id="entrenamientos" className="w-full max-w-7xl mx-auto px-6 section-padding">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Entrenamientos <span className="text-red-500">que se adaptan</span>
                </motion.h2>
            </div>

            {/* Tabs - horizontal scroll on mobile */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 mb-6">
                {entrenamientos.map(({ nombre, Icon }) => (
                    <button
                        key={nombre}
                        onClick={() => setActive(nombre)}
                        className={`flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-full border transition-all duration-300 text-sm font-medium shrink-0 ${
                            active === nombre
                                ? "bg-red-600 border-red-600 text-white"
                                : "border-white/[0.1] bg-white/[0.03] text-white/50 hover:text-white hover:bg-white/[0.06]"
                        }`}
                    >
                        <Icon className="text-lg shrink-0" />
                        {nombre}
                    </button>
                ))}
            </div>

            {/* Video + Info */}
            <div className="glass-card overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Video - full width on mobile, 2/3 on desktop */}
                    <div className="w-full lg:flex-1 aspect-video relative bg-black">
                        <AnimatePresence mode="wait">
                            <motion.iframe
                                key={entrenamientoActual.videoId}
                                src={`https://www.youtube.com/embed/${entrenamientoActual.videoId}?rel=0&modestbranding=1`}
                                title={`Video: ${entrenamientoActual.nombre}`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="size-full absolute inset-0"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </AnimatePresence>
                    </div>

                    {/* Info sidebar */}
                    <div className="w-full lg:w-72 xl:w-80 shrink-0 p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.06]">
                        <div>
                            <div className="size-11 rounded-xl bg-red-600/20 border border-red-500/30 flex justify-center items-center mb-4">
                                <entrenamientoActual.Icon className="size-5 text-red-400" />
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={entrenamientoActual.nombre}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <h3 className="text-3xl font-highrise-bold">{entrenamientoActual.nombre}</h3>
                                    <p className="mt-2 text-sm text-white/50 leading-relaxed">{entrenamientoActual.descripcion}</p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <Link
                            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
                            target="_blank"
                            className="mt-6 w-full px-5 py-3 rounded-full bg-red-600 hover:bg-red-500 flex justify-between items-center font-semibold transition-all duration-300 text-sm"
                        >
                            <span>Empezá ahora</span>
                            <ArrowRightIcon className="text-lg" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
