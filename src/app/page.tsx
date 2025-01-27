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
    <main className="w-full grow p-16 flex flex-col relative">
      <div className="w-80 grow relative z-10">
        <RCIcon className="w-full fill-neutral-100"/>
      </div>
      <div className="w-full flex justify-between items-end relative z-10">
        <div className="grow flex flex-col">
          <p className="font-stretch text-7xl uppercase">Entrena</p>
          <p className="font-stretch text-7xl uppercase text__outline__red">Suppera</p>
          <p className="font-stretch text-7xl uppercase">Conquista</p>
        </div>
        <Link href={'/home'} className="w-fit shrink-0 flex justify-center items-center gap-2 p-6 pr-3 rounded-2xl hover:bg-white/10 transition-150 group">
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-end">
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">Conocé la</p>
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">experiencia</p>
            </div>
            <p className="font-blackout text-9xl"><RCLogo className="w-28 fill-white"/></p>
          </div>
          <PlayIcon className={`text-7xl text-transparent group-hover:text-white stroke-1 stroke-white transition-150`}/>
        </Link>
      </div>
      <VideoIntro/>
    </main>
  );
}
