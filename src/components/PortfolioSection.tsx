import ProjectCard from "./ProjectCard";
import projectPsyImage from "@/assets/Site-psy.png";
import projectBootstrapImage from "@/assets/Fit-gym.png";
import projectAiImage from "@/assets/maintenance 2.png";

const projects = [
  {
    title: "Site Psy",
    description: "Site vitrine complet pour un cabinet de psychologie, avec design apaisant et formulaire de contact intégré.",
    image: projectPsyImage,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    features: [
      "Design responsive optimisé mobile et desktop",
      "Formulaire de contact avec validation",
      "Interface utilisateur apaisante et professionnelle",
      "Optimisation SEO pour référencement local",
    ],
    challenges: [
      "Création d'une atmosphère visuelle rassurante",
      "Optimisation des performances pour un chargement rapide",
    ],
    liveUrl: "http://johara-boudjenane-psychologue.fr/",
    status: "Terminé"
  },
  {
    title: "Site Bootstrap",
    description: "Démonstration de mise en page responsive utilisant Bootstrap, avec grille adaptative et composants modernes.",
    image: projectBootstrapImage,
    technologies: ["Bootstrap 5", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Système de grille responsive avancé",
      "Collection complète de composants UI",
      "Animations fluides et transitions",
      "Documentation technique détaillée",
    ],
    challenges: [
      "Personnalisation approfondie du framework",
      "Compatibilité cross-browser",
      "Optimisation du poids des assets",
    ],
    liveUrl: "https://nastry69.github.io/fitgym-project/",
    status: "Terminé"
  },
  {
    title: "Projet en cours...",
    description: "Vous verrez les projets en au fur et à mesure de leur avancée. Tous mes sites peuvent être accompagnés d’une maintenance mensuelle pour mises à jour, corrections et suivi IA.",
    image: projectAiImage,
    technologies: ["En cours de séléction",],
    features: [
      "En cours d'élaboration"
    ],
    challenges: [
      "En cours de résolution",
    ],
    status: "en cours"
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Mes Réalisations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de projets qui illustrent mon expertise en développement web et IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
