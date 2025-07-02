// Importa o componente Link para navegação otimizada no Next.js e o Button para os botões de ação.
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Componente Heroi (Herói)
 *
 * Esta é a seção principal e a primeira coisa que o usuário vê ao carregar a página.
 * É frequentemente chamada de "above the fold" (acima da dobra).
 * O objetivo é causar um grande impacto inicial, capturar a atenção do visitante e comunicar
 * a proposta de valor principal de forma rápida e clara.
 */
export function Heroi() {
  return (
    // A tag <section> define a seção. As classes de estilo fazem o seguinte:
    // - `relative`: Permite que elementos filhos sejam posicionados de forma absoluta dentro dela.
    // - `h-[80vh] min-h-[500px] md:h-screen`: Define a altura da seção. Em celulares, ocupa 80% da altura da tela (vh),
    //   com um mínimo de 500px. Em desktops (`md`), ocupa 100% da altura da tela.
    // - `flex items-center justify-center text-center`: Centraliza todo o conteúdo (vertical e horizontalmente).
    <section className="relative h-[80vh] min-h-[500px] md:h-screen flex items-center justify-center text-center">
      
      {/* Contêiner para o vídeo de fundo e a sobreposição escura (overlay). */}
      {/* - `absolute top-0 left-0 w-full h-full`: Faz este contêiner cobrir toda a seção `Heroi`. */}
      {/* - `overflow-hidden`: Garante que o vídeo não "vaze" para fora do contêiner. */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        
        {/* 
          Elemento de vídeo.
          - `className`: As classes garantem que o vídeo sempre cubra todo o espaço do contêiner sem distorcer (`object-cover`).
          - `autoPlay`, `muted`, `loop`, `playsInline`: Atributos essenciais para vídeos de fundo.
            - `autoPlay`: Inicia o vídeo automaticamente.
            - `muted`: OBRIGATÓRIO para autoplay na maioria dos navegadores modernos.
            - `loop`: Faz o vídeo recomeçar quando termina.
            - `playsInline`: Essencial para reprodução correta em dispositivos iOS.
          
          PARA EDITAR:
          - Substitua o valor de `src` pelo URL de um vídeo que represente o negócio.
          - Dica: Use vídeos de bancos gratuitos como Pexels, Coverr ou Pixabay. Procure por vídeos que não sejam muito "ocupados" para não distrair do texto.
        */}
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://videos.pexels.com/video-files/3254013/3254013-hd_1920_1080_25fps.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        
        {/* Sobreposição escura (overlay). Este `div` fica entre o vídeo e o texto. */}
        {/* - `bg-black/60`: Cria uma camada preta com 60% de opacidade. Isso é crucial para garantir que o texto branco sobre o vídeo seja legível, independentemente das cores do vídeo. */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      </div>
      
      {/* Contêiner para o conteúdo de texto e botões, posicionado acima do vídeo e do overlay. */}
      {/* - `relative z-10`: Garante que este conteúdo fique na frente (eixo Z) dos elementos com `absolute`. */}
      <div className="relative z-10 container flex flex-col items-center">
        
        {/* 
          Título principal (Headline). Este é o texto mais importante da página.
          PARA EDITAR: Substitua por uma frase curta, impactante e que resuma a principal oferta de valor.
        */}
        <h1 className="font-headline text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Título Impactante Sobre Seu Negócio
        </h1>
        
        {/* 
          Subtítulo ou parágrafo de apoio.
          PARA EDITAR: Elabore sobre o título, explicando de forma clara e concisa o que a empresa faz ou qual problema ela resolve.
        */}
        <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/80 md:text-xl">
          Descreva aqui a sua proposta de valor de forma clara e concisa para atrair a atenção do seu cliente.
        </p>
        
        {/* Contêiner para os botões de chamada para ação (Call to Action - CTA). */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          
          {/* 
            Botão de Ação Principal.
            PARA EDITAR: Altere o texto e o link (`href`). Geralmente, este botão leva para a seção de contato (`#contato`) ou para uma página de cadastro.
          */}
          <Link href="#contato">
            <Button size="lg" className="shadow-lg transition-transform hover:scale-105">
              Ação Principal
            </Button>
          </Link>
          
          {/* 
            Botão de Ação Secundária.
            PARA EDITAR: Altere o texto e o link. Pode levar para a seção de portfólio (`#portfolio`) ou para "saiba mais".
            - As classes de estilo foram alteradas para garantir a visibilidade do texto em cima do vídeo.
          */}
          <Link href="#portfolio">
            <Button size="lg" variant="ghost" className="border border-white/50 bg-white/10 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white hover:text-foreground">
              Ação Secundária
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
