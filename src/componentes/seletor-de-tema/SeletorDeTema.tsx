// Define este como um Componente de Cliente. Isso é necessário porque ele usa estado (`useState`)
// e interage com o DOM do navegador (`document`), funcionalidades que só rodam no lado do cliente.
'use client';

// Importa os hooks e componentes necessários.
import { useState, useEffect } from 'react'; // Hooks do React para estado e efeitos colaterais.
import { Button } from '@/components/ui/button'; // Componente de botão.
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // Componentes para o menu suspenso.
import { Palette } from 'lucide-react'; // Ícone de paleta de cores.

// Define os temas disponíveis. Cada objeto contém:
// - `nome`: O nome da classe CSS que será aplicada na tag <html> (definida em globals.css).
// - `rotulo`: O texto que o usuário verá no menu de seleção.
const temas = [
  { nome: 'theme-neutral', rotulo: 'Neutro (Padrão)' },
  { nome: 'theme-sky', rotulo: 'Azul' },
  { nome: 'theme-amber', rotulo: 'Âmbar' },
  { nome: 'theme-rose', rotulo: 'Rosa' },
  { nome: 'theme-green', rotulo: 'Verde' },
];

/**
 * Componente SeletorDeTema
 *
 * Permite que o usuário troque a paleta de cores do site dinamicamente.
 * Ele renderiza um botão com um ícone de paleta que, ao ser clicado, abre um menu
 * com as opções de tema. A alteração é aplicada em tempo real.
 */
export function SeletorDeTema() {
  // Estado para armazenar o tema atual. Inicializa com o tema 'neutral' por padrão.
  const [tema, setTema] = useState('theme-neutral');
  // Estado para verificar se o componente já foi "montado" no cliente.
  // Isso é uma técnica para evitar problemas de "hydration mismatch" no Next.js,
  // onde o conteúdo renderizado no servidor é diferente do renderizado inicialmente no cliente.
  const [montado, setMontado] = useState(false);

  // O `useEffect` com um array de dependências vazio `[]` roda apenas uma vez,
  // logo após o componente ser montado no navegador. Usamos isso para confirmar que estamos no cliente.
  useEffect(() => {
    setMontado(true);
  }, []);

  // Este `useEffect` é acionado sempre que o estado `tema` muda.
  // É aqui que a "mágica" de trocar o tema acontece.
  useEffect(() => {
    // 1. Pega a lista de classes CSS atual da tag <html>.
    // 2. Filtra essa lista, removendo qualquer classe que comece com "theme-". Isso limpa o tema anterior.
    const classes = document.documentElement.className.split(' ').filter(c => !c.startsWith('theme-'));
    // 3. Adiciona a nova classe de tema (o valor atual do estado `tema`) à lista de classes.
    // 4. Junta tudo e atualiza a classe da tag <html>.
    document.documentElement.className = [...classes, tema].join(' ');
  }, [tema]); // A dependência `[tema]` garante que este código rode apenas quando o estado `tema` for alterado.

  // Se o componente ainda não foi montado no cliente, não renderizamos nada (retornamos `null`).
  // Isso garante que o ícone do seletor não apareça brevemente de forma incorreta durante o carregamento da página.
  if (!montado) {
    return null;
  }

  return (
    <DropdownMenu>
      {/* O `DropdownMenuTrigger` é o elemento que o usuário clica para abrir o menu.
          Neste caso, é um botão com o ícone da paleta. */}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Trocar tema</span>
        </Button>
      </DropdownMenuTrigger>
      {/* O `DropdownMenuContent` contém a lista de opções que aparece quando o menu é aberto. */}
      <DropdownMenuContent align="end">
        {/* Itera sobre o array de `temas` para criar um item de menu para cada um. */}
        {temas.map(t => (
          <DropdownMenuItem key={t.nome} onClick={() => setTema(t.nome)}>
            {/* Ao clicar em um item, a função `onClick` chama `setTema` com o nome do tema,
                disparando o `useEffect` que troca a classe CSS. */}
            {t.rotulo}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
