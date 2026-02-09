import { motion } from "framer-motion";
import { Target, Shield, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Rigor Analítico",
    description: "Cada projeto é fundamentado em metodologias científicas e dados robustos, garantindo resultados precisos e confiáveis.",
  },
  {
    icon: Shield,
    title: "Compromisso Ético",
    description: "Atuamos com transparência e responsabilidade, priorizando o impacto social e econômico positivo em cada decisão.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Estratégica",
    description: "Combinamos técnicas avançadas de econometria com tecnologia de ponta para entregar soluções que geram vantagem competitiva.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-sm font-semibold tracking-widest uppercase text-accent">
                Sobre a Empresa
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Transformando dados em{" "}
              <span className="text-accent">estratégias eficazes</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A <strong className="text-foreground">Cubic Consultoria</strong> é uma empresa especializada em análise de dados,
              econometria e políticas públicas, atuando nas esferas econômica e social.
              Nossa equipe de especialistas combina rigor acadêmico com experiência prática
              para entregar diagnósticos precisos e soluções sob medida.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Atendemos gestores públicos de Prefeituras e Câmaras Municipais, além de
              empresários do setor privado, oferecendo inteligência baseada em evidências
              para a tomada de decisões estratégicas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {values.map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
