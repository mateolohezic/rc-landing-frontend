import { Metadata } from "next";
import Link from "next/link";
import { PlayIcon } from "@/icons";
import { RCIcon, RCLogo } from "@/components";
import styles from '@/styles/home.module.css';

export const metadata: Metadata = {
  title: 'RC Gym',
  description: "RC Gym",
};

export default function IntroPage() {
  return (
    <main className="w-full grow p-16 flex flex-col items-center justify-start relative">
      <div className="w-full grow">
        <RCIcon className="w-80 fill-neutral-100"/>
      </div>
      <div className="w-full flex justify-between items-end">
        <div className="grow flex flex-col">
          <p className="font-stretch text-7xl uppercase">Entrena</p>
          <p className={`font-stretch text-7xl uppercase ${styles.text__outline}`}>Suppera</p>
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
      <div className="size-full absolute top-0 left-0 -z-10">
        <div className="size-full relative">
          <div className="size-full bg-gradient-to-bl from-background/75 to-75% to-background absolute top-0 left-0"></div>
          <video
            controls={false}
            playsInline
            autoPlay
            muted
            loop
            className="size-full object-cover pointer-events-none select-none"
            >
            <source src="/assets/background_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
    </div>
    </main>
  );
}
