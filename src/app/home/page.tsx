import { Metadata } from "next";
import {
    Navbar,
    Portada,
    Bienvenido,
    Frase,
    Sedes,
    CasoDeExito,
    Entrenamientos,
    SwiperDescuentos,
    BannerRC,
    Features,
    ClasesVideo,
    SocioPlus,
    SwiperTestimonios
} from "@/components";

export const metadata: Metadata = {
    title: 'RC Gym',
    description: "RC Gym",
};

export default function HomePage() {
    return (
        <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900">
            <h1 className="sr-only">RC Gym Tucumán</h1>
            <Navbar/>
            <Portada/>
            <Bienvenido/>
            <Frase/>
            <Sedes/>
            <CasoDeExito/>
            <Entrenamientos/>
            <SwiperDescuentos/>
            <BannerRC/>
            <Features/>
            <ClasesVideo/>
            <SocioPlus/>
            <SwiperTestimonios/>
        </main>
    );
}