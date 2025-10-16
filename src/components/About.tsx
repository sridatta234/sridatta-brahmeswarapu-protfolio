const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Professional Summary
          </h2>
          
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card border border-border">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Analytical and detail-oriented <span className="text-primary font-semibold">Data Analyst</span> and{" "}
              <span className="text-secondary font-semibold">Machine Learning Engineer</span> with{" "}
              <span className="font-semibold">2+ years of professional experience at Accenture</span> and a strong 
              academic foundation (M.S. in Computer Science, GPA 3.55). Skilled in transforming complex data into 
              actionable insights, building ML models, and deploying end-to-end data solutions.
            </p>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-lg text-muted-foreground">
                Proficient in <span className="text-primary">Python</span>, <span className="text-primary">SQL</span>,{" "}
                <span className="text-primary">TensorFlow</span>, <span className="text-primary">PyTorch</span>,{" "}
                <span className="text-primary">AWS</span>, and visualization tools. Adept at managing large datasets, 
                automating ETL pipelines, and delivering real-world AI applications that drive business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
