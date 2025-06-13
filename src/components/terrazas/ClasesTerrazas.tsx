'use client'

import { useState } from "react";
import Image from "next/image";
import clases_terrazas from "@/assets/terrazas/clases_terrazas.webp";
import { CrossIcon } from "@/icons";
import { AnimatePresence, motion } from 'framer-motion';

export const ClasesTerrazas = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <section className="w-full py-12 lg:py-24 bg-gradient-to-br from-red-500 to-red-600 px-4 text-center flex flex-col items-center gap-12">
            <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase leading-[0.8]">
                <b className="block">Clases pensadas</b> para vos
            </h2>
            <button
                className="px-8 py-3 bg-white/25 rounded-lg text-xl uppercase font-semibold hover:opacity-80 transition"
                onClick={() => setIsOpen(true)}
            >
                Ver clases
            </button>
            <AnimatePresence>
                { isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full min-h-lvh fixed top-0 left-0 z-[999999999]"
                    >
                        <div className="size-full min-h-lvh py-24 px-4 flex justify-center items-center relative">
                            <div className="size-full bg-black/75 absolute top-0 left-0" onClick={() => setIsOpen(false)}/>
                            <div className="w-full max-w-sm aspect-[9/16] relative z-10">
                                <button type="button" onClick={() => setIsOpen(false)} className="-translate-y-full absolute -top-2 right-0 z-20">
                                    <CrossIcon className="text-white size-6 hover:text-white/75 transition-150" />
                                </button>
                                <Image src={clases_terrazas} alt="Clases Sede Terrazas RC Gym" className="w-full aspect-[9/16] object-contain rounded-2xl"/>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </section>
    )
}
