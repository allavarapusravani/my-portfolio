
import {
  Brain,
  Code2,
  Lightbulb,
} from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">

      {/* SECTION HEADING */}
      <div className="section-heading">
        
        <h2>About <span>Me</span></h2>
      </div>

      <div className="about-container">

        {/* LEFT - ABOUT INTRODUCTION */}
        <div className="about-text">

          <p>
            I'm an aspiring AI/ML Engineer and Full Stack Web
            Developer with a strong foundation in Artificial
            Intelligence, Machine Learning, and Software
            Development. I enjoy transforming innovative ideas
            into intelligent, real-world applications.
          </p>

          <p>
            With hands-on experience in Python, Java, Machine
            Learning, and full-stack development, I have worked
            on projects involving AI-powered solutions, data
            analysis, and web applications.
          </p>

          <p>
            I'm passionate about continuous learning,
            problem-solving, and building scalable, user-friendly
            applications that create meaningful real-world impact.
          </p>

        </div>

        {/* RIGHT - ABOUT CARDS */}
        <div className="about-cards">

          {/* FULL STACK */}
          <div className="about-card">
            <div className="about-card-icon icon-blue">
              <Code2 />
            </div>

            <div className="about-card-content">
              <h3>Full Stack Development</h3>
              <p>
                Developing responsive web applications using
                Java, Spring Boot, React, and MySQL.
              </p>
            </div>
          </div>

          {/* AI & MACHINE LEARNING */}
          <div className="about-card">
            <div className="about-card-icon icon-purple">
              <Brain />
            </div>

            <div className="about-card-content">
              <h3>AI & Machine Learning</h3>
              <p>
                Exploring AI-powered solutions, NLP,
                Machine Learning, and intelligent applications.
              </p>
            </div>
          </div>

          {/* INNOVATION */}
          <div className="about-card">
            <div className="about-card-icon icon-green">
              <Lightbulb />
            </div>

            <div className="about-card-content">
              <h3>Innovation & Problem Solving</h3>
              <p>
                Turning creative ideas into practical solutions
                through coding and analytical thinking.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
