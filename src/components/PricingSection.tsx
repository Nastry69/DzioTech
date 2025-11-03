import { DollarSign, Settings, Clock, Zap } from "lucide-react";

const pricingPlans = [
  {
    icon: DollarSign,
    title: "Starter",
    price: "700€",
    description: "Site vitrine 1 page responsive + SEO basique",
    features: [
      "Responsive design",
      "Formulaire contact simple",
      "1 révision incluse",
    ],
  },
  {
    icon: Settings,
    title: "Pro",
    price: "1 800€",
    description: "Site 3-5 pages avec mini chatbot IA et formulaire",
    features: [
      "Pages multiples",
      "Chatbot IA intégré",
      "Optimisation SEO",
      "3 révisions incluses",
    ],
  },
  {
    icon: Clock,
    title: "Business",
    price: "2 500€",
    description: "Dashboard / automatisation + back office",
    features: [
      "Dashboard interactif",
      "Automatisation des processus",
      "Intégration API",
      "5 révisions incluses",
    ],
  },
];

const maintenanceOptions = [
  {
    title: "Bronze",
    price: "29€/mois",
    desc: "Mises à jour régulières et support par email",
  },
  {
    title: "Argent",
    price: "79€/mois",
    desc: "Bronze + corrections rapides et petites modifications",
  },
  {
    title: "Or",
    price: "149€/mois",
    desc: "Argent + suivi personnalisé et reporting mensuel",
  },
  {
    title: "Diamant",
    price: "299€/mois",
    desc: "Or + intégrations IA / automatisations avancées",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Tarifs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez l’offre adaptée à votre projet
          </p>
        </div>

        {/* Offres principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-lg hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--glow-primary)]"
              >
                <div className="w-14 h-14 mb-6 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {plan.title}
                </h3>
                <p className="text-foreground font-semibold text-xl mb-4">{plan.price}</p>
                <p className="text-muted-foreground mb-4">{plan.description}</p>

                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Options de maintenance */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-6">Maintenance mensuelle</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Ajoutez un pack de maintenance à votre offre pour rester serein, quel que soit votre projet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {maintenanceOptions.map((option, idx) => (
            <div
              key={idx}
              className="group p-6 bg-card border border-border rounded-lg hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--glow-primary)]"
            >
              <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {option.title}
              </h4>
              <p className="text-foreground font-semibold mb-2">{option.price}</p>
              <p className="text-muted-foreground text-sm">{option.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
