import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of projects I've designed and built.",
};

const projects = [
  {
    id: 1,
    title: "My Blog",
    subtitle: "A blog for my thoughts and ideas",
    image: "/assets/project-cards/my-blog.svg",
    href: "/projects/my-blog",
  },
  {
    id: 2,
    title: "Semantic Email Intelligence",
    subtitle: "A Second Brain for your Emails",
    image: "/assets/project-cards/semantic-email.svg",
    href: "/projects/semantic-email",
  },
  {
    id: 3,
    title: "Terminal Browser",
    subtitle: "A browser that runs in the terminal",
    image: "/assets/project-cards/terminal-browser.svg",
    href: "/projects/terminal-browser",
  },
  {
    id: 4,
    title: "Luma",
    subtitle: "An AI-assisted error management system",
    image: "/assets/project-cards/luma.svg",
    href: "/projects/luma",
  },
  {
    id: 5,
    title: "Resume Roaster",
    subtitle: "AI-powered resume roasting platform",
    image: "/assets/project-cards/resume-roaster.svg",
    href: "/projects/resume-roaster",
  },
  {
    id: 6,
    title: "ACM Hackathon Portal",
    subtitle: "A website for ACM-VIT's Hackathon",
    image: "/assets/project-cards/acm-hackathon-portal.svg",
    href: "/projects/acm-hackathon",
  },
  {
    id: 7,
    title: "Craftr Docs",
    subtitle: "The lovechild of Notion, Docs, and Figma",
    image: "/assets/project-cards/craftr-docs.svg",
    href: "/projects/craftr-docs",
  },
  {
    id: 8,
    title: "Portfolios",
    subtitle: "A collection of portfolios I've designed and built",
    image: "/assets/project-cards/portfolios.svg",
    href: "/projects/portfolios",
  },
];

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
