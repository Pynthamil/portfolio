"use client";

import ProjectCard from "@/components/ProjectCard";
import { homeProjects } from "@/data/projectsData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="page-wrapper animate-fade-in">
        {/* Intro Hero Section */}
        <div className="home-hero-container">
          <div className="home-avatar-wrapper">
            <img 
              src="/assets/memoji.svg" 
              alt="Avatar" 
              className="home-avatar-img" 
            />
          </div>
          <p className="home-hero-text">
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
