import Image from 'next/image';
import { headlineFont } from './fonts';
import osde from '@/assets/primavera-running/sponsors/osde.png';
import gatorade from '@/assets/primavera-running/sponsors/gatorade.png';
import bianchi from '@/assets/primavera-running/sponsors/bianchi.png';
import pinarello from '@/assets/primavera-running/sponsors/pinarello.png';
import monster from '@/assets/primavera-running/sponsors/monster.png';
import kuranda from '@/assets/primavera-running/sponsors/kuranda.png';
import bonusTicket from '@/assets/primavera-running/sponsors/bonus-ticket.png';
import giorgini from '@/assets/primavera-running/sponsors/giorgini.png';
import queLoPaleo from '@/assets/primavera-running/sponsors/que-lo-paleo.png';

// Falta Paco García: el logo que se consiguió no sirve (baja resolución del
// avatar de Instagram). Sumar cuando llegue en condiciones.
const SPONSORS = [
  { nombre: 'OSDE', logo: osde, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Gatorade', logo: gatorade, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Bianchi', logo: bianchi, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Pinarello', logo: pinarello, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Monster Energy', logo: monster, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Kuranda Market', logo: kuranda, bg: 'bg-[#1a1f0d]' },
  { nombre: 'Bonus Ticket', logo: bonusTicket, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Giorgini Panetteria', logo: giorgini, bg: 'bg-[#fbf1dd]' },
  { nombre: 'Que lo Paleó', logo: queLoPaleo, bg: 'bg-[#fbf1dd]' },
];

export const SponsorsPrimavera = () => {
  return (
    <section className="w-full bg-black px-6 py-24 border-t border-white/10 text-center">
      <p style={{ fontFamily: 'var(--pr-label)' }} className="text-sm uppercase tracking-[0.4em] text-[#e2941f] mb-4">
        Sponsors
      </p>
      <h2 className={`${headlineFont.className} text-[#fbf1dd] text-3xl sm:text-5xl uppercase mb-12`}>
        Nos acompañan
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {SPONSORS.map((s) => (
          <div
            key={s.nombre}
            className={`flex items-center justify-center p-6 h-24 ${s.bg}`}
          >
            <Image src={s.logo} alt={s.nombre} className="max-h-12 w-auto max-w-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};
