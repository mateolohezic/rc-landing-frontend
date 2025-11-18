import { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, ClockIcon, FitnessIcon, GroupIcon, GroupWorkIcon } from '@/icons';
import { SwiperEpico } from "@/components";

export const metadata: Metadata = {
  title: "EPICO",
  description: "Nueva sede EPICO en preventa - 50% OFF primer mes",
};

export default function EpicoPage() {
  return (
    <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900 text-white">
      <section className="w-full pt-36 lg:pt-48 lg:pb-12 flex flex-col justify-center items-center relative overflow-hidden">
        <div className="size-full bg-gradient-to-tr from-neutral-900 via-neutral-900 to-red-950 absolute top-0 left-0 z-0" />
        <div className="relative z-20 max-w-4xl text-center px-4">
          <h1 className="text-6xl lg:text-9xl font-highrise-bold uppercase">Nueva sede <b className="text-red-500 block">EPICO</b></h1>
          <p className="mt-6 text-lg lg:text-2xl">
            <br />Fecha de apertura: <b className="text-red-500 font-extrabold">15 de diciembre</b>
            <br />Quedan solo <b className="text-red-500 font-extrabold">50 cupos</b> en primera etapa.
            <br />Aprovechá <b className="text-red-500 font-extrabold">50% OFF</b> en tu primer mes.
          </p>
          <Link
            href={process.env.NEXT_PUBLIC_FORM_EPICO || '/'}
            target="_blank"
            className="mt-8 inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:opacity-80 transition"
          >
            Reservá tu cupo
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-lg">
            <p className="flex items-center gap-2">
              <CheckIcon className="text-red-500 text-xl" /> Zona exclusiva
            </p>
            <p className="flex items-center gap-2">
              <CheckIcon className="text-red-500 text-xl" /> Instructor en sala
            </p>
          </div>
        </div>
      </section>
      <section className="my-24 w-full max-w-7xl px-4 xl:px-0 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-auto lg:grow aspect-video relative">
          <div className="size-full rounded-xl overflow-hidden absolute top-0 left-0">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4485.951433911165!2d-65.29469034977814!3d-26.82397922667478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ5JzMzLjQiUyA2NcKwMTcnMzQuNyJX!5e0!3m2!1ses!2sar!4v1760498828270!5m2!1ses!2sar" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full"
            />
          </div>
        </div>
        <div className="w-full max-w-lg">
          <h2 className="sr-only">Ubicación y horarios</h2>
          <h3 className="text-5xl lg:text-8xl font-highrise-bold uppercase text-center lg:text-start">San Luis 2120, Yerba Buena</h3>
          <p className="mt-4 text-lg lg:text-xl text-white/80 text-center lg:text-start">Una ubicación estratégica para entrenar sin excusas</p>
          <div className='mt-6 lg:mt-8 w-fit mx-auto lg:mx-0 bg-neutral-700 text-sm rounded-2xl overflow-hidden flex relative'>
            <div className='w-12 shrink-0 bg-red-500 flex justify-center items-center'>
              <ClockIcon className='size-6 shrink-0' />
            </div>
            <div className='p-3 flex font-highrise flex-col text-start'>
              <button 
                className='font-bold uppercase text-sm hover:opacity-75 transition-200'
              >
                Ver horarios de clases
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mt-24 w-full">
        <h2 className="px-4 text-6xl lg:text-8xl font-highrise-bold uppercase text-center mb-12">Conocé las instalaciones</h2>
        <SwiperEpico/>
      </section>
      <section className="mt-24 lg:mt-48 w-full max-w-7xl px-4 xl:px-0 text-center">
        <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase">Oferta de preventa</h2>
        <div className="mt-12 max-w-md mx-auto">
          <div className="bg-white/10 border-2 border-red-600 p-8 rounded-xl shadow-lg">
            <h3 className="text-4xl font-bold uppercase">Plan Mensual</h3>
            <div className="mt-4 text-5xl font-highrise-bold relative text-white/75">
              <span className="relative">
                <small className="font-montserrat text-2xl">$ </small> 76.000
                <div className="size-full flex justify-center items-center absolute top-0 left-0">
                  <div className="w-full h-0.5 bg-red-500 rotate-12 relative left-2"></div>
                </div>
              </span>
            </div>
            <div className="w-full h-px my-6 bg-white/20" />
            <p className="text-2xl font-semibold uppercase text-red-500">50% OFF <small className="block text-sm">Solo transferencia</small></p>
            <p className="mt-4 text-7xl font-highrise-bold">
              <small className="font-montserrat text-3xl">$ </small>38.000
            </p>
            <div className="mt-6 bg-red-500/20 border border-red-500/50 rounded-lg p-3">
              <p className="text-sm uppercase font-semibold">Descuento válido <br />únicamente en el primer mes</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href={process.env.NEXT_PUBLIC_FORM_EPICO || '/'}
            target="_blank"
            className="inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:opacity-80 transition"
          >
            Quiero mi 50% OFF
          </Link>
        </div>
      </section>
      <section className="mt-24 lg:mt-48 w-full max-w-7xl px-4 text-center">
        <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase mb-6">Qué incluye</h2>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-6 text-lg">
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <FitnessIcon className="size-10"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none grow">
              <b className="underline decoration-red-500 font-bold">Salón de aparatos</b> completo
            </span>
          </li>
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <GroupWorkIcon className="size-10"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none grow">
              <b className="underline decoration-red-500 font-bold">Instructor</b> en sala para guiarte
            </span>
          </li>
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <ClockIcon className="size-10"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none grow">
              <b className="underline decoration-red-500 font-bold">Clases guiadas</b> en toda la grilla
            </span>
          </li>
          <li className="flex flex-col justify-center items-center gap-6">
            <div className="size-16 flex justify-center items-center rounded-full bg-gradient-to-br from-red-600 to-red-500">
              <GroupIcon className="size-9"/>
            </div>
            <span className="text-xl max-w-xs lg:max-w-none grow">
              Forma parte de <b className="underline decoration-red-500 font-bold">RC Club</b>, nuestra comunidad exclusiva
            </span>
          </li>
        </ul>
      </section>
      <section className="w-full flex flex-col items-center relative bg-gradient-to-br from-neutral-900 via-neutral-900 to-red-950">
        <div className="size-full px-4 py-24 lg:py-48 flex flex-col items-center text-center relative z-10">
          <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase text-center mb-6">¡Últimos 50 cupos!</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-2xl">No te quedes afuera. Asegurá tu lugar con <b className="text-red-500">50% OFF</b> en el primer mes.</p>
          <Link
            href={process.env.NEXT_PUBLIC_FORM_EPICO || '/'}
            target="_blank"
            className="inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-600 to-red-500 rounded-lg uppercase hover:opacity-80 transition"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}