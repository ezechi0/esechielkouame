-- Create table for contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can send a message)
CREATE POLICY "Anyone can send contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admin view (only admins can view messages)
CREATE POLICY "Admins can view all contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (false); -- We'll update this when admin authentication is implemented

-- Create table for projects portfolio
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  demo_url TEXT,
  github_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy for public read (everyone can view projects)
CREATE POLICY "Anyone can view projects" 
ON public.projects 
FOR SELECT 
USING (true);

-- Create policy for admin management (only admins can manage projects)
CREATE POLICY "Admins can manage projects" 
ON public.projects 
FOR ALL 
USING (false); -- We'll update this when admin authentication is implemented

-- Create table for chatbot conversations
CREATE TABLE public.chatbot_conversations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  message TEXT NOT NULL,
  response TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.chatbot_conversations ENABLE ROW LEVEL SECURITY;

-- Create policy for session-based access
CREATE POLICY "Users can view their own conversations" 
ON public.chatbot_conversations 
FOR SELECT 
USING (true); -- For now, allow all reads

CREATE POLICY "Anyone can create conversations" 
ON public.chatbot_conversations 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on projects
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample projects
INSERT INTO public.projects (title, description, technologies, featured, demo_url, github_url) VALUES 
('Portfolio Personnel', 'Site web portfolio moderne développé avec React et Tailwind CSS', ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase'], true, '#', '#'),
('Application E-commerce', 'Plateforme de commerce électronique complète avec gestion des produits et paiements', ARRAY['React', 'Node.js', 'PostgreSQL', 'Stripe'], true, '#', '#'),
('Dashboard Analytics', 'Interface d''administration avec graphiques et métriques en temps réel', ARRAY['React', 'D3.js', 'Express', 'MongoDB'], false, '#', '#');