import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import fck51 from "@/assets/fck-51.jpg";

const ContrastSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Text */}
          <div className={`space-y-6 ${isVisible ? "animate-section-in" : "opacity-0"}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
              Garanta o seu refúgio pronto para morar em Ponta de Campina
            </h2>
            <p className="text-base md:text-lg font-body text-foreground/80 leading-relaxed">
              No mar mais paradisíaco de João Pessoa, sua nova casa duplex de 100m² não é uma promessa de futuro; é uma realidade pronta para ser habitada hoje.
            </p>
            <div className="border-l-2 border-accent pl-4 py-2">
              <p className="text-sm md:text-base font-body italic text-muted-foreground">
                Se você valoriza tranquilidade, segurança e localização privilegiada, vai entender em poucos minutos
              </p>
            </div>
          </div>

          {/* Image */}
          <div className={`overflow-hidden rounded-lg shadow-lg ${isVisible ? "animate-section-in animate-stagger-2" : "opacity-0"}`}>
            <div className="overflow-hidden">
              <img
                src={fck51}
                alt="Casa duplex 3 quartos Ponta de Campina - alto padrão PB pronto para morar"
                className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContrastSection;
