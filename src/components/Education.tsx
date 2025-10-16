import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Central Oklahoma (UCO)",
      location: "Oklahoma, USA",
      period: "2024 – Present",
      gpa: "GPA: 3.55 / 4.0"
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Malla Reddy College of Engineering and Technology (MRCET)",
      location: "Hyderabad, India",
      period: "2017 – 2021",
      gpa: "CGPA: 7.4 / 10.0"
    }
  ];

  const certifications = [
    "AI Workshop – IIIT Hyderabad",
    "Python Data Structures – University of Michigan (Coursera)",
    "Machine Learning – University of London",
    "Treasurer, UCO Badminton Club (140+ members)",
    "Winner – Cricket Championship & TECHTRIX 2K18 Paper Presentation"
  ];

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Education & Achievements
        </h2>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-primary font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground mb-2">{edu.location}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-secondary font-semibold">{edu.period}</span>
                      <span className="text-accent font-semibold">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Leadership */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Certifications & Leadership
              </h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-foreground/90 hover:text-primary transition-colors"
                >
                  <span className="text-primary mt-1.5">▸</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
