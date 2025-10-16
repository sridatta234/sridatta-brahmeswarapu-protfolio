import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-subtle opacity-80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sridatta Brahmeswarapu
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 text-lg md:text-xl text-muted-foreground">
            <span className="px-4 py-2 bg-card rounded-full border border-border">
              Data Analyst
            </span>
            <span className="px-4 py-2 bg-card rounded-full border border-border">
              Machine Learning Engineer
            </span>
            <span className="px-4 py-2 bg-card rounded-full border border-border">
              Data Engineer
            </span>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into actionable insights with 2+ years of experience at Accenture
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
            <a href="mailto:sridattabrahmeswarapu@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={18} />
              <span className="hidden sm:inline">sridattabrahmeswarapu@gmail.com</span>
            </a>
            <a href="tel:+15722057791" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={18} />
              <span className="hidden sm:inline">+1 (572) 205-7791</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              Oklahoma, USA
            </span>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://www.linkedin.com/in/sridatta-brahmeswarapu-503784168/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="https://github.com/sridatta234?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
