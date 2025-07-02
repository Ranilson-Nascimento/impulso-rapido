// Importa os componentes do 'Accordion' (acordeão ou "sanfona") da nossa biblioteca de UI.
// Este componente é ideal para seções de FAQ (Perguntas Frequentes), pois permite
// exibir uma grande quantidade de informação de forma compacta, onde o usuário
// clica na pergunta para revelar a resposta.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Array de dados para as perguntas frequentes.
 * Manter o conteúdo em um array separado do JSX torna o código mais limpo e fácil de gerenciar.
 *
 * PARA EDITAR: Adicione, remova ou modifique as perguntas e respostas
 * para refletir as dúvidas mais comuns dos clientes do negócio.
 * Tente antecipar as objeções ou incertezas que um potencial cliente possa ter.
 */
const perguntasFrequentes = [
  {
    question: "Como funciona o processo de contratação?",
    answer: "Nosso processo é simples e transparente. Começamos com uma reunião para entender suas necessidades, seguido por uma proposta detalhada. Após a aprovação, definimos o cronograma e iniciamos o projeto, mantendo você informado em cada etapa."
  },
  {
    question: "Quais são as formas de pagamento aceitas?",
    answer: "Aceitamos diversas formas de pagamento, incluindo transferência bancária, cartões de crédito e faturamento para empresas. Os detalhes são definidos na proposta comercial, podendo incluir um sinal e pagamentos parcelados."
  },
  {
    question: "Posso solicitar alterações durante o projeto?",
    answer: "Sim. A flexibilidade é um dos nossos pilares. Encorajamos o feedback contínuo e temos processos para incorporar ajustes ao longo do desenvolvimento, garantindo que o resultado final atenda perfeitamente às suas expectativas."
  },
  {
    question: "Que tipo de suporte é oferecido após a entrega?",
    answer: "Nossa parceria não termina com a entrega. Oferecemos um período de garantia para correções e planos de suporte contínuo para manutenção, atualizações e novas funcionalidades, garantindo a longevidade da sua solução."
  },
];

/**
 * Componente PerguntasFrequentes (FAQ)
 *
 * Esta seção tem o objetivo de responder proativamente às dúvidas mais comuns dos visitantes.
 * Isso ajuda a reduzir a incerteza, eliminar barreiras de compra e aumentar a confiança na marca,
 * o que pode diminuir a quantidade de contatos com perguntas básicas.
 */
export function PerguntasFrequentes() {
  return (
    // Define a seção com ID para navegação e espaçamento vertical.
    <section id="faq" className="container py-20 md:py-24">
      
      {/* Cabeçalho da seção */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        {/* PARA EDITAR: Adapte os textos para a sua marca. */}
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Perguntas Frequentes</h2>
        <p className="mt-2 text-lg text-foreground/80">
          Tudo o que você precisa saber sobre nossos serviços e processos.
        </p>
      </div>

      {/* Contêiner do Acordeão */}
      <div className="mx-auto max-w-3xl">
        {/* 
          O componente Accordion gerencia o estado de qual item está aberto.
          - `type="single"`: Permite que apenas um item (pergunta) seja aberto por vez.
          - `collapsible`: Permite que todos os itens possam ser fechados (nenhum item aberto).
          - `className="w-full"`: Faz o acordeão ocupar toda a largura do contêiner pai.
        */}
        <Accordion type="single" collapsible className="w-full">
          
          {/* Mapeia o array `perguntasFrequentes` para criar cada item do acordeão dinamicamente. */}
          {perguntasFrequentes.map((item, index) => (
            
            // Cada par de pergunta e resposta é um `AccordionItem`.
            // - `value`: Um identificador único para cada item.
            // - `key`: Chave para otimização do React.
            <AccordionItem value={`item-${index}`} key={index}>
              
              {/* O `AccordionTrigger` é a parte clicável que exibe a pergunta. */}
              <AccordionTrigger className="text-left font-semibold text-xl hover:no-underline">
                {item.question}
              </AccordionTrigger>
              
              {/* O `AccordionContent` é o conteúdo (a resposta) que aparece quando o item é aberto. */}
              <AccordionContent className="text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
