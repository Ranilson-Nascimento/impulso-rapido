import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-headline text-xl font-bold text-primary">Sua Marca</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#servicos" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Serviços
          </Link>
          <Link href="#portfolio" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Projetos
          </Link>
           <Link href="#diferenciais" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Diferenciais
          </Link>
           <Link href="#depoimentos" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            Clientes
          </Link>
          <Link href="#faq" className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#contato">
            <Button>Fale Conosco</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
