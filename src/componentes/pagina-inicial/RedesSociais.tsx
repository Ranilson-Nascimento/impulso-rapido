import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Componente RedesSociais
 *
 * Este componente renderiza botões para as redes sociais do cliente.
 * Ele pode ser reutilizado em diferentes partes da landing page, como no rodapé ou na seção de contato.
 *
 * PARA EDITAR:
 * - Substitua os links de exemplo pelos links reais das redes sociais do cliente
 * - Adicione ou remova redes sociais conforme necessário
 * - Ajuste os ícones e estilos conforme a identidade visual da marca
 */

interface RedesSociaisProps {
  /**
   * Variante do estilo dos botões
   * - 'default': Botões coloridos (para rodapé)
   * - 'outline': Botões com borda (para outras seções)
   */
  variant?: 'default' | 'outline';
  /**
   * Tamanho dos botões e ícones
   */
  size?: 'sm' | 'default' | 'lg';
  /**
   * Se deve mostrar os rótulos das redes sociais
   */
  showLabels?: boolean;
}

export function RedesSociais({ 
  variant = 'default', 
  size = 'default',
  showLabels = false 
}: RedesSociaisProps) {
  
  // PARA EDITAR: Substitua pelos links reais das redes sociais do cliente
  const redesSociais = [
    {
      nome: 'Facebook',
      url: 'https://facebook.com/suamarca',
      icon: Facebook,
      cor: 'hover:text-blue-600'
    },
    {
      nome: 'Instagram',
      url: 'https://instagram.com/suamarca',
      icon: Instagram,
      cor: 'hover:text-pink-600'
    },
    {
      nome: 'Twitter',
      url: 'https://twitter.com/suamarca',
      icon: Twitter,
      cor: 'hover:text-blue-400'
    },
    {
      nome: 'LinkedIn',
      url: 'https://linkedin.com/company/suamarca',
      icon: Linkedin,
      cor: 'hover:text-blue-700'
    },
    {
      nome: 'YouTube',
      url: 'https://youtube.com/@suamarca',
      icon: Youtube,
      cor: 'hover:text-red-600'
    }
  ];

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;
  const buttonSize = size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'default';

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {redesSociais.map((rede) => {
        const IconComponent = rede.icon;
        
        return (
          <Button
            key={rede.nome}
            variant={variant}
            size={buttonSize}
            asChild
            className={`transition-colors ${rede.cor} ${
              showLabels 
                ? size === 'lg' 
                  ? 'px-8 py-4 min-w-[140px]' 
                  : 'px-6 py-3 min-w-[120px]'
                : size === 'sm' 
                  ? 'p-3' 
                  : 'p-4'
            }`}
          >
            <a
              href={rede.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visite nosso ${rede.nome}`}
              className={`flex items-center ${
                showLabels ? 'gap-3' : 'gap-2'
              }`}
            >
              <IconComponent size={iconSize} />
              {showLabels && (
                <span className={`font-medium ${
                  size === 'lg' ? 'text-base' : 'text-sm'
                }`}>{rede.nome}</span>
              )}
            </a>
          </Button>
        );
      })}
    </div>
  );
}

/**
 * Componente especializado para informações de contato direto
 */
export function ContatoDireto() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
      <Button variant="outline" size="default" asChild className="w-full sm:w-auto min-w-[220px]">
        <a href="tel:+5511999999999" className="flex items-center gap-3 px-6 py-3">
          <Phone size={18} />
          <span className="font-medium">(11) 99999-9999</span>
        </a>
      </Button>
      
      <Button variant="outline" size="default" asChild className="w-full sm:w-auto min-w-[220px]">
        <a href="mailto:contato@suamarca.com" className="flex items-center gap-3 px-6 py-3">
          <Mail size={18} />
          <span className="font-medium">contato@suamarca.com</span>
        </a>
      </Button>
    </div>
  );
}
