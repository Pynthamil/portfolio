"use client";

import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { homeProjects } from "@/data/projectsData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="page-wrapper animate-fade-in">
        {/* Intro Hero Section */}
        <div className="home-hero-container">
          <h1 className="intro-name">Pynthamil Pavendan</h1>
          
          <p className="intro-description">
            I'm a designer and developer who loves bringing ideas to life through technology, focusing on crafting clean and intentional digital experiences.
          </p>
          
          <p className="intro-currently">
            Currently studying Computer Science at
            <span className="intro-logo-wrapper" title="Vellore Institute of Technology">
              <svg className="intro-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#1d1d1f"/>
                <path d="M12 5L4 9L12 13L20 9L12 5Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 11.5V15.5C7 16.5 9 17.5 12 17.5C15 17.5 17 16.5 17 15.5V11.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Vellore Institute of Technology and building creative developer tools.
          </p>

          <div className="intro-btn-container">
            <a href="mailto:pavendanpynthamil@gmail.com" className="intro-btn">Email me</a>
            <Link href="/about" className="intro-btn">About</Link>
          </div>
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
