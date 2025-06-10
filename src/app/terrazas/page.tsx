// app/terrazas/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, ClockIcon, FitnessIcon, GroupIcon, SunWindIcon } from "@/icons";
import { Navbar } from "@/components";
import portada from "@/assets/terrazas/portada.webp";
import terrazas_1 from "@/assets/terrazas/terrazas_2.webp";

export const metadata: Metadata = {
  title: "Terrazas",
  description: "Nueva sede Terrazas en preventa - hasta 40% OFF",
};

export default function TerrazasPage() {
  return (
    <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900 text-white">
      <Navbar />
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
            Abrimos el <b className="text-red-500">30 de junio</b>. Quedan solo{" "}
            <span className="block lg:inline"><b className="text-red-500">100 cupos</b> en preventa.</span>
            Aprovechá hasta <b className="text-red-500">40% OFF</b> en tu pase anual.
          </p>
          <Link
            href="https://api.whatsapp.com/send/?phone=5493815145550&text&type=phone_number&app_absent=0"
            target="_blank"
            className="mt-8 inline-block px-8 py-3 text-xl bg-gradient-to-r from-red-500 to-red-400 rounded-lg uppercase hover:opacity-80 transition"
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
      <section className="w-full max-w-7xl px-4 xl:px-0 my-12 lg:my-24 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-auto lg:grow aspect-video relative">
          <Image
            src={terrazas_1}
            alt="Imagen del gimnasio Terrazas"
            className="size-full rounded-xl absolute top-0 left-0 object-cover"
          />
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
              <li><b className='font-bold'>Sábados</b> - 9:00 a 13:00 Y 16:00 a 20:00</li>
              <li><b className='font-bold'>Domingos</b> - 9:00 a 12:00 Y 17:00 a 20:00</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="w-full max-w-7xl px-4 xl:px-0 my-12 lg:my-24">
        <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase text-center lg:text-start">
          Precios de preventa
        </h2>
        <p className="uppercase tracking-widest text-xs lg:text-base text-center lg:text-start">Precios válidos solo para preventar presencial en efectivo</p>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center">
          <div className="bg-white/10 border-2 border-red-600 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl">Primera etapa <b className="block text-3xl font-bold uppercase">100 Cupos</b></h3>
            <p className="mt-8 text-7xl font-highrise-bold"><small className="font-montserrat text-2xl">$ </small>45.500</p>
            <p className="mt-2 line-through text-lg">Antes: $70.000</p>
          </div>
          <div className="bg-white/10 border-2 border-dashed border-white/50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl">Segunda etapa <b className="block text-3xl font-bold uppercase">100 Cupos</b></h3>
            <p className="mt-8 text-7xl font-highrise-bold"><small className="font-montserrat text-2xl">$ </small>49.000</p>
            <p className="mt-2 line-through text-lg">Antes: $70.000</p>
          </div>
          <div className="bg-white/10 border-2 border-dashed border-white/50 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl">Última etapa <b className="block text-3xl font-bold uppercase">100 Cupos</b></h3>
            <p className="mt-8 text-7xl font-highrise-bold"><small className="font-montserrat text-2xl">$ </small>52.500</p>
            <p className="mt-2 line-through text-lg">Antes: $70.000</p>
          </div>
        </div>
        <div className="mt-6 bg-red-600 border-2 border-red-600 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold uppercase">Pase anual</h3>
          <p className="mt-8 text-7xl font-highrise-bold"><small className="font-montserrat text-2xl">$ </small>504.000</p>
          <p className="mt-2 block text-2xl uppercase font-semibold">En 3 cuotas sin interés</p>
          <p className="mt-4 line-through text-lg">Antes: $840.000</p>
        </div>
      </section>

      <section className="w-full max-w-7xl px-4 pb-24">
        <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase mb-6 text-center lg:text-start">Qué incluye</h2>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-6 text-lg">
          <li className="lg:aspect-square bg-neutral-800 p-6 rounded-lg flex flex-col justify-center items-center gap-6 text-center">
            <FitnessIcon className="size-12"/>
            <span className="text-xl font-bold">Full Pass con acceso libre al salón de aparatos</span>
          </li>
          <li className="lg:aspect-square bg-neutral-800 p-6 rounded-lg flex flex-col justify-center items-center gap-6 text-center">
            <GroupIcon className="size-12"/>
            <span className="text-xl font-bold">Instructor en sala para guiarte</span>
          </li>
          <li className="lg:aspect-square bg-neutral-800 p-6 rounded-lg flex flex-col justify-center items-center gap-6 text-center">
            <ClockIcon className="size-12"/>
            <span className="text-xl font-bold">Acceso a toda la grilla horaria de clases</span>
          </li>
          <li className="lg:aspect-square bg-neutral-800 p-6 rounded-lg flex flex-col justify-center items-center gap-6 text-center">
            <SunWindIcon className="size-12"/>
            <span className="text-xl font-bold">Ambiente climatizado y equipado</span>
          </li>
        </ul>
      </section>
      <section className="w-full flex flex-col items-center relative">
        <div className="size-full absolute top-0 left-0 z-0">
          <Image
            src={portada}
            alt="Imagen de la sede Terrazas"
            className="size-full object-cover pointer-events-none select-none"
          />
        </div>
        <div className="size-full px-4 py-24 lg:py-48 bg-black/75 flex flex-col items-center text-center relative z-10">
          <h2 className="text-6xl lg:text-8xl font-highrise-bold uppercase text-center mb-6">
            ¡Última cupos de preventa!
          </h2>
          {/* <p className="text-lg text-center max-w-xl">
            Martes 20/05 de 17.00 a 20.00 hs en Av Aconquija 2122, Primer Piso.
            También disponible preventa online.
          </p> */}
          <Link
            href="https://api.whatsapp.com/send/?phone=5493815145550&text&type=phone_number&app_absent=0"
            // href="https://forms.gle/1a1J5yMtw1rroT7D6"
            target="_blank"
            className="mt-8 inline-block px-8 py-3 text-xl bg-red-600 rounded-lg uppercase hover:bg-red-500 transition"
            >
            Quiero mi lugar
          </Link>
        </div>
      </section>
    </main>
  );
}
