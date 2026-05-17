import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Coding Projects",
  description: "Functional implementations, interactive utilities, and developer tools built with clean architecture.",
};

const projects = [
  {
    id: 1,
    title: "FocusFuel",
    subtitle: "Minimalist focus companion and motivational developer hub with custom sprite mascots",
    image: "/assets/project-cards/focus-fuel.png",
    href: "/coding/focus-fuel",
  },
  {
    id: 2,
    title: "Codédex Wrapped",
    subtitle: "Spotify-wrapped style retro arcade annual developer recap built with Framer Motion",
    image: "/assets/project-cards/codedex-wrapped.png",
    href: "/coding/codedex-wrapped",
  },
  {
    id: 3,
    title: "Semantic Parser",
    subtitle: "High-performance NLP parsing pipeline that transforms raw text streams into semantic database nodes",
    image: "/assets/project-cards/semantic-parser.png",
    href: "/coding/semantic-parser",
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
