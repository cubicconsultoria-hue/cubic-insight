import { motion } from "framer-motion";
import { Database, LineChart, Brain, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Database,
    step: "01",
    title: "Coleta e Tratamento de Dados",
    description: "Reunimos dados de fontes primárias e secundárias, realizando limpeza e estruturação rigorosa para garantir a qualidade da análise.",
  },
  {
    icon: Brain,
    step: "02",
    title: "Modelagem Econométrica",
    description: "Aplicamos modelos estatísticos avançados como VAR (Vetores Autorregressivos), regressões e séries temporais para identificar padrões e relações causais.",
  },
  {
    icon: LineChart,
    step: "03",
    title: "Previsão e Diagnóstico",
    description: "Geramos projeções e diagnósticos precisos baseados nos modelos, permitindo simulação de cenários e avaliação de impacto de diferentes estratégias.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Recomendações Estratégicas",
    description: "Traduzimos os resultados em recomendações claras e acionáveis, acompanhando a implementação para garantir os resultados esperados.",
  },
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="section-padding bg-muted/50">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-10 bg-accent" />
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">
              Metodologia
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rigor Científico em Cada Etapa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa abordagem combina modelos estatísticos avançados com experiência
            prática, assegurando previsões confiáveis e diagnósticos precisos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-5xl font-extrabold text-accent/15 mb-3">{step.step}</div>
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <step.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-border translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
