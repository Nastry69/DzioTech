import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-primary mb-2">DzioTech</div>
            <p className="text-muted-foreground text-sm">
              Développeur spécialisé en IA, dashboards et chatbots
            </p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/Nastry69/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tristan-dzioch/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:tristandzioch@hotmail.fr" // ou contact@dziotech.fr plus tard
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-[var(--transition-smooth)]"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>© {currentYear} DzioTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;