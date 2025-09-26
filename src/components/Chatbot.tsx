import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: '👋 Salut ! Je suis l\'assistant IA d\'Esechiel. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => Math.random().toString(36).substr(2, 9));

  const quickQuestions = [
    "Quels sont vos services ?",
    "Tarifs et devis",
    "Disponibilité pour projet",
    "Technologies utilisées"
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    // Simulate API call - replace with real GPT-4 integration
    setTimeout(async () => {
      const botResponse = getBotResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);

      // Store conversation in Supabase
      try {
        await supabase
          .from('chatbot_conversations')
          .insert([
            {
              session_id: sessionId,
              message: userMessage,
              response: botResponse
            }
          ]);
      } catch (error) {
        console.error('Error storing conversation:', error);
      }
    }, 1000);
  };

  const getBotResponse = (message: string) => {
    const responses = {
      'services': 'Je propose du développement fullstack, création de SaaS, chatbots IA, intégration d\'APIs et consulting technique. Voulez-vous en savoir plus sur un service spécifique ?',
      'tarifs': 'Mes tarifs varient selon la complexité du projet. Pour un devis personnalisé, contactez-moi directement via le formulaire. Je propose aussi des forfaits mensuels pour la maintenance.',
      'disponibilité': 'Je suis actuellement disponible pour de nouveaux projets ! Mon planning est flexible. Contactez-moi pour discuter de vos besoins et timelines.',
      'technologies': 'J\'utilise React, Next.js, Node.js, Python, Supabase, OpenAI API, Tailwind CSS et bien d\'autres technologies modernes. Quel type de projet avez-vous en tête ?'
    };

    for (const [key, response] of Object.entries(responses)) {
      if (message.toLowerCase().includes(key) || message.toLowerCase().includes(response.substring(0, 10).toLowerCase())) {
        return response;
      }
    }

    return 'Merci pour votre question ! Pour une réponse détaillée, je vous invite à me contacter directement via le formulaire. Esechiel sera ravi de discuter de votre projet personnellement. 🚀';
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* Chatbot Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary shadow-glow-primary text-primary-foreground font-bold text-xl animate-pulse-glow"
      >
        💬
      </Button>

      {/* Chatbot Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <Card className="w-full max-w-lg h-[600px] shadow-card-premium border-2 border-primary/20 bg-card/95 backdrop-blur-sm relative overflow-hidden">
            {/* Header gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            
            <CardHeader className="relative z-10 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold animate-pulse-glow">
                    🤖
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">Assistant IA</h3>
                    <p className="text-sm text-muted-foreground">Esechiel Kouame</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-destructive/10 hover:text-destructive border-destructive/20"
                >
                  ✕
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-[calc(600px-80px)] p-0">
              {/* Messages Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-background/50 to-muted/20">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-3 rounded-2xl shadow-card ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-primary to-primary-dark text-primary-foreground ml-4'
                          : 'bg-card border border-primary/20 mr-4 text-foreground'
                      } animate-scale-in`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="max-w-xs px-4 py-3 rounded-2xl bg-card border border-primary/20 mr-4 animate-pulse">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="p-4 border-t border-primary/10 bg-muted/20">
                  <p className="text-sm text-muted-foreground mb-3 font-medium">Questions rapides :</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickQuestion(question)}
                        className="text-xs h-8 border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 border-t border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
                <div className="flex gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Tapez votre message..."
                    className="flex-1 border-primary/30 focus:border-primary/50 bg-background/80 backdrop-blur-sm"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!input.trim() || isTyping}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground shadow-glow-primary px-6"
                  >
                    🚀
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Assistant IA • Réponses instantanées
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Chatbot;