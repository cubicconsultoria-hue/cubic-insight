import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero/80" />
      </div>

      <div className="relative container-tight px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Cubic Consultoria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-primary-foreground mb-6"
          >
            Decisões Inteligentes baseadas em{" "}
            <span className="text-gradient-gold">Dados e Evidências</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed mb-10 max-w-2xl"
          >
            Utilizamos econometria avançada e análise de dados para criar soluções
            estratégicas nas esferas social e econômica, gerando impacto real para
            o setor público e privado.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-accent text-accent-foreground font-semibold text-base hover:bg-gold-dark transition-colors duration-200"
            >
              Solicitar Consultoria
              <ArrowRight size={18} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-primary-foreground/20 text-primary-foreground font-medium text-base hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Conheça a Cubic
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-primary-foreground/10 pt-10"
          >
            {[
              { icon: BarChart3, value: "150+", label: "Projetos Realizados" },
              { icon: TrendingUp, value: "98%", label: "Satisfação dos Clientes" },
              { value: "50+", label: "Municípios Atendidos", icon: BarChart3 },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <stat.icon size={22} className="text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/50">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
