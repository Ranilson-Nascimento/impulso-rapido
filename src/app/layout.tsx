// Importa o tipo Metadata do Next.js para definir os metadados da página.
import type {Metadata} from 'next';
// Importa o arquivo de estilos globais que contém o Tailwind CSS e as variáveis de tema.
import './globals.css';
// Importa o componente Toaster para exibir notificações (toasts).
import { Toaster } from "@/components/ui/toaster"

/**
 * Metadados da página (SEO).
 * 
 * Esta constante `metadata` é usada pelo Next.js para configurar as tags <meta> no <head> do HTML.
 * É crucial para a otimização de buscadores (SEO) e para como o site aparece em links compartilhados.
 */
export const metadata: Metadata = {
  title: 'Impulso Rápido | Landing Pages de Alta Conversão',
  description: 'Crie landing pages de alta conversão rapidamente com Next.js, TypeScript e Tailwind CSS. Otimização com IA, portfólio express e depoimentos inclusos.',
  keywords: [
    'landing page',
    'alta conversão',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'otimização IA',
    'marketing digital',
    'conversão',
    'páginas de vendas'
  ],
  authors: [{ name: 'Ranilson Nascimento', url: 'https://github.com/Ranilson-Nascimento' }],
  creator: 'Ranilson Nascimento',
  publisher: 'Impulso Rápido',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://impulso-rapido.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: 'Impulso Rápido | Landing Pages de Alta Conversão',
    description: 'Crie landing pages de alta conversão rapidamente com Next.js, TypeScript e Tailwind CSS.',
    siteName: 'Impulso Rápido',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Impulso Rápido - Landing Pages de Alta Conversão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impulso Rápido | Landing Pages de Alta Conversão',
    description: 'Crie landing pages de alta conversão rapidamente com Next.js, TypeScript e Tailwind CSS.',
    images: ['/og-image.png'],
    creator: '@ranilson_dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

/**
 * Layout Raiz (RootLayout)
 *
 * Este é o componente de layout principal que envolve todo o aplicativo.
 * Ele define a estrutura base da página HTML, incluindo as tags <html> e <body>.
 * Tudo o que for colocado aqui será compartilhado entre todas as páginas do site.
 *
 * @param {object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - Os componentes filhos (o conteúdo da página atual) que serão renderizados dentro deste layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A tag <html> é o elemento raiz de todo o documento.
    // - lang="pt-BR": Define o idioma da página como português do Brasil, o que é importante para acessibilidade e SEO.
    // - className="theme-neutral": Define o tema de cores padrão do site.
    //
    // PARA EDITAR O TEMA:
    // Para alterar a paleta de cores padrão de todo o site, troque a classe 'theme-neutral' por uma das opções abaixo:
    // - 'theme-sky' (Azul)
    // - 'theme-amber' (Âmbar/Laranja)
    // - 'theme-rose' (Rosa)
    // - 'theme-green' (Verde)
    //
    // Para usar o MODO ESCURO (DARK MODE) como padrão, adicione a classe 'dark' ao lado da classe de tema.
    // Exemplo: className="dark theme-sky"
    <html lang="pt-BR" className="theme-neutral">
      {/* 
        A tag <body> contém todo o conteúdo visível da página.
        - className="font-body antialiased":
          - 'font-body' aplica a fonte 'Inter' (definida no tailwind.config.ts) ao corpo do texto.
          - 'antialiased' é uma classe do Tailwind que melhora a renderização das fontes, tornando-as mais suaves.
      */}
      <body className="font-body antialiased">
        {/* 
          {children} é onde o Next.js renderizará o conteúdo da página atual (por exemplo, o conteúdo de page.tsx).
          Todo o conteúdo da página ficará contido dentro da estrutura definida neste layout.
        */}
        {children}
        {/* 
          O <Toaster /> é o componente responsável por gerenciar e exibir as notificações (toasts)
          que podem ser usadas para mostrar mensagens de sucesso, erro ou informação ao usuário.
        */}
        <Toaster />
      </body>
    </html>
  );
}
