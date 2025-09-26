import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layered Background */}
      <div className="absolute inset-0 bg-hero-gradient z-10"></div>
      <div className="absolute inset-0 bg-hero-overlay z-15"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-110 animate-pulse"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary-foreground/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/40 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary-foreground/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Content with enhanced effects */}
      <div className="relative z-20 text-center px-4 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-primary-foreground mb-6 tracking-tight leading-none">
            <span className="relative inline-block">
              Esechiel 
              <div className="absolute inset-0 bg-gradient-to-r from-primary-foreground via-secondary-light to-primary-foreground bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]"></div>
            </span>
            <br />
            <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-secondary-light to-primary-foreground bg-clip-text text-transparent">
              Kouamé
            </span>
          </h1>
          
          <div className="relative">
            <p className="text-2xl md:text-3xl text-primary-foreground/95 mb-6 font-semibold tracking-wide">
              Développeur Fullstack & Spécialiste IA
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-60 animate-pulse-glow"></div>
          </div>
          
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Je transforme les idées en produits SaaS et chatbots intelligents révolutionnaires. 
            <br className="hidden md:block" />
            <span className="text-secondary-light font-semibold">Passionné par l'innovation technologique</span> et l'intelligence artificielle de pointe.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg"
            className="group relative bg-primary-foreground text-primary-dark hover:bg-primary-foreground/95 transition-elastic shadow-card-premium text-lg px-10 py-4 font-bold overflow-hidden"
            onClick={() => scrollToSection('contact')}
          >
            <span className="relative z-10">Travaillons ensemble</span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="group relative border-2 border-primary-foreground/80 text-primary-foreground hover:bg-primary-foreground hover:text-primary-dark transition-elastic backdrop-blur-sm bg-primary-foreground/10 text-lg px-10 py-4 font-bold shadow-glow-primary"
            onClick={() => scrollToSection('projects')}
          >
            <span className="relative z-10">Voir mes projets</span>
            <div className="absolute inset-0 bg-primary-foreground/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Button>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="relative">
          <div className="w-8 h-14 border-3 border-primary-foreground/80 rounded-full flex justify-center backdrop-blur-sm bg-primary-foreground/10 shadow-glow-primary">
            <div className="w-2 h-3 bg-gradient-to-b from-primary-foreground to-secondary-light rounded-full mt-3 animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-foreground/20 rounded-full animate-pulse-glow"></div>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-secondary/25 to-primary/25 rounded-full blur-3xl opacity-50 animate-float" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default Hero;