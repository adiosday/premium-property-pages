import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="agendamento" ref={ref} className="py-20 md:py-28 section-mist">
      <div className="container max-w-xl text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 ${isVisible ? "animate-section-in" : "opacity-0"}`}>
          Agende sua visita à casa decorada
        </h2>
        <p className={`text-base font-body text-foreground/70 mb-10 ${isVisible ? "animate-section-in animate-stagger-1" : "opacity-0"}`}>
          Deixe seus dados e nossa equipe retorna com horário disponível.
        </p>

        {/* Form placeholder (RD Station embed) */}
        <div className={`bg-background rounded-lg border border-border p-6 md:p-8 shadow-sm mb-6 text-left ${isVisible ? "animate-section-in animate-stagger-2" : "opacity-0"}`}>
          {/* Placeholder form fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-body font-medium text-foreground/80 mb-1.5">Nome</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full h-11 px-4 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground/80 mb-1.5">Telefone / WhatsApp</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="w-full h-11 px-4 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground/80 mb-1.5">Cidade</label>
              <input
                type="text"
                placeholder="Sua cidade"
                className="w-full h-11 px-4 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <div>
              <label className="block text-sm font-body font-medium text-foreground/80 mb-1.5">Melhor horário</label>
              <input
                type="text"
                placeholder="Manhã, tarde ou noite"
                className="w-full h-11 px-4 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
            </div>
            <Button variant="cta" size="lg" className="w-full">
              ENVIAR
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 font-body">
            {/* Placeholder: substituir por embed RD Station */}
            Formulário placeholder — integrar com RD Station ou CRM
          </p>
        </div>

        {/* WhatsApp alternative */}
        <div className={`${isVisible ? "animate-section-in animate-stagger-3" : "opacity-0"}`}>
          <p className="text-sm text-muted-foreground font-body mb-3">ou fale diretamente pelo WhatsApp</p>
          <Button variant="ctaOutline" size="lg" asChild>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              CHAMAR NO WHATSAPP
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
