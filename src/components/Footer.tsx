import cubicLogo from "@/assets/cubic-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12 px-6">
      <div className="container-tight">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={cubicLogo} alt="Cubic Consultoria" className="h-8 w-auto" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {["Início", "Sobre", "Setor Público", "Setor Privado", "Metodologia", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item === "Início" ? "hero" : item === "Setor Público" ? "publico" : item === "Setor Privado" ? "privado" : item.toLowerCase()}`}
                className="text-primary-foreground/40 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-xs text-primary-foreground/30">
            © {new Date().getFullYear()} Cubic Consultoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
