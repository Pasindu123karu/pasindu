import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, GraduationCap, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      type: "work",
      title: "Intern Software Developer",
      company: "Mobitel (Pvt) Ltd",
      location: "Colombo, Sri Lanka",
      period: "Nov 2024 – May 2025",
      description:
        "Contributed to UI/UX design, front-end development, and mobile app projects. Worked with cross-functional teams under Agile practices, participating in daily stand-ups and sprint planning.",
      achievements: [
        "Built React Native API Monitor app for service visualization",
        "Designed and improved mobile app interfaces",
        "Collaborated with senior engineers in Agile sprints",
      ],
      tech: ["React Native", "TypeScript", "Figma"],
    },
      {
      type: "work",
      title: "Freelance & University Projects",
      company: "Self-Employed / Academic Work",
      location: "Kalutara, Sri Lanka",
      period: "2020 – Present",
      description:
        "Worked on freelance projects and major university projects, delivering full-stack web and mobile applications. Specialized in user-friendly UI/UX design, modern technologies, and scalable solutions.",
      achievements: [
        "Developed 'Smart Sign' – AI-powered sign language learning app",
        "Delivered multiple university projects for peers as freelance work",
        "Built custom web applications and mobile apps tailored to academic requirements",
        "Collaborated with students to design user-friendly UI/UX and implement full-stack solutions"
],

      tech: [
        "React",
        "React Native",
        "Flutter",
        "Node.js",
        "Express",
        "MongoDB",
        "Firebase",
        "TypeScript",
        "Stripe",
      ],
    },
  ];

  const education = [
  {
  degree: "BSc (Hons) Software Engineering",
  institution: "Cardiff Metropolitan University",
  location: "Colombo, Sri Lanka",
  period: "2022 – 2025",
  class: "2ⁿᵈ Upper",
  achievements: [
    "Graduated with 2ⁿᵈ Upper Class Honours",
    "Final-year project: AI-powered sign language learning app",
    "Active participation in academic and project-based research"
  ],
}
    {
      degree: "Advanced Diploma in Advertising & Multimedia",
      institution: "National Institute of Business Management (NIBM)",
      location: "Sri Lanka",
      period: "2022 – 2023",
      gpa: "",
      achievements: ["Specialized in multimedia and creative design"],
    },
    {
      degree: "Diploma in IT",
      institution: "ESOFT Metro Campus",
      location: "Sri Lanka",
      period: "2018 – 2019",
      gpa: "",
      achievements: ["Gained strong foundation in IT and programming basics"],
    },
    {
      degree: "GCE Advanced Level – Mathematics Stream",
      institution: "Kalutara Vidyalaya",
      location: "Sri Lanka",
      period: "2012 – 2020",
      gpa: "",
      achievements: ["Focused on Mathematics, Physics, and ICT"],
    },
  ];

  return (
    <section id="experience" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey, freelance projects, and academic achievements 
            that shaped my expertise in software development and design.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Building className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">
              Professional Experience
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-12 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>

                  <Card className="glass border-primary/20 p-6 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.01]">
                    <div className="space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h4>
                          <p className="text-lg text-secondary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right space-y-1">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-3">
                        <h5 className="font-medium text-foreground">
                          Key Achievements:
                        </h5>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="glass border-primary/30 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 animate-slide-up">
            <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-foreground">Education</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-secondary/50 to-transparent"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="glass border-primary/20 p-6 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02] animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    <p className="text-secondary font-medium">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </div>
                  </div>

                  {edu.gpa && (
                    <div className="text-center py-2">
                      <span className="text-lg font-bold bg-gradient-primary bg-clip-text text-transparent">
                        {edu.gpa}
                      </span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h5 className="font-medium text-foreground text-sm">
                      Achievements:
                    </h5>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Award className="h-3 w-3 text-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications removed */}
      </div>
    </section>
  );
};

export default ExperienceSection;
