import Image from 'next/image';
import { RCIcon } from '@/components';
import sede_yerba_buena from "@/assets/home/sede_yerba_buena.webp";

export const Sedes = () => {
    return (
        <section className="w-full max-w-7xl px-4 xl:px-0 my-12 lg:my-24 text-center lg:text-start">
            <h2 className="text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem]"><span className="text__outline">Conocé nuestras</span> <b className="block">sedes</b></h2>
            <div className="mt-12 hidden lg:grid grid-cols-5 gap-6">
                <button type="button" className="w-full aspect-square bg-background-sidebar hover:bg-background-sidebar/25 border-2 border-background-sidebar hover:border-white/25 rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer transition-150">
                    <RCIcon className="w-16 fill-white"/>
                    <h3 className="text-5xl font-highrise-bold uppercase">Barrio Norte</h3>
                </button>
                <button type="button" disabled className="w-full aspect-square bg-gradient-to-br from-background to-red-600 rounded-lg flex flex-col justify-center items-center gap-4">
                    <RCIcon className="w-16 fill-white"/>
                    <h3 className="text-5xl font-highrise-bold uppercase">Barrio Sur</h3>
                </button>
                <button type="button" className="w-full aspect-square bg-background-sidebar hover:bg-background-sidebar/25 border-2 border-background-sidebar hover:border-white/25 rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer transition-150">
                    <RCIcon className="w-16 fill-white"/>
                    <h3 className="text-5xl font-highrise-bold uppercase">Yerba Buena</h3>
                </button>
                <button type="button" className="w-full aspect-square bg-background-sidebar hover:bg-background-sidebar/25 border-2 border-background-sidebar hover:border-white/25 rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer transition-150">
                    <RCIcon className="w-16 fill-white"/>
                    <h3 className="text-5xl font-highrise-bold uppercase">Tafí Viejo</h3>
                </button>
                <button type="button" disabled className="w-full aspect-square p-4 border-2 border-dashed border-white/50 rounded-lg flex flex-col justify-center items-center gap-4">
                    <RCIcon className="w-16 fill-white/50"/>
                    <h3 className="text-5xl font-highrise-bold text-white/50 uppercase">Proximamente</h3>
                </button>
            </div>
            <div className="mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
                <div className="lg:col-span-2 aspect-square rounded-xl overflow-hidden relative">
                    <Image src={sede_yerba_buena} alt="Sede Yerba Buena" className="size-full absolute top-0 left-0"/>
                </div>
                <div className="lg:col-span-3 flex flex-col lg:pt-8 lg:pl-4">
                    <h3 className="text-6xl lg:text-9xl font-highrise-bold">Yerba Buena</h3>
                    <div className="mt-4 lg:mt-6 flex justify-center items-center gap-4">
                        <button type="button" className="px-4 py-1 rounded bg-red-600 hover:bg-red-400 transition-150">
                            Inscribite ahora
                        </button>
                        <button type="button" className="px-4 py-1 rounded text-white/75 hover:bg-white/20 hover:text-white transition-150">
                            Conoce más
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
