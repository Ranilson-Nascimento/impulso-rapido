import { RedesSociais } from './RedesSociais';

/**
 * Componente Rodape (Footer)
 *
 * Renderiza o rodapé do site. Geralmente, esta área contém informações
 * de copyright, links para políticas de privacidade, termos de serviço,
 * redes sociais e outras informações secundárias.
 */
export function Rodape() {
  // Pega o ano atual dinamicamente usando o objeto `Date` do JavaScript.
  // Isso garante que o ano no texto de copyright esteja sempre atualizado,
  // sem a necessidade de alterá-lo manualmente todo ano.
  const anoAtual = new Date().getFullYear();

  return (
    // A tag `<footer>` é semanticamente correta para definir o rodapé de uma página.
    // - `border-t`: Adiciona uma borda no topo para separar visualmente o rodapé do conteúdo principal.
    // - `bg-card`: Usa a cor de fundo de "card" definida no tema, que pode ser ligeiramente
    //   diferente do fundo principal, criando um contraste sutil.
    <footer className="border-t bg-card">
      <div className="container py-12 md:py-16">
        {/* Seção principal do rodapé com redes sociais */}
        <div className="flex flex-col items-center">
          {/* 
            Redes Sociais 
            Componente reutilizável que exibe os botões das redes sociais
          */}
          <div className="flex flex-col items-center space-y-6 mb-12 mt-8">
            <h3 className="text-lg font-semibold text-foreground">Conecte-se conosco</h3>
            <RedesSociais variant="outline" size="default" />
          </div>

          {/* Linha separadora */}
          <div className="w-full max-w-md h-px bg-border mb-8"></div>

          {/* Texto de copyright.
            - `text-sm`: Tamanho de fonte pequeno.
            - `text-muted-foreground`: Usa uma cor de texto mais suave (geralmente um cinza)
              para informações secundárias.
            
            PARA EDITAR:
            - Substitua "Sua Marca" pelo nome da empresa ou do cliente.
          */}
          <p className="text-sm text-muted-foreground text-center">
            © {anoAtual} Sua Marca. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
