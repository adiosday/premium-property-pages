import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ScarcitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-28 section-mist">
      <div className="container max-w-3xl text-center">
        {/* Badge */}
        <div className={`inline-block gold-badge px-6 py-2 rounded-full text-sm font-body font-bold tracking-widest uppercase mb-8 ${isVisible ? "animate-section-in" : "opacity-0"}`}>
          ÚLTIMAS UNIDADES
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-6 ${isVisible ? "animate-section-in animate-stagger-1" : "opacity-0"}`}>
          Oportunidade única por tempo limitado.
        </h2>

        <p className={`text-base md:text-lg font-body text-foreground/80 leading-relaxed mb-8 ${isVisible ? "animate-section-in animate-stagger-2" : "opacity-0"}`}>
          Restam poucas unidades para quem compreende que localização é o único ativo que não se pode fabricar.
        </p>

        {/* Map placeholder */}
        <div className={`bg-background border border-border rounded-lg h-64 md:h-80 flex items-center justify-center mb-8 ${isVisible ? "animate-section-in animate-stagger-3" : "opacity-0"}`}>
          <div className="text-center text-muted-foreground font-body text-sm">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-accent" />
            <p>Mapa interativo — embed Google Maps</p>
            <p className="text-xs mt-1">Ponta de Campina, PB · A 100m do mar · Vizinho ao Lovina</p>
          </div>
        </div>

        <div className={`border-l-2 border-accent pl-4 text-left max-w-md mx-auto ${isVisible ? "animate-section-in animate-stagger-4" : "opacity-0"}`}>
          <p className="text-sm md:text-base font-body italic text-muted-foreground">
            "Se você deixar para depois, provavelmente vai visitar… e descobrir que já foi."
          </p>
        </div>
      </div>
    </section>
  );
};

// Need MapPin import
import { MapPin } from "lucide-react";

export default ScarcitySection;
