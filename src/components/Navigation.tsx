import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-primary">DzioTech</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("accueil")} 
              className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
            >
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-foreground hover:text-primary transition-[var(--transition-smooth)]"
            >
              Services
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="hero" 
              size="sm"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4 animate-in slide-in-from-top">
            <button 
              onClick={() => scrollToSection("accueil")} 
              className="text-foreground hover:text-primary transition-[var(--transition-smooth)] text-left"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")} 
              className="text-foreground hover:text-primary transition-[var(--transition-smooth)] text-left"
            >
              Réalisations
            </button>
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-foreground hover:text-primary transition-[var(--transition-smooth)] text-left"
            >
              Services
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              variant="hero" 
              size="sm" 
              className="w-full"
            >
              Contact
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;