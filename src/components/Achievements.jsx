
import {
  Trophy,
  Medal,
  Star,
  Award,
} from "lucide-react";

function Achievements() {
  const achievements = [
    {
      icon: <Trophy />,
      number: "97.29",
      suffix: "Percentile",
      title: "Naukri Campus Young Turks 2025",
      description:
        "Secured 97.29 percentile in India's largest national skill contest.",
    },
    {
      icon: <Medal />,
      number: "8.32",
      suffix: "CGPA",
      title: "Academic Topper",
      description:
        "Recognized as an academic topper among students in the batch.",
    },
  ];

  return (
    <section className="achievements-section" id="achievements">

      <div className="section-heading">
        
        <h2>My <span>Achievements</span></h2>
        <p>
          Milestones that reflect my dedication
          towards learning and excellence.
        </p>
      </div>

      <div className="achievements-grid">

        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>
              {item.number}
              <span> {item.suffix}</span>
            </h3>

            <h4>{item.title}</h4>

            <p>{item.description}</p>

            <div className="achievement-star">
              <Star size={16} />
              Achievement {index + 1}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Achievements;
