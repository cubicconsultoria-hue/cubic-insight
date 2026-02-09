import { motion } from "framer-motion";
import { Briefcase, Calculator, PieChart, DollarSign } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Planos de Negócios",
    description: "Elaboração de planos estratégicos com projeções financeiras, análise de mercado e modelagem de cenários para novos empreendimentos.",
  },
  {
    icon: PieChart,
    title: "Estudos de Viabilidade Mercadológica",
    description: "Pesquisas de mercado e análises de demanda para validar oportunidades de investimento e expansão empresarial.",
  },
  {
    icon: Calculator,
    title: "Cálculos Tributários",
    description: "Análises tributárias detalhadas para otimização fiscal, enquadramento correto e planejamento de carga tributária.",
  },
  {
    icon: DollarSign,
    title: "Precificação Estratégica",
    description: "Modelos de precificação baseados em dados de mercado, custos e elasticidade de demanda para maximizar rentabilidade.",
  },
];

const PrivateServicesSection = () => {
  return (
    <section id="privado" className="section-padding bg-background">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-sm font-semibold tracking-widest uppercase text-accent">
                Setor Privado
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Inteligência analítica para o{" "}
              <span className="text-accent">crescimento empresarial</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Oferecemos ferramentas quantitativas e estratégicas para empresários
              que precisam de decisões fundamentadas em dados concretos, reduzindo
              riscos e potencializando resultados.
            </p>
          </motion.div>

          <div className="space-y-5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateServicesSection;
