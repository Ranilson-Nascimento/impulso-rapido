import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contato" className="container py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Entre em Contato</h2>
        <p className="mt-2 text-lg text-foreground/80">
          Tem uma ideia ou pergunta? Preencha o formulário abaixo e nossa equipe retornará em breve.
        </p>
      </div>
      <form className="mx-auto mt-12 max-w-xl space-y-6 rounded-lg border bg-card p-8 shadow-lg">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Digite seu nome" required/>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Digite seu e-mail" required/>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Assunto</Label>
          <Input id="subject" placeholder="Sobre qual assunto você quer falar?" required/>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Sua Mensagem</Label>
          <Textarea id="message" placeholder="Escreva sua mensagem aqui..." required className="min-h-[120px]"/>
        </div>
        <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
          Enviar Mensagem
        </Button>
      </form>
    </section>
  )
}
