import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components";
import { PlusIcon } from "@/icons";
import portada from "@/assets/home/portada.webp";
import pattern from "@/assets/home/pattern.webp";

export const metadata: Metadata = {
    title: 'RC Gym',
    description: "RC Gym",
};

export default function HomePage() {
    return (
        <main className="w-full grow bg-neutral-900">
            <Navbar/>
            <section className="w-full min-h-svh flex justify-between">
                <div className="w-full max-w-4xl min-h-svh relative">
                    <div className="size-full pl-24 flex flex-col justify-center items-start relative z-20">
                        <p className="px-2 py-0.5 border-4 border-red-500 text-red-500 rounded-lg text-5xl font-highrise-bold">OFERTA</p>
                        <h2 className="mt-2 text-9xl font-highrise-bold">PLAN TRIMESTRAL</h2>
                        <p className="-mt-2 text-5xl font-blackout">Comenza el cambio</p>
                        <ul className="mt-4 pl-4">
                            <li className="flex items-center gap-1 text-2xl font-semibold"><PlusIcon className="text-red-500 text-xl"/> Acceso a todas nuestras sedes.</li>
                            <li className="flex items-center gap-1 text-2xl font-semibold"><PlusIcon className="text-red-500 text-xl"/>Aplicación en tu dispositivo móvil.</li>
                            <li className="flex items-center gap-1 text-2xl font-semibold"><PlusIcon className="text-red-500 text-xl"/>Asesoría personalizada</li>
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
        </main>
    );
}