// Importa componentes de UI para criar os cards de depoimento.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Para exibir a imagem do cliente.
import { Card, CardContent } from "@/components/ui/card"; // O contêiner para cada depoimento.

/**
 * Array de dados dos depoimentos.
 * Centralizar os dados aqui facilita a edição, adição ou remoção de depoimentos
 * sem precisar alterar a estrutura do componente.
 *
 * PARA EDITAR: Substitua os dados abaixo pelos depoimentos reais dos seus clientes.
 * - name: Nome do cliente.
 * - company: Cargo e/ou nome da empresa do cliente.
 * - avatar: Iniciais do nome do cliente. Será exibido caso a imagem não carregue (fallback).
 * - image: URL da foto do cliente. Use imagens com boa resolução (ex: de serviços como Pexels, Unsplash).
 * - hint: Dica para IA (não visível). Usada por sistemas de IA para entender o conteúdo da imagem.
 * - quote: O depoimento do cliente. A menção a "[Sua Marca]" é útil para personalização, 
 *          mas no código a substituímos para soar mais natural.
 */
const depoimentos = [
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
];

/**
 * Componente Depoimentos
 *
 * Esta seção exibe depoimentos de clientes para criar "prova social".
 * Prova social é um poderoso gatilho psicológico que aumenta a confiança
 * de novos visitantes na sua marca ao ver que outras pessoas já tiveram
 * experiências positivas.
 */
export function Depoimentos() {
  return (
    // Define a seção com um ID para navegação e uma cor de fundo contrastante.
    <section id="depoimentos" className="bg-secondary py-20 md:py-24">
      <div className="container">
        
        {/* Cabeçalho da seção */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* PARA EDITAR: Adapte os textos para a sua marca. */}
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">O Que Nossos Clientes Dizem</h2>
          <p className="mt-2 text-lg text-foreground/80">A satisfação de quem confia em nosso trabalho é o nosso maior orgulho.</p>
        </div>
        
        {/* Grade para os depoimentos */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Itera sobre o array 'depoimentos' para renderizar cada card. */}
          {depoimentos.map((depoimento) => (
            <Card key={depoimento.name} className="flex flex-col justify-between transition-shadow hover:shadow-xl bg-card border">
              <CardContent className="p-6">
                {/* 
                  O depoimento em si (citação).
                  - `blockquote`: Tag semântica para citações.
                  - `border-l-2 border-primary pl-4`: Cria uma barra vertical à esquerda da citação para destaque visual.
                  - `.replace("[Sua Marca]", "esta equipe")`: Substitui a menção genérica por um termo mais natural no contexto de um depoimento.
                */}
                <blockquote className="border-l-2 border-primary pl-4 text-lg italic text-foreground/90">{depoimento.quote.replace("[Sua Marca]", "esta equipe")}</blockquote>
              </CardContent>
              
              {/* Rodapé do card com as informações do cliente. */}
              <div className="flex items-center gap-4 p-6 pt-0">
                
                {/* Avatar (foto) do cliente */}
                <Avatar>
                  <AvatarImage src={depoimento.image} alt={depoimento.name} data-ai-hint={depoimento.hint} />
                  <AvatarFallback>{depoimento.avatar}</AvatarFallback>
                </Avatar>
                
                {/* Nome e empresa do cliente */}
                <div>
                  <p className="font-semibold">{depoimento.name}</p>
                  <p className="text-sm text-muted-foreground">{depoimento.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
