"use client";

import ProjectCard from "@/components/ProjectCard";
import { homeProjects } from "@/data/projectsData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="page-wrapper animate-fade-in">
        {/* Intro Hero Section */}
        <div className="about-header" style={{ marginTop: "40px", marginBottom: "80px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <p style={{ color: "#1d1d1f", fontSize: "24px", lineHeight: "1.5", marginTop: "32px", letterSpacing: "-0.02em", maxWidth: "900px", fontWeight: "500", margin: "32px auto 0", textAlign: "justify" }}>
            I'm a very curious and passionate developer who loves bringing the ideas in my head into life through the help of technology
          </p>
        </div>


        {/* Projects Grid */}
        <div className="projects-grid">
          {homeProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
