import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Work",
  description: "A selection of projects I've designed and built.",
};

const projects = [
  {
    id: 1,
    title: "DotOS",
    subtitle: "A context-aware OS for a more personal computer",
    image: "/project1.png",
    href: "/projects/dotos",
  },
  {
    id: 2,
    title: "Take-Out",
    subtitle: "A gamified food delivery app concept",
    image: "/project2.png",
    href: "/projects/take-out",
  },
  {
    id: 3,
    title: "DevFlow",
    subtitle: "A developer productivity toolkit",
    image: "/project3.png",
    href: "/projects/devflow",
  },
  {
    id: 4,
    title: "Marketplace",
    subtitle: "Peer-to-peer commerce, reimagined",
    image: "/project4.png",
    href: "/projects/marketplace",
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
    title: "Portfolio",
    subtitle: "A personal website built with Next.js",
    imageBg: "linear-gradient(135deg, #e0f0ff 0%, #b8d8ff 100%)",
    href: "/projects/portfolio",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <div className="page-wrapper">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
