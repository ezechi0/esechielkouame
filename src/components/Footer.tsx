import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Esechiel Kouamé</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Développeur Fullstack & Spécialiste IA passionné par l'innovation 
              et la création de solutions technologiques impactantes.
            </p>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <a 
                href="mailto:ezechielkouame87@gmail.com" 
                className="flex items-center gap-2 hover:text-secondary-light transition-smooth"
              >
                <Mail className="w-4 h-4" />
                ezechielkouame87@gmail.com
              </a>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                07 09 26 06 55
              </p>
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Côte d'Ivoire
              </p>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-moi</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/esechiel-kouame-a98241240"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ezechi0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:ezechielkouame87@gmail.com"
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-secondary hover:scale-110 transition-smooth"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Esechiel Kouamé. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-secondary-light transition-smooth"
              >
                À propos
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-secondary-light transition-smooth"
              >
                Projets
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-secondary-light transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;