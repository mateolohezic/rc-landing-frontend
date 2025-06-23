'use client'

import Image, { StaticImageData } from "next/image";
import { motion } from 'framer-motion';
import { RCIcon } from "@/components";
import feature_cardio from "@/assets/home/features/feature_cardio.webp";
import feature_green from "@/assets/home/features/feature_green.webp";
import feature_lessons from "@/assets/home/features/feature_lessons.webp";
import feature_muscule from "@/assets/home/features/feature_muscule.webp";
import feature_tech from "@/assets/home/features/feature_tech.webp";
import feature_train from "@/assets/home/features/feature_train.webp";
import feature_power from "@/assets/home/features/feature_power.webp";
import { useState } from "react";

interface Feature{
    title: string;
    img: StaticImageData
}

const features:Array<Feature> = [
    {
        title: 'Zona de cardio',
        img: feature_cardio
    },
    {
        title: 'Zona de musculatura',
        img: feature_muscule
    },
    {
        title: 'Lecciones acompañadas',
        img: feature_lessons
    },
    {
        title: 'Terraza al aire libre',
        img: feature_green
    },
    {
        title: 'Powerlifting',
        img: feature_power
    },
    {
        title: 'Última tecnología',
        img: feature_tech
    },
    {
        title: 'Entrenamiento deportivo',
        img: feature_train
    },
]

export const Features = () => {

    const [inView, setInView] = useState<boolean>(false);

    return (
        <section className="w-full my-24 flex flex-col justify-center items-center">
            <div className="w-full py-8 px-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-lg shadow-black/15 flex justify-center text-center">
                <h2 className="w-fit pb-2 border-b-2 border-red-500 text-5xl lg:text-9xl font-highrise-bold uppercase leading-[0.8] [word-spacing:0.25rem]">Viví la experiencia RC</h2>
            </div>
            <div className="mt-8 lg:mt-12 w-full flex justify-center relative overflow-x-clip">
                <motion.div
                    onViewportEnter={() => setInView(true)}
                    className="w-full max-w-7xl px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-4 gap-4 relative z-10"
                >
                    { inView &&
                        features.map((feature, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.125*i }}
                                key={feature.title} className="min-w-72 lg:min-w-0 w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col"
                            >
                                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                    <Image src={feature.img} alt={feature.title} className="size-full object-cover absolute top-0 left-0"/>
                                </div>
                                <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">{feature.title}</h3>
                            </motion.div>
                        ))
                    }
                </motion.div>
                <div className="hidden size-full max-w-7xl lg:flex justify-end items-end absolute top-0 left-0 right-0 mx-auto z-0">
                    <RCIcon className="fill-red-500 opacity-15 h-[75%] translate-x-1/4 translate-y-[25%]"/>
                </div>
            </div>
        </section>
    )
}
