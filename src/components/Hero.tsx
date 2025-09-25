import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
          Esechiel Kouamé
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4">
          Développeur Fullstack & Spécialiste IA
        </p>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          Je transforme les idées en produits SaaS et chatbots intelligents. 
          Passionné par l'innovation technologique et l'intelligence artificielle.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary-foreground text-primary-dark hover:bg-primary-foreground/90 transition-smooth shadow-card-hover"
            onClick={() => scrollToSection('contact')}
          >
            Travaillons ensemble
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary-dark transition-smooth"
            onClick={() => scrollToSection('projects')}
          >
            Voir mes projets
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;