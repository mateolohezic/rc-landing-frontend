'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import descuento_1 from "@/assets/home/descuentos/descuento_1.webp";
import descuento_2 from "@/assets/home/descuentos/descuento_2.webp";
import descuento_3 from "@/assets/home/descuentos/descuento_3.webp";
import descuento_4 from "@/assets/home/descuentos/descuento_4.webp";
import descuento_5 from "@/assets/home/descuentos/descuento_5.webp";
import descuento_6 from "@/assets/home/descuentos/descuento_6.webp";
import descuento_7 from "@/assets/home/descuentos/descuento_7.webp";
import descuento_8 from "@/assets/home/descuentos/descuento_8.webp";
import descuento_9 from "@/assets/home/descuentos/descuento_9.webp";
import descuento_10 from "@/assets/home/descuentos/descuento_10.webp";
import descuento_11 from "@/assets/home/descuentos/descuento_11.webp";
import descuento_12 from "@/assets/home/descuentos/descuento_12.webp";
import descuento_13 from "@/assets/home/descuentos/descuento_13.webp";
import descuento_14 from "@/assets/home/descuentos/descuento_14.webp";
import descuento_15 from "@/assets/home/descuentos/descuento_15.webp";
import descuento_16 from "@/assets/home/descuentos/descuento_16.webp";
import descuento_17 from "@/assets/home/descuentos/descuento_17.webp";
import descuento_18 from "@/assets/home/descuentos/descuento_18.webp";
import descuento_19 from "@/assets/home/descuentos/descuento_19.webp";
import descuento_20 from "@/assets/home/descuentos/descuento_20.webp";
import descuento_21 from "@/assets/home/descuentos/descuento_21.webp";

const descuentos = [descuento_1, descuento_2, descuento_3, descuento_4, descuento_5, descuento_6, descuento_7, descuento_8, descuento_9, descuento_10, descuento_11, descuento_12, descuento_13, descuento_14, descuento_15, descuento_16, descuento_17, descuento_18, descuento_19, descuento_20, descuento_21];

const breakpoints = {
    320: { slidesPerView: 1.5, spaceBetween: 12 },
    640: { slidesPerView: 3, spaceBetween: 16 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 5.5 },
    1536: { slidesPerView: 6 },
};

export const SwiperDescuentos = () => {
    return (
        <section className="w-full section-padding overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-6 mb-10">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                    >
                        Descuentos <span className="text-red-500">exclusivos</span>
                    </motion.h2>
                </div>
            </div>
            <Swiper
                breakpoints={breakpoints}
                loop
                spaceBetween={16}
                centeredSlides
                autoplay={{ delay: 1800, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full"
            >
                {descuentos.map((descuento, i) => (
                    <SwiperSlide key={i}>
                        <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/[0.06] relative group">
                            <Image src={descuento} alt={`Descuento ${i + 1}`} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
