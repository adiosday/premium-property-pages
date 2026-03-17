import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import heroImage1 from "@/assets/fck-56.jpg";
import heroImage2 from "@/assets/aerea-breeze4.jpg";

const slides = [
  {
    image: heroImage1,
    headline: "Ponta de Campina não é para todos",
    subheadline: "Sua casa duplex de 3 quartos, a 100m do mar, é para você",
  },
  {
    image: heroImage2,
    headline: "O estilo de vida que muitos só vivem nas férias",
    subheadline: "Sua casa duplex de 3 quartos, a 100m do mar, é para você",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background carousel with parallax */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: current === i ? 1 : 0,
          }}
        >
          <div className="overlay-dark absolute inset-0" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container text-center px-6 pt-20">
        <h1
          key={`h1-${current}`}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-4 md:mb-6 animate-section-in"
        >
          {slides[current].headline}
        </h1>
        <h2
          key={`h2-${current}`}
          className="text-lg sm:text-xl md:text-2xl font-body font-light text-background/90 mb-8 md:mb-10 max-w-2xl mx-auto animate-section-in animate-stagger-1"
        >
          {slides[current].subheadline}
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

      {/* Carousel indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              current === i ? "bg-accent w-8" : "bg-background/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
