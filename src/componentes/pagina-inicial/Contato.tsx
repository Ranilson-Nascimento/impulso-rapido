// Importa componentes de UI para construir o formulário.
// Cada componente é otimizado para acessibilidade e estilização.
import { Button } from "@/components/ui/button"; // Botão estilizado para envio.
import { Input } from "@/components/ui/input"; // Campo de entrada de texto padrão.
import { Label } from "@/components/ui/label"; // Rótulo associado a um campo de formulário.
import { Textarea } from "@/components/ui/textarea"; // Campo para textos mais longos.
import { RedesSociais, ContatoDireto } from "./RedesSociais"; // Componentes de redes sociais e contato direto.

/**
 * Componente Contato
 *
 * Esta seção exibe um formulário de contato para que os visitantes possam enviar mensagens.
 * É uma das seções mais importantes para a conversão de leads (potenciais clientes).
 * 
 * IMPORTANTE: Este componente lida apenas com a aparência (frontend) do formulário.
 * Para que o formulário realmente envie dados, ele precisa ser conectado a um backend
 * ou a um serviço de terceiros (como Formspree, Getform, ou uma função serverless).
 */
export function Contato() {
  return (
    <>
      {/* Seção de formulário de contato */}
      <section id="contato" className="container py-16 md:py-20">
        {/* Cabeçalho da seção */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Entre em Contato</h2>
          <p className="mt-6 mb-12 text-lg text-foreground/80">
            Tem uma ideia ou pergunta? Preencha o formulário abaixo e nossa equipe retornará em breve.
          </p>
        </div>

        {/* Formulário de Contato */}
        <form className="mx-auto mt-12 max-w-xl space-y-6 rounded-lg border bg-card p-8 shadow-lg">
          {/* Nome e Email */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Digite seu nome" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" required />
            </div>
          </div>

          {/* Assunto */}
          <div className="space-y-2">
            <Label htmlFor="subject">Assunto</Label>
            <Input id="subject" placeholder="Sobre qual assunto você quer falar?" required />
          </div>

          {/* Mensagem */}
          <div className="space-y-2">
            <Label htmlFor="message">Sua Mensagem</Label>
            <Textarea id="message" placeholder="Escreva sua mensagem aqui..." required className="min-h-[120px]" />
          </div>

          {/* Botão de Envio */}
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Enviar Mensagem
          </Button>
        </form>
      </section>
      
      {/* Seção de outras formas de contato */}
      <section id="outras-formas-contato" className="bg-secondary/5 py-16 md:py-20 mt-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mt-12 mb-16">
              <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Outras formas de contato</h2>
              <p className="mt-6 text-lg text-foreground/80">
                Prefere falar diretamente? Entre em contato pelos nossos canais ou redes sociais.
              </p>
            </div>
            
            {/* Contato direto */}
            <div className="mb-20">
              <ContatoDireto />
            </div>

            {/* Separador sutil */}
            <div className="my-20 w-full max-w-md mx-auto border-t border-border/50"></div>
            
            {/* Redes Sociais */}
            <div className="text-center pb-8 mt-12">
              <h3 className="text-2xl font-semibold text-foreground mb-12">Siga-nos nas redes sociais</h3>
              <RedesSociais variant="outline" size="lg" showLabels />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
