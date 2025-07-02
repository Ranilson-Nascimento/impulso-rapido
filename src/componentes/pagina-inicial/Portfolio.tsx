// Importa os componentes e ícones necessários.
import Image from "next/image"; // Componente otimizado para imagens do Next.js.
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Componentes para criar os cards.
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"; // Componente de carrossel para exibir os projetos.
import { PlayCircle } from "lucide-react"; // Ícone de "play" para sugerir conteúdo de vídeo.

/**
 * Array de dados para os itens do portfólio.
 * Centralizar o conteúdo aqui torna a edição muito mais simples.
 *
 * PARA EDITAR: Substitua os dados abaixo pelos projetos reais da empresa.
 * - title: O nome do projeto.
 * - description: Uma breve descrição ou a categoria do projeto (ex: "E-commerce", "Website Institucional").
 * - image: URL da imagem de destaque do projeto. Use imagens de alta qualidade.
 * - hint: Dica para IA (não visível) para futuras otimizações de imagem.
 */
const portfolioItems = [
  {
    title: "Nome do Projeto 1",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "modern workspace",
  },
  {
    title: "Nome do Projeto 2",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "website development",
  },
  {
    title: "Nome do Projeto 3",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "app on screen",
  },
  {
    title: "Nome do Projeto 4",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "ux design",
  },
  {
    title: "Nome do Projeto 5",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "code on screen",
  },
  {
    title: "Nome do Projeto 6",
    description: "Descrição ou Categoria do Projeto",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    hint: "team meeting",
  },
];

/**
 * Componente Portfolio
 *
 * Esta seção exibe os projetos anteriores da empresa em um carrossel interativo.
 * É uma parte crucial da landing page para demonstrar a qualidade e a experiência
 * do trabalho, gerando credibilidade e confiança.
 */
export function Portfolio() {
  return (
    <section id="portfolio" className="container py-20 md:py-24">
      {/* Cabeçalho da seção */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        {/* PARA EDITAR: Adapte os textos para a sua marca. */}
        <h2 className="font-headline text-3xl font-bold text-primary md:text-4xl">Nosso Portfólio de Sucesso</h2>
        <p className="mt-2 text-lg text-foreground/80">Veja exemplos práticos de como transformamos as ideias dos nossos clientes em realidade.</p>
      </div>

      {/* Componente Carrossel */}
      <Carousel
        opts={{
          align: "start", // Alinha o início de um slide com o início do carrossel.
          loop: true,      // Permite que o carrossel "dê a volta" do último para o primeiro item.
        }}
        className="w-full" // O carrossel ocupa toda a largura do contêiner.
      >
        <CarouselContent>
          {/* Itera sobre o array `portfolioItems` para criar um item de carrossel para cada projeto. */}
          {portfolioItems.map((item, index) => (
            // `CarouselItem` define a largura de cada slide em diferentes tamanhos de tela.
            // `md:basis-1/2` = 2 slides por tela em tablets.
            // `lg:basis-1/3` = 3 slides por tela em desktops.
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden transition-shadow hover:shadow-xl group">
                  <CardHeader className="p-0 relative">
                    {/* Imagem do projeto. O componente `Image` do Next.js otimiza a imagem automaticamente (tamanho, formato, etc.). */}
                    <Image
                      src={item.image}
                      alt={`Projeto ${item.title}`}
                      width={600}
                      height={400}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={item.hint}
                    />
                    {/* 
                      Sobreposição com ícone de "Play".
                      - `absolute inset-0`: Cobre toda a área da imagem.
                      - `opacity-0 group-hover:opacity-100`: A sobreposição fica invisível (`opacity-0`) e se torna visível (`opacity-100`)
                        quando o mouse passa sobre o `Card` pai (que tem a classe `group`).
                    */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayCircle className="h-16 w-16 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 bg-card">
                    {/* Título e descrição do projeto. */}
                    <h3 className="font-headline text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Botões de navegação "anterior" e "próximo" do carrossel. */}
        {/* `hidden md:flex`: Ficam ocultos em telas pequenas e aparecem em telas médias ou maiores. */}
        <CarouselPrevious className="ml-12 hidden md:flex" />
        <CarouselNext className="mr-12 hidden md:flex" />
      </Carousel>
    </section>
  );
}
