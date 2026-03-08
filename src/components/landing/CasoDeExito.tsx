'use client'

import { motion } from 'framer-motion';

const videos = [
    { id: "5Rx_7UcustM", title: "Caso de éxito 1" },
    { id: "OmsW45Tgia4", title: "Caso de éxito 2" },
    { id: "qF86h3Nhdbo", title: "Caso de éxito 3" },
];

export const CasoDeExito = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-6 section-padding">
            {/* Header */}
            <div className="text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                >
                    Nuestra <span className="text-red-500">comunidad</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-3 max-w-xl mx-auto text-white/50 text-lg"
                >
                    Conocé las historias de quienes ya transformaron su vida con RC Gym.
                </motion.p>
            </div>

            {/* Videos grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, i) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className="glass-card overflow-hidden group"
                    >
                        <div className="w-full aspect-video relative">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="size-full absolute inset-0"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
