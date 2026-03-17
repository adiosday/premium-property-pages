import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ScarcitySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-14 sm:py-20 md:py-28 section-mist">
      <div className="container px-4 sm:px-6 max-w-3xl text-center">
        {/* Badge */}
        <div className={`inline-block gold-badge px-6 py-2 rounded-full text-sm font-body font-bold tracking-widest uppercase mb-8 ${isVisible ? "animate-section-in" : "opacity-0"}`}>
          ÚLTIMAS UNIDADES
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-6 ${isVisible ? "animate-section-in animate-stagger-1" : "opacity-0"}`}>
          Oportunidade única por tempo limitado.
        </h2>

        <p className={`text-base md:text-lg font-body text-foreground/80 leading-relaxed mb-8 ${isVisible ? "animate-section-in animate-stagger-2" : "opacity-0"}`}>
          Para quem compreende que localização é o único ativo que não se pode fabricar.
        </p>

        {/* Google Maps embed */}
        <div className={`rounded-lg overflow-hidden mb-8 ${isVisible ? "animate-section-in animate-stagger-3" : "opacity-0"}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.029513575537!2d-34.83322398149439!3d-7.028118963064639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdf984d889397%3A0xe9487d0b20d45c84!2sBreeze%20FCK%20Residence!5e0!3m2!1spt-BR!2sbr!4v1773706610198!5m2!1spt-BR!2sbr"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Breeze FCK Residence - Ponta de Campina"
            className="w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;
