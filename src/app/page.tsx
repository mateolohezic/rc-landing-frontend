import { Metadata } from "next";
import Link from "next/link";
import { PlayIcon } from "@/icons";
import { RCIcon, RCLogo, VideoIntro } from "@/components";

export const metadata: Metadata = {
  title: 'RC Gym',
  description: "RC Gym",
};

export default function IntroPage() {
  return (
    <main className="w-full grow p-8 lg:p-16 flex flex-col relative">
      <div className="w-32 lg:w-80 grow relative z-10">
        <RCIcon className="w-full fill-neutral-100"/>
      </div>
      <div className="grow w-full flex flex-col lg:flex-row justify-between items-center lg:items-end relative z-10">
        <div className="grow flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <p className="font-stretch text-3xl lg:text-7xl uppercase">Entrena</p>
          <p className="font-stretch text-3xl lg:text-7xl uppercase text__outline__red">Suppera</p>
          <p className="font-stretch text-3xl lg:text-7xl uppercase">Conquista</p>
        </div>
        <Link href={'/home'} className="w-fit shrink-0 flex justify-center items-center gap-2 p-4 pr-2 lg:p-6 lg:pr-3 rounded-2xl bg-white/5 lg:bg-transparent lg:hover:bg-white/10 transition-150 group">
          <div className="flex justify-center items-center gap-4">
            <div className="hidden lg:flex flex-col justify-center items-end">
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">Conocé la</p>
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">experiencia</p>
            </div>
            <div className="flex lg:hidden flex-col justify-center items-end">
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl text-red-600">Experiencia</p>
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">RC Gym</p>
            </div>
            <p className="font-blackout text-9xl hidden lg:block"><RCLogo className="w-28 fill-white"/></p>
          </div>
          <PlayIcon className={`text-7xl text-white lg:text-transparent group-hover:text-white stroke-1 stroke-white transition-150`}/>
        </Link>
      </div>
      <VideoIntro/>
    </main>
  );
}
