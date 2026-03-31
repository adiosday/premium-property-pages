import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ContrastSection from "@/components/landing/ContrastSection";
import DifferentialsSection from "@/components/landing/DifferentialsSection";
import ScarcitySection from "@/components/landing/ScarcitySection";
import AboutSection from "@/components/landing/AboutSection";
import ScheduleSection from "@/components/landing/ScheduleSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <main>
        <HeroSection />
        <ContrastSection />
        <DifferentialsSection />
        <ScarcitySection />
        <AboutSection />
        <ScheduleSection />
      </main>
      <footer className="py-6 text-center border-t border-border">
        <p className="text-xs font-body text-muted-foreground">
          © {new Date().getFullYear()} OFIR Imobi PB. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
};

export default Index;
