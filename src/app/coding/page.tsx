import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Coding Projects",
  description: "Functional implementations, interactive utilities, and developer tools built with clean architecture.",
};

const projects = [
  {
    id: 1,
    title: "GitPerson",
    subtitle: "You can track everything",
    image: "/assets/project-cards/git-person.svg",
    href: "/coding/focus-fuel",
  },
  {
    id: 2,
    title: "Codédex App",
    subtitle: "App Proposal for Codedex Platform",
    image: "/assets/project-cards/codedex-app.svg",
    href: "/coding/codedex-wrapped",
  },
  {
    id: 3,
    title: "ReadMeFlier",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/readmeflier.svg",
    href: "/coding/semantic-parser",
  },
  {
    id: 4,
    title: "Resume Roaster",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/resume-roaster.svg",
    href: "/coding/resume-roaster",
  },
  {
    id: 5,
    title: "Semantic Email Intelligence",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/semantic-email.svg",
    href: "/coding/semantic-email-intelligence",
  },
  {
    id: 6,
    title: "My Blog",
    subtitle: "Personal blog about web development and programming",
    image: "/assets/project-cards/my-blog.svg",
    href: "/coding/my-blog",
  },
];

export default function CodingProjectsPage() {
  return (
    <main>
      <div className="page-wrapper animate-fade-in">
        <div className="about-header" style={{ marginTop: "40px" }}>
          <h1 className="about-title">
            coding <span>projects</span>
          </h1>
          <p style={{ color: "#86868b", fontSize: "18px", marginTop: "16px", letterSpacing: "-0.01em" }}>
            functional implementations, interactive utilities, and developer tools built with clean architecture
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
