import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { productDesignProjects as projects } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of projects I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <main>
      <div className="page-wrapper">
        <div className="about-header" style={{ marginTop: "40px" }}>
          <h1 className="about-title">
            my <span>projects</span>
          </h1>
          <p style={{ color: "#86868b", fontSize: "18px", marginTop: "16px", letterSpacing: "-0.01em" }}>
            a collection of things i&apos;ve designed and built
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
