"use client";

import { useState } from "react";
import Image from "next/image";
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
    const [selectedVideo, setSelectedVideo] = useState<ClassVideo>(classVideos[0]); // desktop
    const [modalVideo, setModalVideo] = useState<ClassVideo | null>(null); // mobile modal

    return (
        <>
            <section className="w-full lg:flex flex-col justify-center items-center hidden">
                <h2 className="w-full max-w-7xl px-4 xl:px-0 text-9xl font-highrise-bold uppercase leading-[0.8]">
                    <b className="block text__outline">Clases pensadas</b> para vos
                </h2>
                <div className="mt-12 w-full flex border-y-2 border-neutral-800 shadow-xl shadow-black/50">
                    <div className="flex flex-col divide-y-2 divide-neutral-800">
                        {classVideos.slice(0, 4).map((clase) => (
                            <button
                                key={clase.youtubeId}
                                disabled={selectedVideo.youtubeId === clase.youtubeId}
                                type="button"
                                onClick={() => setSelectedVideo(clase)}
                                className="h-48 aspect-video flex justify-center items-center relative group"
                            >
                                <Image
                                    src={`https://img.youtube.com/vi/${clase.youtubeId}/hqdefault.jpg`}
                                    alt={clase.title}
                                    fill
                                    className="object-cover absolute top-0 left-0 z-0"
                                />
                                <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10" />
                                    <h3 className={`text-xl font-black uppercase tracking-widest relative z-20 ${selectedVideo.youtubeId !== clase.youtubeId && "group-hover:opacity-0"} transition-200`}>
                                    {clase.title}
                                    </h3>
                                <div className={`size-full flex justify-center items-center absolute top-0 left-0 z-30 ${selectedVideo.youtubeId !== clase.youtubeId ? "bg-white/10 opacity-0 group-hover:opacity-100" : "bg-red-500/25"} transition-200`}>
                                    {selectedVideo.youtubeId !== clase.youtubeId && (
                                        <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                        <PlayIcon className="text-white size-14" />
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="grow bg-background border-x-2 border-neutral-800">
                        <div className="size-full relative">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0&modestbranding=1`}
                                className="size-full absolute top-0 left-0"
                                title={`Clase de ${selectedVideo.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="flex flex-col divide-y-2 divide-neutral-800">
                        {classVideos.slice(4).map((clase) => (
                            <button
                                key={clase.youtubeId}
                                disabled={selectedVideo.youtubeId === clase.youtubeId}
                                type="button"
                                onClick={() => setSelectedVideo(clase)}
                                className="h-48 aspect-video flex justify-center items-center relative group"
                            >
                                <Image
                                    src={`https://img.youtube.com/vi/${clase.youtubeId}/hqdefault.jpg`}
                                    alt={clase.title}
                                    fill
                                    className="object-cover absolute top-0 left-0 z-0"
                                />
                                <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10" />
                                    <h3 className={`text-xl font-black uppercase tracking-widest relative z-20 ${selectedVideo.youtubeId !== clase.youtubeId && "group-hover:opacity-0"} transition-200`}>
                                    {clase.title}
                                    </h3>
                                <div className={`size-full flex justify-center items-center absolute top-0 left-0 z-30 ${selectedVideo.youtubeId !== clase.youtubeId ? "bg-white/10 opacity-0 group-hover:opacity-100" : "bg-red-500/25"} transition-200`}>
                                    {selectedVideo.youtubeId !== clase.youtubeId && (
                                        <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                        <PlayIcon className="text-white size-14" />
                                        </div>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
            <section className="w-full px-4 py-8 lg:hidden">
                <h2 className="text-5xl font-highrise-bold uppercase text-center mb-6">
                    Clases para vos
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {classVideos.map((clase) => (
                        <button
                            key={clase.youtubeId}
                            type="button"
                            onClick={() => setModalVideo(clase)}
                            className="aspect-video relative group overflow-hidden rounded-lg"
                        >
                            <Image
                                src={`https://img.youtube.com/vi/${clase.youtubeId}/hqdefault.jpg`}
                                alt={clase.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center">
                                <PlayIcon className="size-8" />
                                <span className="mt-2 uppercase font-medium tracking-wide">{clase.title}</span>
                            </div>
                        </button>
                    ))}
                </div>
                {modalVideo &&
                    <div className="p-4 bg-black/80 flex justify-center items-center fixed inset-0 z-50" onClick={() => setModalVideo(null)}>
                        <div className="w-full max-w-xl bg-zinc-900 rounded-lg aspect-video relative" onClick={(e) => e.stopPropagation()}>
                            <iframe
                                src={`https://www.youtube.com/embed/${modalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                                className="size-full rounded-lg absolute top-0 left-0"
                                title={`Clase ${modalVideo.title}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                            <button
                                onClick={() => setModalVideo(null)}
                                className="p-2 bg-zinc-800 rounded-full shadow absolute -top-4 -right-3"
                            >
                                <CrossIcon className="size-3"/>
                            </button>
                        </div>
                    </div>
                }
            </section>
        </>
    );
};