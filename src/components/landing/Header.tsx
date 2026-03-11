import { Button } from "@/components/ui/button";
import ofirLogo from "@/assets/ofir-logo.png";

const Header = () => {
  const scrollToAgendamento = () => {
    document.getElementById("agendamento")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 header-blur border-b border-border/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <img
          src={ofirLogo}
          alt="OFIR Imobi PB - Imóveis alto padrão Paraíba"
          className="h-10 md:h-14 w-auto"
        />
        <Button variant="cta" size="sm" onClick={scrollToAgendamento} className="text-xs md:text-sm">
          AGENDAR VISITA
        </Button>
      </div>
    </header>
  );
};

export default Header;
