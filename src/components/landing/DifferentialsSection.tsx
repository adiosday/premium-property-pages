import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Maximize2, LayoutGrid, MapPin, Key, X } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-house.jpg";
import houseInterior from "@/assets/house-interior.jpg";
import houseExterior from "@/assets/house-exterior.jpg";

const differentials = [
  { icon: Maximize2, text: "Espaço de sobra: 100m² de área construída com acabamento premium." },
  { icon: LayoutGrid, text: "Planta Inteligente: 3 quartos amplos para acomodar toda a família com o máximo conforto." },
  { icon: MapPin, text: "Localização Estratégica: A 100m do mar, em uma das áreas mais valorizadas e seguras da região." },
  { icon: Key, text: "Prontas para morar: A chave está pronta para você." },
];

const galleryImages = [
  { src: heroImage, alt: "Casa duplex 3 quartos Ponta de Campina - interior premium" },
  { src: houseInterior, alt: "Quarto alto padrão PB - pronto para morar 100m do mar" },
  { src: houseExterior, alt: "Casa duplex exterior - vizinho ao Lovina Ponta de Campina" },
];

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <section ref={ref} className="py-20 md:py-28 section-mist">
        <div className="container">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12 md:mb-16 ${isVisible ? "animate-section-in" : "opacity-0"}`}>
            Exclusividade e estética em 100m² de puro conforto
          </h2>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-16">
            {differentials.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 p-6 bg-background rounded-lg shadow-sm border border-border/50 ${isVisible ? `animate-section-in animate-stagger-${i + 1}` : "opacity-0"}`}
              >
                <item.icon className="w-6 h-6 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <p className="text-sm md:text-base font-body text-foreground/85 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className="overflow-hidden rounded-lg group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </button>
            ))}
            {/* Placeholder for future images */}
            <div className="hidden md:flex items-center justify-center rounded-lg border-2 border-dashed border-border h-56 text-muted-foreground text-sm font-body">
              + Planta / Localização
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-ocean py-4 md:py-5 text-center">
        <p className="text-sm md:text-base font-body font-medium tracking-wide text-primary-foreground">
          Casa decorada disponível para visitação com atendimento exclusivo.
        </p>
      </div>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4 animate-section-in"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-4 right-4 text-background/80 hover:text-background transition-colors"
            aria-label="Fechar"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={galleryImages[lightboxIdx].src}
            alt={galleryImages[lightboxIdx].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default DifferentialsSection;
