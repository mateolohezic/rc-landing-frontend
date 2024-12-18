import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, RCIcon } from "@/components";
import { PlusIcon } from "@/icons";
import styles from "@/styles/home.module.css";
import portada from "@/assets/home/portada.webp";
import pattern from "@/assets/home/pattern.webp";
import sede_barrio_sur from "@/assets/home/sede_barrio_sur.webp";
import sede_barrio_norte from "@/assets/home/sede_barrio_norte.webp";
import sede_yerba_buena from "@/assets/home/sede_yerba_buena.webp";
import sede_tafi_viejo from "@/assets/home/sede_tafi_viejo.webp";

export const metadata: Metadata = {
    title: 'RC Gym',
    description: "RC Gym",
};

export default function HomePage() {
    return (
        <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900">
            <h1 className="sr-only">RC Gym Tucumán</h1>
            <Navbar/>
            <section className="w-full min-h-svh flex justify-between">
                <div className="w-full max-w-4xl min-h-svh relative">
                    <div className="size-full pl-24 flex flex-col justify-center items-start relative z-20">
                        <p className="px-2 py-0.5 border-4 border-red-500 text-red-500 rounded-lg text-5xl font-highrise-bold">OFERTA</p>
                        <h2 className="mt-2 text-9xl font-highrise-bold">PLAN TRIMESTRAL</h2>
                        <p className={`-mt-2 text-5xl font-highrise-bold tracking-wide ${styles.text__outline}`}>Comenza el cambio</p>
                        <ul className="mt-4 pl-4">
                            <li className="flex items-center gap-1 text-2xl font-semibold"><PlusIcon className="text-red-500 text-xl"/> Acceso a todas nuestras sedes.</li>
                            <li className="flex items-center gap-1 text-2xl font-semibold"><PlusIcon className="text-red-500 text-xl"/> Aplicación en tu dispositivo móvil.</li>
                            <li className="flex items-center gap-1 text-2xl font-semibold"><PlusIcon className="text-red-500 text-xl"/> Asesoría personalizada</li>
                        </ul>
                        <Link href={'/'} className="mt-6 px-6 py-1 bg-red-500 rounded-lg text-5xl font-highrise-bold hover:opacity-75 transition-150">Inscribite ahora</Link>
                    </div>
                    <div className="size-full bg-gradient-to-l from-neutral-900 to-background opacity-50 absolute top-0 left-0 z-10"></div>
                    <Image src={pattern} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0 opacity-25"/>
                </div>
                <div className="grow min-h-svh relative">
                    <div className="size-full bg-gradient-to-l from-transparent to-neutral-900 absolute top-0 left-0 z-10"></div>
                    <Image src={portada} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 xl:px-0 py-24">
                <h2 className="text-9xl font-highrise-bold uppercase leading-[0.8]"><span className={styles.text__outline}>Conocé nuestras</span> <b className="block">sedes</b></h2>
                <div className="mt-12 grid grid-cols-5 gap-6">
                    <div className="w-full aspect-square bg-background-sidebar border-2 border-background-sidebar rounded-lg flex flex-col justify-center items-center gap-4">
                        <RCIcon className="w-16 fill-white"/>
                        <h3 className="text-5xl font-highrise-bold uppercase">Barrio Norte</h3>
                    </div>
                    <div className="w-full aspect-square bg-gradient-to-br from-background to-red-600 rounded-lg flex flex-col justify-center items-center gap-4">
                        <RCIcon className="w-16 fill-white"/>
                        <h3 className="text-5xl font-highrise-bold uppercase">Barrio Sur</h3>
                    </div>
                    <div className="w-full aspect-square bg-background-sidebar border-2 border-background-sidebar rounded-lg flex flex-col justify-center items-center gap-4">
                        <RCIcon className="w-16 fill-white"/>
                        <h3 className="text-5xl font-highrise-bold uppercase">Yerba Buena</h3>
                    </div>
                    <div className="w-full aspect-square bg-background-sidebar border-2 border-background-sidebar rounded-lg flex flex-col justify-center items-center gap-4">
                        <RCIcon className="w-16 fill-white"/>
                        <h3 className="text-5xl font-highrise-bold uppercase">Tafí Viejo</h3>
                    </div>
                    <div className="w-full aspect-square p-4 border-2 border-dashed border-white/50 rounded-lg flex flex-col justify-center items-center gap-4">
                        <RCIcon className="w-16 fill-white/50"/>
                        <h3 className="text-5xl font-highrise-bold text-white/50 uppercase">Proximamente</h3>
                    </div>
                </div>
            </section>
            <section className="min-h-svh"></section>
            <section className="min-h-svh"></section>
            <section className="min-h-svh"></section>
        </main>
    );
}