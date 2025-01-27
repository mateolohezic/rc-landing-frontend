import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/icons";
import pattern_dot from "@/assets/home/pattern_dot.webp";

export const Entrenamientos = () => {
    return (
        <section className="w-full max-w-7xl flex flex-col justify-center items-center lg:my-24">
            <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full lg:max-w-sm lg:bg-neutral-800 p-6 flex flex-col">
                    <h3 className="text-6xl lg:text-8xl font-highrise-bold">Salud</h3>
                    <p className="mt-2 font-thin grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi odit nam aperiam veritatis tempora ducimus, excepturi illum itaque, consectetur nesciunt rem cum similique minus mollitia blanditiis officiis quod quibusdam!</p>
                    <Link href={'/home'} className="mt-4 w-full px-4 py-1 rounded bg-red-600 hover:bg-red-400 flex justify-between items-center transition-150">
                        <span>Comenza tu entrenamiento</span>
                        <ArrowRightIcon className="text-xl relative left-1"/>
                    </Link>
                </div>
                <div className="w-full lg:w-auto lg:grow aspect-video relative">
                    <iframe
                        src="https://www.youtube.com/embed/237rnd2jJXo?si=oqj-DIqFsZPUqggE"
                        title="Caso de éxito RC Gym"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="size-full absolute top-0 left-0 z-0"
                    />
                </div>
            </div>
            <div className="w-full flex justify-center relative">
                <Image src={pattern_dot} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
                <div className="bg-gradient-to-br from-black to-background-sidebar opacity-50 size-full absolute top-0 left-0"></div>
                <div className="w-full flex relative z-20 overflow-x-auto divide-x-2 divide-white/10">
                    <button type="button" className="min-w-40 grow h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">En forma</button>
                    <button type="button" className="min-w-40 grow h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Deportivo</button>
                    <button disabled type="button" className="min-w-40 grow h-16 font-black uppercase tracking-widest bg-red-600">Salud</button>
                    <button type="button" className="min-w-40 grow h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Funcional</button>
                    <button type="button" className="min-w-40 grow h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Definición</button>
                    <button type="button" className="min-w-48 grow h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Adolescentes</button>
                </div>
            </div>
        </section>
    )
}
