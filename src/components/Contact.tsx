import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-xl text-center text-muted-foreground mb-12">
              I'm always open to discussing new opportunities, collaborations, or data science projects. 
              Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <a 
                href="mailto:sridattabrahmeswarapu@gmail.com"
                className="flex items-center gap-4 p-6 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300 group border border-transparent hover:border-primary"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">sridattabrahmeswarapu@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+15722057791"
                className="flex items-center gap-4 p-6 bg-muted/50 rounded-xl hover:bg-muted transition-all duration-300 group border border-transparent hover:border-primary"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">+1 (572) 205-7791</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-6 bg-muted/50 rounded-xl border border-border">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">Oklahoma, USA</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-muted/50 rounded-xl border border-border">
                <a 
                  href="https://www.linkedin.com/in/sridatta-brahmeswarapu-503784168/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-3 bg-card rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/sridatta234?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-3 bg-card rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">GitHub</span>
                </a>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-12"
                asChild
              >
                <a href="mailto:sridattabrahmeswarapu@gmail.com">Send Email</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
