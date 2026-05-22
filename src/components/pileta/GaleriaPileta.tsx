'use client';

import Image, { type StaticImageData } from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import nadoPechoGrupo from '@/assets/pileta/nado-pecho-grupo.webp';
import crawlMujer1 from '@/assets/pileta/crawl-mujer-1.webp';
import crawlMujer2 from '@/assets/pileta/crawl-mujer-2.webp';
import mariposaMujer1 from '@/assets/pileta/mariposa-mujer-1.webp';
import mariposaMujer2 from '@/assets/pileta/mariposa-mujer-2.webp';
import retratoNadadora from '@/assets/pileta/retrato-nadadora.webp';
import retratoAntiparras1 from '@/assets/pileta/retrato-antiparras-1.webp';
import retratoAntiparras2 from '@/assets/pileta/retrato-antiparras-2.webp';

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  area?: string;
}

const images: GalleryImage[] = [
  { src: retratoNadadora, alt: 'Sonrisa de nadadora dentro de la pileta', area: 'lg:col-span-2 lg:row-span-2' },
  { src: nadoPechoGrupo, alt: 'Tres nadadores en clase de pecho' },
  { src: mariposaMujer1, alt: 'Mariposa con potencia en la pileta' },
  { src: crawlMujer1, alt: 'Crawl con técnica' },
  { src: retratoAntiparras1, alt: 'Nadadora ajustando antiparras' },
  { src: mariposaMujer2, alt: 'Mariposa frontal' },
  { src: crawlMujer2, alt: 'Crawl con sonrisa' },
  { src: retratoAntiparras2, alt: 'Triunfo después de nadar' },
];

export const GaleriaPileta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-16 lg:py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-14"
        >
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight uppercase leading-tight">
            Acá es donde <span className="text-red-500">vas a entrenar</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] lg:auto-rows-[220px] gap-2 lg:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-lg lg:rounded-xl group ${img.area || ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
