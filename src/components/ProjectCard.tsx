import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  status?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  features,
  challenges,
  githubUrl,
  liveUrl,
  status,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)}
        className="group relative bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:border-primary transition-[var(--transition-smooth)] hover:shadow-[var(--glow-primary)]"
      >

        {status && (
          <span
            className={`absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full z-10
      ${status === "en cours" ? "bg-yellow-200 text-yellow-800" :
                status === "Terminé" ? "bg-green-300 text-green-800" :
                  "bg-gray-100 text-gray-800"
              }`}
          >
            {status}
          </span>
        )}

        <div className="aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-lg">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden border border-border">
              <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Technologies utilisées</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Fonctionnalités clés</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3 text-foreground">Défis résolus</h4>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 pt-4">
              {liveUrl && (
                <Button variant="hero" asChild>
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={18} />
                    Visiter le site
                  </a>
                </Button>
              )}
              {githubUrl && (
                <Button variant="outline" asChild>
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={18} />
                    Code source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
