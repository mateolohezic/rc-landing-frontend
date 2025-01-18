import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar, RCIcon, SwiperDescuentos, SwiperTestimonios } from "@/components";
import { ArrowRightIcon, FitnessIcon, GroupIcon, GroupWorkIcon, MemberCardIcon, OfferIcon, PlayIcon, QRIcon } from "@/icons";
import styles from "@/styles/home.module.css";
import portada from "@/assets/home/portada.webp";
import pattern from "@/assets/home/pattern.webp";
import sede_yerba_buena from "@/assets/home/sede_yerba_buena.webp";
import trainner_3 from "@/assets/home/trainer_3.webp";
import banner_stock from "@/assets/home/banner_stock.webp";
import app_rcgym from "@/assets/home/app_rcgym.webp";
import apple_icon from "@/assets/home/apple_icon.webp";
import playstore_icon from "@/assets/home/playstore_icon.webp";
import feature_cardio from "@/assets/home/features/feature_cardio.webp";
import feature_green from "@/assets/home/features/feature_green.webp";
import feature_lessons from "@/assets/home/features/feature_lessons.webp";
import feature_muscule from "@/assets/home/features/feature_muscule.webp";
import feature_tech from "@/assets/home/features/feature_tech.webp";
import feature_train from "@/assets/home/features/feature_train.webp";
import feature_power from "@/assets/home/features/feature_power.webp";

export const metadata: Metadata = {
    title: 'RC Gym',
    description: "RC Gym",
};

export default function HomePage() {
    return (
        <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900">
            <h1 className="sr-only">RC Gym Tucumán</h1>
            <Navbar/>
            <section className="w-full min-h-svh flex flex-col justify-center items-center">
                <Image src={portada} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
                <div className="size-full bg-gradient-to-b from-neutral-900/50 to-neutral-900 absolute top-0 left-0 z-10"></div>
                <div className="flex flex-col justify-center items-center text-center relative z-20">
                    <h2 className="px-4 text-9xl font-highrise-bold border-b-2 border-b-red-500">Cambia tu estilo de vida</h2>
                    <p className="mt-4 w-full max-w-2xl text-2xl">Descubre cómo un <b className="font-bold">cambio gradual</b> y sostenido en tus hábitos puede llevarte a una <b className="bg-red-500">mejor salud y mayor bienestar</b>.</p>
                    <Link href={'/'} className="mt-8 block px-8 py-3 bg-gradient-to-r from-red-500 to-neutral-900 to-[150%] rounded-lg text-5xl uppercase hover:opacity-80 transition-200">Conseguí tu día de prueba</Link>
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
            <section className="w-full flex shadow-xl shadow-black/25">
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
            <section className="w-full max-w-7xl px-4 xl:px-0 py-24">
                <h2 className="text-9xl font-highrise-bold uppercase leading-[0.8]">Bienvenido a RC</h2>
                <div className="mt-8 w-full grid grid-cols-2 gap-24">
                    <p className="text-white/75 font-thin">En RC Gym, creemos que el fitness es más que un objetivo: es un estilo de vida. Diseñamos un espacio motivador y profesional, pensado para ayudarte a superar tus metas y sentirte mejor cada día. ¡Únete a nuestra comunidad y transforma tu cuerpo y mente!</p>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div className="size-12 shrink-0 bg-white/10 rounded-xl flex justify-center items-center">
                                <FitnessIcon className="size-8"/>
                            </div>
                            <div className="grow flex flex-col gap-1">
                                <h3 className="font-black uppercase tracking-widest">Instalaciones de primer nivel</h3>
                                <p className="text-sm text-white/75">Entrena con equipos de última tecnología y disfruta de un ambiente diseñado para maximizar tu rendimiento y comodidad.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-12 shrink-0 bg-white/10 rounded-xl flex justify-center items-center">
                                <GroupIcon className="size-8"/>
                            </div>
                            <div className="grow flex flex-col gap-1">
                                <h3 className="font-black uppercase tracking-widest">Entrenadores profesionales</h3>
                                <p className="text-sm text-white/75">Recibe guía personalizada de expertos en fitness, listos para acompañarte en cada paso de tu transformación.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-12 shrink-0 bg-white/10 rounded-xl flex justify-center items-center">
                                <GroupWorkIcon className="size-8"/>
                            </div>
                            <div className="grow flex flex-col gap-1">
                                <h3 className="font-black uppercase tracking-widest">Clases grupales motivadoras</h3>
                                <p className="text-sm text-white/75">Desde yoga hasta HIIT, participa en una variedad de clases que se adaptan a tus objetivos y te mantienen inspirado.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-4 bg-neutral-800 py-24">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="w-fit bg-red-600 px-4 py-0.5 text-7xl font-highrise-bold uppercase">Caso de éxito</h2>
                    <div className="mt-4 w-full grid grid-cols-2 gap-8">
                        <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                            <iframe
                                src="https://www.youtube.com/embed/237rnd2jJXo?si=oqj-DIqFsZPUqggE"
                                title="Caso de éxito RC Gym"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                className="size-full absolute top-0 left-0"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-sm uppercase tracking-widest">Conocé nuestros entrenados</p>
                            <h3 className="text-9xl font-highrise-bold">Pepe Grillo</h3>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe consequuntur officiis facere aperiam. Facilis nobis, repudiandae dolorem cupiditate tempore dolor quibusdam. Sunt, beatae! Aliquid quam voluptas sunt expedita illum?</p>
                            <Link href={'/home'} className="px-4 py-1 text-xl rounded bg-red-600 hover:bg-red-400 transition-150">
                                Comenza tu entrenamiento
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-4 xl:px-0 flex flex-col justify-center items-center">
                <div className="w-full flex justify-center relative">
                    <Image src={pattern} alt="Bienvenido a RC Gym" className="size-full object-cover absolute top-0 left-0 z-0"/>
                    <div className="bg-gradient-to-br from-black to-background-sidebar opacity-50 size-full absolute top-0 left-0"></div>
                    <div className="w-full max-w-7xl grid grid-cols-6 relative z-20">
                        <button type="button" className="w-full h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">En forma</button>
                        <button type="button" className="w-full h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Deportivo</button>
                        <button disabled type="button" className="w-full h-16 font-black uppercase tracking-widest bg-red-600">Salud</button>
                        <button type="button" className="w-full h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Funcional</button>
                        <button type="button" className="w-full h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Definición</button>
                        <button type="button" className="w-full h-16 font-black uppercase tracking-widest hover:bg-white/10 transition-150">Adolescentes</button>
                    </div>
                </div>
                <div className="mt-8 w-full max-w-7xl flex">
                    <div className="w-full max-w-sm bg-neutral-800 p-6 flex flex-col">
                        <h3 className="text-8xl font-highrise-bold">Salud</h3>
                        <p className="mt-2 font-thin grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil commodi odit nam aperiam veritatis tempora ducimus, excepturi illum itaque, consectetur nesciunt rem cum similique minus mollitia blanditiis officiis quod quibusdam!</p>
                        <Link href={'/home'} className="w-full px-4 py-1 rounded bg-red-600 hover:bg-red-400 flex justify-between items-center transition-150">
                            <span>Comenza tu entrenamiento</span>
                            <ArrowRightIcon className="text-xl relative left-1"/>
                        </Link>
                    </div>
                    <div className="grow aspect-video relative">
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
            </section>
            <section className="w-full px-4 my-24 flex flex-col justify-center items-center">
                <div className="mb-8 w-full max-w-7xl">
                    <h2 className="text-9xl font-highrise-bold uppercase leading-[0.8]">Descuentos <b className={`block ${styles.text__outline}`}>en tu suscripción</b></h2>
                </div>
                <SwiperDescuentos/>
            </section>
            <div className="w-full relative">
                <div className="size-52 rounded-full bg-neutral-900/50 flex justify-center items-center absolute bottom-16 right-16 z-20">
                    <RCIcon className="fill-white w-36"/>
                </div>
                <div className="size-full bg-gradient-to-b from-neutral-900 via-transparent to-neutral-900 absolute top-0 left-0 z-10"></div>
                <Image src={banner_stock} alt="RC Gym" className="size-full object-contain"/>
            </div>
            <section className="w-full my-24 flex flex-col justify-center items-center">
                <div className="w-full py-8 px-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 shadow-lg shadow-black/15 flex justify-center text-center">
                    <h2 className="w-fit pb-2 border-b-2 border-red-500 text-9xl font-highrise-bold uppercase leading-[0.75]">Viví la experiencia RC</h2>
                </div>
                <div className="mt-12 w-full flex justify-center relative overflow-x-clip">
                    <div className="w-full max-w-7xl grid grid-cols-4 gap-4 relative z-10">
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_cardio} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Zona de cardio</h3>
                        </div>
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_muscule} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Zona de musculatura</h3>
                        </div>
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_lessons} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Lecciones acompañadas</h3>
                        </div>
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_green} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Terraza al aire libre</h3>
                        </div>
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_power} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Powerlifting</h3>
                        </div>
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_tech} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Última tecnología</h3>
                        </div>
                        <div className="w-full p-3 bg-gradient-to-b from-neutral-800 to-transparent rounded-xl flex flex-col">
                            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden relative">
                                <Image src={feature_train} alt="Zona de cardio" className="size-full object-cover absolute top-0 left-0"/>
                            </div>
                            <h3 className="mt-4 text-center font-semibold uppercase tracking-widest">Entrenamiento deportivo</h3>
                        </div>
                    </div>
                    <div className="size-full max-w-7xl flex justify-end items-end absolute top-0 left-0 right-0 mx-auto z-0">
                        <RCIcon className="fill-red-500 opacity-15 h-[75%] translate-x-1/4 translate-y-[25%]"/>
                    </div>
                </div>
            </section>
            <section className="w-full flex flex-col justify-center items-center">
                <h2 className="w-full max-w-7xl px-4 xl:px-0 text-9xl font-highrise-bold uppercase leading-[0.8]"><b className={`block ${styles.text__outline}`}>Clases pensadas</b> para vos</h2>
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
            <section className="w-full px-4 pt-12 flex flex-col justify-center items-center bg-neutral-800">
                <div className="mt-2 w-full max-w-7xl flex justify-between relative z-20">
                    <div className="grow flex flex-col justify-start pb-12">
                        <h2 className="text-9xl font-highrise-bold uppercase leading-[0.8]">Disfruta la App</h2>
                        <p className="text-pretty w-full max-w-lg">Conocé SocioPLUS®.</p>
                        <div className="mt-8 w-full flex flex-col gap-6">
                            <div className="w-full flex gap-4 justify-start items-center">
                                <MemberCardIcon className="size-14 shrink-0 fill-[#2ECD70]"/>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-black uppercase tracking-widest text-[#2ECD70]">Membresía digital</h3>
                                    <p className="text-base text-white/75">Inspecciona tus datos en todo momento.</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 justify-start items-center">
                                <QRIcon className="size-14 shrink-0 fill-[#2ECD70]"/>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-black uppercase tracking-widest text-[#2ECD70]">Ingreso fácil y rápido</h3>
                                    <p className="text-base text-white/75">Acceso dinámico a todas nuestras sedes.</p>
                                </div>
                            </div>
                            <div className="w-full flex gap-4 justify-start items-center">
                                <OfferIcon className="size-14 shrink-0 fill-[#2ECD70]"/>
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-black uppercase tracking-widest text-[#2ECD70]">Beneficios y descuentos</h3>
                                    <p className="text-base text-white/75">Disfrutá de nuestros descuentos en comercios adheridos.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-start items-center gap-8">
                            <Link href={"https://apps.apple.com/ar/app/socioplus-ux/id1621587015"} target="_blank" className="group">
                                <Image src={apple_icon} alt="Descargar Socio Plus RC Gym Apple iOS" className="size-16 object-contain group-hover:scale-110 transition-150"/>
                            </Link>
                            <Link href={"https://play.google.com/store/apps/details?id=com.socioplus&hl=es_AR&gl=US&pli=1"} target="_blank" className="group">
                                <Image src={playstore_icon} alt="Descargar Socio Plus RC Gym Play Store Android" className="size-16 object-contain group-hover:scale-110 transition-150"/>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full max-w-lg flex flex-col justify-end items-end">
                        <Image src={app_rcgym} alt="Aplicación Socio Plus RC Gym" className="w-full"/>
                    </div>
                </div>
            </section>
            <section className="w-full max-w-7xl px-4 py-24 flex flex-col justify-center items-center">
                <div className="mb-8 w-full">
                    <h2 className="text-9xl font-highrise-bold uppercase leading-[0.8]">Testimonios <b className={`block ${styles.text__outline}`}>nuestros entrenados</b></h2>
                </div>
                <SwiperTestimonios/>
            </section>
            <section className="min-h-svh"></section>
            <section className="min-h-svh"></section>
            <section className="min-h-svh"></section>
        </main>
    );
}