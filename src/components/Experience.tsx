import { Briefcase, TrendingUp, Zap, Database, LineChart, Code } from "lucide-react";

const Experience = () => {
  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Designed and implemented predictive models using Random Forest, Naive Bayes, and SVM, improving forecasting accuracy by 30%"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Optimized TensorFlow/PyTorch models using XLA and TVM, reducing inference time by 40%"
    },
    {
      icon: <Database className="w-6 h-6" />,
      text: "Built automated ETL pipelines for 10M+ records across multiple data sources, ensuring 99.9% data integrity"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      text: "Collaborated with data engineers and business analysts to design real-time Power BI dashboards, improving decision speed by 25%"
    },
    {
      icon: <Code className="w-6 h-6" />,
      text: "Developed Python-based automation scripts for client reporting, reducing manual workload by 15+ hours weekly"
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-border">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Data Analyst
                </h3>
                <p className="text-xl text-primary font-semibold">Accenture</p>
                <p className="text-muted-foreground">Hyderabad, India</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-lg font-semibold text-secondary">Jul 2021 – Dec 2023</p>
                <p className="text-muted-foreground">2.5 years</p>
              </div>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground group-hover:shadow-glow transition-all duration-300">
                    {achievement.icon}
                  </div>
                  <p className="text-foreground/90 flex-1 pt-2">
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
