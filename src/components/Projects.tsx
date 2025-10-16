import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agentic AI SQL Query Generator",
      period: "2024",
      description: "Engineered an intelligent agentic AI system that autonomously generates, validates, and executes SQL operations for 100K+ records.",
      technologies: ["Python", "SQL", "Flask", "PostgreSQL", "Agentic AI"],
      highlights: [
        "Designed a Flask-based GUI and CLI tool with AI agents that auto-generate and validate relational schemas",
        "Integrated PostgreSQL APIs for large-scale data loading, achieving 90% reduction in database setup time",
        "Implemented data profiling and validation modules ensuring schema consistency"
      ],
      githubLink: "https://github.com/sridatta234/AGENTIC-AI-SQL-QUERY-GENERATOR"
    },
    {
      title: "Predicting Operator Market Entry/Exit Using News Data",
      period: "2024 – Present",
      description: "Designed a pipeline that scrapes, cleans, and processes 10K+ news articles for sentiment analysis and entity extraction.",
      technologies: ["Python", "NLP", "TensorFlow", "Pandas"],
      highlights: [
        "Trained LSTM and BERT-based models for time-series forecasting, achieving 85% accuracy",
        "Built visualization dashboards in Plotly to display operator entry/exit probability trends in real time",
        "Deployed model via REST API for integration into business dashboards, reducing manual analysis time by 70%"
      ],
      githubLink: "https://github.com/sridatta234/ML-Predicting-Operator-Market-Entry-Exit-Using-News-Data"
    },
    {
      title: "Fog Computing for Industrial IoT Monitoring",
      period: "2020 – 2021",
      description: "Architected a fog-layer IoT system enabling real-time monitoring of industrial sensors with 60% lower latency.",
      technologies: ["C++", "Python", "Raspberry Pi", "MQTT"],
      highlights: [
        "Implemented MQTT-based message brokering for reliable low-latency data transfer between IoT nodes",
        "Designed edge analytics algorithms for early fault detection, improving operational efficiency by 35%"
      ],
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary font-medium">{project.period}</p>
                </div>

                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <p key={idx} className="text-sm text-foreground/80 pl-4 border-l-2 border-primary/30">
                      {highlight}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary/10 mt-auto"
                  asChild
                >
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
