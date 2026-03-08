import { Precios } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes",
  description: "Conoce los planes que tenemos para vos y únite a la familia RC.",
};

export default function PlanesPage() {
  return (
    <main className="w-full grow flex flex-col justify-center items-center bg-[#0a0a0a] text-white">
      <section className="w-full lg:min-h-svh pt-28 pb-16 md:pt-32 md:pb-20 lg:py-36 flex flex-col justify-center items-center relative overflow-hidden">
        <Precios/>
      </section>
    </main>
  );
}
