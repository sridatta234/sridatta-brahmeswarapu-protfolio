const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Python", "SQL", "C++", "JavaScript"],
      color: "primary"
    },
    {
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "BERT", "Time-Series Forecasting", "LangChain", "LangGraph", "Prompt Engineering", "Fine Tuning", "RAG", "Agentic AI"],
      color: "secondary"
    },
    {
      title: "Data Engineering",
      skills: ["ETL Pipelines", "BigQuery", "AWS", "Airflow", "Data Cleaning"],
      color: "accent"
    },
    {
      title: "Web Development",
      skills: ["React.js", "Node.js", "Flask", "REST APIs"],
      color: "primary"
    },
    {
      title: "Databases & Tools",
      skills: ["PostgreSQL", "MongoDB", "Git", "Docker", "Power BI", "Jupyter", "Tableau"],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
