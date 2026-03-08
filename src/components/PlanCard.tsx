import Link from "next/link";
import { CheckIcon } from "@/icons";

interface PlanCardProps {
    title: string;
    precio: number;
    subtitulo?: string;
    descripcion?: string;
    destacado?: boolean;
}

const benefits = ["Acceso a musculación", "Clases grupales", "Matrícula incluida"];

export const PlanCard = ({ title, precio, subtitulo, descripcion, destacado = false }: PlanCardProps) => (
    <div className={`relative p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 overflow-hidden ${
        destacado
            ? 'border-2 border-red-500/50 bg-red-600/10 shadow-2xl shadow-red-600/10'
            : 'glass-card hover:bg-white/[0.06]'
    }`}>
        {/* Popular badge */}
        {destacado && (
            <div className="absolute top-0 left-0 right-0">
                <div className="animated-border h-[2px]" />
                <div className="px-4 py-1 text-xs font-bold uppercase tracking-widest text-center text-red-400">
                    Más elegido
                </div>
            </div>
        )}

        <h3 className="mt-4 text-xl font-bold uppercase tracking-wider">{title}</h3>
        {subtitulo && <p className="mt-1 text-sm text-white/40 uppercase tracking-widest">{subtitulo}</p>}

        <div className="mt-8 mb-8">
            <span className="text-sm text-white/40">$</span>
            <span className="text-4xl sm:text-5xl font-highrise-bold">{precio.toLocaleString()}</span>
        </div>

        <ul className="w-full space-y-3 mb-8">
            {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckIcon className="text-red-500 shrink-0" />
                    {b}
                </li>
            ))}
        </ul>

        {descripcion && <p className="text-sm text-white/40 mb-6">{descripcion}</p>}

        <Link
            href={process.env.NEXT_PUBLIC_FORM_ASOCIATE || '/'}
            target="_blank"
            className={`w-full py-3.5 rounded-full text-sm font-bold uppercase tracking-wider text-center transition-all duration-300 ${
                destacado
                    ? 'bg-red-600 hover:bg-red-500 hover:shadow-lg hover:shadow-red-600/25'
                    : 'bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.08]'
            }`}
        >
            Quiero este plan
        </Link>
    </div>
);
