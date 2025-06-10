'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ClockIcon } from '@/icons';
import { RCIcon } from '@/components';
import sede_barrio_norte from "@/assets/home/sedes/sede_barrio_norte.webp";
import sede_barrio_sur from "@/assets/home/sedes/sede_barrio_sur.webp";
import sede_tafi_viejo from "@/assets/home/sedes/sede_tafi_viejo.webp";
import sede_yerba_buena from "@/assets/home/sedes/sede_yerba_buena.webp";

const sedes = [
    {
        title: "Yerba Buena",
        description: "Contamos con una amplia terraza al aire libre, wifi, duchas, vestuarios, secador de pelo, dispenser de agua, salones climatizados y estacionamiento.",
        location: "Av Aconquija 2122",
        img: sede_yerba_buena,
        clases: ["Funcional", "Spinning", "Yoga", "Full Body", "Pilates MAT", "Body Pump", "Ritmos Latinos", "TRX", "Boxeo", "HIT", "Calistenia"],
        horarios: {
            semana: "6:00 a 22:30",
            sabado: "9:00 a 13:00 y 16:00 a 20:00",
            domingo: "17:00 a 20:00"
        },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816454929&text&type=phone_number&app_absent=0"
    },
    {
        title: "Barrio Sur",
        description: "Contamos con un patio al aire, duchas, vestuarios, secador de pelo, espacio para break time, salones climatizados y terraza al aire libre.",
        location: "9 de Julio 676",
        img: sede_barrio_sur,
        clases: ["Funcional", "Spinning", "Pilates MAT", "Calistenia", "Crossfit", "Zumba"],
        horarios: {
            semana: "6:00 a 23:00",
            sabado: "9:00 a 13:00 y 16:00 a 20:00",
            domingo: "17:00 a 20:00"
        },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493812094717&text&type=phone_number&app_absent=0"
    },
    {
        title: "Tafí Viejo",
        description: "Contamos con espacio al aire libre, duchas, vestuarios, secador de pelo, salones climatizados y estacionamiento.",
        location: "Av Constitución 2400",
        img: sede_tafi_viejo,
        clases: ["Funcional", "Spinning", "Yoga", "GAP", "Ritmos", "Full Body"],
        horarios: {
            semana: "6:00 a 22:30",
            sabado: "9:00 a 13:00 y 16:00 a 20:00",
            domingo: "17:00 a 20:00"
        },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493815145543&text&type=phone_number&app_absent=0"
    },
    {
        title: "Barrio Norte",
        description: "Contamos con duchas, vestuarios, salones climatizados y dispenser de agua.",
        location: "Junín 567",
        img: sede_barrio_norte,
        clases: ["Aeróbicos", "Spinning", "Funcional", "BAP", "Personal Class"],
        horarios: {
            semana: "7:00 a 22:00",
            sabado: "9:00 a 16:00",
            domingo: ""
        },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816959673&text&type=phone_number&app_absent=0"
    }
];

export const Sedes = () => {
    const [selectedSede, setSelectedSede] = useState(sedes[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 my-12 lg:my-24 text-center lg:text-start">
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem]"
            >
                <span className="text__outline">Conocé nuestras</span> <b className="block">sedes</b>
            </motion.h2>
            <div className="lg:hidden mt-6 relative z-10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-4 py-3 bg-zinc-800 text-white rounded-lg border border-white/20 flex justify-between items-center"
                >
                    <span className="text-lg">{selectedSede.title}</span>
                    <svg className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute w-full mt-2 bg-zinc-900 border border-white/20 rounded-lg shadow-lg overflow-hidden"
                        >
                            {sedes.map((sede, i) => (
                                <li key={i}>
                                    <button
                                        onClick={() => {
                                            setSelectedSede(sede);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 hover:bg-zinc-700 transition-colors ${
                                            selectedSede.title === sede.title ? 'bg-zinc-800 font-bold' : ''
                                        }`}
                                    >
                                        {sede.title}
                                    </button>
                                </li>
                            ))}
                                <li>
                                    <Link href={"/terrazas"}
                                        className={`w-full text-left px-4 py-3 bg-red-600 hover:bg-zinc-700 transition-colors flex justify-between items-center`}
                                    >
                                        Terrazas <span className=' text-xs uppercase tracking-widest'>Nueva sede</span>
                                    </Link>
                                </li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
            <div className="hidden lg:grid grid-cols-5 gap-6 mt-4 lg:mt-8">
                {sedes.map((sede, idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedSede(sede)}
                        className={`w-full aspect-square rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer transition-all border-2 ${selectedSede.title === sede.title ? "bg-gradient-to-br from-background to-red-600 border-white" : "bg-background-sidebar hover:bg-background-sidebar/25 border-background-sidebar hover:border-white/25" }`}
                    >
                        <RCIcon className="w-16 fill-white" />
                        <h3 className="text-5xl font-highrise-bold uppercase">{sede.title}</h3>
                    </button>
                ))}
                {/* <button
                        key={idx}
                        onClick={() => setSelectedSede(sede)}
                        className={`w-full aspect-square rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer transition-all border-2 ${selectedSede.title === sede.title ? "bg-gradient-to-br from-background to-red-600 border-white" : "bg-background-sidebar hover:bg-background-sidebar/25 border-background-sidebar hover:border-white/25" }`}
                    >
                        <RCIcon className="w-16 fill-white" />
                        <h3 className="text-5xl font-highrise-bold uppercase">{sede.title}</h3>
                </button> */}
                <Link href={"/terrazas"} className="w-full aspect-square rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer transition-all border-2 bg-red-600 hover:bg-red-500 border-red-600 hover:border-red-500 relative">
                    <div className='w-fit px-4 py-1 bg-white rounded-lg text-red-600 text-lg font-bold uppercase -translate-y-1/2 absolute top-0 left-0 right-0 mx-auto'>Nueva sede</div>
                    <RCIcon className="w-16 fill-white" />
                    <h3 className="text-5xl font-highrise-bold uppercase">Terrazas</h3>
                </Link>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedSede.title}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    className="mt-8 flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
                >
                    <motion.div
                        key={selectedSede.title}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full lg:w-auto bg-zinc-800 lg:grow aspect-square rounded-xl overflow-hidden relative"
                    >
                        <Image src={selectedSede.img} alt={`Sede ${selectedSede.title}`} className="size-full object-cover absolute top-0 left-0" />
                    </motion.div>
                    <div className="w-full max-w-2xl flex flex-col items-center lg:items-start lg:pt-8 lg:pl-4">
                        <h3 className="text-6xl lg:text-9xl font-highrise-bold">{selectedSede.title}</h3>
                        <h4 className='text-xl uppercase'>{selectedSede.location}</h4>
                        <p className='mt-4'>{selectedSede.description}</p>
                        <div className='mt-8 lg:mt-4 w-fit bg-zinc-700 text-sm rounded-2xl overflow-hidden flex relative'>
                            <div className='w-12 shrink-0 bg-zinc-800 flex justify-center items-center'>
                                <ClockIcon className='size-6 shrink-0' />
                            </div>
                            <ul className='p-3 flex font-highrise flex-col text-start'>
                                <li><b className='font-bold'>Lunes a viernes</b> - {selectedSede.horarios.semana}</li>
                                <li><b className='font-bold'>Sábados</b> - {selectedSede.horarios.sabado}</li>
                                {selectedSede.horarios.domingo && (
                                    <li><b className='font-bold'>Domingos</b> - {selectedSede.horarios.domingo}</li>
                                )}
                            </ul>
                        </div>
                        <ul className='mt-8 lg:mt-4 w-full flex justify-center lg:justify-start flex-wrap gap-2'>
                            {selectedSede.clases.map((clase, i) => (
                                <li key={i} className='px-3 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm bg-zinc-800 rounded-full border border-white/25'>{clase}</li>
                            ))}
                        </ul>
                        <div className="mt-8 lg:mt-12 w-full">
                            <Link
                                href={selectedSede.phonenumber}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full lg:w-fit px-6 py-3 rounded bg-red-600 hover:bg-red-400 transition-150 inline-block"
                            >
                                Inscribite ahora
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section>
    );
}