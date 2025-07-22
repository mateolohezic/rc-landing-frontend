import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ClockIcon, FitnessIcon, GroupIcon, SunWindIcon } from "@/icons";
import { SwiperTerrazas } from "@/components";
import portada from "@/assets/terrazas/portada.webp";

export const metadata: Metadata = {
  title: "Terrazas",
  description: "Nueva sede Terrazas en preventa - hasta 40% OFF",
};

export default function TerrazasPage() {
  return (
    <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900 text-white">
      <section className="w-full lg:min-h-svh py-48 lg:pt-28 lg:pb-12 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="size-full bg-background absolute top-0 left-0 z-0">
          <video
            controls={false}
            playsInline
            autoPlay
            muted
            loop
            className="size-full object-cover pointer-events-none select-none relative z-10 grayscale-[0.3]"
          >
            <source src="/assets/terrazas.mp4" type="video/mp4" />
            Tu navegador no soporta este video.
          </video>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 to-neutral-900 z-10" />
        <div className="relative z-20 max-w-4xl text-center px-4">
          <h1 className="text-6xl lg:text-9xl font-highrise-bold uppercase">
            <span className="block">Nueva sede</span> Terrazas
          </h1>
          <p className="mt-6 text-lg lg:text-2xl">
            Abrimos el <b className="text-red-500 font-extrabold">7 de julio</b>. Quedan solo{" "}
            <span className="block"><b className="text-red-500 font-extrabold">100 cupos</b> en preventa.</span>
            Aprovechá hasta <b className="text-red-500 font-extrabold">40% OFF</b> en tu pase anual.
          </p>
          <Link
            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || '/'}
            target="_blank"
            className="mt-8 inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:opacity-80 transition"
          >
            Reservá tu cupo
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-lg">
            <p className="flex items-center gap-2">
              <CheckIcon className="text-red-500 text-xl" /> Ubicación privilegiada
            </p>
            <p className="flex items-center gap-2">
              <CheckIcon className="text-red-500 text-xl" /> Kit de bienvenida
            </p>
            <p className="flex items-center gap-2">
              <CheckIcon className="text-red-500 text-xl" /> Full Pass incluido
            </p>
          </div>
        </div>
      </section>
      <section className="my-24 w-full max-w-7xl px-4 xl:px-0 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-auto lg:grow aspect-video relative">
          <SwiperTerrazas/>
        </div>
        <div className="w-full max-w-lg">
          <h2 className="sr-only">
            Ubicación y horarios
          </h2>
          <h3 className="text-5xl lg:text-8xl font-highrise-bold uppercase text-center lg:text-start">
            Av Perón 2400, Terrazas
          </h3>
          <div className='mt-6 lg:mt-8 w-fit mx-auto lg:mx-0 bg-zinc-700 text-sm rounded-2xl overflow-hidden flex relative'>
            <div className='w-12 shrink-0 bg-zinc-800 flex justify-center items-center'>
              <ClockIcon className='size-6 shrink-0' />
            </div>
            <ul className='p-3 flex font-highrise flex-col text-start'>
              <li><b className='font-bold'>Lunes a viernes</b> - 5:00 a 23:00</li>
              <li><b className='font-bold'>Sábados</b> - 9:00 a 13:00 y 16:00 a 20:00</li>
              <li><b className='font-bold'>Domingos</b> - 9:00 a 12:00 y 17:00 a 20:00</li>
            </ul>
          </div>
        </div>
      </section>
      {/* <ClasesTerrazas/> */}
      <section className="mt-24 w-full max-w-7xl px-4 xl:px-0 text-center">
        <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase">
          Precios de preventa
        </h2>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white/10 border-2 border-red-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold uppercase">Mensual</h3>
            <div className="mt-2 text-4xl font-highrise-bold relative text-white/75">
              <span className="relative">
                <small className="font-montserrat text-2xl">$ </small>
                70.000
                <div className="size-full flex justify-center items-center absolute top-0 left-0">
                  <div className="w-full h-0.5 bg-red-500 rotate-12 relative left-2"></div>
                </div>
              </span>
            </div>
            <div className="w-full h-px my-4 bg-white/20" />
            <p className="mt-4 text-lg font-semibold uppercase">Con tarjeta de crédito</p>
            <p className="mt-2 text-6xl font-highrise-bold">
              <small className="font-montserrat text-2xl">$ </small>55.000
            </p>
            <div className="w-full h-px my-4 bg-white/20" />
            <p className="text-lg font-semibold uppercase">Efectivo o transferencia</p>
            <p className="mt-2 text-6xl font-highrise-bold">
              <small className="font-montserrat text-2xl">$ </small>46.700
            </p>
          </div>
          <div className="bg-white/10 border-2 border-red-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold uppercase">Semestral</h3>
            <p className="mt-2 text-4xl font-highrise-bold relative text-white/75">
              <span className="relative">
                <small className="font-montserrat text-2xl">$ </small>
                420.000
                <div className="size-full flex justify-center items-center absolute top-0 left-0">
                  <div className="w-full h-0.5 bg-red-500 rotate-12 relative left-2"></div>
                </div>
              </span>
            </p>
            <div className="w-full h-px my-4 bg-white/20" />
            <p className="mt-4 text-lg font-semibold uppercase">En 3 cuotas sin interés</p>
            <p className="mt-2 text-6xl font-highrise-bold">
              <small className="font-montserrat text-2xl">$ </small>320.000
            </p>
            <div className="w-full h-px my-4 bg-white/20" />
            <p className="text-lg font-semibold uppercase">Efectivo o transferencia</p>
            <p className="mt-2 text-6xl font-highrise-bold">
              <small className="font-montserrat text-2xl">$ </small>272.000
            </p>
          </div>
        </div>
        <div className="mt-6 bg-white/5 border-2 border-white/20 p-6 rounded-xl shadow-inner opacity-40 pointer-events-none select-none">
          <h3 className="text-3xl font-bold uppercase">Pase anual - Agotado</h3>
          <p className="mt-4 text-6xl font-highrise-bold">
            <small className="font-montserrat text-2xl">$ </small>504.000
          </p>
          <p className="mt-2 block text-xl uppercase font-semibold">
            En 3 cuotas sin interés
          </p>
          <p className="mt-4 text-lg">Antes: $840.000</p>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || '/'}
            target="_blank"
            className="mt-8 inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:opacity-80 transition"
          >
            Reservá tu cupo
          </Link>
        </div>
      </section>
      <section className="mt-48 w-full max-w-7xl px-4 text-center">
        <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase mb-6">Qué incluye</h2>
        <ul className="mt-12 lg:mt-24 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-6 text-lg">
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <FitnessIcon className="size-10"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none"><b className="underline decoration-red-500 font-bold">Full Pass</b> con acceso libre al salón de aparatos</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <GroupIcon className="size-9"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none"><b className="underline decoration-red-500 font-bold">Instructor</b> en sala para guiarte</span>
          </li>
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <ClockIcon className="size-10"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none">Acceso a toda la grilla horaria de <b className="underline decoration-red-500 font-bold">clases</b></span>
          </li>
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <SunWindIcon className="size-11 relative left-px"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none">Ambiente <b className="underline decoration-red-500 font-bold">climatizado</b> y <b className="underline decoration-red-500 font-bold">equipado</b></span>
          </li>
        </ul>
      </section>
      <section className="mt-48 w-full flex flex-col items-center relative">
        <div className="size-full absolute top-0 left-0 z-0">
          <Image
            src={portada}
            alt="Imagen de la sede Terrazas"
            className="size-full object-cover pointer-events-none select-none"
          />
        </div>
        <div className="size-full px-4 py-24 lg:py-48 bg-black/75 flex flex-col items-center text-center relative z-10">
          <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase text-center mb-6">
            ¡Últimos cupos de preventa!
          </h2>
          <Link
            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || '/'}
            target="_blank"
            className="mt-8 inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:opacity-80 transition"
          >
            Quiero mi lugar
          </Link>
        </div>
      </section>
    </main>
  );
}
