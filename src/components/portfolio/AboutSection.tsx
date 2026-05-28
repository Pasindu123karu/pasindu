import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bug,
  Smartphone,
  Palette,
  BrainCircuit
} from "lucide-react";

import profileImage from "@/assets/new.png";

const AboutSection = () => {
  const skills = [
    {
      icon: Bug,
      title: "QA Automation",
      description:
        "Building scalable automation frameworks for reliable web and mobile testing"
    },
    {
      icon: Smartphone,
      title: "Mobile Testing",
      description:
        "Cross-platform mobile automation with Appium for Android and iOS apps"
    },
    {
      icon: Palette,
      title: "UI/UX Quality",
      description:
        "Ensuring seamless user experiences through detailed UI and usability validation"
    },
    {
      icon: BrainCircuit,
      title: "AI-Assisted QA",
      description:
        "Leveraging AI tools to improve test generation, debugging, and QA productivity"
    }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            QA Engineer passionate about automation, software quality,
            and creating seamless digital experiences across web and mobile platforms.
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
          <div
            className="space-y-6 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-3xl font-bold text-foreground">
              Delivering Quality Through Automation
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I specialize in QA automation for web and mobile applications,
                focusing on scalable frameworks, API testing, and performance validation
                using modern testing tools and Agile practices.
              </p>

              <p>
                Alongside automation, I contribute to UI/UX quality by ensuring
                smooth, user-friendly experiences while collaborating closely with
                developers, product owners, and clients.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {[
                "Automation Testing",
                "API Testing",
                "Agile QA",
                "UI Validation",
                "Performance Testing"
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="glass border-primary/30 hover:bg-primary/10 transition-colors"
                >
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

                <h4 className="text-xl font-semibold text-foreground">
                  {skill.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
