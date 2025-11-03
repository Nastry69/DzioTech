import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-background/90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            Transformez vos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              chiffres
            </span>
            {" "}en{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              décisions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Développeur spécialisé en IA, dashboards et chatbots. 
            Je crée des solutions intelligentes qui donnent vie à vos données.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToContact}
              className="group"
            >
              Démarrer un projet
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToPortfolio}
            >
              Voir mes réalisations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
