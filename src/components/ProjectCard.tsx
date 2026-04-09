"use client";

import Link from "next/link";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  titleSuffix?: string;
  subtitle: string;
  image?: string;
  imageBg?: string;
  href: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="project-card fade-up">
      {/* Header */}
      <div className="card-header">
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 className="card-title">
            {project.title}
            {project.titleSuffix && (
              <span className="for-text"> {project.titleSuffix}</span>
            )}
          </h2>
          <p className="card-subtitle">{project.subtitle}</p>
        </div>

        {/* Arrow button */}
        <Link
          href={project.href}
          id={`project-${project.id}`}
          aria-label={`View ${project.title}`}
          className="arrow-btn"
          onClick={(e) => e.stopPropagation()}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>

      {/* Image area */}
      <div
        className="card-image-area"
        style={project.imageBg ? { background: project.imageBg } : undefined}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top center" }}
            className="h-250"
          />
        ) : (
          <div className="card-image-empty" />
        )}
      </div>
    </div>
  );
}
