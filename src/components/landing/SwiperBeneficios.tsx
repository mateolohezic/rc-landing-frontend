'use client'

import Image from 'next/image';
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

const beneficios = [ beneficio_1, beneficio_2, beneficio_3, beneficio_4, beneficio_5, beneficio_6, beneficio_7, beneficio_8, beneficio_9, beneficio_10, beneficio_11, beneficio_12, beneficio_13, beneficio_14, beneficio_15, beneficio_16 ];

export const SwiperBeneficios = () => {

    const breakpoints = {
        320: { slidesPerView: 1.25, spaceBetween: 8 },
        640: { slidesPerView: 3.75, spaceBetween: 16 },
        768: { slidesPerView: 4.5 },
        1024: { slidesPerView: 4.75 },
        1280: { slidesPerView: 5.5 },
        1536: { slidesPerView: 6.5 },
    }

    return (
        <section className="w-full px-4 my-24 flex flex-col justify-center items-center">
            <div className="mb-4 lg:mb-8 w-full max-w-7xl">
                <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem] text-center lg:text-start">Beneficios <b className="block text__outline">siendo miembro</b></h2>
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
                {beneficios.map((beneficio, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-full aspect-square relative'>
                            <Image src={beneficio} alt={`Beneficio ${i + 1}`} className='size-full object-cover absolute top-0 left-0' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
