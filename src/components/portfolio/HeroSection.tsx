import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Palette } from "lucide-react";
import profileImage from "@/assets/pasindu.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tertiary/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left space-y-8 animate-slide-up">
          <div className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Pasindu
            </h1>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-2xl lg:text-3xl font-semibold text-foreground">
              <span className="flex items-center gap-2">
                <Code className="h-8 w-8 text-primary" />
                Software Engineer
              </span>
              <span className="hidden lg:block text-muted-foreground">&</span>
              <span className="flex items-center gap-2">
                <Palette className="h-8 w-8 text-secondary" />
                UI/UX Designer
              </span>
            </div>
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl">
            Crafting innovative digital experiences through code and design. 
            Passionate about creating seamless user interfaces and scalable applications 
            that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary text-lg px-8 py-6"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-primary/50 hover:bg-primary/10 text-lg px-8 py-6 hover:scale-105 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>

          {/* Tech stack preview */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
            {['React', 'React Native', 'Flutter', 'Java', 'Spring Boot'].map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110 animate-pulse-glow"></div>
            
            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass border-4 border-primary/30">
              <img 
                src={profileImage} 
                alt="Pasindu - Software Engineer & UI/UX Designer"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center glass animate-float">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center glass animate-float" style={{ animationDelay: '1s' }}>
              <Palette className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
