import { Badge } from "@/components/ui/badge";
import { Heart, Code, Coffee, Github, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/Pasindu123karu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pasindu-karunarathna-7732b5315/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/ruvinath_k/", label: "Instagram" },
    { icon: Mail, href: "mailto:pasindukarunarathna59@gmail.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="py-12 section-padding border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Pasindu
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Software Engineer & UI/UX Designer passionate about creating 
              innovative digital experiences through code and design.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Coffee className="h-4 w-4 text-amber-500" />
              <span>using</span>
              <Code className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(link.href.slice(1));
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 glow-primary group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-white group-hover:animate-pulse" />
                </a>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="outline" className="glass border-primary/30 text-xs">
                Available for work
              </Badge>
              <Badge variant="outline" className="glass border-secondary/30 text-xs">
                Open to collaborations
              </Badge>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Pasindu. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center glow-primary hover:scale-110 transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <Code className="h-6 w-6 text-white animate-pulse" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
