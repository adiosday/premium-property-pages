import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import ofirLogo from "@/assets/ofir-logo-new.jpg";
import { Instagram, Facebook, Globe, MessageCircle } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="container px-4 sm:px-6 max-w-2xl text-center">
        <img
          src={ofirLogo}
          alt="OFIR Imobi PB"
          className={`h-12 md:h-17 w-auto mx-auto mb-8 object-contain ${isVisible ? "animate-section-in" : "opacity-0"}`}
        />

        <p className={`text-base md:text-lg font-body text-foreground/80 leading-relaxed mb-8 ${isVisible ? "animate-section-in animate-stagger-1" : "opacity-0"}`}>
          A OFIR Imobi PB é especialista em curadoria de imóveis de alto padrão na Paraíba, para morar ou investir, para rentabilizar seu investimento.
        </p>

        {/* Social icons */}
        <div className={`flex items-center justify-center gap-4 mb-10 ${isVisible ? "animate-section-in animate-stagger-2" : "opacity-0"}`}>
          <a href="https://www.instagram.com/ofirimobi/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/people/Ofir-Imobi-PB/100082134411899/?ref=NONE_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.ofirimobi.com.br/" target="_blank" rel="noopener noreferrer" aria-label="Site" className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
            <Globe className="w-5 h-5" />
          </a>
          <a href="https://wa.me/5583987901544" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors">
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

        <Button
          variant="cta"
          size="xl"
          onClick={scrollToAgendamento}
          className={`${isVisible ? "animate-section-in animate-stagger-3" : "opacity-0"}`}
        >
          QUERO AGENDAR MINHA VISITA EXCLUSIVA
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
