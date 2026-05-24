"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
  onClick?: (e: React.MouseEvent, href: string) => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const router = useRouter();
  const isLocked = project.title === "GitPerson";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isLocked) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e, project.href);
    } else {
      router.push(project.href);
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      e.preventDefault();
      onClick(e, project.href);
    }
  };

  return (
    <div
      className={`project-card fade-up ${isLocked ? "is-locked" : ""}`}
      onClick={handleCardClick}
      onMouseMove={isLocked ? (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      } : undefined}
      onMouseEnter={isLocked ? () => setIsHovered(true) : undefined}
      onMouseLeave={isLocked ? () => setIsHovered(false) : undefined}
    >
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

        {/* Action button / Lock indicator */}
        {isLocked ? (
          <div className="lock-indicator-btn" aria-label="Project is currently developing and locked">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        ) : (
          <Link
            href={project.href}
            id={`project-${project.id}`}
            aria-label={`View ${project.title}`}
            className="arrow-btn"
            onClick={handleButtonClick}
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
        )}
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
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        ) : (
          <div className="card-image-empty" />
        )}
      </div>

      {/* Figma Member Tag Overlay on hover */}
      {isLocked && (
        <div 
          className="figma-member-tag"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            opacity: isHovered ? 1 : 0,
            pointerEvents: "none",
            position: "absolute",
          }}
        >
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="figma-cursor">
            <path d="M0 0V17.5L5.05 12.45H13.5L0 0Z" fill="#A153FF" />
          </svg>
          <span className="figma-tag-pill">Pynthamil - currently developing</span>
        </div>
      )}
    </div>
  );
}
