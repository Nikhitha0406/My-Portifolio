import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Database, Wrench, BookOpen, Award } from "lucide-react";

// Skill Badge Component
const SkillBadge = ({ skill, color }: { skill: string; color: string }) => {
  return (
    <div className={`px-4 py-2 rounded-full ${color} backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-200`}>
      <span className="text-white font-medium text-sm">{skill}</span>
    </div>
  );
};

const Skills = () => {
  const allSkills = [
    { name: "Java", color: "bg-gradient-to-r from-rose-500/80 to-pink-500/80" },
    { name: "Python", color: "bg-gradient-to-r from-blue-500/80 to-cyan-500/80" },
    { name: "JavaScript", color: "bg-gradient-to-r from-yellow-500/80 to-orange-500/80" },
    { name: "React", color: "bg-gradient-to-r from-cyan-500/80 to-blue-500/80" },
    { name: "Node.js", color: "bg-gradient-to-r from-green-500/80 to-emerald-500/80" },
    { name: "MySQL", color: "bg-gradient-to-r from-indigo-500/80 to-purple-500/80" },
    { name: "MongoDB", color: "bg-gradient-to-r from-green-600/80 to-green-500/80" },
    { name: "Git/GitHub", color: "bg-gradient-to-r from-gray-600/80 to-gray-500/80" },
    { name: "Bootstrap", color: "bg-gradient-to-r from-purple-500/80 to-violet-500/80" },
    { name: "Pandas", color: "bg-gradient-to-r from-blue-600/80 to-indigo-500/80" },
    { name: "VS Code", color: "bg-gradient-to-r from-blue-600/80 to-blue-700/80" },
    { name: "Data Visualization", color: "bg-gradient-to-r from-emerald-500/80 to-teal-500/80" },
    { name: "Critical Thinking", color: "bg-gradient-to-r from-violet-500/80 to-purple-500/80" },
    { name: "DSA", color: "bg-gradient-to-r from-orange-500/80 to-red-500/80" }
  ];

  const certifications = [
    {
      name: "Data Science",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1ypmMEer7aAA-DWPEDZsd5CZXn76VSEKE/view?usp=drive_link",
      emoji: "📊",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Python Essentials",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1r1SkgJ9JP4QqTFF7RwKbK9Hfx7RyXHjm/view?usp=drive_link",
      emoji: "🐍",
      color: "from-yellow-500 to-blue-500"
    },
    {
      name: "Cyber Security",
      issuer: "Cisco Networking Academy",
      link: "https://drive.google.com/file/d/1Qdm3u-yjYQhxs3CaikDCv6rFRdxX8cCo/view?usp=drive_link",
      emoji: "🔒",
      color: "from-red-500 to-pink-500"
    },
    {
      name: "ServiceNow Micro Certification",
      issuer: "ServiceNow University",
      link: "https://drive.google.com/file/d/1Krnk78YPapxsRqJfYktNSu8xVa2_x2L9/view?usp=drive_link",
      emoji: "⚙️",
      color: "from-green-500 to-blue-500"
    },
    {
      name: "Salesforce Developer",
      issuer: "Salesforce",
      link: "https://drive.google.com/file/d/1ZLktzSA3MdQ3KIba3Er1bpQB0j18Q6pl/view?usp=drive_link",
      emoji: "☁️",
      color: "from-blue-400 to-cyan-400"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Technical skills and certifications that drive my development capabilities
            </p>
          </div>
          
          {/* Skills Grid - Concise Style */}
          <Card className="p-8 card-gradient shadow-elegant border-2 border-transparent fade-in mb-20">
            <div className="flex flex-wrap gap-4 justify-center">
              {allSkills.map((skill, index) => (
                <SkillBadge
                  key={index}
                  skill={skill.name}
                  color={skill.color}
                />
              ))}
            </div>
          </Card>
          
          {/* Certifications Section */}
          <div className="fade-in fade-in-delay-3">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-4 font-poppins flex items-center justify-center gap-3">
                <Award className="h-10 w-10 text-primary" />
                Certifications
              </h3>
              <p className="text-lg text-muted-foreground">Professional certifications and achievements</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="group p-6 card-gradient shadow-card hover-lift transition-smooth border-2 border-transparent hover:border-primary/20 overflow-hidden relative"
                >
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.emoji}
                    </div>
                    
                    <h4 className="font-bold text-foreground mb-2 text-lg leading-tight">
                      {cert.name}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.issuer}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full shadow-card hover-lift group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href={cert.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-3 w-3" />
                        View Certificate
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;