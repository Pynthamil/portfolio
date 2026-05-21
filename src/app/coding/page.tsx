import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { codingProjects as projects } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Coding Projects",
  description: "Functional implementations, interactive utilities, and developer tools built with clean architecture.",
};

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
