import { ShieldCheck, Gauge, Users, Lightbulb } from 'lucide-react'

export function Features() {
  return (
    <section id="diferenciais" className="bg-background py-20 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Nossos Diferenciais</h2>
            <p className="mt-4 text-lg text-foreground/80">
              Entenda por que somos a escolha certa para o seu próximo projeto.
            </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
              <Users className="h-12 w-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">Diferencial 1</h3>
              <p className="text-md text-muted-foreground">Descreva um ponto forte que distingue sua empresa, como atendimento personalizado ou uma metodologia única.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
              <Gauge className="h-12 w-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">Diferencial 2</h3>
              <p className="text-md text-muted-foreground">Apresente outro valor importante, como o foco em resultados mensuráveis ou a agilidade na entrega.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
              <ShieldCheck className="h-12 w-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">Diferencial 3</h3>
              <p className="text-md text-muted-foreground">Destaque um pilar como a qualidade, segurança ou a garantia que você oferece nos seus produtos e serviços.</p>
            </div>
            <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
              <Lightbulb className="h-12 w-12 text-primary" />
              <h3 className="font-headline text-xl font-semibold">Diferencial 4</h3>
              <p className="text-md text-muted-foreground">Fale sobre a inovação, o uso de novas tecnologias ou a capacidade de adaptação do seu negócio.</p>
            </div>
        </div>
      </div>
    </section>
  )
}
