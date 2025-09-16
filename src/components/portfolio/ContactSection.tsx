import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  MessageCircle,
  Calendar,
  Instagram
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pasindukarunarathna59@gmail.com",
      href: "mailto:pasindukarunarathna59@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 71 068 2595",
      href: "tel:+94710682595"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kalutara, Sri Lanka",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Pasindu123karu",
      color: "hover:text-primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/pasindu-karunarathna-7732b5315/",
      color: "hover:text-secondary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ruvinath_k/",
      color: "hover:text-tertiary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? 
            I'm always excited to collaborate on innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
         {/* Contact Form */}
<Card className="glass border-primary/20 p-8 animate-scale-in">
  <form 
    method="POST" 
    action="https://api.web3forms.com/submit" 
    className="space-y-6"
  >
    {/* Web3Forms access key */}
    <input 
      type="hidden" 
      name="access_key" 
      value="7475e292-f65a-45fe-9c81-7857b8ba7eec" 
    />

    <div className="text-center mb-6">
      <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
      <h3 className="text-2xl font-semibold text-foreground">Send a Message</h3>
      <p className="text-muted-foreground">Fill out the form below and I'll respond promptly</p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          required
          className="glass border-primary/30 focus:border-primary"
        />
      </div>
      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="glass border-primary/30 focus:border-primary"
        />
      </div>
    </div>

    <div>
      <Input
        name="subject"
        placeholder="Subject"
        required
        className="glass border-primary/30 focus:border-primary"
      />
    </div>

    <div>
      <Textarea
        name="message"
        placeholder="Your Message"
        required
        rows={6}
        className="glass border-primary/30 focus:border-primary resize-none"
      />
    </div>

    <Button 
      type="submit" 
      className="w-full bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary text-lg py-6"
    >
      <div className="flex items-center gap-2">
        <Send className="h-5 w-5" />
        Send Message
      </div>
    </Button>
  </form>
</Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Contact Details */}
            <Card className="glass border-primary/20 p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg glass border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                      <info.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="glass border-primary/20 p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg glass border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center group-hover:animate-pulse-glow">
                      <social.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{social.label}</p>
                      <p className="text-muted-foreground text-sm">Follow me on {social.label}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="glass border-primary/20 p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-tertiary" />
                Availability
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Status</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    Available for new projects
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Response Time</span>
                  <span className="text-muted-foreground">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Time Zone</span>
                  <span className="text-muted-foreground">UTC+5:30 (IST)</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;