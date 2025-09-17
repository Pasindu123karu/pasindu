import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Monitor, Smartphone, Palette } from "lucide-react";
import smartSign from "@/assets/smartSign.png";
import travelWeb from "@/assets/travelWeb.png";
import foodWeb from "@/assets/foodWeb.png";
import mobitel from "@/assets/mobitel.png";
import foodApp from "@/assets/foodApp.png";
import food from "@/assets/food.jpg";
import dashboard from "@/assets/dashboard.png";
import drink from "@/assets/drink.png";





const ProjectsSection = () => {
  const projects = [
    {
      category: "Web Development",
      icon: Monitor,
      projects: [
        {
          title: "SmartSign - AI Sign Language App",
          description:
            "Child-friendly web app teaching sign language with AI gesture recognition, gamified quizzes, and interactive A–Z lessons, featuring a playful UI and progress tracking.",
          image: smartSign,
          tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "TensorFlow.js"],
          liveUrl: "https://smartsign-frontend.vercel.app/",
          codeUrl: "https://github.com/Pasindu123karu/smartsign-frontend",
        }
        ,
        {
          title: "Food Ordering Website",
          description:
            "Designed and developed a comprehensive food ordering website featuring a user-friendly frontend, a powerful admin panel, and a robust backend server.",
          image: foodWeb,
          tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
          liveUrl: "#",
          codeUrl: "https://github.com/Pasindu123karu/Full-Stack-Food-Delivery-Website",
        },
      ],
    },
    {
      category: "Mobile Development",
      icon: Smartphone,
      projects: [
        {
          title: "Service API Monitor App",
          description:
          "Developed during my SLT-Mobitel internship. A React Native app to visualize main APIs and their sub-APIs, allowing users to refresh and check service status. Designed with an intuitive, user-friendly interface.",
          image: mobitel,
          tech: ["React Native", "TypeScript (TSX)", "Figma"],
          liveUrl: "#",
          codeUrl: "https://github.com/Pasindu123karu/Service-Api-Monitor-App",
        },
        {
          title: "Food Delivery App",
          description:
          "Designed and developed a fully functional food delivery app with a dedicated admin panel using Flutter. Features include user authentication, shopping cart, Stripe payment gateway integration, and real-time order status updates for a smooth experience.",
          image: food,
          tech: ["Flutter", "Dart", "Firebase", "Stripe"],
          liveUrl: "#",
          codeUrl: "https://github.com/Pasindu123karu/Food-Delivery-app-with-backend/tree/main/foodorder",
}

      ],
    },
    {
      category: "UI/UX Design",
      icon: Palette,
      projects: [
        {
          title: "Drink Website Redesign",
          description:
          "Redesigned a modern beverage website with an emphasis on vibrant visuals, clean layouts, and engaging product storytelling. Focused on delivering a fresh, minimal, and visually appealing UI/UX for an improved browsing experience.",
          image: drink,
          tech: ["Figma", "UI/UX Design", "Prototyping", "Design Theories"],
          liveUrl: "https://www.figma.com/proto/MBfEVME5qJJcoDZmncJ9wA/new-drink?node-id=0-1&t=S6d6vToq3xlSiKl9-1",
          codeUrl: "https://drive.google.com/drive/folders/1n4yqkWxFMapRrcKYDgzH_kvU8JN7kVSJ?usp=sharing",

        },
        {
          title: "Web dashboard for Event Booking",
          description:
            "Modern Web dashboard for an event booking and management app",
          image: dashboard,
          tech: ["Figma", "UI/UX Design", "Prototyping", "Design Theories"],
          liveUrl: "https://www.figma.com/design/lYt1D5ESKdRbz40892UXYk/Zyner-%7C-Design-Bootcamp-V1?node-id=0-1&t=PynKz1AaaT1F1E6o-1",
          codeUrl: "https://drive.google.com/drive/folders/1n4yqkWxFMapRrcKYDgzH_kvU8JN7kVSJ?usp=sharing",

        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning web development, mobile applications,
            and UI/UX design. Each project represents a unique challenge and
            innovative solution.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground">
                  {category.category}
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>

              {/* Projects grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <Card
                    key={project.title}
                    className="glass border-primary/20 overflow-hidden hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02] group animate-scale-in"
                    style={{
                      animationDelay: `${categoryIndex * 0.2 + projectIndex * 0.1
                        }s`,
                    }}
                  >
                    {/* Project image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-gaming opacity-50"></div>
                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="glass border-primary/30 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button
                          size="sm"
                          className="bg-gradient-primary hover:scale-105 transition-all duration-300 flex items-center gap-2"
                          onClick={() => window.open(project.liveUrl, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="glass border-primary/30 hover:bg-primary/10 flex items-center gap-2"
                          onClick={() => window.open(project.codeUrl, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
