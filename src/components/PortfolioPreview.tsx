"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import Image from "next/image";

export default function PortfolioPreview() {
  const archiveCards = [
    { id: "1", image: "/assets/portfolio/pa-1.svg", title: "Contact Me" },
    { id: "2", image: "/assets/portfolio/pa-2.svg", title: "Projects" },
  ];

  const v2Cards = [
    { id: "projects", image: "/assets/portfolio/p2-projects.svg", title: "Projects Grid" },
    { id: "about", image: "/assets/portfolio/p2-about.svg", title: "About Page" },
    { id: "skills", image: "/assets/portfolio/p2-skills.svg", title: "Skills Map" },
    { id: "contact", image: "/assets/portfolio/p2-contact.svg", title: "Contact Flow" },
  ];

  const v3Cards = [
    { id: "home", image: "/assets/portfolio/p3-home.svg", title: "Landing Page" },
    { id: "projects", image: "/assets/portfolio/p3-projects.svg", title: "Project Showcase" },
    { id: "education", image: "/assets/portfolio/p3-education.svg", title: "Education Map" },
    { id: "contact", image: "/assets/portfolio/p3-contact.svg", title: "Contact Interface" },
  ];

  return (
    <div className="space-y-4">
      {/* 1. v1 Expressionist Layer */}
      <ProjectPreviewSection
        title="v1 Expressionist Layer"
        description=""
        containerClassName="p-0 overflow-hidden relative rounded-none"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {v3Cards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden aspect-[4/3]"
              style={{ minHeight: 260 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </ProjectPreviewSection>

      {/* 2. v2 Terminal Directive */}
      <ProjectPreviewSection
        title="v2 Terminal Directive"
        description=""
        containerClassName="p-0 overflow-hidden relative rounded-none"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {v2Cards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden aspect-[4/3]"
              style={{ minHeight: 260 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </ProjectPreviewSection>

      {/* 3. v3 Speculative Fragments */}
      <ProjectPreviewSection
        title="v3 Speculative Fragments"
        description=""
        containerClassName="p-0 overflow-hidden relative rounded-none"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {archiveCards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden aspect-[4/3]"
              style={{ minHeight: 260 }}
            >
              <img
                src={card.image}
                alt={`Archive ${card.id}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </ProjectPreviewSection>
    </div>
  );
}
