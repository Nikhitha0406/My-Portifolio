import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nikhithakukati4065@gmail.com",
      link: "mailto:nikhithakukati4065@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9177242744",
      link: "tel:+919177242744"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/nikhitha-kukati-i4o65",
      link: "https://linkedin.com/in/nikhitha-kukati-i4o65"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Nikhitha0406",
      link: "https://github.com/Nikhitha0406"
    }
  ];

  return (
    <section className="py-16 hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
              Get In Touch
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Ready to collaborate on innovative projects? Let's connect and build something amazing together!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="fade-in fade-in-delay-1">
              <Card className="p-8 bg-white/10 border-white/20 shadow-glow">
                <h3 className="text-2xl font-bold text-white mb-8 font-poppins">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-smooth hover-lift group"
                      >
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-smooth">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-white/70 text-sm">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>
            </div>
            
            {/* Contact Form */}
            <div className="fade-in fade-in-delay-2">
              <Card className="p-8 bg-white/10 border-white/20 shadow-glow">
                <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                  Send Me a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/90 font-medium">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:ring-white/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/90 font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:ring-white/20"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white/90 font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:ring-white/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/90 font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how we can work together..."
                      rows={5}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50 focus:border-white/60 focus:ring-white/20 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full shadow-elegant hover-lift bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 font-semibold"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/70 text-center text-sm">
                    Or reach out directly via email or social media
                  </p>
                  <div className="flex justify-center gap-4 mt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-white/60 text-white hover:bg-white hover:text-primary"
                      asChild
                    >
                      <a href="mailto:nikhithakukati4065@gmail.com">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-white/60 text-white hover:bg-white hover:text-primary"
                      asChild
                    >
                      <a href="https://linkedin.com/in/nikhitha-kukati-i4o65" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;