import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, RCIcon } from "@/components";
import { PlusIcon } from "@/icons";
import styles from "@/styles/home.module.css";
import portada from "@/assets/home/portada.webp";
import pattern from "@/assets/home/pattern.webp";
// import sede_barrio_sur from "@/assets/home/sede_barrio_sur.webp";
// import sede_barrio_norte from "@/assets/home/sede_barrio_norte.webp";
import sede_yerba_buena from "@/assets/home/sede_yerba_buena.webp";
// import sede_tafi_viejo from "@/assets/home/sede_tafi_viejo.webp";
import trainner_3 from "@/assets/home/trainer_3.webp";

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
                <div className="mt-8 grid grid-cols-5 gap-6">
                    <div className="col-span-2 aspect-square rounded-xl overflow-hidden relative">
                        <Image src={sede_yerba_buena} alt="Sede Yerba Buena" className="size-full absolute top-0 left-0"/>
                    </div>
                    <div className="col-span-3 flex flex-col pt-8 pl-4">
                        <h3 className="text-9xl font-highrise-bold">Yerba Buena</h3>
                        <p className="mt-2 text-lg font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente totam corrupti tenetur numquam, mollitia blanditiis cumque placeat culpa fugit, pariatur voluptatum? Voluptate sequi ad, optio excepturi at culpa et fugit!</p>
                        <div className="mt-6 flex gap-4">
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
            <section className="w-full flex">
                <div className="grow px-24 py-12 relative">
                    <div className="flex flex-col justify-center relative z-20">
                        <p className="text-8xl font-highrise-bold whitespace-nowrap relative">Resultados <b className="block">que hablan.</b></p>
                        <p className="text-8xl font-highrise-bold whitespace-nowrap text-red-600">Entrenamientos <b className="block">que transforman.</b></p>
                    </div>
                    <div className="size-full bg-gradient-to-r from-transparent to-background absolute top-0 left-0 z-10"></div>
                    <Image src={pattern} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
                </div>
                <div className="w-full max-w-7xl relative">
                    <div className="size-full bg-gradient-to-r from-background to-transparent absolute top-0 left-0 z-10"></div>
                    <Image src={trainner_3} alt="RC Gym" className="size-full object-cover object-[50%_95%] absolute top-0 left-0"/>
                </div>
            </section>
            <section className="min-h-svh"></section>
            <section className="min-h-svh"></section>
            <section className="min-h-svh"></section>
        </main>
    );
}