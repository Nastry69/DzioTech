import { Brain, BarChart3, MessageSquare, Code } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Sites vitrines, applications web sur mesure, responsive design et optimisation SEO pour une présence en ligne percutante.",
  },
  {
    icon: Brain,
    title: "Intégration IA",
    description: "Solutions d'intelligence artificielle personnalisées, chatbots conversationnels et automatisation intelligente de vos processus.",
  },
  {
    icon: BarChart3,
    title: "Dashboards & Analytics",
    description: "Tableaux de bord interactifs, visualisation de données en temps réel et reporting automatisé pour piloter votre activité.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots Intelligents",
    description: "Assistants virtuels sur mesure, intégration multi-canal et amélioration continue de l'expérience utilisateur.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Mes Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions technologiques innovantes pour propulser votre activité vers l'avenir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-background border border-border rounded-lg hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--glow-primary)]"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
