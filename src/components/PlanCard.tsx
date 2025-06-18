import Link from "next/link";

interface PlanCardProps {
  title: string;
  precio: number;
  subtitulo?: string;
  descripcion?: string;
  destacado?: boolean;
}

export const PlanCard = ({ title, precio, subtitulo, descripcion, destacado = false }: PlanCardProps) => (
    <div className={`p-6 rounded-xl border-2 shadow-md flex flex-col items-center transition-all ${destacado ? 'bg-red-600 text-white border-red-600' : 'bg-white/10 border-white/10'}`}>
        <h3 className="text-2xl font-bold uppercase">{title}</h3>
        {subtitulo && <p className="mt-1 text-sm uppercase opacity-75 tracking-widest">{subtitulo}</p>}
        <p className="mt-6 text-5xl font-highrise-bold">${precio.toLocaleString()}</p>
        <p className="mt-2 text-sm opacity-80">Matrícula incluida</p>
        {descripcion && <p className="mt-4 text-sm opacity-75">{descripcion}</p>}
        <Link
            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || '/'}
            className={`mt-6 px-6 py-2 rounded-full text-sm font-bold ${destacado ? 'bg-white text-red-600' : 'bg-red-600 text-white'} hover:opacity-80 transition`}
        >
            Quiero este plan
        </Link>
    </div>
);
