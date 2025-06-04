'use client'

import { useState } from "react";
import { motion } from 'framer-motion';

export const CasoDeExito = () => {

    const [inView, setInView] = useState<boolean>(false);

    return (
        <motion.section
            onViewportEnter={() => setInView(true)}
            onViewportLeave={() => setInView(false)}
            viewport={{ amount: .75 }}
            className="w-full px-4 lg:px-0"
        >
            <div className="my-24 w-full flex flex-col items-center">
                <motion.h2
                    animate={{ scale: inView ? 1.25 : 1 }}
                    transition={{ type: "tween", ease: "circInOut" }}
                    className="w-fit bg-red-600 px-4 py-0.5 text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Nuestra comunidad
                </motion.h2>
                <div className="mt-6 lg:mt-12 w-full grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0">
                    <div className="w-full aspect-video rounded-xl lg:rounded-none overflow-hidden relative">
                        <iframe
                            src="https://www.youtube.com/embed/5Rx_7UcustM?rel=0&modestbranding=1"
                            title="Caso de éxito RC Gym"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="size-full absolute top-0 left-0"
                            />
                    </div>
                    <div className="w-full aspect-video rounded-xl lg:rounded-none overflow-hidden relative">
                        <iframe
                            src="https://www.youtube.com/embed/OmsW45Tgia4?rel=0&modestbranding=1"
                            title="Caso de éxito RC Gym"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="size-full absolute top-0 left-0"
                        />
                    </div>
                    <div className="w-full aspect-video rounded-xl lg:rounded-none overflow-hidden relative">
                        <iframe
                            src="https://www.youtube.com/embed/qF86h3Nhdbo?rel=0&modestbranding=1"
                            title="Caso de éxito RC Gym"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="size-full absolute top-0 left-0"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    )
}
