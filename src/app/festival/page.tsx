import { HeroFestival } from "@/components";
import { ComparativoEventos } from "@/components/festival/ComparativoEventos";
import { CronogramaActividades } from "@/components/festival/CronogramaActividades";
import { CuentaRegresiva } from "@/components/festival/CuentaRegresiva";
import { FAQFestival } from "@/components/festival/FAQFestival";
import { PropuestaValor } from "@/components/festival/PropuestaValor";
import { QueTraerFestival } from "@/components/festival/QueTraerFestival";
// import { SponsorsFestival } from "@/components/festival/SponsorsFestival";
import { UbicacionEvento } from "@/components/festival/UbicacionEvento";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Festival RC Club 2025 - Diversión Sana en Tucumán',
    description: 'Festival RC Club: el primer evento de bienestar sin alcohol en Tucumán. Música, fitness, gastronomía saludable y diversión familiar. 20 de septiembre en RC Terrazas.',
    keywords: ['festival fitness tucuman', 'evento saludable sin alcohol', 'festival familiar yerba buena', 'rc gym evento', 'diversión sana tucuman'],
    openGraph: {
        title: 'Festival RC Club 2025 - Somos Comunidad, Universo RC',
        description: 'El primer festival de bienestar sin alcohol de Tucumán. Un día completo de música, movimiento y conexión familiar.',
        url: 'https://rcgym.com.ar/festival',
        type: 'website',
    },
};

export default function FestivalPage() {
    return (
        <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900">
            <h1 className="sr-only">Festival RC Club 2025 - Diversión Sana en Tucumán</h1>
            <HeroFestival />
            <ComparativoEventos />
            <PropuestaValor />
            {/* <SponsorsFestival /> */}
            <QueTraerFestival />
            <CronogramaActividades />
            <CuentaRegresiva />
            <UbicacionEvento />
            <FAQFestival />
        </main>
    );
}