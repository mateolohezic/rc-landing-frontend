import { Metadata } from "next";
import {
    Portada,
    StatsBar,
    Frase,
    Sedes,
    CasoDeExito,
    Entrenamientos,
    SwiperDescuentos,
    BannerRC,
    Features,
    ClasesVideo,
    SocioPlus,
    SwiperBeneficios,
    Precios,
    FooterCTA,
} from "@/components";

export const metadata: Metadata = {
    title: 'RC Gym',
    description: "RC Gym - El mejor gimnasio de Tucumán",
};

export default function HomePage() {
    return (
        <main className="w-full grow flex flex-col justify-center items-center bg-[#0a0a0a]">
            <h1 className="sr-only">RC Gym Tucumán</h1>
            <Portada />
            <StatsBar />
            <Frase />
            <Sedes />
            <Features />
            <Entrenamientos />
            <ClasesVideo />
            <BannerRC />
            <CasoDeExito />
            <Precios />
            <SwiperDescuentos />
            <SwiperBeneficios />
            <SocioPlus />
            <FooterCTA />
        </main>
    );
}
