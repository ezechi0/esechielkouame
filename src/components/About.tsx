import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/esechiel-kouame.jpg";

const About = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "AI/ML", "Supabase", "Tailwind CSS",
    "OpenAI API", "Chatbots", "SaaS", "Full-Stack"
  ];

  const achievements = [
    { icon: "🚀", text: "5+ années d'expérience en développement", color: "primary" },
    { icon: "🤖", text: "Spécialiste en IA et chatbots", color: "secondary" },
    { icon: "💼", text: "Expert en solutions SaaS", color: "primary" },
    { icon: "⭐", text: "Projects deployed for 50+ clients", color: "secondary" }
  ];

  return (
    <section id="about" className="py-24 bg-section-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-secondary/8 to-primary/8 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              À propos
            </span> de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Développeur passionné avec une expertise en 
            <span className="text-primary font-semibold"> intelligence artificielle </span>
            et développement web moderne
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Enhanced Photo et présentation */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="relative inline-block mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-glow"></div>
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Esechiel Kouame - Développeur Fullstack"
                  className="w-72 h-72 rounded-full object-cover shadow-card-premium mx-auto lg:mx-0 transition-transform duration-500 group-hover:scale-105 border-4 border-primary-foreground/20"
                />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-full border-4 border-background shadow-glow-secondary animate-pulse-glow flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                <div className="absolute top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-full border-2 border-background shadow-glow-primary animate-float"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Esechiel <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Kouame</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-lg mx-auto lg:mx-0">
                Développeur fullstack passionné par l'innovation technologique. 
                Je me spécialise dans la création d'applications web modernes et 
                l'intégration d'intelligence artificielle pour résoudre des problèmes 
                complexes et améliorer l'expérience utilisateur de manière révolutionnaire.
              </p>
            </div>
          </div>

          {/* Enhanced Compétences et informations */}
          <div className="animate-scale-in">
            <Card className="shadow-card-premium hover:shadow-glow-primary transition-all duration-500 border-2 border-primary/10 backdrop-blur-sm bg-card/95 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-10 relative z-10">
                <h4 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                  Compétences techniques
                </h4>
                
                <div className="flex flex-wrap gap-3 mb-10">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-gradient-to-r from-secondary/20 to-primary/20 text-secondary-foreground hover:from-secondary/30 hover:to-primary/30 transition-all duration-300 px-4 py-2 text-sm font-semibold border border-secondary/20 hover:border-secondary/40 hover:scale-105 cursor-default shadow-card"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl ${achievement.color === 'primary' ? 'bg-gradient-to-br from-primary/20 to-primary/10 shadow-glow-primary' : 'bg-gradient-to-br from-secondary/20 to-secondary/10 shadow-glow-secondary'} group-hover/item:scale-110 transition-transform duration-300`}>
                        {achievement.icon}
                      </div>
                      <span className="text-muted-foreground font-medium text-lg group-hover/item:text-foreground transition-colors duration-300">
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;