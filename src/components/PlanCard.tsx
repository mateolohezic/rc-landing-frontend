import Link from "next/link";
import { CheckIcon } from "@/icons";

interface PlanCardProps {
    title: string;
    precio: number;
    precioDebito?: number;
    subtitulo?: string;
    descripcion?: string;
    cta?: string;
    destacado?: boolean;
}

const benefits = ["Acceso a musculación", "Clases grupales", "Matrícula incluida"];

export const PlanCard = ({ title, precio, precioDebito, subtitulo, descripcion, cta = "Quiero este plan", destacado = false }: PlanCardProps) => (
    <div className={`relative p-6 sm:p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${
        destacado
            ? 'border-2 border-red-500/50 bg-red-600/10 shadow-2xl shadow-red-600/10'
            : 'glass-card hover:bg-white/[0.06]'
    }`}>
        {/* Popular badge */}
        {destacado && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-red-600/30 whitespace-nowrap">
                Más elegido
            </div>
        )}

        <h3 className="mt-4 text-xl font-bold uppercase tracking-wider">{title}</h3>
        {subtitulo && <p className="mt-1 text-sm text-white/40 uppercase tracking-widest">{subtitulo}</p>}

        <div className="mt-8 mb-8 grid grid-rows-[1.5rem_auto_1.75rem_1rem] place-items-center gap-1">
            <span className={`text-lg font-medium leading-none ${precioDebito ? 'text-white/30 line-through' : 'invisible'}`}>
                ${precio.toLocaleString()}
            </span>
            <div className="leading-none">
                <span className="text-sm text-white/40 align-top">$</span>
                <span className="text-4xl sm:text-5xl font-highrise-bold">
                    {(precioDebito ?? precio).toLocaleString()}
                </span>
            </div>
            {precioDebito ? (
                <span className="inline-flex items-center px-2.5 py-1 rounded-full border border-red-500/30 bg-red-500/[0.06] text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-red-400 leading-none">
                    −20% con débito automático
                </span>
            ) : (
                <span className="invisible">.</span>
            )}
            {precioDebito ? (
                <span className="text-xs text-white/50 leading-none">
                    Ahorrás ${(precio - precioDebito).toLocaleString()} cada mes
                </span>
            ) : (
                <span className="invisible">.</span>
            )}
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
            {cta}
        </Link>
    </div>
);
