import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const skills = [
    "React", "Next.js", "TypeScript", "Node.js", 
    "Python", "AI/ML", "Supabase", "Tailwind CSS",
    "OpenAI API", "Chatbots", "SaaS", "Full-Stack"
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            À propos de moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Développeur passionné avec une expertise en intelligence artificielle et développement web
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Photo et présentation */}
          <div className="text-center md:text-left animate-slide-up">
            <div className="relative inline-block mb-6">
              <img 
                src={profilePhoto} 
                alt="Esechiel Kouamé - Développeur Fullstack"
                className="w-64 h-64 rounded-full object-cover shadow-card-hover mx-auto md:mx-0"
              />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-secondary rounded-full border-4 border-background"></div>
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Esechiel Kouamé
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Développeur fullstack passionné par l'innovation technologique. 
              Je me spécialise dans la création d'applications web modernes et 
              l'intégration d'intelligence artificielle pour résoudre des problèmes 
              complexes et améliorer l'expérience utilisateur.
            </p>
          </div>

          {/* Compétences et informations */}
          <div className="animate-scale-in">
            <Card className="shadow-card hover:shadow-card-hover transition-smooth">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6">Compétences techniques</h4>
                <div className="flex flex-wrap gap-2 mb-8">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">5+ années d'expérience en développement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">Spécialiste en IA et chatbots</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Expert en solutions SaaS</span>
                  </div>
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