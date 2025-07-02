import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] md:h-screen flex items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      <div className="relative z-10 container flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Título Impactante Sobre Seu Negócio
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/80 md:text-xl">
          Descreva aqui a sua proposta de valor de forma clara e concisa para atrair a atenção do seu cliente.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="#contato">
            <Button size="lg" className="shadow-lg transition-transform hover:scale-105">
              Ação Principal
            </Button>
          </Link>
          <Link href="#portfolio">
            <Button size="lg" variant="outline" className="border-white text-white shadow-lg transition-transform hover:scale-105 hover:bg-white hover:text-primary">
              Ação Secundária
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
