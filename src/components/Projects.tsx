import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching projects:', error);
          return;
        }

        setProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Chargement des projets...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6 tracking-tight">
            Mes <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des solutions innovantes qui transforment les idées en 
            <span className="text-primary font-semibold"> succès mesurables</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden shadow-card hover:shadow-card-premium transition-all duration-500 border-2 border-primary/10 hover:border-primary/20 animate-scale-in bg-card/80 backdrop-blur-sm"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Floating status badge */}
              <div className="absolute top-4 right-4 z-20">
                 <Badge className="bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground font-bold px-3 py-1 shadow-glow-secondary animate-pulse-glow">
                   {project.featured ? 'Featured' : 'Projet'}
                 </Badge>
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed text-base group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies?.map((tag: string, tagIndex: number) => (
                    <Badge 
                      key={tagIndex}
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  asChild
                  className="w-full group/btn bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-primary-foreground font-bold py-3 shadow-glow-primary relative overflow-hidden"
                >
                  <a 
                    href={project.demo_url || project.github_url || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative z-10"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Découvrir le projet
                      <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                  </a>
                </Button>
              </CardContent>

              {/* Decorative corner elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Vous avez un projet en tête ? Discutons-en !
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-secondary to-secondary-light hover:from-secondary-light hover:to-secondary text-secondary-foreground font-bold px-8 py-4 shadow-glow-secondary animate-pulse-glow"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Démarrer votre projet
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;