'use client'

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
import epico_1 from "@/assets/epico/epico_1.webp";
import epico_2 from "@/assets/epico/epico_2.webp";
import epico_3 from "@/assets/epico/epico_3.webp";
import epico_4 from "@/assets/epico/epico_4.webp";
import epico_5 from "@/assets/epico/epico_5.webp";
import epico_6 from "@/assets/epico/epico_6.webp";
import epico_7 from "@/assets/epico/epico_7.webp";

const epicoImages = [epico_1, epico_2, epico_3, epico_4, epico_5, epico_6, epico_7];
const breakpoints = {
    320: { slidesPerView: 1.25 },
    640: { slidesPerView: 2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.5 },
    1280: { slidesPerView: 3.25 },
    1536: { slidesPerView: 3.25 },
}

export const SwiperEpico = () => {
    return (
        <div className="size-full">
            <Swiper
                loop
                breakpoints={breakpoints}
                spaceBetween={4}
                centeredSlides
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="size-full"
            >
                {epicoImages.map((img, i) => (
                    <SwiperSlide key={i}>
                        <div className='w-full aspect-video relative'>
                            <Image 
                                src={img} 
                                alt={`EPICO Sede - Imagen ${i + 1}`} 
                                className='size-full object-cover absolute top-0 left-0' 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}