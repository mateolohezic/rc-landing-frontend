import { StaticImageData } from 'next/image';
import sede_barrio_norte from "@/assets/home/sedes/sede_barrio_norte.webp";
import sede_barrio_sur from "@/assets/home/sedes/sede_barrio_sur.webp";
import sede_tafi_viejo from "@/assets/home/sedes/sede_tafi_viejo.webp";
import sede_yerba_buena from "@/assets/home/sedes/sede_yerba_buena.webp";
import sede_terrazas from "@/assets/home/sedes/sede_terrazas.webp";
import sede_epico from "@/assets/home/sedes/sede_epico.webp";

export interface ScheduleRow {
    time: string;
    lun?: string[];
    mar?: string[];
    mie?: string[];
    jue?: string[];
    vie?: string[];
    sab?: string[];
}

export interface SedePrecios {
    mensual: number;
    debitoAutomatico?: number;
    trimestral: number;
    semestral: number;
    soloEfectivoPromos?: boolean;
}

export interface Sede {
    slug: string;
    title: string;
    description: string;
    location: string;
    img: StaticImageData;
    clases: string[];
    horarios: {
        semana: string;
        sabado: string;
        domingo?: string;
    };
    phonenumber: string;
    schedule?: ScheduleRow[];
    precios?: SedePrecios;
}

export const sedes: Sede[] = [
    {
        slug: 'epico',
        title: "Épico",
        description: "Salones climatizados, dispenser de agua fría y caliente, vestuarios, duchas, lockers y zona de cardio equipada.",
        location: "San Luis 2120, Yerba Buena",
        img: sede_epico,
        clases: ["Spinning", "Funcional", "GAP"],
        horarios: { semana: "6:00 a 23:00", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493815959644&text=Hola%2C%20quiero%20info%20sobre%20RC%20Gym%20%C3%89pico&type=phone_number&app_absent=0",
        schedule: [
            { time: "08:30", lun: ["Spinning"], mar: ["Funcional"], mie: ["Spinning"], jue: ["Funcional"], vie: ["Spinning"] },
            { time: "10:30", sab: ["Spinning"] },
            { time: "15:00", lun: ["Spinning"], mie: ["Spinning"], vie: ["Spinning"] },
            { time: "17:00", mar: ["Spinning"], jue: ["Spinning"] },
            { time: "18:00", lun: ["Spinning", "Funcional"], mar: ["Funcional"], mie: ["Spinning", "Funcional"], jue: ["Funcional"], vie: ["Spinning", "Funcional"] },
            { time: "19:00", lun: ["Funcional"], mar: ["Spinning"], mie: ["Funcional"], jue: ["Spinning"], vie: ["Funcional"] },
        ],
        precios: { mensual: 80000, debitoAutomatico: 64000, trimestral: 216000, semestral: 408000 },
    },
    {
        slug: 'terrazas',
        title: "Terrazas",
        description: "Pileta climatizada, espacio verde outdoor, estacionamiento gratuito, WiFi, salones climatizados, vestuarios, duchas y lockers con candado.",
        location: "Av. Perón 2400",
        img: sede_terrazas,
        clases: ["Spinning", "Funcional HIT", "Circuito abdominal"],
        horarios: { semana: "5:00 a 23:00", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "9:00 a 12:00 y 17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493815145550&text=Hola%2C%20quiero%20info%20sobre%20RC%20Gym%20Terrazas&type=phone_number&app_absent=0",
        schedule: [
            { time: "07:00", lun: ["Spinning", "Funcional"], mie: ["Spinning", "Funcional"], vie: ["Spinning", "Funcional"] },
            { time: "08:00", mar: ["Funcional"], jue: ["Funcional"] },
            { time: "09:00", lun: ["Bodyperfect"], mie: ["Bodyperfect"], vie: ["Bodyperfect"] },
            { time: "14:30", lun: ["Funcional"], mie: ["Funcional"], vie: ["Funcional"] },
            { time: "15:30", lun: ["Spinning", "Calistenia"], mie: ["Spinning", "Calistenia"], vie: ["Spinning", "Calistenia"] },
            { time: "18:00", lun: ["Spinning"], mar: ["Spinning"], mie: ["Spinning"], jue: ["Spinning"], vie: ["Spinning"] },
            { time: "19:00", lun: ["Spinning"], mar: ["Bodyperfect"], mie: ["Spinning"], jue: ["Bodyperfect"], vie: ["Spinning"] },
            { time: "20:00", lun: ["Calistenia", "Zumba"], mie: ["Calistenia", "Zumba"], vie: ["Calistenia", "Zumba"] },
        ],
        precios: { mensual: 90000, debitoAutomatico: 72000, trimestral: 243000, semestral: 459000 },
    },
    {
        slug: 'aconquija',
        title: "Aconquija",
        description: "Amplia terraza al aire libre, WiFi, duchas, vestuarios, secador de pelo, dispenser de agua, salones climatizados y estacionamiento.",
        location: "Av. Aconquija 2122",
        img: sede_yerba_buena,
        clases: ["Funcional", "Spinning", "Yoga", "Full Body", "Pilates MAT", "Body Pump", "Ritmos Latinos", "TRX", "Boxeo", "HIT", "Calistenia"],
        horarios: { semana: "6:00 a 22:30", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816454929&text=Hola%2C%20quiero%20info%20sobre%20RC%20Gym%20Aconquija&type=phone_number&app_absent=0",
        schedule: [
            { time: "07:00", lun: ["Indoor"], mie: ["Indoor"], vie: ["Indoor"] },
            { time: "08:00", lun: ["Funcional"], mie: ["Funcional"], vie: ["Funcional"] },
            { time: "08:30", mar: ["Funcional"], jue: ["Funcional"] },
            { time: "11:00", mar: ["Yoga"], jue: ["Yoga"], sab: ["Indoor"] },
            { time: "15:00", lun: ["Indoor"], mar: ["Indoor"], mie: ["Indoor"], jue: ["Indoor"], vie: ["Indoor"] },
            { time: "16:00", mar: ["Body"], jue: ["Body"] },
            { time: "17:00", lun: ["Indoor"], mar: ["Full Body"], mie: ["Indoor"], jue: ["Full Body"], vie: ["Indoor"] },
            { time: "18:00", lun: ["Bodypump", "Funcional"], mie: ["Bodypump", "Funcional"], vie: ["Bodypump", "Funcional"] },
            { time: "18:30", mar: ["Boxeo"], jue: ["Boxeo"] },
            { time: "19:00", lun: ["Ritmos Latinos"], mar: ["Indoor"], mie: ["Indoor"], jue: ["Indoor"], vie: ["Indoor"] },
            { time: "20:00", lun: ["Indoor"], mar: ["Funcional", "Crossfit"], mie: ["Indoor"], jue: ["Funcional", "Crossfit"] },
            { time: "20:30", lun: ["Calistenia"], mie: ["Calistenia"], vie: ["Calistenia"] },
        ],
        precios: { mensual: 80000, debitoAutomatico: 64000, trimestral: 200000, semestral: 380000 },
    },
    {
        slug: 'barrio-sur',
        title: "Barrio Sur",
        description: "Patio al aire libre, duchas, vestuarios, secador de pelo, salones climatizados y terraza.",
        location: "9 de Julio 676",
        img: sede_barrio_sur,
        clases: ["Funcional", "Spinning", "Pilates MAT", "Calistenia", "Crossfit", "Zumba"],
        horarios: { semana: "6:00 a 23:00", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493812094717&text=Hola%2C%20quiero%20info%20sobre%20RC%20Gym%20Barrio%20Sur&type=phone_number&app_absent=0",
        schedule: [
            { time: "08:00", lun: ["Crossfit"], mar: ["Funcional"], mie: ["Crossfit"], jue: ["Funcional"], vie: ["Crossfit"] },
            { time: "09:00", lun: ["Indoor"], mie: ["Indoor"], vie: ["Indoor"] },
            { time: "11:00", sab: ["Funcional"] },
            { time: "15:00", lun: ["Funcional"], mar: ["Funcional"], mie: ["Funcional"], jue: ["Funcional"], vie: ["Funcional"] },
            { time: "16:00", mar: ["Pilates MAT"], jue: ["Pilates MAT"] },
            { time: "17:00", lun: ["Indoor", "Crossfit"], mar: ["Indoor", "Calistenia", "Crossfit"], mie: ["Indoor", "Crossfit"], jue: ["Indoor", "Calistenia", "Crossfit"], vie: ["Indoor", "Crossfit"] },
            { time: "18:00", lun: ["Indoor", "Crossfit"], mar: ["Indoor", "Crossfit"], mie: ["Indoor", "Crossfit"], jue: ["Indoor", "Crossfit"], vie: ["Indoor", "Crossfit"] },
            { time: "19:00", lun: ["Ritmos Latinos", "Indoor", "Calistenia"], mar: ["Indoor", "Calistenia"], mie: ["Ritmos Latinos", "Indoor", "Calistenia"], jue: ["Indoor", "Calistenia"], vie: ["Ritmos Latinos", "Indoor", "Calistenia"] },
            { time: "20:00", lun: ["Indoor", "Funcional"], mar: ["Indoor", "Funcional"], mie: ["Indoor", "Funcional"], jue: ["Indoor", "Funcional"], vie: ["Indoor", "Funcional"] },
            { time: "21:00", lun: ["Indoor", "Funcional"], mar: ["Indoor", "Funcional"], mie: ["Indoor", "Funcional"], jue: ["Indoor", "Funcional"], vie: ["Indoor", "Funcional"] },
            { time: "22:00", lun: ["GAPWOD"], mie: ["GAPWOD"], vie: ["GAPWOD"] },
        ],
        precios: { mensual: 61000, debitoAutomatico: 48800, trimestral: 155400, semestral: 292800 },
    },
    {
        slug: 'tafi-viejo',
        title: "Tafí Viejo",
        description: "Espacio al aire libre, duchas, vestuarios, secador de pelo, salones climatizados y estacionamiento.",
        location: "Av. Constitución 2400",
        img: sede_tafi_viejo,
        clases: ["Funcional", "Spinning", "Yoga", "GAP", "Ritmos", "Full Body"],
        horarios: { semana: "6:00 a 22:30", sabado: "9:00 a 13:00 y 16:00 a 20:00", domingo: "17:00 a 20:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493815145543&text=Hola%2C%20quiero%20info%20sobre%20RC%20Gym%20Taf%C3%AD%20Viejo&type=phone_number&app_absent=0",
        schedule: [
            { time: "07:00", lun: ["Funcional"], mie: ["Funcional"], vie: ["Funcional"] },
            { time: "09:00", lun: ["Spinning"], mar: ["Localizada"], mie: ["Spinning"], jue: ["Localizada"], vie: ["Spinning"] },
            { time: "10:30", sab: ["GAP"] },
            { time: "15:00", lun: ["Yoga"], mie: ["Yoga"], vie: ["Yoga"] },
            { time: "16:00", lun: ["Stretching"], mar: ["Step"], mie: ["Stretching"], jue: ["Step"], vie: ["Stretching"] },
            { time: "17:00", lun: ["Spinning"], mar: ["GAP"], mie: ["Spinning"], jue: ["GAP"], vie: ["Spinning"] },
            { time: "18:00", lun: ["Funcional"], mar: ["Fight Do"], mie: ["Funcional"], jue: ["Fight Do"], vie: ["Funcional"] },
            { time: "19:00", lun: ["Spinning"], mar: ["Full Body"], mie: ["Spinning"], jue: ["Full Body"], vie: ["Spinning"] },
            { time: "20:00", lun: ["Funcional"], mar: ["Spinning"], mie: ["Funcional"], jue: ["Spinning"], vie: ["Funcional"] },
            { time: "21:00", lun: ["Funcional"], mar: ["Spinning", "Funcional"], mie: ["Funcional"], jue: ["Spinning", "Funcional"], vie: ["Funcional"] },
        ],
        precios: { mensual: 72000, debitoAutomatico: 58000, trimestral: 183000, semestral: 342000 },
    },
    {
        slug: 'barrio-norte',
        title: "Barrio Norte",
        description: "Duchas, vestuarios, salones climatizados y dispenser de agua.",
        location: "Junín 567",
        img: sede_barrio_norte,
        clases: ["Aeróbicos", "Spinning", "Funcional", "BAP", "Aero Box"],
        horarios: { semana: "7:00 a 22:00", sabado: "9:00 a 16:00" },
        phonenumber: "https://api.whatsapp.com/send/?phone=5493816959673&text=Hola%2C%20quiero%20info%20sobre%20RC%20Gym%20Barrio%20Norte&type=phone_number&app_absent=0",
        schedule: [
            { time: "07:30", lun: ["Aeróbicos"], mar: ["Spinning"], mie: ["Aeróbicos"], jue: ["Spinning"], vie: ["Aeróbicos"] },
            { time: "14:30", lun: ["Spinning"], mar: ["Funcional"], mie: ["Spinning"], jue: ["Funcional"], vie: ["Spinning"] },
            { time: "15:30", lun: ["BAP"], mar: ["Mini Tramp + GAP"], mie: ["BAP"], jue: ["Mini Tramp + GAP"], vie: ["BAP"] },
            { time: "19:00", lun: ["Full Body"], mie: ["Full Body"], vie: ["Full Body"] },
            { time: "20:00", lun: ["Spinning"], mar: ["Spinning"], mie: ["Spinning"], jue: ["Spinning"], vie: ["Spinning"] },
        ],
        precios: { mensual: 70000, trimestral: 178500, semestral: 336000, soloEfectivoPromos: true },
    },
];

export function getSedeBySlug(slug: string): Sede | undefined {
    return sedes.find(s => s.slug === slug);
}
