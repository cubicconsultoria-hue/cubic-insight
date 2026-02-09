import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", sector: "", message: "" });
  };

  return (
    <section id="contato" className="section-padding bg-primary">
      <div className="container-tight">
        <div className="grid lg:grid-cols-2 gap-16">
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
              está pronta para entender suas necessidades e propor a melhor solução.
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

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-accent text-accent font-medium text-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
              >
                <Calendar size={16} />
                Agendar uma Reunião
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }
          <div className="flex justify-center mt-8">
            <a 
              href="https://wa.me/5531986660134?text=Olá! Gostaria de saber mais sobre os serviços da Cubic Consultoria." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all flex items-center gap-2"
            >
              <span className="text-xl">Falar com um Consultor no WhatsApp</span>
            </a>
          </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
