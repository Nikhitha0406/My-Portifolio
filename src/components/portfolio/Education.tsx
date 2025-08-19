import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Mohan Babu University",
      duration: "2022 - Present",
      location: "Tirupati, AP, India",
      cgpa: "9.84/10",
      status: "Expected Graduation: 2026",
      highlights: [
        "Maintaining excellent academic performance with 9.84 CGPA",
        "Active participation in technical projects and internships",
        "Strong foundation in computer science fundamentals"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Jagini Junior College",
      duration: "2020 - 2022",
      location: "Nellore, AP, India", 
      percentage: "97%",
      status: "Completed",
      highlights: [
        "Achieved 97% in Mathematics, Physics, and Chemistry",
        "Strong analytical and problem-solving foundation",
        "Prepared for competitive engineering entrance exams"
      ]
    }
  ];

  return (
    <section className="py-16 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-32 right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Academic journey building strong foundations in computer science and technology
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className={`group p-10 card-gradient shadow-elegant hover-lift transition-smooth fade-in fade-in-delay-${index + 1} border-2 border-transparent hover:border-primary/20 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-full"></div>
                
                <div className="flex flex-col gap-8 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent p-0.5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                        <GraduationCap className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col xl:flex-row xl:items-center gap-6 mb-6">
                      <h3 className="text-3xl font-bold text-foreground font-poppins group-hover:text-primary transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                        <Calendar className="h-5 w-5 mr-2" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                      <h4 className="text-xl font-semibold text-foreground">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-5 w-5 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Badge variant="default" className="text-lg px-6 py-3 shadow-elegant bg-gradient-to-r from-primary to-primary-glow text-white font-semibold">
                        {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                      </Badge>
                      <Badge variant="secondary" className="text-base px-4 py-2 bg-accent/10 text-accent border-accent/20">
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-1 gap-4">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start p-4 bg-muted/30 rounded-xl border border-border/50">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-4 mt-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 text-center fade-in fade-in-delay-3">
            <Card className="p-12 card-gradient shadow-elegant max-w-5xl mx-auto relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-foreground mb-8 font-poppins">Academic Excellence</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                  My academic journey reflects a consistent commitment to excellence and learning. 
                  From achieving 97% in intermediate studies to maintaining a 9.84 CGPA in B.Tech, 
                  I've developed strong analytical skills and a deep understanding of computer science fundamentals.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border/50">
                    <div className="text-5xl font-bold text-primary mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">9.84</div>
                    <div className="text-muted-foreground font-medium">Current CGPA</div>
                  </div>
                  <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border/50">
                    <div className="text-5xl font-bold text-primary mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">97%</div>
                    <div className="text-muted-foreground font-medium">Intermediate Score</div>
                  </div>
                  <div className="text-center p-6 bg-muted/20 rounded-2xl border border-border/50">
                    <div className="text-5xl font-bold text-primary mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2026</div>
                    <div className="text-muted-foreground font-medium">Expected Graduation</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
