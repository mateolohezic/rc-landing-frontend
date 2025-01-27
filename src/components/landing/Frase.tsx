'use client'

import Image from "next/image";
import { motion } from 'framer-motion';
import pattern_dot from "@/assets/home/pattern_dot.webp";
import trainner_3 from "@/assets/home/trainer_3.webp";

export const Frase = () => {
    return (
        <section className="w-full bg-background flex shadow-xl shadow-black/25 overflow-x-hidden">
            <div className="grow px-4 lg:px-24 py-4 lg:py-12 relative">
                <div className="flex flex-col justify-center relative z-20">
                    <p className="text-4xl lg:text-8xl font-highrise-bold whitespace-nowrap relative">Resultados <b className="block">que hablan.</b></p>
                    <p className="text-4xl lg:text-8xl font-highrise-bold whitespace-nowrap text-red-600">Entrenamientos <b className="block">que transforman.</b></p>
                </div>
                <div className="size-full bg-gradient-to-r from-transparent to-background absolute top-0 left-0 z-10"></div>
                <Image src={pattern_dot} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
            </div>
            <motion.div
                initial={{ opacity: 0, x: '25%' }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', bounce: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                className="w-full max-w-7xl relative"
            >
                <div className="size-full bg-gradient-to-r from-background to-transparent absolute top-0 left-0 z-10"></div>
                <Image src={trainner_3} alt="RC Gym" className="size-full object-cover object-[50%_95%] absolute top-0 left-0"/>
            </motion.div>
        </section>
    )
}
