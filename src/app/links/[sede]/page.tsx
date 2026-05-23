import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sedes, getSedeBySlug } from '@/data/sedes';
import { SedeSchedule } from '@/components/SedeSchedule';
import { ClockIcon, LocationIcon, WhatsappIcon } from '@/icons';

interface Props {
    params: Promise<{ sede: string }>;
}

export async function generateStaticParams() {
    return sedes.map(s => ({ sede: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { sede: slug } = await params;
    const sede = getSedeBySlug(slug);
    if (!sede) return {};
    return {
        title: `RC Gym ${sede.title} — Horarios y contacto`,
        description: `${sede.description} En ${sede.location}, Tucumán.`,
        robots: { index: false, follow: false },
    };
}

export default async function SedePage({ params }: Props) {
    const { sede: slug } = await params;
    const sede = getSedeBySlug(slug);
    if (!sede) notFound();

    const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(`${sede.location}, Tucumán, Argentina`)}`;

    return (
        <main className="w-full grow flex flex-col items-center bg-black">
            {/* Hero */}
            <div className="relative w-full h-56">
                <Image
                    src={sede.img}
                    alt={`RC Gym ${sede.title}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <Link
                    href="/links"
                    className="absolute top-16 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-black/70 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Sedes
                </Link>
            </div>

            {/* Content */}
            <div className="w-full max-w-lg px-5 -mt-8 relative z-10 pb-16 flex flex-col gap-6">
                {/* Title */}
                <div>
                    <h1 className="font-highrise-bold text-5xl uppercase leading-none">{sede.title}</h1>
                    <a
                        href={mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-red-400 text-sm hover:text-red-300 transition-colors select-text"
                    >
                        <LocationIcon className="size-4 shrink-0" />
                        {sede.location}
                    </a>
                </div>

                {/* WhatsApp CTA */}
                <Link
                    href={sede.phonenumber}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] font-semibold text-white transition-colors"
                >
                    <WhatsappIcon className="size-5" />
                    Escribinos por WhatsApp
                </Link>
                <p className="text-center text-white/30 text-xs -mt-3">
                    Te pasamos el horario de clases completo y los planes disponibles.
                </p>

                <p className="text-white/50 text-sm leading-relaxed -mt-2">{sede.description}</p>

                {/* Horarios del gym */}
                <div className="glass-card p-5">
                    <div className="flex items-center gap-2 mb-4">
                        <ClockIcon className="size-4 text-red-500" />
                        <span className="text-sm font-semibold uppercase tracking-wider">Horarios</span>
                    </div>
                    <div className="space-y-3 text-sm select-text">
                        <div className="flex justify-between items-baseline">
                            <span className="text-white/40">Lun — Vie</span>
                            <span className="text-white/90 font-medium">{sede.horarios.semana}</span>
                        </div>
                        <div className="w-full h-px bg-white/[0.06]" />
                        <div className="flex justify-between items-baseline">
                            <span className="text-white/40">Sábados</span>
                            <span className="text-white/90 font-medium">{sede.horarios.sabado}</span>
                        </div>
                        {sede.horarios.domingo && (
                            <>
                                <div className="w-full h-px bg-white/[0.06]" />
                                <div className="flex justify-between items-baseline">
                                    <span className="text-white/40">Domingos</span>
                                    <span className="text-white/90 font-medium">{sede.horarios.domingo}</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Clases disponibles */}
                <div>
                    <h2 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Clases disponibles</h2>
                    <div className="flex flex-wrap gap-2">
                        {sede.clases.map((clase, i) => (
                            <span key={i} className="px-3 py-1.5 text-xs glass-card rounded-full text-white/60">
                                {clase}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Horario de clases */}
                {sede.schedule && sede.schedule.length > 0 && (
                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Horario de clases</h2>
                        <SedeSchedule schedule={sede.schedule} />
                    </div>
                )}

                {/* Planes */}
                {sede.precios && (
                    <div>
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-3">Planes</h2>
                        <div className="flex flex-col gap-2.5">
                            {/* Mensual */}
                            <div className={`glass-card p-4 ${sede.precios.debitoAutomatico ? 'border-red-500/40' : ''}`}>
                                <div className="flex justify-between items-start gap-4">
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold uppercase tracking-wider">Mensual</p>
                                        <p className="text-xs text-white/40 mt-0.5">
                                            {sede.precios.debitoAutomatico ? "Con débito automático" : "Mes a mes"}
                                        </p>
                                    </div>
                                    <div className="text-right shrink-0">
                                        {sede.precios.debitoAutomatico && (
                                            <p className="text-xs text-white/30 line-through leading-none">
                                                ${sede.precios.mensual.toLocaleString('es-AR')}
                                            </p>
                                        )}
                                        <p className="font-highrise-bold text-2xl leading-none mt-1">
                                            ${(sede.precios.debitoAutomatico ?? sede.precios.mensual).toLocaleString('es-AR')}
                                        </p>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">por mes</p>
                                    </div>
                                </div>
                                {sede.precios.debitoAutomatico && (
                                    <p className="mt-3 pt-3 border-t border-white/[0.06] text-xs text-red-400">
                                        Ahorrás ${(sede.precios.mensual - sede.precios.debitoAutomatico).toLocaleString('es-AR')} cada mes.
                                    </p>
                                )}
                            </div>

                            {/* Trimestral */}
                            <div className="glass-card p-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold uppercase tracking-wider">Trimestral</p>
                                        <p className="text-xs text-white/40 mt-0.5">Pago único · 3 meses</p>
                                    </div>
                                    <p className="font-highrise-bold text-2xl leading-none shrink-0">
                                        ${sede.precios.trimestral.toLocaleString('es-AR')}
                                    </p>
                                </div>
                            </div>

                            {/* Semestral */}
                            <div className="glass-card p-4">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold uppercase tracking-wider">Semestral</p>
                                        <p className="text-xs text-white/40 mt-0.5">Pago único · 6 meses</p>
                                    </div>
                                    <p className="font-highrise-bold text-2xl leading-none shrink-0">
                                        ${sede.precios.semestral.toLocaleString('es-AR')}
                                    </p>
                                </div>
                            </div>

                            {sede.precios.soloEfectivoPromos && (
                                <p className="text-xs text-white/40 text-center mt-1">
                                    Trimestral y semestral solo en efectivo.
                                </p>
                            )}

                            <p className="text-[11px] text-white/30 text-center mt-2">
                                Acceso a musculación, clases grupales y matrícula incluida.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
