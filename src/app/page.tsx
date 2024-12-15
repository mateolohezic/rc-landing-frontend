// import Link from "next/link";
import { RCIcon, RCLogo } from "@/components";
import { Metadata } from "next";
import styles from '@/styles/home.module.css';
import { PlayIcon } from "@/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'RC Gym',
  description: "RC Gym",
};

export default function HomePage() {
  return (
    <main className="w-full grow p-16 flex flex-col items-center justify-start relative text-white">
      <div className="w-full grow">
        <RCIcon className="w-80 fill-neutral-100"/>
      </div>
      <div className="w-full flex justify-between items-end">
        <div className="grow flex flex-col">
          <p className="font-stretch text-7xl uppercase">Entrena</p>
          <p className={`font-stretch text-7xl uppercase ${styles.text__outline}`}>Suppera</p>
          <p className="font-stretch text-7xl uppercase">Conquista</p>
        </div>
        <Link href={'/home'} className="w-fit shrink-0 flex justify-center items-center gap-2 p-6 pr-3 rounded-2xl hover:bg-neutral-800 transition-150 group">
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-end">
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">Conocé la</p>
              <p className="font-highrise-bold tracking-wide leading-[0.85] text-5xl">experiencia</p>
            </div>
            <p className="font-blackout text-9xl"><RCLogo className="w-28 fill-white"/></p>
          </div>
          <div className="relative">
            <PlayIcon className={`text-7xl group-hover:text-white transition-150`}/>
            <div className="size-full flex justify-center items-center absolute top-0 left-0">
              <PlayIcon className={`text-7xl text-background scale-[0.8] group-hover:text-white transition-150`}/>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
