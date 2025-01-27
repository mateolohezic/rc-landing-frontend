import Link from "next/link"

export const CasoDeExito = () => {
    return (
        <section className="w-full px-4 bg-neutral-800 py-12 lg:py-24">
            <div className="w-full max-w-7xl mx-auto">
                <h2 className="w-fit bg-red-600 px-4 py-0.5 text-5xl lg:text-7xl font-highrise-bold uppercase mx-auto lg:mx-0">Caso de éxito</h2>
                <div className="mt-6 lg:mt-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
                    <div className="w-full aspect-video rounded-xl overflow-hidden relative">
                        <iframe
                            src="https://www.youtube.com/embed/237rnd2jJXo?si=oqj-DIqFsZPUqggE"
                            title="Caso de éxito RC Gym"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="size-full absolute top-0 left-0"
                        />
                    </div>
                    <div className="w-full text-center lg:text-start">
                        <p className="hidden lg:block text-sm uppercase tracking-widest">Conocé nuestros entrenados</p>
                        <h3 className="text-7xl lg:text-9xl font-highrise-bold">Pepe Grillo</h3>
                        <p className="mb-8 lg:mb-4 text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe consequuntur officiis facere aperiam. Facilis nobis, repudiandae dolorem cupiditate tempore dolor quibusdam. Sunt, beatae! Aliquid quam voluptas sunt expedita illum?</p>
                        <Link href={'/home'} className="w-full max-w-md lg:w-auto px-4 py-1 text-xl rounded bg-red-600 hover:bg-red-400 transition-150 block">
                            Comenza tu entrenamiento
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
