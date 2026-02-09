import { motion } from "framer-motion";
import { Building2, FileSearch, ClipboardCheck, Users, Scale, MapPin } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Consultoria Estratégica para Municípios",
    description: "Diagnósticos e planejamento estratégico para gestão pública eficiente, com foco em resultados mensuráveis.",
  },
  {
    icon: FileSearch,
    title: "Análise de Viabilidade de Políticas Públicas",
    description: "Avaliação técnica de impacto socioeconômico para fundamentar a implementação de políticas e programas governamentais.",
  },
  {
    icon: ClipboardCheck,
    title: "Pesquisas de Opinião Pública",
    description: "Levantamentos e pesquisas com metodologia científica para compreender demandas da população e orientar decisões.",
  },
  {
    icon: Users,
    title: "Estudos Socioeconômicos",
    description: "Análises aprofundadas sobre indicadores sociais e econômicos para embasar projetos e investimentos públicos.",
  },
  {
    icon: Scale,
    title: "Assessoria em Licitações e Contratos",
    description: "Suporte técnico em processos licitatórios e análise de viabilidade econômica de contratos públicos.",
  },
  {
    icon: MapPin,
    title: "Planejamento Territorial e Urbano",
    description: "Estudos de dados georreferenciados e projeções demográficas para apoiar o desenvolvimento urbano sustentável.",
  },
];

const PublicServicesSection = () => {
  return (
    <section id="publico" className="section-padding bg-primary">
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
              Setor Público
            </span>
            <div className="h-px w-10 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Soluções para a Gestão Pública
          </h2>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Ferramentas analíticas e consultoria especializada para Prefeituras e
            Câmaras Municipais que buscam eficiência e transparência.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-navy-light/40 border border-primary-foreground/10 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-primary-foreground/55 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicServicesSection;
