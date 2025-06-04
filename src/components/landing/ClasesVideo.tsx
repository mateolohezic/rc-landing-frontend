'use client'

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/icons";

interface ClassVideo {
    title: string;
    youtubeId: string
}

const classVideos:Array<ClassVideo> = [
    {
        title: "Boxeo",
        youtubeId: "i8lLCqf8Hs8",
    },
    {
        title: "Funcional",
        youtubeId: "JNKakxQwveA",
    },
    {
        title: "Calistenia",
        youtubeId: "iNL-NZAhZF0",
    },
    {
        title: "Indoor Cycle",
        youtubeId: "W2bQ-MrXpMw",
    },
    {
        title: "Pilates",
        youtubeId: "5_LXvr9lhME",
    },
    {
        title: "Zumba",
        youtubeId: "IzBhjFig4-Y",
    },
    {
        title: "GAP",
        youtubeId: "IF28Rl1vSHk",
    },
    {
        title: "CrossFit",
        youtubeId: "-2qfcxbhZno",
    },
];

export const ClasesVideo = () => {

    const [selectedVideo, setSelectedVideo] = useState<ClassVideo>(classVideos[0]);

    return (
        <section className="w-full lg:flex flex-col justify-center items-center hidden">
            <h2 className="w-full max-w-7xl px-4 xl:px-0 text-9xl font-highrise-bold uppercase leading-[0.8]">
                <b className="block text__outline">Clases pensadas</b> para vos
            </h2>
            <div className="mt-12 w-full flex border-y-2 border-neutral-800 shadow-xl shadow-black/50">
                <div className="flex flex-col divide-y-2 divide-neutral-800">
                    { classVideos.slice(0, 4).map((clase) => (
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
                            <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                            <h3 className={`text-xl font-black uppercase tracking-widest relative z-20 ${ selectedVideo.youtubeId !== clase.youtubeId && "group-hover:opacity-0"} transition-200`}>{clase.title}</h3>
                            <div className={`size-full flex justify-center items-center absolute top-0 left-0 z-30 ${ selectedVideo.youtubeId !== clase.youtubeId ? "bg-white/10 opacity-0 group-hover:opacity-100" : "bg-red-500/25"} transition-200`}>
                                { selectedVideo.youtubeId !== clase.youtubeId &&
                                    <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                        <PlayIcon className="text-white size-14" />
                                    </div>
                                }
                            </div>
                        </button>
                    ))}
                </div>
                <div className="grow bg-background border-x-2 border-neutral-800">
                    <div className="size-full relative">
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?rel=0&modestbranding=1`}
                            className="size-full absolute top-0 left-0"
                            title={`Clase de ${selectedVideo.title} RC Gym`}
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
                            <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                            <h3 className={`text-xl font-black uppercase tracking-widest relative z-20 ${ selectedVideo.youtubeId !== clase.youtubeId && "group-hover:opacity-0"} transition-200`}>{clase.title}</h3>
                            <div className={`size-full flex justify-center items-center absolute top-0 left-0 z-30 ${ selectedVideo.youtubeId !== clase.youtubeId ? "bg-white/10 opacity-0 group-hover:opacity-100" : "bg-red-500/25"} transition-200`}>
                                { selectedVideo.youtubeId !== clase.youtubeId &&
                                    <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                        <PlayIcon className="text-white size-14" />
                                    </div>
                                }
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};