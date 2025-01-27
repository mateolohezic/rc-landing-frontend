import Image from "next/image";
import { PlayIcon } from "@/icons";
import feature_cardio from "@/assets/home/features/feature_cardio.webp";
import feature_green from "@/assets/home/features/feature_green.webp";
import feature_lessons from "@/assets/home/features/feature_lessons.webp";
import feature_muscule from "@/assets/home/features/feature_muscule.webp";
import feature_tech from "@/assets/home/features/feature_tech.webp";
import feature_train from "@/assets/home/features/feature_train.webp";
import feature_power from "@/assets/home/features/feature_power.webp";

export const ClasesVideo = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center">
            <h2 className="w-full max-w-7xl px-4 xl:px-0 text-9xl font-highrise-bold uppercase leading-[0.8]"><b className="block text__outline">Clases pensadas</b> para vos</h2>
            <div className="mt-12 w-full flex border-y-2 border-neutral-800 shadow-xl shadow-black/50">
                <div className="flex flex-col divide-y-2 divide-neutral-800">
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_cardio} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Spinning</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_green} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Funcional</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_lessons} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">CrossFit</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_muscule} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-r from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Zumba</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                </div>
                <div className="grow bg-background border-x-2 border-neutral-800">
                    <div className="size-full relative">
                        <Image src={feature_power} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                        <button type="button" className="size-full bg-gradient-to-br from-background/75 to-background/25 flex justify-center items-center absolute top-0 left-0 group">
                            <div className="size-32 rounded-full flex justify-center items-center group-hover:bg-white/10 transition-200">
                                <PlayIcon className="text-white size-24"/>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col divide-y-2 divide-neutral-800">
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_power} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-l from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Pilates</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_tech} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-l from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Calistenia</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_cardio} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-l from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Boxeo</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                    <button type="button" className="h-48 aspect-video flex justify-center items-center relative group">
                        <Image src={feature_train} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0 z-0"/>
                        <div className="size-full bg-gradient-to-l from-neutral-900/50 to-background absolute top-0 left-0 z-10"></div>
                        <h3 className="text-xl font-black uppercase tracking-widest relative z-20 group-hover:opacity-0 transition-200">Full Body</h3>
                        <div className="size-full bg-white/10 flex justify-center items-center absolute top-0 left-0 z-30 opacity-0 group-hover:opacity-100 transition-200">
                            <div className="size-20 bg-white/10 rounded-full flex justify-center items-center">
                                <PlayIcon className="text-white size-14"/>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    )
}
