import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Chatbot from "@/components/Chatbot";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
