"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRightIcon,
  BeginnerIcon,
  DefinitionIcon,
  MassIcon,
  PerformanceIcon,
  SeniorIcon,
  TeenIcon,
} from "@/icons";

const entrenamientos = [
  {
    nombre: "Principiantes",
    videoId: "2ZVpx85A-VY",
    descripcion: "Entrenamiento general para mejorar tu resistencia, fuerza y bienestar general.",
    Icon: BeginnerIcon,
  },
  {
    nombre: "Definición",
    videoId: "e7eyX-uLLn8",
    descripcion:"Mejorá tu rendimiento en disciplinas específicas con técnicas avanzadas.",
    Icon: DefinitionIcon,
  },
  {
    nombre: "Masa muscular",
    videoId: "kdrgMt0J3w0",
    descripcion:"Programas pensados para rehabilitación, movilidad y mejora integral del cuerpo.",
    Icon: MassIcon,
  },
  {
    nombre: "Alto rendimiento",
    videoId: "4c09mBHzOhI",
    descripcion: "Movimientos naturales para entrenar tu cuerpo como una máquina eficiente.",
    Icon: PerformanceIcon,
  },
  {
    nombre: "Adultos mayores",
    videoId: "j7pCt1G6Mk8",
    descripcion: "Reducción de grasa corporal y tonificación muscular sin perder energía.",
    Icon: SeniorIcon,
  },
  {
    nombre: "Adolescentes",
    videoId: "nk_XolRHQZo",
    descripcion: "Plan adaptado a jóvenes para desarrollo físico y hábitos saludables.",
    Icon: TeenIcon,
  },
];

export const Entrenamientos = () => {
  const [active, setActive] = useState(entrenamientos[0].nombre);
  const entrenamientoActual = entrenamientos.find((e) => e.nombre === active);

  return (
    <section className="w-full max-w-7xl px-4 xl:px-0 flex flex-col justify-center items-center lg:my-24">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-7xl text-6xl lg:text-9xl font-highrise-bold uppercase lg:leading-[0.8] [word-spacing:0.25rem]"
      >
        <span className="text__outline">Entrenamientos</span> <b className="block">que se adaptan</b>
      </motion.h2>
      <div className="mt-8 lg:mt-12 w-full flex justify-center gap-2 overflow-x-auto px-2 scrollbar-hide">
        {entrenamientos.map(({ nombre, Icon }) => (
          <button
            key={nombre}
            onClick={() => setActive(nombre)}
            className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full border transition-all text-sm ${ active === nombre ? "bg-red-600 border-white" : "bg-zinc-800 border-white/20 hover:border-white/40" }`}
          >
            <Icon className="text-lg shrink-0" />
            {nombre}
          </button>
        ))}
      </div>
      <div className="mt-8 w-full flex flex-col lg:flex-row lg:bg-neutral-800">
        <div className="w-full lg:max-w-sm p-6 flex flex-col">
          <AnimatePresence mode="wait">
            <motion.h3
              key={entrenamientoActual?.nombre}
              className="text-6xl lg:text-7xl font-highrise-bold"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4 }}
            >
              {entrenamientoActual?.nombre}
            </motion.h3>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={entrenamientoActual?.descripcion}
              className="mt-2 font-thin grow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {entrenamientoActual?.descripcion}
            </motion.p>
          </AnimatePresence>

          <Link
            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || "/"}
            target="_blank"
            className="mt-4 w-full px-4 py-3 rounded bg-red-600 hover:bg-red-400 flex justify-between items-center transition-150"
          >
            <span>Comenzá tu entrenamiento</span>
            <ArrowRightIcon className="text-xl relative left-1" />
          </Link>
        </div>
        <div className="w-full lg:w-auto lg:grow aspect-video relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.iframe
              key={entrenamientoActual?.videoId}
              src={`https://www.youtube.com/embed/${entrenamientoActual?.videoId}`}
              title={`Video de entrenamiento: ${active}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="size-full absolute top-0 left-0 z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
      </div>
      {/* <div className="w-full flex justify-center relative">
        <Image
          src={pattern_dot}
          alt="Entrenamientos STANNUM"
          className="size-full object-cover absolute top-0 left-0 z-0"
        />
        <div className="bg-gradient-to-br from-black to-background-sidebar opacity-50 size-full absolute top-0 left-0"></div>
        <div className="w-full flex relative z-20 overflow-x-auto divide-x-2 divide-white/10">
          {entrenamientos.map((entrenamiento) => (
            <button
              key={entrenamiento.nombre}
              type="button"
              onClick={() => setActive(entrenamiento.nombre)}
              className={`min-w-64 xl:min-w-0 grow h-16 font-black uppercase tracking-widest transition-150 ${
                active === entrenamiento.nombre
                  ? "bg-red-600"
                  : "hover:bg-white/10"
              }`}
            >
              {entrenamiento.nombre}
            </button>
          ))}
        </div>
      </div> */}
    </section>
  );
};