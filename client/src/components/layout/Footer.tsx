export default function Footer() {
  return (
    <footer className="border-t py-6 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Guia de Acessibilidade - Tornando a web acessível para todos
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Sobre
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contato
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
