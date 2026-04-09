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
    title: "Branding",
    titleSuffix: "for Studio",
    subtitle: "Visual identity and design system",
    imageBg: "linear-gradient(135deg, #e8e0ff 0%, #c8bfff 100%)",
    href: "/projects/branding",
  },
  {
    id: 6,
    title: "ACM Hackathon Portal",
    subtitle: "A website for ACM-VIT's Hackathon",
    image: "/assets/project-cards/acm-hackathon-portal.svg",
    href: "/projects/acm-hackathon",
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
