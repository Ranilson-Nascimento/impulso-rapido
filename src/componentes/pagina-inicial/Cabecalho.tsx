'use client'; // Esta diretiva é OBRIGATÓRIA no topo do arquivo. Ela define este como um "Componente de Cliente".
// Componentes de Cliente podem usar hooks do React como `useState` e `useEffect`, permitindo interatividade no navegador.

// Importações de componentes e hooks necessários.
import Link from "next/link"; // Componente do Next.js para navegação entre páginas sem recarregar a página inteira.
import { Button } from "@/components/ui/button"; // Componente de botão estilizado.
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Componentes para criar o menu lateral (off-canvas) em telas móveis.
import { Menu } from "lucide-react"; // Ícone de menu (hambúrguer) da biblioteca Lucide.
import { useState } from "react"; // Hook do React para gerenciar estado dentro do componente (ex: controlar se o menu está aberto ou fechado).
import { SeletorDeTema } from "../seletor-de-tema/SeletorDeTema"; // Componente que permite ao usuário trocar o tema de cores.

/**
 * Componente Cabecalho
 *
 * Renderiza o cabeçalho (header) fixo no topo do site. Este componente inclui:
 * - O logo ou nome da marca.
 * - Links de navegação para as diferentes seções da página.
 * - Um menu responsivo (conhecido como menu hambúrguer) para dispositivos móveis.
 * - O seletor de tema para personalizar a aparência do site.
 */
export function Cabecalho() {
  // O hook `useState` é usado para criar uma variável de estado `menuAberto`.
  // `menuAberto` guarda um valor booleano (true/false) que indica se o menu móvel está visível.
  // `setMenuAberto` é a função usada para atualizar o valor de `menuAberto`.
  const [menuAberto, setMenuAberto] = useState(false);

  // Array com os links de navegação. Usar um array centraliza os dados e facilita a manutenção.
  // Para adicionar um novo link, basta adicionar um novo objeto ao array.
  const linksDoMenu = [
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Projetos" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#depoimentos", label: "Clientes" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    // A tag <header> define o cabeçalho. As classes de CSS aplicadas são do Tailwind CSS:
    // - `sticky top-0`: Faz o cabeçalho ficar fixo no topo da tela durante a rolagem.
    // - `z-50`: Garante que o cabeçalho fique acima de outros elementos na página.
    // - `w-full`: Faz o cabeçalho ocupar toda a largura da tela.
    // - `border-b border-border/40`: Adiciona uma borda inferior sutil.
    // - `bg-background/95 backdrop-blur`: Cria um efeito de fundo translúcido e desfocado (efeito "glassmorphism").
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        
        {/* Logo ou Nome da Marca */}
        {/* PARA EDITAR: Altere o texto "Sua Marca" para o nome do negócio do seu cliente. */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-xl font-bold text-primary">Sua Marca</span>
        </Link>

        {/* Navegação para telas grandes (desktop). */}
        {/* `hidden md:flex`: Fica oculta (`hidden`) em telas pequenas e se torna flexível (`flex`) em telas médias (`md`) ou maiores. */}
        <nav className="hidden items-center gap-6 md:flex">
          {linksDoMenu.map((link) => (
            <Link
              key={link.href} // Chave única para otimização do React.
              href={link.href} // O destino do link (aponta para o ID de uma seção).
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Contêiner para os botões de ação à direita e o menu móvel. */}
        <div className="flex items-center gap-4">
          
          {/* Seletor de Tema: Renderiza o componente que permite trocar as cores do site. */}
          <SeletorDeTema />

          {/* Botão de "Fale Conosco" visível apenas em telas grandes. */}
          <Link href="#contato" className="hidden md:block">
            <Button>Fale Conosco</Button>
          </Link>

          {/* Menu Hambúrguer para telas pequenas (mobile). */}
          {/* `md:hidden`: Fica visível apenas em telas menores que `md`. */}
          <div className="md:hidden">
            {/* O componente `Sheet` controla o estado do menu lateral. */}
            <Sheet open={menuAberto} onOpenChange={setMenuAberto}>
              {/* O `SheetTrigger` é o elemento que o usuário clica para abrir o menu (o botão com o ícone). */}
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              {/* O `SheetContent` é o painel que desliza para dentro da tela. */}
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <nav className="flex flex-col gap-6 mt-8">
                    {/* Renderiza os mesmos links de navegação dentro do menu móvel. */}
                    {linksDoMenu.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                        // `onClick`: Quando um link é clicado, o menu é fechado (`setMenuAberto(false)`).
                        onClick={() => setMenuAberto(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  {/* Botão de contato posicionado no final do menu móvel. */}
                  <div className="mt-auto">
                     <Link href="#contato">
                        <Button className="w-full" onClick={() => setMenuAberto(false)}>Fale Conosco</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
