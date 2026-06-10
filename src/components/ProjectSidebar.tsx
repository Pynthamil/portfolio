"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProjectSidebar() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2] ?? "";

  const [activeSection, setActiveSection] = useState("overview");
  const [isVisible, setIsVisible] = useState(false);

  const sectionsBySlug: Record<string, { id: string; label: string }[]> = {
    "my-blog":          [{ id: "overview", label: "Overview" }, { id: "design", label: "Design" }, { id: "implementation", label: "Build" }, { id: "results", label: "Posts" }],
    "semantic-email":   [{ id: "overview", label: "Overview" }, { id: "design", label: "Interface" }, { id: "implementation", label: "Approach" }, { id: "results", label: "Privacy" }],
    "terminal-browser": [{ id: "overview", label: "Overview" }, { id: "design", label: "Interface" }, { id: "implementation", label: "Rendering" }, { id: "results", label: "Efficiency" }],
    "luma":             [{ id: "overview", label: "Overview" }, { id: "design", label: "Interface" }, { id: "implementation", label: "Intelligence" }, { id: "results", label: "Integration" }],
    "resume-roaster":   [{ id: "overview", label: "Overview" }, { id: "design", label: "Interface" }, { id: "implementation", label: "Critique" }, { id: "results", label: "Trust" }],
    "acm-hackathon":    [{ id: "overview", label: "Overview" }, { id: "design", label: "Interface" }, { id: "implementation", label: "Flow" }, { id: "results", label: "Momentum" }],
    "craftr-docs":      [{ id: "overview", label: "Overview" }, { id: "design", label: "Canvas" }, { id: "implementation", label: "Structure" }, { id: "results", label: "Collab" }],
    "portfolios":       [{ id: "overview", label: "Overview" }, { id: "design", label: "Iterations" }, { id: "implementation", label: "Philosophy" }],
    "codedex-wrapped":  [{ id: "overview", label: "Overview" }, { id: "design", label: "Mascot" }, { id: "app-design", label: "App Design" }, { id: "implementation", label: "Impact" }],
  };

  const sections = sectionsBySlug[slug] ?? [
    { id: "overview", label: "Overview" },
    { id: "design", label: "Design" },
    { id: "implementation", label: "Implementation" },
    { id: "results", label: "Results" },
  ];

  useEffect(() => {
    // Show/hide sidebar based on scroll position
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = sections.map((s) => s.id);

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry closest to but above the top of the viewport
        let best: string | null = null;
        let bestTop = -Infinity;

        // Re-check all tracked sections on every callback
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            const top = el.getBoundingClientRect().top;
            if (top <= 180 && top > bestTop) {
              bestTop = top;
              best = id;
            }
          }
        });

        if (best) setActiveSection(best);
      },
      {
        rootMargin: "-10% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

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
