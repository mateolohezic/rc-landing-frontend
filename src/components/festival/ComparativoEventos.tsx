'use client'

import { motion } from 'framer-motion';
import { SunIcon, MoonIcon, RaindropIcon, BeerIcon, GroupIcon, UserIcon } from "@/icons";
import Link from 'next/link';

interface EventoComparison {
    traditional: {
        icon: React.ReactNode;
        text: string;
        bgColor: string;
    };
    festival: {
        icon: React.ReactNode;
        text: string;
        bgColor: string;
    };
}

const comparaciones: EventoComparison[] = [
    {
        traditional: {
            icon: <MoonIcon className="size-8" />,
            text: "Eventos demasiado tarde",
            bgColor: "bg-gray-600/20"
        },
        festival: {
            icon: <SunIcon className="size-8" />,
            text: "Diversión bajo el sol",
            bgColor: "bg-red-500"
        }
    },
    {
        traditional: {
            icon: <BeerIcon className="size-8" />,
            text: "Alcohol en exceso",
            bgColor: "bg-gray-600/20"
        },
        festival: {
            icon: <RaindropIcon className="size-8" />,
            text: "Hidratación inteligente",
            bgColor: "bg-red-500"
        }
    },
    {
        traditional: {
            icon: <UserIcon className="size-8" />,
            text: "+18",
            bgColor: "bg-gray-600/20"
        },
        festival: {
            icon: <GroupIcon className="size-8" />,
            text: "Espacio familiar",
            bgColor: "bg-red-500"
        }
    }
];

export const ComparativoEventos = () => {
    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 py-12 lg:py-24 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 lg:mb-20"
            >
                <h2 className="text-5xl lg:text-8xl font-highrise-bold uppercase mb-4">
                    <span className="text-red-500 block">Existe otra forma</span>
                    <span>de celebrar</span>
                </h2>
                <p className="text-xl lg:text-2xl max-w-3xl mx-auto">Descubrí una nueva manera de vivir eventos: con energía real, conexiones auténticas y diversión que alimenta el alma.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {comparaciones.map((comp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="grid grid-cols-2 lg:flex lg:flex-col gap-2 lg:gap-6"
                    >
                        <div className={`p-6 aspect-square lg:aspect-auto rounded-xl ${comp.traditional.bgColor} border border-white/10 flex justify-center items-center relative overflow-hidden`}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-white/60">
                                    {comp.traditional.icon}
                                </div>
                                <p className="text-white/70 font-medium">{comp.traditional.text}</p>
                            </div>
                            <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-white/10 rounded-full text-white/60">
                                Tradicional
                            </div>
                        </div>
                        <div className="hidden lg:flex justify-center items-center">
                            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                                <span className="font-bold text-lg">VS</span>
                            </div>
                        </div>
                        <div className={`p-6 aspect-square lg:aspect-auto rounded-xl ${comp.festival.bgColor} border-2 border-red-500/30 flex justify-center items-center relative overflow-hidden`}>
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-white">
                                    {comp.festival.icon}
                                </div>
                                <p className="font-bold text-lg">{comp.festival.text}</p>
                            </div>
                            <div className="absolute top-2 right-2 text-xs px-2 py-1 bg-red-300/20 rounded-full text-red-100 font-semibold">
                                Festival RC
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 lg:mt-24 p-8 lg:p-12 bg-red-500/10 rounded-2xl border border-red-500/50"
            >
                <h3 className="text-3xl lg:text-5xl font-highrise-bold mb-4">La diferencia está en los detalles</h3>
                <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-3xl mx-auto">Cada aspecto del Festival RC Club está pensado para que disfrutes, te conectes y te vayas con energía renovada. Sin excesos, sin arrepentimientos, solo experiencias que nutren.</p>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <Link href={"/festival#cronograma"} className="px-8 py-4 bg-red-500 hover:bg-red-600 rounded-lg font-bold uppercase transition-colors">Ver cronograma completo</Link>
                    <Link href={"/festival#ubicacion"} className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-lg font-bold uppercase transition-colors">Conocer la ubicación</Link>
                </div>
            </motion.div>
        </section>
    )
}