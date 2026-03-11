import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-house.jpg";

const HeroSection = () => {
  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay-dark absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center px-6 pt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-4 md:mb-6 animate-section-in">
          Ponta de Campina não é para todos
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-body font-light text-background/90 mb-8 md:mb-10 max-w-2xl mx-auto animate-section-in animate-stagger-1">
          Sua casa duplex de 3 quartos, a 100m do mar, é para você
        </h2>
        <Button
          variant="cta"
          size="xl"
          onClick={scrollToAgendamento}
          className="animate-section-in animate-stagger-2 mb-4"
        >
          AGENDAR VISITA À CASA DECORADA
        </Button>
        <p className="text-sm text-background/70 font-body animate-section-in animate-stagger-3">
          Poucas unidades disponíveis. Atendimento exclusivo OFIR Imobi PB.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
