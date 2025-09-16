'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClockIcon, LocationIcon, GroupIcon, MusicIcon } from "@/icons";
import portada from "@/assets/festival/portada_festival.webp";

export const HeroFestival = () => {
    return (
        <section className="w-full lg:min-h-svh py-36 flex flex-col justify-center items-center relative overflow-x-hidden">
            <Image priority src={portada} alt="Festival RC Club 2025 - Diversión Sana" className="size-full object-cover absolute top-0 left-0 z-0 blur-[3px]"/>
            <div className="size-full bg-gradient-to-b from-neutral-900/70 via-transparent to-neutral-900 absolute top-0 left-0 z-10"></div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full px-4 flex flex-col justify-center items-center text-center relative z-20"
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-4 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-xs lg:text-base font-semibold uppercase tracking-wider backdrop-blur-sm"
                >
                    El primer festival saludable de Tucumán
                </motion.div>
                <h1 className="text-9xl text-pretty font-highrise-bold uppercase leading-[0.9]">
                    <span className="block">Festival</span>
                    <span className="block text-red-500">RC Club</span>
                </h1>
                <p className="mt-4 lg:mt-6 w-full max-w-4xl text-xl lg:text-3xl font-light">
                    <b className="font-bold text-red-500">Un día completo</b> de música, <br /> movimiento y conexión familiar.<br /> Diversión sana al aire libre.
                </p>
                <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-3"
                    >
                        <ClockIcon className="text-2xl lg:text-3xl text-red-500" />
                        <div className="text-left">
                            <p className="text-lg lg:text-xl font-bold">Sábado 20 de Septiembre</p>
                            <p className="text-sm lg:text-base text-white/70">10:00 a 18:00 hs</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-3"
                    >
                        <LocationIcon className="text-2xl lg:text-3xl text-red-500" />
                        <div className="text-left">
                            <p className="text-lg lg:text-xl font-bold">RC Terrazas</p>
                            <p className="text-sm lg:text-base text-white/70">Yerba Buena, Tucumán</p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="mt-8 lg:mt-16"
                >
                    <Link 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScl-SB63ECM9Hdm3t5kD7q4T4bSi-o7CIFPBG2oAjh69ABOWQ/viewform"
                        target="_blank"
                        className="inline-block px-8 lg:px-12 py-4 lg:py-6 bg-gradient-to-r from-red-500 to-red-400 rounded-xl text-xl lg:text-3xl font-bold uppercase hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                        Reservar mi entrada
                    </Link>
                </motion.div>
                <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-base lg:text-lg flex items-center gap-2 text-white/80"
                    >
                        <GroupIcon className="text-xl text-green-400"/>
                        Para toda la familia
                    </motion.p>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="text-base lg:text-lg flex items-center gap-2 text-white/80"
                    >
                        <MusicIcon className="text-xl text-green-400"/>
                        Música en vivo
                    </motion.p>
                </div>
            </motion.div>
        </section>
    )
}