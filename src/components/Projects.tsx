import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Users, Heart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Growest Connect",
      description: "Plateforme SaaS connectant investisseurs et fondateurs pour faciliter le financement de startups innovantes.",
      link: "https://growest-connect.vercel.app",
      technologies: ["React", "Next.js", "Supabase", "Tailwind CSS"],
      icon: <Users className="w-6 h-6" />,
      category: "SaaS"
    },
    {
      title: "Willy Assurance",
      description: "Votre partenaire de confiance pour l'assurance auto et moto en Côte d'Ivoire avec devis instantané.",
      link: "https://willy-assurance-ivory.vercel.app",
      technologies: ["React", "TypeScript", "API Integration", "Responsive Design"],
      icon: <Code className="w-6 h-6" />,
      category: "Web App"
    },
    {
      title: "ONG Ciel Ouvert",
      description: "Site web pour l'ONG accompagnant orphelins, veufs et familles démunies vers un avenir meilleur.",
      link: "https://ongcielouvert.vercel.app",
      technologies: ["React", "Next.js", "Tailwind CSS", "Responsive"],
      icon: <Heart className="w-6 h-6" />,
      category: "Non-profit"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mes Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-smooth animate-scale-in border-0 shadow-card bg-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {project.icon}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-muted text-muted-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                  variant="outline"
                  asChild
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Voir le projet
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-4">
            Vous avez un projet en tête ?
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary-dark transition-smooth shadow-card"
          >
            Discutons-en ensemble
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;