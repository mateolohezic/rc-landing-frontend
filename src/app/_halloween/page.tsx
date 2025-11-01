import { Metadata } from "next";
import { EventPromise, EventTimeline, FAQAccordion, FinalCTA, HalloweenHero, JurySection, PrizeCards, ProofBar, StickyHeader, UrgencySection } from "@/components";

export const metadata: Metadata = {
    title: 'Halloween RC GYM 2025',
    description: 'Festival RC Club: el primer evento de bienestar sin alcohol en Tucumán. Música, fitness, gastronomía saludable y diversión familiar. 20 de septiembre en RC Terrazas.',
    keywords: ['festival fitness tucuman', 'evento saludable sin alcohol', 'festival familiar yerba buena', 'rc gym evento', 'diversión sana tucuman'],
    openGraph: {
        title: 'Halloween RC GYM 2025',
        description: 'El primer festival de bienestar sin alcohol de Tucumán. Un día completo de música, movimiento y conexión familiar.',
        url: 'https://rcgym.com.ar/festival',
        type: 'website',
    },
};

export default function HalloweenPage() {
    return (
        <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900 overflow-x-hidden">
            <h1 className="sr-only">Halloween RC GYM 2025</h1>
            <HalloweenHero/>
            <ProofBar/>
            <EventPromise/>
            <UrgencySection/>
            <EventTimeline/>
            <PrizeCards/>
            <JurySection/>
            <FAQAccordion/>
            {/* <SponsorsSection/> */}
            <FinalCTA/>
            <StickyHeader/>
        </main>
    );
}