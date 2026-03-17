import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const ScheduleSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Load RD Station script
    const script = document.createElement("script");
    script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
    script.type = "text/javascript";
    script.onload = () => {
      try {
        // @ts-ignore
        new RDStationForms('breeze-residence-d663d2cd8bf6ebae3b0b', 'null').createForm();
      } catch (e) {
        console.warn("RD Station Forms not available:", e);
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      try {
        document.body.removeChild(script);
      } catch (_) {}
    };
  }, []);

  return (
    <section id="agendamento" ref={ref} className="py-20 md:py-28 section-mist">
      <div className="container max-w-xl text-center">
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-4 ${isVisible ? "animate-section-in" : "opacity-0"}`}>
          Agende sua visita à casa decorada
        </h2>
        <p className={`text-base font-body text-foreground/70 mb-10 ${isVisible ? "animate-section-in animate-stagger-1" : "opacity-0"}`}>
          Deixe seus dados e nossa equipe retorna com horário disponível.
        </p>

        {/* RD Station Form */}
        <div className={`bg-background rounded-lg border border-border p-6 md:p-8 shadow-sm text-left ${isVisible ? "animate-section-in animate-stagger-2" : "opacity-0"}`}>
          <div role="main" id="breeze-residence-d663d2cd8bf6ebae3b0b"></div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
