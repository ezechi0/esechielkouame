import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

// Schema de validation pour le formulaire de contact
const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(100, { message: "Le nom ne peut pas dépasser 100 caractères" }),
  email: z.string()
    .trim()
    .email({ message: "Adresse email invalide" })
    .max(255, { message: "L'email ne peut pas dépasser 255 caractères" }),
  message: z.string()
    .trim()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(1000, { message: "Le message ne peut pas dépasser 1000 caractères" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validation des données
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      const { error } = await supabase
        .from('contact_messages')
        .insert([validatedData]);

      if (error) {
        throw error;
      }

      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Effacer l'erreur quand l'utilisateur commence à taper
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ""
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Discutons de vos besoins
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations de contact */}
          <div className="animate-slide-up">
            <Card className="shadow-card border-0 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Mail className="w-5 h-5" />
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:ezechielkouame87@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      ezechielkouame87@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <a href="tel:+2250709260655" className="text-muted-foreground hover:text-secondary transition-smooth">
                      07 09 26 06 55
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Localisation</p>
                    <p className="text-muted-foreground">Côte d'Ivoire</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prise de rendez-vous Calendly */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-secondary">
                  <Calendar className="w-5 h-5" />
                  Planifier un rendez-vous
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Réservez un créneau avec moi en toute simplicité via Calendly.
                  </p>
                  <Button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).Calendly) {
                        (window as any).Calendly.initPopupWidget({url: 'https://calendly.com/ezechielkouame/30min'});
                      } else {
                        window.open('https://calendly.com/ezechielkouame/30min', '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="bg-secondary hover:bg-secondary/80 text-secondary-foreground shadow-card"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Réserver un rendez-vous
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Formulaire de contact */}
          <div className="animate-scale-in">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="text-primary">Envoyez-moi un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Votre nom"
                      required
                      className={`transition-smooth focus:ring-primary ${errors.name ? 'border-destructive' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="votre@email.com"
                      required
                      className={`transition-smooth focus:ring-primary ${errors.email ? 'border-destructive' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou posez votre question..."
                      rows={5}
                      required
                      className={`transition-smooth focus:ring-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark transition-smooth shadow-card"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" />
                        Envoyer le message
                      </div>
                    )}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    <span>Réponse garantie sous 24h</span>
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

export default Contact;