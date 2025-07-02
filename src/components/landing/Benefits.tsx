import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, PenTool, Briefcase, Smartphone } from "lucide-react"

const benefits = [
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Benefício Chave 1",
    description: "Descreva o primeiro grande benefício ou serviço que sua empresa oferece. Seja direto e foque no valor para o cliente.",
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: "Benefício Chave 2",
    description: "Explique o segundo benefício ou serviço. Destaque como ele resolve um problema específico do seu público.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: "Benefício Chave 3",
    description: "Apresente o terceiro benefício. Mostre o que torna sua oferta única e por que os clientes devem escolher você.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Benefício Chave 4",
    description: "Finalize com um benefício importante que complementa os outros e reforça a imagem da sua marca.",
  },
]

export function Benefits() {
  return (
    <section id="servicos" className="bg-secondary py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Nossos Principais Benefícios</h2>
          <p className="mt-2 text-lg text-foreground/80">Descubra como podemos ajudar a impulsionar seus resultados.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader>
                {benefit.icon}
                <CardTitle className="font-headline mt-4 text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
