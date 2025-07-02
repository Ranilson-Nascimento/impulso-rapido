// Importa ícones da biblioteca lucide-react para representar visualmente cada diferencial.
// O uso de ícones ajuda a quebrar o texto e torna a informação mais fácil de absorver.
import { ShieldCheck, Gauge, Users, Lightbulb } from 'lucide-react';

/**
 * Componente Diferenciais
 *
 * Esta seção é projetada para destacar os pontos fortes e únicos da empresa, produto ou serviço.
 * O objetivo é responder à pergunta: "Por que devo escolher você e não a concorrência?".
 * Utiliza um layout de grade com quatro colunas para apresentar os diferenciais de forma clara e concisa.
 */
export function Diferenciais() {
  return (
    // A tag <section> define a seção com um ID para navegação interna.
    // - `bg-background`: Usa a cor de fundo principal do tema.
    // - `py-20 md:py-24`: Adiciona espaçamento vertical para separar esta seção das outras.
    <section id="diferenciais" className="bg-background py-20 md:py-24">
      <div className="container">

        {/* Cabeçalho da seção */}
        <div className="mx-auto max-w-4xl text-center">
          {/* PARA EDITAR: Ajuste o título e o parágrafo para refletir os diferenciais reais e a voz da marca. */}
          <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Nossos Diferenciais</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Entenda por que somos a escolha certa para o seu próximo projeto.
          </p>
        </div>

        {/* 
          Grade que contém os "cards" dos diferenciais.
          - `grid`: Ativa o layout de grade do Tailwind CSS.
          - `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`: Define o layout responsivo.
            - 1 coluna em telas pequenas (mobile).
            - 2 colunas em tablets.
            - 4 colunas em desktops.
          - `gap-8`: Espaçamento entre os cards.
        */}
        <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Card do Diferencial 1 */}
          {/* 
            Cada `div` representa um card.
            - `flex flex-col items-center`: Alinha o conteúdo (ícone, título, texto) verticalmente e o centraliza.
            - `gap-4`: Espaçamento entre os itens dentro do card.
            - `rounded-lg bg-card p-8 text-center shadow-lg border`: Estilização do card (cantos arredondados, cor de fundo, preenchimento, etc.).
          */}
          {/* PARA EDITAR: Substitua o ícone, o título (h3) e a descrição (p) de cada um dos quatro diferenciais. */}
          <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
            <Users className="h-12 w-12 text-primary" />
            <h3 className="font-headline text-xl font-semibold">Diferencial 1</h3>
            <p className="text-md text-muted-foreground">Descreva um ponto forte que distingue sua empresa, como atendimento personalizado ou uma metodologia única.</p>
          </div>

          {/* Card do Diferencial 2 */}
          <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
            <Gauge className="h-12 w-12 text-primary" />
            <h3 className="font-headline text-xl font-semibold">Diferencial 2</h3>
            <p className="text-md text-muted-foreground">Apresente outro valor importante, como o foco em resultados mensuráveis ou a agilidade na entrega.</p>
          </div>

          {/* Card do Diferencial 3 */}
          <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <h3 className="font-headline text-xl font-semibold">Diferencial 3</h3>
            <p className="text-md text-muted-foreground">Destaque um pilar como a qualidade, segurança ou a garantia que você oferece nos seus produtos e serviços.</p>
          </div>

          {/* Card do Diferencial 4 */}
          <div className="flex flex-col items-center gap-4 rounded-lg bg-card p-8 text-center shadow-lg border">
            <Lightbulb className="h-12 w-12 text-primary" />
            <h3 className="font-headline text-xl font-semibold">Diferencial 4</h3>
            <p className="text-md text-muted-foreground">Fale sobre a inovação, o uso de novas tecnologias ou a capacidade de adaptação do seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
