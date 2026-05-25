"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  titleSuffix?: string;
  subtitle: string;
  image?: string;
  imageBg?: string;
  href: string;
  category?: "design" | "dev";
};

type Props = {
  project: Project;
  onClick?: (e: React.MouseEvent, href: string) => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  const router = useRouter();
  const isLocked = project.title === "GitPerson" || project.title === "ReadMeFlier";
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleCardClick = (e: React.MouseEvent) => {
    if (isLocked) { e.preventDefault(); return; }
    if (onClick) { onClick(e, project.href); }
    else { router.push(project.href); }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLocked) { e.preventDefault(); return; }
    if (onClick) { e.preventDefault(); onClick(e, project.href); }
  };

  return (
    <div
      className={`project-card fade-up ${isLocked ? "is-locked" : ""}`}
      onClick={handleCardClick}
      onMouseMove={isLocked && !isTouch ? (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      } : undefined}
      onMouseEnter={isLocked && !isTouch ? () => setIsHovered(true) : undefined}
      onMouseLeave={isLocked && !isTouch ? () => setIsHovered(false) : undefined}
    >
      {/* Full-bleed image */}
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
          />
        ) : (
          <div className="card-image-empty" />
        )}

        {/* Hover overlay — title + category fade in from bottom */}
        <div className="card-overlay">
          <div className="card-overlay-inner">
            {project.category && (
              <span className={`project-type-tag ${project.category === "design" ? "tag-design" : "tag-dev"}`}>
                {project.category === "design" ? "Product Design" : "Dev"}
              </span>
            )}
            <h2 className="card-title">
              {project.title}
              {project.titleSuffix && (
                <span className="for-text"> {project.titleSuffix}</span>
              )}
            </h2>
          </div>
        </div>
      </div>

      {/* Floating arrow — bottom-left corner */}
      {isLocked ? (
        <div className="card-arrow-btn is-locked-btn" aria-label="Currently developing">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      ) : (
        <Link
          href={project.href}
          id={`project-${project.id}`}
          aria-label={`View ${project.title}`}
          className="card-arrow-btn"
          onClick={handleButtonClick}
        >
          <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fill="currentColor" fillRule="evenodd" clipRule="evenodd"
            />
          </svg>
        </Link>
      )}

      {/* Figma cursor overlay for locked cards */}
      {isLocked && (
        <div
          className="figma-member-tag"
          style={isTouch ? {
            left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 1, pointerEvents: "none", position: "absolute",
          } : {
            left: `${mousePos.x}px`, top: `${mousePos.y}px`,
            opacity: isHovered ? 1 : 0,
            pointerEvents: "none", position: "absolute",
          }}
        >
          {!isTouch && (
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" className="figma-cursor">
              <path d="M0 0V17.5L5.05 12.45H13.5L0 0Z" fill="#A153FF" />
            </svg>
          )}
          <span className="figma-tag-pill" style={isTouch ? { borderRadius: "12px", transform: "none" } : undefined}>
            Pynthamil - currently developing
          </span>
        </div>
      )}
    </div>
  );
}
