import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import cubicLogo from "@/assets/cubic-logo.svg";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Setor Público", href: "#publico" },
  { label: "Setor Privado", href: "#privado" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container-tight flex items-center justify-between h-16 md:h-20 px-6">
        <a href="#hero" className="flex items-center gap-3">
          <img src={cubicLogo} alt="Cubic Consultoria" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-semibold px-5 py-2.5 rounded-md bg-accent text-accent-foreground hover:bg-gold-dark transition-colors duration-200"
          >
            Fale Conosco
          </a>
        </nav>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary border-t border-navy-light/30"
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-primary-foreground/70 hover:text-accent py-3 border-b border-navy-light/20 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold mt-3 px-5 py-2.5 rounded-md bg-accent text-accent-foreground text-center"
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
