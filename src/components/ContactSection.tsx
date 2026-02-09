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
                { icon: Mail, label: "contato@cubicconsultoria.com.br" },
                { icon: Phone, label: "(11) 99999-9999" },
                { icon: MapPin, label: "São Paulo, SP — Brasil" },
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
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-navy-light/40 rounded-xl p-8 border border-primary-foreground/10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-primary-foreground/50 mb-2 uppercase tracking-wider">Nome</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-md text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-primary-foreground/50 mb-2 uppercase tracking-wider">E-mail</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-md text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-primary-foreground/50 mb-2 uppercase tracking-wider">Telefone</label>
                  <input
                    type="tel"
                    maxLength={20}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-md text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-primary-foreground/50 mb-2 uppercase tracking-wider">Setor</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-md text-primary-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="" className="bg-primary">Selecione</option>
                    <option value="publico" className="bg-primary">Setor Público</option>
                    <option value="privado" className="bg-primary">Setor Privado</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-primary-foreground/50 mb-2 uppercase tracking-wider">Mensagem</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-primary-foreground/5 border border-primary-foreground/10 rounded-md text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-accent text-accent-foreground font-semibold text-base hover:bg-gold-dark transition-colors duration-200"
              >
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
