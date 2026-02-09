import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar, MessageCircle } from "lucide-react";

const ContactSection = () => {
  // Configuração do link do WhatsApp para agendamento
  const whatsappNumber = "5531986660134";
  const msgAgendamento = encodeURIComponent("Olá! Gostaria de agendar uma reunião com a Cubic Consultoria para discutir um novo projeto.");
  const msgGeral = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços de consultoria da Cubic.");

  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Lado Esquerdo: Informações e Agendamento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-10 bg-accent" />
              <span className="text-sm font-semibold tracking-widest uppercase text-accent">
                Contato
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Vamos conversar sobre seu projeto
            </h2>
            <p className="text-primary-foreground/60 leading-relaxed mb-10">
              Entre em contato para uma consulta inicial gratuita. Nossa equipe
              está pronta para entender suas necessidades e propor a melhor solução técnica.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "cubicconsultoria@gmail.com" },
                { icon: Phone, label: "(31) 98666-0134" },
                { icon: MapPin, label: "Viçosa, MG — Brasil" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <span className="text-primary-foreground/70 text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* BOTÃO DE AGENDAMENTO ALTERADO */}
            <div className="mt-10">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${msgAgendamento}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                <Calendar size={16} />
                Agendar uma Reunião
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Botão Central do WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${msgGeral}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-8 px-10 rounded-2xl shadow-2xl transition-all transform hover:scale-105 flex flex-col items-center gap-4 text-center group"
            >
              <div className="bg-white/20 p-4 rounded-full group-hover:bg-white/30 transition-colors">
                <MessageCircle size={48} />
              </div>
              <div>
                <span className="block text-2xl">Falar no WhatsApp</span>
                <span className="text-sm font-normal opacity-90">Atendimento imediato para consultoria</span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
