import Image from 'next/image';
import { headlineFont } from './fonts';
import mapaRecorrido from '@/assets/primavera-running/recorrido-mapa.png';

export const MapaCircuitoPrimavera = () => {
  return (
    <section className="w-full bg-black px-6 py-24 border-t border-white/10">
      <div className="max-w-3xl mx-auto text-center">
        <p style={{ fontFamily: 'var(--pr-label)' }} className="text-sm uppercase tracking-[0.4em] text-[#e2941f] mb-4">
          El circuito
        </p>
        <h2 className={`${headlineFont.className} text-[#fbf1dd] text-4xl sm:text-6xl lg:text-7xl leading-[0.95] uppercase mb-8`}>
          El recorrido
        </h2>

        <div className="w-full border border-white/15">
          <Image
            src={mapaRecorrido}
            alt="Mapa del recorrido de Primavera Running, con el circuito marcado alrededor de la laguna cerca de RC Terrazas"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
