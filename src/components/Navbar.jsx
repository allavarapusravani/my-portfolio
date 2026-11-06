import {
  House,
  UserRound,
  Code2,
  FolderKanban,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Mail,
} from "lucide-react";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="nav-logo">
        Sravani Allavarapu<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home" className="active">
          <House size={15} /> Home
        </a>

        <a href="#about">
          <UserRound size={15} /> About
        </a>

        <a href="#skills">
          <Code2 size={15} /> Skills
        </a>

        <a href="#projects">
          <FolderKanban size={15} /> Projects
        </a>

        <a href="#experience">
          <BriefcaseBusiness size={15} /> Experience
        </a>

        <a href="#education">
          <GraduationCap size={15} /> Education
        </a>

        <a href="#certifications">
          <Award size={15} /> Certifications
        </a>

        <a href="#contact">
          <Mail size={15} /> Contact
        </a>
      </div>

    </nav>
  );
}

export default Navbar;
