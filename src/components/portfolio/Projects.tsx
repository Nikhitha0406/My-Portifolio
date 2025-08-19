import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import netflixProject from "@/assets/netflix-project.jpg";
import emotionChatbot from "@/assets/emotion-chatbot.jpg";
import carpoolingProject from "@/assets/carpooling-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Netflix Recommendations",
      description: "A Python-based movie recommender using Streamlit and Pandas. Matches titles using genre, cast, and director metadata for 90%+ accuracy on small test sets. Deployed using Streamlit Cloud.",
      image: netflixProject,
      technologies: ["Python", "Streamlit", "Pandas", "Machine Learning"],
      liveDemo: "https://netflix-fa59eqc4rdpguifpiuf4qr.streamlit.app/",
      sourceCode: "https://github.com/Nikhitha0406/Netflix",
      features: [
        "Content-based recommendation algorithm",
        "90%+ accuracy on test datasets",
        "Interactive web interface",
        "Real-time movie suggestions"
      ]
    },
    {
      title: "Emotion Detection AI Chatbot",
      description: "Developed a multilingual AI chatbot using NLP to detect emotions from user input in different languages. Incorporated voice-to-text API improving accessibility for non-typists and visually impaired users.",
      image: emotionChatbot,
      technologies: ["Python", "NLP", "Machine Learning", "Voice-to-Text API"],
      liveDemo: "",
      sourceCode: "https://github.com/Nikhitha0406/emotion-chatbot",
      features: [
        "Multilingual emotion detection",
        "Voice-to-text integration",
        "Real-time emotion analysis",
        "Accessibility focused design"
      ]
    },
    {
      title: "Community Car Pooling",
      description: "Built a carpooling web app for cost-efficient commute sharing among community users. Enabled real-time route matching based on user location; tested with simulated 10+ user cases.",
      image: carpoolingProject,
      technologies: ["Web Development", "Location Services", "Real-time Matching"],
      liveDemo: "",
      sourceCode: "https://github.com/Nikhitha0406/Carpooling",
      features: [
        "Real-time route matching",
        "Location-based services",
        "User authentication",
        "Cost-efficient ride sharing"
      ]
    }
  ];

  return (
    <section className="py-16 section-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-poppins bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Innovative solutions showcasing my skills in AI, web development, and data science
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group overflow-hidden card-gradient shadow-elegant hover-lift transition-smooth fade-in fade-in-delay-${index + 1} flex flex-col h-full border-2 border-transparent hover:border-primary/20`}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <Badge variant="secondary" className="bg-white/90 text-foreground backdrop-blur-sm">
                      {project.technologies[0]}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-3 font-poppins group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-xs uppercase tracking-wide">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-xs">
                          <span className="inline-block w-1 h-1 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground border-primary/20 px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    {project.liveDemo && (
                      <Button 
                        variant="default" 
                        size="sm"
                        className="flex-1 shadow-elegant hover-lift bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary"
                        asChild
                      >
                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 shadow-card hover-lift border-primary/20 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
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

export default Projects;