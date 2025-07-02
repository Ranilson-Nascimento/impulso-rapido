import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PlayCircle } from "lucide-react"

const portfolioItems = [
  {
    title: "Nome do Projeto 1",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "modern workspace",
  },
  {
    title: "Nome do Projeto 2",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "website development",
  },
  {
    title: "Nome do Projeto 3",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "app on screen",
  },
  {
    title: "Nome do Projeto 4",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "ux design",
  },
  {
    title: "Nome do Projeto 5",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "code on screen",
  },
  {
    title: "Nome do Projeto 6",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "team meeting",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="container py-20 md:py-24">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Nosso Portfólio de Sucesso</h2>
        <p className="mt-2 text-lg text-foreground/80">Veja exemplos práticos de como transformamos as ideias dos nossos clientes em realidade.</p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {portfolioItems.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden transition-shadow hover:shadow-xl group">
                  <CardHeader className="p-0 relative">
                    <Image
                      src={item.image}
                      alt={`Projeto ${item.title}`}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.hint}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 bg-card">
                    <h3 className="font-headline text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12 hidden md:flex" />
        <CarouselNext className="mr-12 hidden md:flex" />
      </Carousel>
    </section>
  )
}
