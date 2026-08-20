import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de RC Gym: cómo recolectamos, usamos y protegemos tus datos personales.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <main className="w-full grow flex flex-col items-center bg-[#0a0a0a] text-white">
      <section className="w-full max-w-3xl px-6 pt-28 pb-16 md:pt-32 md:pb-20 lg:py-36 flex flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidad</h1>
          <p className="text-white/60 text-sm">Última actualización: 08/07/2026</p>
        </header>

        <div className="flex flex-col gap-8 text-white/80 leading-relaxed">
          <p>
            En RC Gym respetamos tu privacidad y nos comprometemos a proteger los
            datos personales que nos compartís. Esta política explica qué datos
            recolectamos, con qué fin y cuáles son tus derechos, de acuerdo con la
            Ley 25.326 de Protección de los Datos Personales de la República
            Argentina.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-white">1. Qué datos recolectamos</h2>
            <p>
              Cuando completás un formulario en nuestra web o en nuestras
              campañas en redes sociales (Instagram y Facebook), podemos
              recolectar: nombre y apellido, número de teléfono, correo
              electrónico y la sede de tu interés. Solo pedimos los datos
              necesarios para poder contactarte.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-white">2. Con qué fin los usamos</h2>
            <p>
              Usamos tus datos únicamente para responder tu consulta,
              informarte sobre planes, promociones y servicios de RC Gym, y
              coordinar tu inscripción o clase de prueba. No usamos tus datos
              para ningún otro fin sin tu consentimiento.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-white">3. Con quién los compartimos</h2>
            <p>
              No vendemos ni cedemos tus datos personales a terceros. Los datos
              pueden ser procesados por las plataformas que utilizamos para
              gestionar contactos y publicidad (por ejemplo, Meta), conforme a
              sus propias políticas de privacidad.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-white">4. Cómo los protegemos</h2>
            <p>
              Aplicamos medidas razonables de seguridad para resguardar tus
              datos y evitar accesos no autorizados, pérdida o alteración de la
              información.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-white">5. Tus derechos</h2>
            <p>
              Tenés derecho a acceder, rectificar, actualizar o solicitar la
              eliminación de tus datos personales en cualquier momento. Para
              ejercerlos, escribinos por los canales de contacto de RC Gym.
            </p>
            <p>
              La Agencia de Acceso a la Información Pública, órgano de control de
              la Ley 25.326, tiene la atribución de atender denuncias y reclamos
              vinculados al incumplimiento de las normas sobre protección de
              datos personales.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-white">6. Contacto</h2>
            <p>
              Ante cualquier consulta sobre esta política o sobre el tratamiento
              de tus datos, podés contactarnos por mensaje directo en nuestro
              Instagram <span className="text-white">@rcgym</span> o acercándote a
              cualquiera de nuestras sedes.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
