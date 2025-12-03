import { Metadata } from "next";
import { HeroBlackRC, PreciosBlackRC, BeneficiosBlackRC, ComparativaBlackRC, EpicoSpecialBlackRC, FAQBlackRC, CTAFinalBlackRC } from "@/components";

export const metadata: Metadata = {
  title: "BLACK RC - Pase Trimestral",
  description: "Pase trimestral al precio anterior. Ahorrá hasta $69.000 y ganá 10 días para congelar por vacaciones. Solo del 28/11 al 5/12.",
};

export default function BlackRCPage() {
  return (
    <main className="w-full grow flex flex-col justify-center items-center bg-black text-white">
      <HeroBlackRC />
      <PreciosBlackRC />
      <BeneficiosBlackRC />
      <ComparativaBlackRC />
      <EpicoSpecialBlackRC />
      <FAQBlackRC />
      <CTAFinalBlackRC />
    </main>
  );
}