
import {
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";

function Education() {
  const educationDetails = [
    {
      degree: "Bachelor of Technology",
      year: "| 2022 – 2026",
      specialization: "Artificial Intelligence & Machine Learning",
      percentage: "76.2%",
      label: "Key Coursework",
      subjects: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Database Systems",
      ],
      icon: <GraduationCap />,
      theme: "btech",
    },
    {
      degree: "Intermediate",
      year: "| 2020 – 2022",
      specialization: "Mathematics, Physics, Chemistry (MPC)",
      percentage: "93.3%",
      label: "Core Subjects",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
      ],
      icon: <BookOpen />,
      theme: "inter",
    },
  ];

  return (
    <section className="education-section" id="education">

      <div className="section-heading">
        <h2>
          My <span>Education</span>
        </h2>
        <p>
          My academic journey and educational background.
        </p>
      </div>

      <div className="education-container">

        {educationDetails.map((item, index) => (
          <div
            className={`education-card ${item.theme}`}
            key={index}
          >

            <div className="education-icon">
              {item.icon}
            </div>

            <div className="education-details">

              <h3>{item.degree}</h3>

              <p className="education-year">
                {item.year}
              </p>

              <h4>{item.specialization}</h4>

              <div className="education-meta">
                <span>
                  <Award size={22} />
                  Percentage: {item.percentage}
                </span>
              </div>

              <div className="coursework-box">

                <h5>{item.label}</h5>

                <div className="coursework-grid">
                  {item.subjects.map((subject, i) => (
                    <span key={i}>
                      • {subject}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;
