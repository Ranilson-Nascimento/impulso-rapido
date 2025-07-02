import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
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
]

export function Faq() {
  return (
    <section id="faq" className="container py-20 md:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Perguntas Frequentes</h2>
        <p className="mt-2 text-lg text-foreground/80">
          Tudo o que você precisa saber sobre nossos serviços e processos.
        </p>
      </div>

      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left font-semibold text-xl hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/80">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
