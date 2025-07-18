export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-card">
      <div className="container flex h-16 items-center justify-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Sua Marca. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
