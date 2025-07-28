'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';
// import Image from 'next/image';
// import testimonio from "@/assets/home/mateo.webp";

export const SwiperTestimonios = () => {

    const breakpoints = {
        320: {
        slidesPerView: 1
        },
        640: {
        slidesPerView: 2
        },
        768: {
        slidesPerView: 2
        },
        1024: {
        slidesPerView: 3
        },
        1280: {
        slidesPerView: 3
        },
        1536: {
        slidesPerView: 3
        },
    }

    return (
        <section className="w-full max-w-7xl px-4 my-12 lg:my-24 flex flex-col justify-center items-center text-center lg:text-start">
            <div className="mb-4 lg:mb-8 w-full">
                <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem]">Testimonios <b className="block text__outline">nuestros entrenados</b></h2>
            </div>
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
                    <div className='w-full aspect-[3/4] bg-neutral-800 rounded flex flex-col overflow-hidden'>
                        <div className='w-full aspect-[4/3] relative'>
                            {/* <Image src={testimonio} alt='Testimonio RC Gym' className='size-full object-cover absolute top-0 left-0'/> */}
                        </div>
                        <div className='w-full grow flex flex-col p-6'>
                            <h3 className="text-xl font-black uppercase tracking-widest">Mateo Lohezic</h3>
                            <p className="mt-2 text-white/75">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem corrupti pariatur tempora esse maiores repellat assumenda magnam voluptatum molestiae est nulla mollitia, dignissimos odit aspernatur harum odio et corporis neque!</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}
