
import {
  Award,
  GraduationCap,
  Code2,
  Cloud,
  ExternalLink,
} from "lucide-react";

function Certifications() {
  const certificates = [
    
    {
      title: "Foundations of Modern Machine Learning",
      issuer: "IIIT Hyderabad",
      icon: <GraduationCap />,
      category: "Artificial Intelligence",
      file: "Foundations of modern machine Learning.jpg",
    },
    
    {
      title: "AWS Certification",
      issuer: "AWS",
      icon: <Cloud />,
      category: "Cloud Computing",
      file: "AWS Certification.jpg",
    },
    {
      title: "DevOps Certificate",
      issuer: "DevOps",
      icon: <Code2 />,
      category: "DevOps",
      file: "DevOps Certificate.jpg",
    },
    {
      title: "ICT Academy",
      issuer: "ICT Academy",
      icon: <GraduationCap />,
      category: "Professional Development",
      file: "ICT Academy.jpg",
    },
    {
      title: "Infosys – Python Foundation",
      issuer: "Infosys",
      icon: <Code2 />,
      category: "Python Programming",
      file: "Infosys - Python foundation.jpg",
    },
    {
      title: "Microsoft – Simplilearn Prompt Certificate",
      issuer: "Microsoft & Simplilearn",
      icon: <Award />,
      category: "Prompt Engineering",
      file: "Microsoft – Simplilearn Prompt Certificate.jpg",
    },
    {
      title: "Naukri Campus – Merit Certificate",
      issuer: "Naukri Campus",
      icon: <Award />,
      category: "Achievement",
      file: "Naukri Campus – Merit Certificate.jpg",
    },
    {
      title: "Sewcha Certificate",
      issuer: "Sewcha",
      icon: <GraduationCap />,
      category: "Certification",
      file: "Sewcha Certificate.jpg",
    },
  ];

  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      <div className="section-heading">
        

        <h2>
          Certifications & <span>Courses</span>
        </h2>

        <p>
          Professional learning and certifications
          that support my technical growth.
        </p>
      </div>

      <div className="certifications-grid">
        {certificates.map((certificate, index) => (
          <div
            className="certificate-card"
            key={index}
          >
            <div className="certificate-icon">
              {certificate.icon}
            </div>

            <span className="certificate-number">
              CERTIFICATION {String(index + 1).padStart(2, "0")}
            </span>

            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            <div className="certificate-bottom">
              <span>{certificate.category}</span>
              <Award size={20} />
            </div>

            {certificate.file && (
              <a
                href={`/certificates/${encodeURIComponent(certificate.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
