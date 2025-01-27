'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

export const SwiperDescuentos = () => {

    const breakpoints = {
        320: {
        slidesPerView: 2
        },
        640: {
        slidesPerView: 3
        },
        768: {
        slidesPerView: 4
        },
        1024: {
        slidesPerView: 5
        },
        1280: {
        slidesPerView: 6
        },
        1536: {
        slidesPerView: 6
        },
    }

    return (
        <section className="w-full px-4 my-12 lg:my-24 flex flex-col justify-center items-center">
            <div className="mb-4 lg:mb-8 w-full max-w-7xl">
                <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem] text-center lg:text-start">Descuentos <b className="block text__outline">en tu suscripción</b></h2>
            </div>
            <Swiper
                breakpoints={breakpoints}
                spaceBetween={16}
                loop
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="w-full cursor-pointer"
            >
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full aspect-square bg-red-500/50 flex justify-center items-center'>Holaaa</div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
