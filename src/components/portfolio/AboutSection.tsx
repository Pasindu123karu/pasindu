import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Smartphone, Palette, Brain } from "lucide-react";
import profileImage from "@/assets/pasindu-profile.jpeg";

const AboutSection = () => {
  const skills = [
    { icon: Code2, title: "Web Development", description: "Full-stack development with modern frameworks and technologies" },
    { icon: Smartphone, title: "Mobile Development", description: "Native and cross-platform mobile applications" },
    { icon: Palette, title: "UI/UX Design", description: "User-centered design with modern design principles" },
    { icon: Brain, title: "AI Integration", description: "Intelligent solutions and machine learning implementations" }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer and designer who loves creating innovative solutions 
            that bridge the gap between technology and user experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image side */}
          <div className="relative flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden glass border border-primary/20">
                <img 
                  src={profileImage} 
                  alt="Pasindu working"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-foreground">
              Building the Future, One Line at a Time
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                With a strong foundation in software engineering and a keen eye for design, 
                I specialize in creating digital experiences that are both functional and beautiful. 
                My journey spans across web development, mobile applications, and UI/UX design.
              </p>
              <p>
                I believe in the power of clean code, intuitive design, and continuous learning. 
                Whether it's architecting scalable backend systems or crafting pixel-perfect user interfaces, 
                I approach every project with passion and attention to detail.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {['Problem Solving', 'Team Leadership', 'Agile Development', 'User Research', 'System Architecture'].map((skill) => (
                <Badge key={skill} variant="outline" className="glass border-primary/30 hover:bg-primary/10 transition-colors">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="glass border-primary/20 p-6 hover:border-secondary/40 transition-all duration-300 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">{skill.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;