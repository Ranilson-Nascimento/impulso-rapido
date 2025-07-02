// Importa os componentes de cada seção da landing page.
// Cada um destes arquivos representa uma "fatia" da página, como o cabeçalho, a seção principal, etc.
// A modularização em componentes torna o código mais organizado, reutilizável e fácil de manter.
import { Cabecalho } from '@/componentes/pagina-inicial/Cabecalho';
import { Heroi } from '@/componentes/pagina-inicial/Heroi';
import { Beneficios } from '@/componentes/pagina-inicial/Beneficios';
import { Portfolio } from '@/componentes/pagina-inicial/Portfolio';
import { Depoimentos } from '@/componentes/pagina-inicial/Depoimentos';
import { PerguntasFrequentes } from '@/componentes/pagina-inicial/PerguntasFrequentes';
import { Diferenciais } from '@/componentes/pagina-inicial/Diferenciais';
import { Contato } from '@/componentes/pagina-inicial/Contato';
import { Rodape } from '@/componentes/pagina-inicial/Rodape';

/**
 * Componente da Página Inicial (LandingPage)
 *
 * Este é o componente principal que "monta" a landing page.
 * Ele funciona como um agregador, organizando todas as seções importadas
 * na ordem em que devem aparecer visualmente na página.
 *
 * PARA EDITAR:
 * - Para alterar a ordem das seções, basta reordenar os componentes abaixo no JSX.
 *   Por exemplo, se você quiser que a seção de Depoimentos apareça antes do Portfólio,
 *   troque a posição de `<Depoimentos />` e `<Portfolio />`.
 * - Para remover uma seção, simplesmente comente ou apague a linha de importação
 *   e a tag do componente correspondente no retorno do JSX.
 */
export default function LandingPage() {
  return (
    // A div principal envolve todo o conteúdo da página.
    // - `flex flex-col`: Organiza os filhos (cabeçalho, main, rodapé) em uma coluna.
    // - `min-h-screen`: Garante que a página ocupe pelo menos a altura total da tela.
    // - `bg-background`: Aplica a cor de fundo definida no tema atual (globals.css).
    <div className="flex min-h-screen flex-col bg-background">
      {/* 
        Renderiza o cabeçalho da página. O cabeçalho é fixo e contém o logo, 
        a navegação e o seletor de tema.
      */}
      <Cabecalho />
      
      {/* 
        A tag <main> representa o conteúdo principal do documento. 
        - `flex-1`: Faz com que a área de conteúdo principal se expanda para ocupar
          todo o espaço disponível entre o cabeçalho e o rodapé.
      */}
      <main className="flex-1">
        {/* 
          Aqui, cada componente de seção é renderizado em sequência,
          construindo a landing page de cima para baixo.
        */}
        <Heroi />
        <Beneficios />
        <Portfolio />
        <Diferenciais />
        <Depoimentos />
        <PerguntasFrequentes />
        <Contato />
      </main>

      {/* 
        Renderiza o rodapé da página, que geralmente contém informações
        de copyright e links secundários.
      */}
      <Rodape />
    </div>
  );
}
