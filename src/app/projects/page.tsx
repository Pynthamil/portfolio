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
              <svg className="cta-card-graphic" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="80" rx="8" fill="#1d1d1f"/>
                <rect x="25" y="20" width="45" height="40" rx="4" fill="#2d2d30" stroke="#3d3d40" strokeWidth="1"/>
                <rect x="45" y="25" width="45" height="40" rx="4" fill="#3a3a3c" stroke="#48484a" strokeWidth="1"/>
                <path d="M85 20L86.5 23L89.5 23.5L87 25.5L88 28.5L85 26.5L82 28.5L83 25.5L80.5 23.5L83.5 23L85 20Z" fill="#ffb300"/>
                <path d="M35 50L36 52L38 52.3L36.3 53.7L37 55.7L35 54.3L33 55.7L33.7 53.7L32 52.3L34 52L35 50Z" fill="#ffb300"/>
                <line x1="52" y1="35" x2="72" y2="35" stroke="#86868b" strokeWidth="2" strokeLinecap="round"/>
                <line x1="52" y1="42" x2="80" y2="42" stroke="#86868b" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="56" cy="53" r="3" fill="#007aff"/>
              </svg>
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
