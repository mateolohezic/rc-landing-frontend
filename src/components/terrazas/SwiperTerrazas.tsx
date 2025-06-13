'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import terrazas_1 from "@/assets/terrazas/terrazas_1.webp";
import terrazas_2 from "@/assets/terrazas/terrazas_2.webp";
import terrazas_3 from "@/assets/terrazas/terrazas_3.webp";
import terrazas_4 from "@/assets/terrazas/terrazas_4.webp";

const terrazas = [terrazas_1, terrazas_2, terrazas_3, terrazas_4];

export const SwiperTerrazas = () => {

    return (
        <div className="size-full rounded-xl overflow-hidden absolute top-0 left-0 object-cover">
            <Swiper
                loop
                slidesPerView={1}
                spaceBetween={16}
                centeredSlides
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="size-full"
                >
                {terrazas.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-full aspect-video relative'>
                            <Image src={img} alt={`Beneficio ${i + 1}`} className='size-full object-cover absolute top-0 left-0' />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
