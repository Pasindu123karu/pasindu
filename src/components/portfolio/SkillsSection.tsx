import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Database, 
  Smartphone, 
  Palette, 
  Brain,
  Server
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "primary",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "TypeScript", level: 80 },
        { name: "HTML & CSS", level: 92 },
        { name: "Tailwind CSS", level: 90 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "secondary",
      skills: [
        { name: "Java", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Python", level: 78 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      color: "secondary",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "MongoDB", level: 75 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "primary",
      skills: [
        { name: "React Native", level: 82 },
        { name: "Android (Java/Kotlin)", level: 70 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "secondary",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Prototyping", level: 85 },
        { name: "Wireframing", level: 83 }
      ]
    },
    {
      title: "AI & Integration",
      icon: Brain,
      color: "secondary",
      skills: [
        { name: "Machine Learning Basics", level: 65 },
        { name: "AI Model Integration", level: 70 },
        { name: "Python AI Libraries (TensorFlow, OpenCV)", level: 68 },
        { name: "Data Analysis", level: 72 }
      ]
    }
  ];

  const getGradientClass = (color: string) => {
    switch (color) {
      case 'primary': return 'bg-gradient-primary';
      case 'secondary': return 'bg-gradient-secondary';
      case 'tertiary': return 'from-tertiary to-primary';
      default: return 'bg-gradient-secondary';
    }
  };

  return (
    <section id="skills" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, mobile applications, 
            UI/UX design, and AI integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="glass border-primary/20 p-6 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02] animate-scale-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Category header */}
                <div className="text-center space-y-3">
                  <div className={`mx-auto w-16 h-16 ${category.color === 'tertiary' ? 'bg-gradient-to-r from-tertiary to-primary' : `bg-gradient-${category.color}`} rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${getGradientClass(category.color)} rounded-full transition-all duration-1000 ease-out animate-scale-in`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `0.5s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tech stack showcase */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
  'React', 'React Native', 'Flutter', 'Java', 'JavaScript', 'TypeScript', 'Spring Boot',
  'PHP', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Firebase',
  'HTML', 'CSS', 'Tailwind CSS', 'Figma', 'Canva', 'Photoshop',
  'Python', 'TensorFlow', 'OpenCV', 'Git', 'GitHub'
]
.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="tech-badge text-sm py-2 px-4 hover:animate-pulse-glow"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
