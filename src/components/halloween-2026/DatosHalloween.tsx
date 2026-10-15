import { headlineFont } from './fonts';
import { EVENTO, MAPS_URL } from './constants';

const DATOS = [
  { label: 'Cuándo', valor: EVENTO.fechaLarga, detalle: EVENTO.horario },
  { label: 'Dónde', valor: EVENTO.lugar, detalle: EVENTO.direccion, href: MAPS_URL, linkTexto: 'Cómo llegar' },
  { label: 'Entrada', valor: 'Gratis', detalle: 'Con inscripción previa' },
  { label: 'Quiénes', valor: 'Todos', detalle: 'Socios y no socios' },
];

export const DatosHalloween = () => (
  <section className="w-full bg-[#0a0a0a] border-y border-white/10">
    <dl className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4">
      {DATOS.map((d, i) => (
        <div
          key={d.label}
          className={`px-6 py-8 sm:px-10 border-white/10 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} lg:border-l ${i === 0 ? 'lg:border-l-0' : ''}`}
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f26b1d] mb-3">{d.label}</dt>
          <dd>
            <span className={`${headlineFont.className} italic font-extrabold uppercase text-3xl sm:text-4xl leading-none text-[#f3ece2] block`}>
              {d.valor}
            </span>
            <span className="mt-2 block text-sm text-[#f3ece2]/70">{d.detalle}</span>
            {d.href && (
              <a
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-[#f3ece2] underline underline-offset-4 decoration-[#f26b1d] hover:text-[#f26b1d] transition-colors"
              >
                {d.linkTexto}
              </a>
            )}
          </dd>
        </div>
      ))}
    </dl>
  </section>
);
