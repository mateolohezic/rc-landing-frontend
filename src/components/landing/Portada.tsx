'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon } from "@/icons";
import portada from "@/assets/home/portada.webp";

export const Portada = () => {
    return (
        <section className="w-full lg:min-h-svh pt-28 pb-24 lg:py-0 flex flex-col justify-center items-center relative overflow-x-hidden">
            <Image priority src={portada} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
            <div className="size-full bg-gradient-to-b from-transparent to-neutral-900 absolute top-0 left-0 z-10"></div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full px-4 flex flex-col justify-center items-center text-center relative z-20"
            >
                <h2 className="lg:px-4 text-7xl lg:text-9xl text-pretty font-highrise-bold lg:border-b-2 lg:border-b-red-500">
                    Cambia tu <span className="block lg:inline">estilo de vida.</span>
                </h2>
                <p className="mt-2 lg:mt-4 w-full max-w-3xl text-lg lg:text-2xl">Descubre cómo un <b className="font-bold">cambio gradual</b> y sostenido en tus hábitos te llevara a conseguir un <b className="bg-red-500">estado de bienestar y plenitud</b>.</p>
                <Link href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/" } target="_blank" className="mt-8 lg:mt-12 block px-4 lg:px-8 py-2 lg:py-3 bg-gradient-to-r from-red-500 to-red-400 to-[150%] rounded-lg text-xl lg:text-5xl uppercase hover:opacity-80 transition-200">Conseguí tu día de prueba</Link>
                <div className="mt-8 flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-8">
                    <p className="text-lg flex items-center gap-2"><CheckIcon className="text-2xl text-red-500"/>Empezá el cambio hoy.</p>
                    <p className="text-lg flex items-center gap-2"><CheckIcon className="text-2xl text-red-500"/>Abierto domingos y feriados.</p>
                    <p className="text-lg flex items-center gap-2"><CheckIcon className="text-2xl text-red-500"/>Para todas las edades.</p>
                </div>
            </motion.div>
        </section>
    )
}
