"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlayIcon, CrossIcon } from "@/icons";

interface ClassVideo {
    title: string;
    youtubeId: string;
}

const classVideos: ClassVideo[] = [
    { title: "Boxeo", youtubeId: "i8lLCqf8Hs8" },
    { title: "Funcional", youtubeId: "JNKakxQwveA" },
    { title: "Calistenia", youtubeId: "iNL-NZAhZF0" },
    { title: "Indoor Cycle", youtubeId: "W2bQ-MrXpMw" },
    { title: "Pilates", youtubeId: "5_LXvr9lhME" },
    { title: "Zumba", youtubeId: "IzBhjFig4-Y" },
    { title: "GAP", youtubeId: "IF28Rl1vSHk" },
    { title: "CrossFit", youtubeId: "-2qfcxbhZno" },
];

export const ClasesVideo = () => {
    const [selectedVideo, setSelectedVideo] = useState<ClassVideo>(classVideos[0]);
    const [modalVideo, setModalVideo] = useState<ClassVideo | null>(null);

    return (
        <>
            <section className="w-full max-w-7xl mx-auto px-6 section-padding">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-highrise-bold uppercase"
                    >
                        Clases pensadas <span className="text-red-500">para vos</span>
                    </motion.h2>
                </div>

                {/* Desktop layout */}
                <div className="hidden lg:block">
                    <div className="glass-card overflow-hidden">
                        <div className="flex">
                            {/* Left thumbnails */}
                            <div className="w-44 xl:w-56 shrink-0 flex flex-col border-r border-white/[0.06]">
                                {classVideos.slice(0, 4).map((clase) => (
                                    <button
                                        key={clase.youtubeId}
                                        onClick={() => setSelectedVideo(clase)}
                                        className={`relative aspect-video overflow-hidden group transition-all duration-300 border-b border-white/[0.06] last:border-b-0 ${
                                            selectedVideo.youtubeId === clase.youtubeId ? 'ring-inset ring-1 ring-red-500/50' : ''
                                        }`}
                                    >
                                        <Image
                                            src={`https://img.youtube.com/vi/${clase.youtubeId}/hqdefault.jpg`}
                                            alt={clase.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className={`absolute inset-0 transition-all duration-300 ${
                                            selectedVideo.youtubeId === clase.youtubeId
                                                ? 'bg-red-600/30'
                                                : 'bg-black/60 group-hover:bg-black/40'
                                        }`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-sm font-bold uppercase tracking-wider relative z-10">{clase.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Center video */}
                            <div className="grow relative aspect-video">
                                <iframe
                                    src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0&modestbranding=1`}
                                    className="size-full absolute inset-0"
                                    title={`Clase de ${selectedVideo.title}`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>

                            {/* Right thumbnails */}
                            <div className="w-44 xl:w-56 shrink-0 flex flex-col border-l border-white/[0.06]">
                                {classVideos.slice(4).map((clase) => (
                                    <button
                                        key={clase.youtubeId}
                                        onClick={() => setSelectedVideo(clase)}
                                        className={`relative aspect-video overflow-hidden group transition-all duration-300 border-b border-white/[0.06] last:border-b-0 ${
                                            selectedVideo.youtubeId === clase.youtubeId ? 'ring-inset ring-1 ring-red-500/50' : ''
                                        }`}
                                    >
                                        <Image
                                            src={`https://img.youtube.com/vi/${clase.youtubeId}/hqdefault.jpg`}
                                            alt={clase.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className={`absolute inset-0 transition-all duration-300 ${
                                            selectedVideo.youtubeId === clase.youtubeId
                                                ? 'bg-red-600/30'
                                                : 'bg-black/60 group-hover:bg-black/40'
                                        }`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-sm font-bold uppercase tracking-wider relative z-10">{clase.title}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile grid */}
                <div className="grid grid-cols-2 gap-3 lg:hidden">
                    {classVideos.map((clase, i) => (
                        <motion.button
                            key={clase.youtubeId}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => setModalVideo(clase)}
                            className="aspect-video relative rounded-xl overflow-hidden group border border-white/[0.06]"
                        >
                            <Image
                                src={`https://img.youtube.com/vi/${clase.youtubeId}/hqdefault.jpg`}
                                alt={clase.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 group-active:bg-black/30 transition-colors flex flex-col justify-center items-center gap-1">
                                <div className="size-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                    <PlayIcon className="size-5" />
                                </div>
                                <span className="text-xs uppercase font-semibold tracking-wider mt-1">{clase.title}</span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {modalVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-xl flex justify-center items-center z-50 p-4"
                        onClick={() => setModalVideo(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="w-full max-w-2xl aspect-video relative rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                className="size-full absolute inset-0"
                                title={`Clase ${modalVideo.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                            <button
                                onClick={() => setModalVideo(null)}
                                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
                            >
                                <CrossIcon className="size-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
