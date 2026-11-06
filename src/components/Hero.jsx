import { ArrowDownToLine, FileText, Mail } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">

        <p className="hero-greeting">
          HELLO, I'M
        </p>

        <h1>
          Sravani
          <span> Allavarapu</span>
        </h1>

        <h2>
          AI/ML & Full Stack Web Developer
        </h2>

        <p className="hero-description">
          Passionate about Artificial Intelligence,
          Machine Learning, and Full Stack Development.
          I enjoy building intelligent applications,
          developing modern web experiences, and
          transforming innovative ideas into practical
          real-world solutions.
        </p>

        <div className="hero-buttons">

          <a
            href="/Sravani_Resume.pdf"
            className="primary-btn"
            download
          >
            <FileText size={18} />
            Download Resume
            <ArrowDownToLine size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            <Mail size={18} />
            Contact Me
          </a>

        </div>

      </div>

      <div className="hero-image-area">
        <div className="hero-profile-wrapper">
          <img
            src="/profile.jpeg"
            alt="Sravani Allavarapu"
            className="hero-profile-image"
          />
        </div>
      </div>

    </section>
  );
}

export default Hero;