
import {
  Mail,
  FileText,
  Send,
  ArrowUpRight,
  MessageCircle,
  ShieldCheck,
  BookOpen,
  BriefcaseBusiness,
} from "lucide-react";

function Contact() {
  const handleWhatsAppSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const whatsappMessage = `Hello Sravani!

Name: ${name}
Email: ${email}

Message: ${message}`;

    const whatsappURL = `https://wa.me/918465800689?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
    event.currentTarget.reset();
  };

  const GitHubIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );

  return (
    <>
      <section className="contact-section" id="contact">

        <div className="section-heading">
          <h2>Get In <span>Touch</span></h2>
          <p>
            I'm always open to discussing new opportunities,
            innovative projects, or just having a chat about technology.
          </p>
        </div>

        <div className="contact-container">

          {/* LEFT SIDE - WHATSAPP FORM */}

          <div className="contact-form-card">

            <div className="contact-form-heading">
              <div className="whatsapp-icon">
                <MessageCircle size={23} />
              </div>

              <div>
                <h3>Send Message via WhatsApp 📱</h3>
                <p>
                  Click submit to open WhatsApp with your pre-filled message.
                </p>
              </div>
            </div>

            <form onSubmit={handleWhatsAppSubmit}>

              <label htmlFor="contact-name">Full Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Your full name"
                required
              />

              <label htmlFor="contact-email">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="your.email@example.com"
                required
              />

              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                placeholder="Tell me about your project or opportunity..."
                required
              />

              <button type="submit" className="whatsapp-submit">
                <Send size={17} />
                Open WhatsApp to Send
              </button>

            </form>
          </div>

          {/* RIGHT SIDE - CONTACT LINKS */}

          <div className="contact-links">

            <h3>Let's Connect</h3>

            <p className="contact-description">
              Whether you're looking for a developer or want to network,
              I'd love to hear from you.
            </p>

            <div className="contact-links-grid">

              {/* EMAIL */}

              <a
                href="mailto:sravaniallavarapu2@gmail.com"
                className="contact-link-card"
              >
                <div className="contact-link-icon email-icon">
                  <Mail size={20} />
                </div>

                <div className="contact-link-content">
                  <h4>Email</h4>
                  <p>sravaniallavarapu2@gmail.com</p>
                </div>

                <ArrowUpRight className="contact-arrow" />
              </a>

              {/* GITHUB */}

              <a
                href="https://github.com/allavarapusravani"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <div className="contact-link-icon github-icon">
                  <GitHubIcon />
                </div>

                <div className="contact-link-content">
                  <h4>GitHub</h4>
                  <p>github.com/allavarapusravani</p>
                </div>

                <ArrowUpRight className="contact-arrow" />
              </a>

              {/* LINKEDIN */}

              <a
                href="https://linkedin.com/in/sravani-allavarapu"
                target="_blank"
                rel="noreferrer"
                className="contact-link-card"
              >
                <div className="contact-link-icon linkedin-icon">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>

                <div className="contact-link-content">
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/sravani-allavarapu</p>
                </div>

                <ArrowUpRight className="contact-arrow" />
              </a>

              {/* RESUME */}

              <a
                href="/Sravani_Resume.pdf"
                download="Sravani_Resume.pdf"
                className="contact-link-card resume-card"
              >
                <div className="contact-link-icon resume-icon">
                  <FileText size={20} />
                </div>

                <div className="contact-link-content">
                  <h4>Resume</h4>
                  <p>My professional resume</p>

                  <span className="resume-status">
                    Download Resume (PDF)
                  </span>
                </div>

                <ArrowUpRight className="contact-arrow" />
              </a>

            </div>

            {/* PROFESSIONAL COMMUNICATION */}

            <div className="contact-professional-note">

              <div className="professional-icon">
                <ShieldCheck size={23} />
              </div>

              <div className="professional-content">
                <h4>Professional Communication</h4>

                <p>
                  I believe in clear communication and meaningful
                  professional connections. Whether you have a
                  project idea, career opportunity, or collaboration
                  in mind, feel free to reach out. I'd be happy to
                  connect, discuss ideas, and explore opportunities
                  together.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO FOOTER */}

      <footer className="portfolio-footer">

        <div className="footer-container">

          {/* FOOTER ABOUT */}

          <div className="footer-about">
            <h3>
              Sravani <span>Allavarapu</span>
            </h3>

            <h4>Full Stack & AIML Developer</h4>

            <p>
              Passionate about creating innovative solutions
              with AI/ML and modern web technologies.
            </p>

            <div className="footer-social-links">

              <a
                href="https://github.com/allavarapusravani"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>

              <a
                href="https://linkedin.com/in/sravani-allavarapu"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href="mailto:sravaniallavarapu2@gmail.com"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>

            </div>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-quick-links">
            <h4>Quick Links</h4>

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>

            <a
              href="/Sravani_Resume.pdf"
              download="Sravani_Resume.pdf"
            >
              Resume
            </a>
          </div>

          {/* TECH BLOG */}

          <div className="footer-blog">
            <div className="footer-blog-heading">
              <BookOpen size={21} />
              <h4>Tech Blog</h4>
            </div>

            <span className="coming-soon">Coming Soon</span>

            <p>
              Stay tuned for articles on AI/ML, web development,
              and programming insights.
            </p>

            <div className="footer-blog-icon">
              <BriefcaseBusiness size={23} />
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="footer-bottom">
          <p>
            © 2026 <span>Sravani Allavarapu.</span> All rights reserved.
          </p>

          <p>
            Designed with <span>♥</span> and Purple Passion.
          </p>
        </div>

      </footer>
    </>
  );
}

export default Contact;
