import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PublicServicesSection from "@/components/PublicServicesSection";
import PrivateServicesSection from "@/components/PrivateServicesSection";
import MethodologySection from "@/components/MethodologySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PublicServicesSection />
      <PrivateServicesSection />
      <MethodologySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
