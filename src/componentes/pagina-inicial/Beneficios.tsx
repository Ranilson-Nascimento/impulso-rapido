// Importa os componentes de Card do diretório de UI.
// Os Cards são usados como contêineres estilizados para cada benefício,
// proporcionando uma aparência visual consistente e organizada.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Importa ícones da biblioteca lucide-react.
// Ícones são uma ótima forma de representar visualmente cada benefício,
// tornando a seção mais escaneável e agradável.
import { Code, PenTool, Briefcase, Smartphone } from "lucide-react";

/**
 * Array de dados dos benefícios.
 * 
 * Este array de objetos centraliza todo o conteúdo da seção de benefícios.
 * Isso torna a edição e a manutenção muito mais fáceis.
 * Para adicionar, remover ou alterar um benefício, basta modificar este array.
 * 
 * PARA EDITAR:
 * - icon: O componente do ícone a ser exibido. Escolha um ícone da `lucide-react` que represente o benefício.
 * - title: O título do benefício (ex: "Desenvolvimento Web", "Consultoria de Marketing").
 * - description: Um texto curto e direto que explica o valor ou o que é o serviço.
 */
const beneficios = [
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
];

/**
 * Componente Beneficios
 *
 * Esta seção é projetada para destacar os principais benefícios, serviços ou características
 * do produto/empresa. Utiliza um layout de grade (grid) para exibir os cards de forma
 * simétrica e responsiva.
 */
export function Beneficios() {
  return (
    // A tag <section> define semanticamente uma seção da página.
    // - `id="servicos"`: É um identificador único que permite a criação de links de navegação diretos para esta seção (ex: /#servicos).
    // - `bg-secondary`: Aplica a cor de fundo secundária do tema, criando um contraste visual com a seção anterior.
    // - `py-20 md:py-24`: Adiciona preenchimento vertical (padding) para dar espaçamento à seção.
    <section id="servicos" className="bg-secondary py-20 md:py-24">
      {/* O `div.container` é uma classe que centraliza o conteúdo e define uma largura máxima, garantindo que o layout fique bom em telas grandes. */}
      <div className="container">
        
        {/* Cabeçalho da seção */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Nossos Principais Benefícios</h2>
          <p className="mt-2 text-lg text-foreground/80">Descubra como podemos ajudar a impulsionar seus resultados.</p>
        </div>

        {/* 
          Grade que organiza os cards de benefícios.
          - `grid`: Ativa o layout de grade.
          - `grid-cols-1`: Em telas pequenas, exibe 1 coluna.
          - `md:grid-cols-2`: Em telas médias (tablets), exibe 2 colunas.
          - `lg:grid-cols-4`: Em telas grandes (desktops), exibe 4 colunas.
          - `gap-8`: Define o espaçamento entre os cards.
        */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 
            O método `.map()` itera sobre o array `beneficios` definido acima.
            Para cada objeto no array, ele renderiza um componente `Card`.
            - `key={beneficio.title}`: A chave (key) é importante para o React otimizar a renderização de listas. Deve ser um valor único.
          */}
          {beneficios.map((beneficio) => (
            <Card key={beneficio.title} className="flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl bg-card">
              <CardHeader>
                {/* Renderiza o ícone do benefício. */}
                {beneficio.icon}
                {/* Renderiza o título do benefício. */}
                <CardTitle className="font-headline mt-4 text-xl">{beneficio.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Renderiza a descrição do benefício. */}
                <p className="text-foreground/80">{beneficio.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
