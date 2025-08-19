import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Eduskills",
      position: "Android Development Virtual Internship",
      duration: "Aug 2024 - Dec 2024",
      location: "Virtual",
      description: [
        "Built Android apps using Java and XML with optimized UI design",
        "Achieved 25% improvement in app load time through layout optimization",
        "Gained exposure to Android, AI, cloud and data science technologies"
      ],
      skills: ["Android", "Java", "XML", "UI Design"],
      certificate: "https://drive.google.com/file/d/195wY1VekoTF_5ZkgM7ufrC3xemMdsFFX/view?usp=drive_link"
    },
    {
      company: "Forage Accenture",
      position: "Data Analytics and Visualization Job Simulation",
      duration: "Feb 2025 - Mar 2025",
      location: "Virtual",
      description: [
        "Cleaned and modeled 7 datasets to extract actionable insights",
        "Generated data visualizations using Excel to identify patterns",
        "Delivered comprehensive stakeholder presentation with key findings"
      ],
      skills: ["Data Analytics", "Excel", "Data Visualization", "Communication"],
      certificate: "https://drive.google.com/file/d/1e4T_Ny1s11arzM1NoIibIVz_WYdRoTEH/view?usp=drive_link"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary))_0%,transparent_50%)] opacity-5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent))_0%,transparent_50%)] opacity-5"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl animate-bounce"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Building expertise through <span className="text-primary font-semibold">hands-on internships</span> and <span className="text-accent font-semibold">real-world projects</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`group relative p-6 bg-gradient-to-br from-card/90 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 shadow-card hover:shadow-glow transition-all duration-500 hover-lift fade-in fade-in-delay-${index + 1} overflow-hidden h-full`}
              >
                {/* Decorative gradient border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-70 group-hover:opacity-100 transition-opacity"></div>
                
                {/* Floating background elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-xl group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2 font-poppins group-hover:text-primary transition-colors">
                            {exp.position}
                          </h3>
                          <h4 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="flex items-center text-primary font-semibold text-sm bg-primary/10 px-3 py-1 rounded-full">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.duration}
                          </div>
                          <div className="flex items-center text-accent font-semibold text-sm bg-accent/10 px-3 py-1 rounded-full">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-muted/50 to-background/50 rounded-xl p-4 mb-4 border border-border/30">
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground text-sm">
                              <span className="inline-block w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-4 mt-2 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.skills.map((skill, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="text-xs px-2 py-1 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:scale-105 transition-all duration-300 hover:shadow-md"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      {exp.certificate && (
                        <Button 
                          variant="outline" 
                          size="default"
                          className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30 hover:border-primary/50 shadow-card hover:shadow-glow transition-all duration-300 hover-lift"
                          asChild
                        >
                          <a href={exp.certificate} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            View Certificate
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;