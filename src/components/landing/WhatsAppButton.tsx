import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!nome.trim()) e.nome = "Informe seu nome";
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Informe um e-mail válido";
    if (!telefone.trim() || telefone.replace(/\D/g, "").length < 10) e.telefone = "Informe um telefone válido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    const msg = encodeURIComponent(
      `Olá, gostaria de mais informações sobre a casa duplex em Ponta de Campina`
    );
    window.open(`https://wa.me/5583987901544?text=${msg}`, "_blank");
    setOpen(false);
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>

      {/* Form popup */}
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[300px] sm:w-[340px] bg-card border border-border rounded-2xl shadow-2xl p-5 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <p className="text-sm font-heading font-semibold text-foreground mb-4">
            Preencha seus dados para falar conosco no WhatsApp
          </p>

          <div className="space-y-3">
            <div>
              <Label htmlFor="wa-nome" className="text-xs">Nome</Label>
              <Input id="wa-nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome" className="mt-1 h-9 text-sm" />
              {errors.nome && <p className="text-xs text-destructive mt-1">{errors.nome}</p>}
            </div>
            <div>
              <Label htmlFor="wa-email" className="text-xs">E-mail</Label>
              <Input id="wa-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" className="mt-1 h-9 text-sm" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="wa-tel" className="text-xs">Telefone</Label>
              <Input id="wa-tel" type="tel" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="(00) 00000-0000" className="mt-1 h-9 text-sm" />
              {errors.telefone && <p className="text-xs text-destructive mt-1">{errors.telefone}</p>}
            </div>
          </div>

          <Button onClick={handleSubmit} className="w-full mt-4 bg-[#25D366] hover:bg-[#1fb855] text-white text-sm font-semibold">
            <MessageCircle className="w-4 h-4 mr-2" />
            CHAMAR NO WHATSAPP
          </Button>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
