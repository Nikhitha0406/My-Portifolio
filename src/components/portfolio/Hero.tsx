import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo-new.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_40%)] opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary))_0%,transparent_40%)] opacity-15"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-primary/10 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-md animate-ping"></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--accent)/0.05)_50%,transparent_75%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="fade-in">
                <p className="text-accent font-semibold mb-3 tracking-wide text-sm uppercase animate-pulse">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 font-poppins leading-tight bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-shimmer">
                  Kukati Nikhitha
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-8 font-semibold tracking-wide">
                  <span className="relative">
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Computer Science Student</span>
                    <span className="text-muted-foreground"> & </span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Frontend Developer</span>
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                  Passionate about creating <span className="text-accent font-semibold">innovative solutions</span> through web development, mobile applications, 
                  and machine learning. I love turning <span className="text-primary font-semibold">complex problems</span> into simple, beautiful designs.
                </p>
              </div>
              
              <div className="fade-in fade-in-delay-1 flex flex-wrap gap-6 mt-8">
                <a
  href="https://drive.google.com/uc?export=download&id=1JCcui62XZiNfXi03-myceyl0ta9Dp1Ou"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center shadow-glow hover-lift bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-semibold px-4 py-2 text-sm rounded-md"
>
  <Download className="mr-2 h-4 w-4" />
  Download CV
</a>

              </div>
              
              <div className="fade-in fade-in-delay-2 flex gap-6 mt-6">
                <a 
                  href="https://linkedin.com/in/nikhitha-kukati-i4o65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-gradient-to-br from-muted/50 to-muted hover:from-accent/20 hover:to-primary/20 border border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift shadow-card hover:shadow-glow"
                >
                  <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
                <a 
                  href="https://github.com/Nikhitha0406"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-gradient-to-br from-muted/50 to-muted hover:from-primary/20 hover:to-accent/20 border border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift shadow-card hover:shadow-glow"
                >
                  <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:nikhithakukati4065@gmail.com"
                  className="group p-4 rounded-2xl bg-gradient-to-br from-muted/50 to-muted hover:from-accent/20 hover:to-primary/20 border border-border/50 hover:border-accent/50 transition-all duration-300 hover-lift shadow-card hover:shadow-glow"
                >
                  <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="fade-in fade-in-delay-3 relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Static background elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl rotate-6"></div>
                  <div className="absolute inset-0 bg-gradient-to-tl from-primary/20 to-accent/20 rounded-3xl -rotate-3"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl rotate-12"></div>
                  
                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-glow border-4 border-gradient-to-r from-accent to-primary">
                    <img
                      src={profilePhoto}
                      alt="Kukati Nikhitha - Computer Science Student & Frontend Developer"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Static accent elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;