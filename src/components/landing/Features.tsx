'use client'

import Image, { StaticImageData } from "next/image";
import { motion } from 'framer-motion';
import feature_cardio from "@/assets/home/features/feature_cardio.webp";
import feature_green from "@/assets/home/features/feature_green.webp";
import feature_lessons from "@/assets/home/features/feature_lessons.webp";
import feature_muscule from "@/assets/home/features/feature_muscule.webp";
import feature_tech from "@/assets/home/features/feature_tech.webp";
import feature_train from "@/assets/home/features/feature_train.webp";
import feature_power from "@/assets/home/features/feature_power.webp";

interface Feature {
    title: string;
    img: StaticImageData;
}

const features: Feature[] = [
    { title: 'Zona de cardio', img: feature_cardio },
    { title: 'Zona de musculatura', img: feature_muscule },
    { title: 'Lecciones acompañadas', img: feature_lessons },
    { title: 'Terraza al aire libre', img: feature_green },
    { title: 'Powerlifting', img: feature_power },
    { title: 'Última tecnología', img: feature_tech },
    { title: 'Entrenamiento deportivo', img: feature_train },
];

export const Features = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 section-padding">
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Viví la <span className="text-red-500">experiencia</span> RC
                </motion.h2>
            </div>

            {/* Top row: 1 large + 2x2 grid */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                {/* Large feature */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group relative rounded-2xl overflow-hidden border border-white/[0.06] h-64 sm:h-80 lg:h-[28rem] w-full lg:w-1/2"
                >
                    <Image
                        src={features[0].img}
                        alt={features[0].title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                        <h3 className="text-lg lg:text-xl font-bold uppercase tracking-wide">
                            {features[0].title}
                        </h3>
                        <div className="w-8 h-0.5 bg-red-500 mt-2 group-hover:w-14 transition-all duration-500" />
                    </div>
                </motion.div>

                {/* 2x2 grid */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4 w-full lg:w-1/2">
                    {features.slice(1, 5).map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i + 1) * 0.06 }}
                            className="group relative rounded-2xl overflow-hidden border border-white/[0.06] h-36 sm:h-40 lg:h-[calc(14rem-0.5rem)]"
                        >
                            <Image
                                src={feature.img}
                                alt={feature.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide">
                                    {feature.title}
                                </h3>
                                <div className="w-6 h-0.5 bg-red-500 mt-1.5 group-hover:w-12 transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom row: 2 remaining */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-3 lg:mt-4">
                {features.slice(5).map((feature, i) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i + 5) * 0.06 }}
                        className="group relative rounded-2xl overflow-hidden border border-white/[0.06] h-48 sm:h-56 lg:h-64"
                    >
                        <Image
                            src={feature.img}
                            alt={feature.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                            <h3 className="text-sm lg:text-base font-bold uppercase tracking-wide">
                                {feature.title}
                            </h3>
                            <div className="w-6 h-0.5 bg-red-500 mt-1.5 group-hover:w-12 transition-all duration-500" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
