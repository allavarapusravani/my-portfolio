import {
  Image,
  Music,
  BriefcaseBusiness,
  FileSearch,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Image Captioning",
      category: "Computer Vision",
      icon: <Image />,
      description:
        "AI-powered application that generates meaningful captions for uploaded images using deep learning.",
      technologies: ["Python", "Deep Learning", "Computer Vision"],
      github: "https://github.com/allavarapusravani/Image-Captioning",
    },
    {
      title: "Emotion Based Music Player",
      category: "Deep Learning",
      icon: <Music />,
      description:
        "Detects facial emotions using DeepFace and recommends music based on the user's mood.",
      technologies: ["Python", "DeepFace", "Deep Learning"],
      github: "https://github.com/allavarapusravani/Emotion-Based-music-player",
    },
    {
      title: "Job Portal Application",
      category: "Full Stack Development",
      icon: <BriefcaseBusiness />,
      description:
        "Full-stack job portal connecting recruiters and job seekers with search, filtering and online applications.",
      technologies: ["Java", "MySQL", "React"],
      github: "https://github.com/allavarapusravani/JobConnect-Job-Portal",
    },
    {
      title: "AI-Based Resume Screening",
      category: "Artificial Intelligence",
      icon: <FileSearch />,
      description:
        "AI-powered resume screening system that extracts skills, calculates matching scores and recommends suitable jobs.",
      technologies: ["Python", "NLP", "Machine Learning"],
      github: "https://github.com/allavarapusravani/HirePath",
    },
  ];

  return (
    <section className="projects-section" id="projects">

      <div className="section-heading">
        

        <h2>
          Featured <span>Projects</span>
        </h2>
        
  
  


        <p>
          A showcase of innovative projects across AI/ML,
          web development and full-stack applications.
        </p>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-top">

              <div className="project-icon">
                {project.icon}
              </div>

              <span className="project-number">
                0{index + 1}
              </span>

            </div>

            <span className="project-category">
              {project.category}
            </span>

            <h3 title={project.title}>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-footer">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
                aria-label="Open GitHub repository"
              >
                <img
                  src="https://cdn.simpleicons.org/github/FFFFFF"
                  alt="GitHub"
                  width="22"
                  height="22"
                />
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;