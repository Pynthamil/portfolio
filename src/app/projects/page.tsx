import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { productDesignProjects, codingProjects } from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of projects I've designed and built.",
};

const combinedProjects = [...productDesignProjects, ...codingProjects].filter(
  (project, index, self) => self.findIndex((p) => p.title === project.title) === index
);

export default function ProjectsPage() {
  return (
    <main>
      <div className="page-wrapper animate-fade-in">
        <div className="about-header" style={{ marginTop: "40px" }}>
          <h1 className="about-title">
            my <span>projects</span>
          </h1>
          <p style={{ color: "#86868b", fontSize: "18px", marginTop: "16px", letterSpacing: "-0.01em" }}>
            a collection of things i&apos;ve designed and built
          </p>
        </div>

        <div className="projects-grid">
          {combinedProjects.map((project) => (
            <ProjectCard key={`${project.href}-${project.title}`} project={project} />
          ))}
        </div>

        {/* Call to Action for Social Media Design */}
        <div className="projects-social-cta-container">
          <Link href="/social" className="projects-social-cta-card">
            <div className="cta-card-graphic-wrapper">
              <img 
                src="/assets/blog/banner1.webp" 
                alt="Social Media Designs Banner" 
                className="cta-card-graphic"
                style={{ objectFit: "cover", transform: "scale(1.25)", transformOrigin: "center" }}
              />
            </div>
            <div className="cta-card-info">
              <h3 className="cta-card-title">Want to see my social media designs?</h3>
              <p className="cta-card-body">Explore my collection of visual narratives, aesthetic storytelling, and social graphics!</p>
              <span className="cta-card-link">Show me! &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
