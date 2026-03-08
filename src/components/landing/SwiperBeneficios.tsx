'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import beneficio_1 from "@/assets/home/beneficios/beneficio_1.webp";
import beneficio_2 from "@/assets/home/beneficios/beneficio_2.webp";
import beneficio_3 from "@/assets/home/beneficios/beneficio_3.webp";
import beneficio_4 from "@/assets/home/beneficios/beneficio_4.webp";
import beneficio_5 from "@/assets/home/beneficios/beneficio_5.webp";
import beneficio_6 from "@/assets/home/beneficios/beneficio_6.webp";
import beneficio_7 from "@/assets/home/beneficios/beneficio_7.webp";
import beneficio_8 from "@/assets/home/beneficios/beneficio_8.webp";
import beneficio_9 from "@/assets/home/beneficios/beneficio_9.webp";
import beneficio_10 from "@/assets/home/beneficios/beneficio_10.webp";
import beneficio_11 from "@/assets/home/beneficios/beneficio_11.webp";
import beneficio_12 from "@/assets/home/beneficios/beneficio_12.webp";
import beneficio_13 from "@/assets/home/beneficios/beneficio_13.webp";
import beneficio_14 from "@/assets/home/beneficios/beneficio_14.webp";
import beneficio_15 from "@/assets/home/beneficios/beneficio_15.webp";
import beneficio_16 from "@/assets/home/beneficios/beneficio_16.webp";
import beneficio_17 from "@/assets/home/beneficios/beneficio_17.webp";
import beneficio_18 from "@/assets/home/beneficios/beneficio_18.webp";

const beneficios = [beneficio_1, beneficio_2, beneficio_3, beneficio_4, beneficio_5, beneficio_6, beneficio_7, beneficio_8, beneficio_9, beneficio_10, beneficio_11, beneficio_12, beneficio_13, beneficio_14, beneficio_15, beneficio_16, beneficio_17, beneficio_18];

const breakpoints = {
    320: { slidesPerView: 1.5, spaceBetween: 12 },
    640: { slidesPerView: 3, spaceBetween: 16 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 5.5 },
    1536: { slidesPerView: 6 },
};

export const SwiperBeneficios = () => {
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
                        Beneficios <span className="text-red-500">siendo miembro</span>
                    </motion.h2>
                </div>
            </div>
            <Swiper
                breakpoints={breakpoints}
                loop
                spaceBetween={16}
                centeredSlides
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full"
            >
                {beneficios.map((beneficio, i) => (
                    <SwiperSlide key={i}>
                        <div className="w-full aspect-square rounded-xl overflow-hidden border border-white/[0.06] relative group">
                            <Image src={beneficio} alt={`Beneficio ${i + 1}`} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
