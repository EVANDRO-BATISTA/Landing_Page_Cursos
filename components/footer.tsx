export function Footer() {
  return (
    <footer className="border-t bg-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
              M
            </div>
            <span className="text-lg font-bold text-foreground">MasterClass</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Termos de Uso
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Politica de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contato
            </a>
          </nav>
        </div>
        
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            2024 MasterClass. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
