
import {
  BriefcaseBusiness,
  Brain,
  CalendarDays,
  MapPin,
  FileCheck,
  ExternalLink,
} from "lucide-react";

function Experience() {
  const experiences = [
    {
      role: "AI/ML Intern",
      company: "Innovexis",
      period: "August 2026",
      location: "Remote",
      description: [
        "Contributed to AI/ML projects involving data preprocessing, model development, and performance evaluation.",
        "Applied Python and machine learning techniques to develop and test practical AI-driven solutions.",
        "Gained hands-on experience in implementing machine learning concepts for real-world applications.",
      ],
      icon: <Brain />,
      certificate: "/certificates/innovexis-certificate.jpg",
      certificateLabel: "View Certificate",
    },
    {
      role: "Machine Learning Intern",
      company: "Skill Craft Technologies",
      period: "April 2025",
      location: "Remote",
      description: [
        "Developed practical projects using Python and machine learning concepts.",
        "Worked on data analysis, model implementation, and technical problem-solving.",
        "Enhanced programming and analytical skills through hands-on project development.",
      ],
      icon: <BriefcaseBusiness />,
      certificate: "/certificates/skillcraft-certificate.jpg",
      certificateLabel: "View Certificate",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="section-heading">
        <h2>
          Professional <span>Experience</span>
        </h2>
        <p>
          Building practical expertise through internships and hands-on AI/ML projects.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon">
              {item.icon}
            </div>

            <div className="experience-details">
              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <div className="experience-meta">
                <span>
                  <CalendarDays size={15} />
                  {item.period}
                </span>

                <span>
                  <MapPin size={15} />
                  {item.location}
                </span>
              </div>

              <ul>
                {item.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <a
                href={item.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-certificate"
              >
                <FileCheck size={16} />
                {item.certificateLabel}
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
