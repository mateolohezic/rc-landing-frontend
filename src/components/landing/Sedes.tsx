'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ClockIcon } from '@/icons';
import sede_barrio_norte from "@/assets/home/sedes/sede_barrio_norte.webp";
import sede_barrio_sur from "@/assets/home/sedes/sede_barrio_sur.webp";
import sede_tafi_viejo from "@/assets/home/sedes/sede_tafi_viejo.webp";
import sede_yerba_buena from "@/assets/home/sedes/sede_yerba_buena.webp";
import sede_terrazas from "@/assets/home/sedes/sede_terrazas.webp";
import sede_epico from "@/assets/home/sedes/sede_epico.webp";

const sedes = [
    {
        title: "Épico",
        description: "Contamos con salones climatizados, dispenser de agua fría y caliente, vestuarios, duchas, lockers y zona de cardio equipada.",
        location: "San Luis 2120, Yerba Buena",
        img: sede_epico,
        clases: ["Spinning", "Funcional", "GAP"],
        horarios: { semana: "6:00 a 23:00", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816396164&text&type=phone_number&app_absent=0"
    },
    {
        title: "Terrazas",
        description: "Contamos con espacio verde outdoor, estacionamiento gratuito, WiFi, salones climatizados, dispenser de agua fria y caliente, vestuarios, duchas y lockers con candado",
        location: "Av. Perón 2400",
        img: sede_terrazas,
        clases: ["Spinning", "Funcional HIT", "Circuito abdominal"],
        horarios: { semana: "5:00 a 23:00", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "9:00 a 12:00 y 17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493815145550&text&type=phone_number&app_absent=0"
    },
    {
        title: "Aconquija",
        description: "Contamos con una amplia terraza al aire libre, wifi, duchas, vestuarios, secador de pelo, dispenser de agua, salones climatizados y estacionamiento.",
        location: "Av Aconquija 2122",
        img: sede_yerba_buena,
        clases: ["Funcional", "Spinning", "Yoga", "Full Body", "Pilates MAT", "Body Pump", "Ritmos Latinos", "TRX", "Boxeo", "HIT", "Calistenia"],
        horarios: { semana: "6:00 a 22:30", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816454929&text&type=phone_number&app_absent=0"
    },
    {
        title: "Barrio Sur",
        description: "Contamos con un patio al aire, duchas, vestuarios, secador de pelo, espacio para break time, salones climatizados y terraza al aire libre.",
        location: "9 de Julio 676",
        img: sede_barrio_sur,
        clases: ["Funcional", "Spinning", "Pilates MAT", "Calistenia", "Crossfit", "Zumba"],
        horarios: { semana: "6:00 a 23:00", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493812094717&text&type=phone_number&app_absent=0"
    },
    {
        title: "Tafí Viejo",
        description: "Contamos con espacio al aire libre, duchas, vestuarios, secador de pelo, salones climatizados y estacionamiento.",
        location: "Av Constitución 2400",
        img: sede_tafi_viejo,
        clases: ["Funcional", "Spinning", "Yoga", "GAP", "Ritmos", "Full Body"],
        horarios: { semana: "6:00 a 22:30", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493815145543&text&type=phone_number&app_absent=0"
    },
    {
        title: "Barrio Norte",
        description: "Contamos con duchas, vestuarios, salones climatizados y dispenser de agua.",
        location: "Junín 567",
        img: sede_barrio_norte,
        clases: ["Aeróbicos", "Spinning", "Funcional", "BAP", "Aero Box"],
        horarios: { semana: "7:00 a 22:00", sabado: "9:00 a 16:00", domingo: "" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816959673&text&type=phone_number&app_absent=0"
    }
];

export const Sedes = () => {
    const [selectedSede, setSelectedSede] = useState(sedes[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="sedes" className="w-full max-w-7xl mx-auto px-6 section-padding">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Conocé nuestras <span className="text-red-500">sedes</span>
                </motion.h2>
            </div>

            {/* Mobile dropdown */}
            <div className="lg:hidden mb-6 relative z-10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-5 py-4 glass-card flex justify-between items-center"
                >
                    <span className="text-lg font-semibold">{selectedSede.title}</span>
                    <svg className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute w-full mt-2 glass-strong rounded-2xl overflow-hidden z-20"
                        >
                            {sedes.map((sede, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => { setSelectedSede(sede); setIsOpen(false); }}
                                        className={`w-full text-left px-5 py-3.5 hover:bg-white/[0.06] transition-colors ${selectedSede.title === sede.title ? 'bg-white/[0.08] text-red-400' : 'text-white/70'}`}
                                    >
                                        {sede.title}
                                    </button>
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop sede selector */}
            <div className="hidden lg:grid grid-cols-6 gap-3 mb-12">
                {sedes.map((sede, idx) => (
                    <motion.button
                        key={idx}
                        onClick={() => setSelectedSede(sede)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-5 rounded-xl flex flex-col justify-center items-center gap-2 cursor-pointer transition-all duration-300 border ${
                            selectedSede.title === sede.title
                                ? "bg-red-600/20 border-red-500/50 shadow-lg shadow-red-600/10"
                                : "glass-card hover:bg-white/[0.06]"
                        }`}
                    >
                        <h3 className={`text-lg font-bold uppercase tracking-wide ${selectedSede.title === sede.title ? 'text-white' : 'text-white/60'}`}>
                            {sede.title}
                        </h3>
                    </motion.button>
                ))}
            </div>

            {/* Sede detail */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedSede.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row">
                        {/* Image - adapts to text height on desktop */}
                        <div className="w-full lg:w-1/2 aspect-[16/10] lg:aspect-auto relative overflow-hidden">
                            <Image
                                src={selectedSede.img}
                                alt={`Sede ${selectedSede.title}`}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 hidden lg:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden" />
                        </div>

                        {/* Info - defines the row height */}
                        <div className="w-full lg:w-1/2 p-6 lg:py-8 lg:px-10 flex flex-col justify-center">
                            <h3 className="text-4xl lg:text-6xl font-highrise-bold">{selectedSede.title}</h3>
                            <p className="mt-1 text-sm uppercase tracking-widest text-red-400">{selectedSede.location}</p>
                            <p className="mt-4 text-white/50 leading-relaxed">{selectedSede.description}</p>

                            {/* Horarios */}
                            <div className="mt-6 p-4 bg-white/[0.04] rounded-xl border border-white/[0.06]">
                                <div className="flex items-center gap-2 mb-3">
                                    <ClockIcon className="size-4 text-red-500" />
                                    <span className="text-sm font-semibold uppercase tracking-wider">Horarios</span>
                                </div>
                                <div className="space-y-1 text-sm text-white/60">
                                    <p><span className="text-white/80 font-medium">Lun - Vie:</span> {selectedSede.horarios.semana}</p>
                                    <p><span className="text-white/80 font-medium">Sábados:</span> {selectedSede.horarios.sabado}</p>
                                    {selectedSede.horarios.domingo && (
                                        <p><span className="text-white/80 font-medium">Domingos:</span> {selectedSede.horarios.domingo}</p>
                                    )}
                                </div>
                            </div>

                            {/* Clases */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {selectedSede.clases.map((clase, i) => (
                                    <span key={i} className="px-3 py-1.5 text-xs bg-white/[0.06] border border-white/[0.08] rounded-full text-white/60">
                                        {clase}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                href={selectedSede.phonenumber}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full lg:w-fit px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-center font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25 inline-block"
                            >
                                Inscribite ahora
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
};
