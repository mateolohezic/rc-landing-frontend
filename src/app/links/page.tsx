import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sedes } from '@/data/sedes';
import { RCLogo } from '@/components/RCLogo';
import { LocationIcon } from '@/icons';

export const metadata: Metadata = {
    title: 'Nuestras Sedes',
    description: '6 sedes RC Gym en Tucumán. Horarios, clases y contacto.',
    robots: { index: false, follow: false },
};

export default function LinksPage() {
    return (
        <main className="relative w-full grow flex flex-col items-center bg-neutral-950 pt-20 pb-16 px-4 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/[0.18] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-red-600/[0.10] rounded-full blur-[100px]" />
            </div>

            <div className="relative flex flex-col items-center gap-3 mb-10">
                <RCLogo className="w-14 h-14 fill-white" />
                <p className="text-white/40 text-sm tracking-widest uppercase">6 sedes en Tucumán</p>
            </div>

            <div className="relative w-full max-w-sm flex flex-col gap-3">
                {sedes.map((sede) => (
                    <Link
                        key={sede.slug}
                        href={`/links/${sede.slug}`}
                        className="relative overflow-hidden rounded-2xl group"
                    >
                        <div className="relative h-[88px]">
                            <Image
                                src={sede.img}
                                alt={`RC Gym ${sede.title}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, 384px"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300" />

                            <div className="absolute inset-0 flex items-center justify-between px-5">
                                <div>
                                    <h2 className="font-highrise-bold text-4xl uppercase leading-none">{sede.title}</h2>
                                    <p className="text-white/50 text-xs flex items-center gap-1 mt-1.5">
                                        <LocationIcon className="size-3 shrink-0" />
                                        {sede.location}
                                    </p>
                                </div>
                                <svg
                                    className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <p className="relative mt-12 text-white/20 text-xs tracking-widest">@rcgym</p>
        </main>
    );
}
