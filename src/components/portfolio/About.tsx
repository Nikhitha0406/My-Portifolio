import { Card } from "@/components/ui/card";
import { Code, Database, Smartphone, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in Java, Python, HTML, CSS, and JavaScript for building comprehensive web applications.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development", 
      description: "Android app development with focus on UI design and functionality optimization.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Experience in data extraction, analysis, and visualization using modern tools and frameworks.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Building intelligent systems including recommendation engines and emotion detection chatbots.",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary))_0%,transparent_50%)] opacity-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Final-year Computer Science student with a passion for creating <span className="text-primary font-semibold">innovative software solutions</span>. 
              I combine strong technical skills with creative problem-solving to build applications that make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={index} 
                  className={`group p-8 bg-gradient-to-br from-card/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-card hover:shadow-glow transition-all duration-500 hover-lift fade-in fade-in-delay-${index + 1}`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 font-poppins group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center fade-in fade-in-delay-2">
            <Card className="relative p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background border border-primary/20 shadow-glow max-w-5xl mx-auto overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  My Journey
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Currently pursuing <span className="text-primary font-semibold">B.Tech in Computer Science</span> at Mohan Babu University with a CGPA of <span className="text-accent font-bold">9.84/10</span>. 
                  I've gained valuable experience through internships at <span className="text-primary font-semibold">Eduskills</span> and <span className="text-accent font-semibold">Forage Accenture</span>, where I worked 
                  on Android development, data analytics, and AI-based applications.
                </p>
                <div className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full px-6 py-3">
                  <p className="text-base font-medium text-foreground">
                    🎯 <span className="text-primary font-semibold">Goal:</span> Leverage technology to solve real-world problems and contribute to innovative software development projects
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;