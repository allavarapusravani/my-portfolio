
import {
  Code2,
  Brain,
  Database,
  Globe,
  Wrench,
  Server,
} from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      icon: <Code2 />,
      skills: ["Java", "Python", "JavaScript", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain />,
      skills: [
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
        "Generative AI",
        "LLMs",
        "TensorFlow",
        "Scikit-learn",
      ],
    },
    {
      title: "Frontend Development",
      icon: <Globe />,
      skills: ["HTML", "CSS", "React.js", "JavaScript", "Streamlit"],
    },
    {
      title: "Backend Development",
      icon: <Server />,
      skills: ["Java", "Spring Boot", "REST APIs", "Flask"],
    },
    {
      title: "Database",
      icon: <Database />,
      skills: ["MySQL", "MongoDB", "SQL"],
    },
    {
      title: "Developer Tools",
      icon: <Wrench />,
      skills: ["Maven", "Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-heading">
        

        <h2>
          Technical <span>Skills</span>
        </h2>

        <p>
          Technologies and tools I use to develop intelligent
          solutions and build modern, scalable applications.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">
              {group.icon}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
