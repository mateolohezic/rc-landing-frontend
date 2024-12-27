'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

export const SwiperDescuentos = () => {

    const breakpoints = {
        320: {
        slidesPerView: 3
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
        <Swiper
            breakpoints={breakpoints}
            spaceBetween={32}
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
    )
}
