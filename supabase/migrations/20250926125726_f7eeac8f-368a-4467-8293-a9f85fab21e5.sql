-- Remove existing projects
DELETE FROM public.projects;

-- Add your projects
INSERT INTO public.projects (title, description, demo_url, technologies, featured) VALUES
(
  'Willy Assurance',
  'Plateforme d''assurance moderne offrant des solutions complètes pour particuliers et professionnels avec une interface intuitive et des devis personnalisés.',
  'https://willy-assurance-ivory.vercel.app',
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
  true
),
(
  'ONG Ciel Ouvert',
  'Site web pour une organisation non gouvernementale dédiée à l''aide humanitaire et au développement communautaire avec présentation des missions et moyens de contact.',
  'https://ongcielouvert.vercel.app',
  ARRAY['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
  false
),
(
  'Growest Connect',
  'Plateforme de mise en relation professionnelle facilitant les connexions entre entrepreneurs, investisseurs et talents dans l''écosystème startup.',
  'https://growest-connect.vercel.app',
  ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Vercel'],
  true
);