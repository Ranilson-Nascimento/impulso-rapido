import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Nome do Cliente 1",
    company: "Cargo, Nome da Empresa",
    avatar: "C1",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "professional woman",
    quote: "“Trabalhar com [Sua Marca] foi uma experiência incrível. O profissionalismo e a dedicação da equipe superaram todas as nossas expectativas. O resultado final foi excepcional.”",
  },
  {
    name: "Nome do Cliente 2",
    company: "Cargo, Nome da Empresa",
    avatar: "C2",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "professional man",
    quote: "“O nível de atenção aos detalhes e a comunicação transparente durante todo o projeto foram impecáveis. O impacto positivo nos nossos resultados foi imediato e impressionante.”",
  },
  {
    name: "Nome do Cliente 3",
    company: "Cargo, Nome da Empresa",
    avatar: "C3",
    image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "startup founder",
    quote: "“Eles não entregam apenas um produto, entregam uma solução completa e bem pensada. A qualidade do trabalho e o suporte pós-entrega fizeram toda a diferença para nós.”",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-secondary py-20 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">O Que Nossos Clientes Dizem</h2>
          <p className="mt-2 text-lg text-foreground/80">A satisfação de quem confia em nosso trabalho é o nosso maior orgulho.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between transition-shadow hover:shadow-xl bg-card border">
              <CardContent className="p-6">
                <blockquote className="border-l-2 border-primary pl-4 text-lg italic text-foreground/90">{testimonial.quote.replace("[Sua Marca]", "esta equipe")}</blockquote>
              </CardContent>
              <div className="flex items-center gap-4 p-6 pt-0">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
