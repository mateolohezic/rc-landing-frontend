'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { headlineFont } from './fonts';
import { GALERIA, type GaleriaItem } from './constants';

// Reproduce el video solo mientras está en pantalla, sin sonido.
const VideoCard = ({ item }: { item: Extract<GaleriaItem, { tipo: 'video' }> }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={item.src}
      poster={item.poster}
      aria-label={item.alt}
      muted
      loop
      playsInline
      preload="none"
      className="absolute inset-0 size-full object-cover"
    />
  );
};

export const GaleriaHalloween = () => {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-[#0a0a0a] py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 flex items-center justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#f26b1d] mb-4">Edición 2025</p>
          <h2 className={`${headlineFont.className} italic font-black uppercase text-5xl sm:text-7xl leading-[0.88] text-[#f3ece2]`}>
            Así fue
            <br />
            el año pasado
          </h2>
        </div>
        <div className="hidden sm:flex gap-2">
          {([-1, 1] as const).map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={() => scrollBy(dir)}
              aria-label={dir === -1 ? 'Ver anteriores' : 'Ver siguientes'}
              className="size-12 flex items-center justify-center border border-white/30 text-[#f3ece2] hover:border-[#f26b1d] hover:text-[#f26b1d] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d={dir === -1 ? 'M19 12H5M11 6l-6 6 6 6' : 'M5 12h14M13 6l6 6-6 6'} />
              </svg>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 sm:px-10 lg:px-[max(2.5rem,calc((100vw-72rem)/2+2.5rem))]"
      >
        {GALERIA.map((item) => (
          <figure key={item.pie} className="snap-start shrink-0 w-[72vw] sm:w-[320px] lg:w-[340px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
              {item.tipo === 'foto' ? (
                <Image quality={60}
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 340px, (min-width: 640px) 320px, 72vw"
                  className="object-cover"
                  style={{ objectPosition: item.posicion }}
                />
              ) : (
                <VideoCard item={item} />
              )}
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.25em] text-[#f3ece2]/60">{item.pie}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
