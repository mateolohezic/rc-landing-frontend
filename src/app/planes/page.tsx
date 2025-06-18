import { Precios } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planes",
  description: "Conoce los planes que tenemos para vos y únite a la familia RC.",
};

export default function PlanesPage() {
  return (
    <main className="w-full grow flex flex-col justify-center items-center bg-neutral-900 text-white">
      <section className="w-full lg:min-h-svh py-24 lg:py-48 flex flex-col justify-center items-center relative overflow-hidden">
        <Precios/>
      </section>
    </main>
  );
}
