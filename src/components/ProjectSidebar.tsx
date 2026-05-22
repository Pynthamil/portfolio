"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProjectSidebar() {
  const pathname = usePathname();
  const isCoding = pathname.startsWith("/coding");
  
  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Visibility: show after scrolling past the header (scrollY > 300)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 2. Active section detection (Scrollspy)
      const sectionIds = isCoding
        ? ["overview", "ideation", "design", "implementation"]
        : ["overview", "process", "approach", "outcomes"];
      let currentActive = "overview";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active if the element is near the top of the viewport
          if (rect.top <= 160) {
            currentActive = id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isCoding]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth"
      });
    }
  };

  const sections = isCoding
    ? [
        { id: "overview", label: "Overview" },
        { id: "ideation", label: "Ideation" },
        { id: "design", label: "Design" },
        { id: "implementation", label: "Implementation" }
      ]
    : [
        { id: "overview", label: "Overview" },
        { id: "process", label: "Process" },
        { id: "approach", label: "Approach" },
        { id: "outcomes", label: "Outcomes" }
      ];

  if (!isVisible) return null;

  return (
    <div className="project-floating-sidebar">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className={`sidebar-nav-item ${isActive ? "active" : ""}`}
          >
            {section.label}
          </a>
        );
      })}
    </div>
  );
}
