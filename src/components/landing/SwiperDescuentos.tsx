'use client'

import Image from 'next/image';
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

const descuentos = [ descuento_1, descuento_2, descuento_3, descuento_4, descuento_5, descuento_6, descuento_7, descuento_8, descuento_9, descuento_10, descuento_11, descuento_12, descuento_13, descuento_14, descuento_15, descuento_16, descuento_17, descuento_18, descuento_19 ]

export const SwiperDescuentos = () => {

    const breakpoints = {
        320: { slidesPerView: 1.25, spaceBetween: 8 },
        640: { slidesPerView: 3.75, spaceBetween: 16 },
        768: { slidesPerView: 4.5 },
        1024: { slidesPerView: 4.75 },
        1280: { slidesPerView: 5.5 },
        1536: { slidesPerView: 6.5 },
    }

    return (
        <section className="w-full px-4 my-12 lg:my-24 flex flex-col justify-center items-center">
            <div className="mb-4 lg:mb-8 w-full max-w-7xl">
                <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem] text-center lg:text-start">Descuentos <b className="block text__outline">en tu suscripción</b></h2>
            </div>
            <Swiper
                breakpoints={breakpoints}
                loop
                spaceBetween={16}
                centeredSlides
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full cursor-pointer"
            >
                {descuentos.map((descuento, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-full aspect-square relative'>
                            <Image src={descuento} alt={`Descuento ${i + 1}`} className='size-full object-cover absolute top-0 left-0' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
