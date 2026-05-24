"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
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
        containerClassName="p-0 overflow-hidden relative"
      >
        <div className="relative z-10 w-full h-[300px] md:h-[600px] [&_.scroll-stack-inner]:!px-2 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
          <ScrollStack
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="10%"
            baseScale={0.95}
          >
            {v3Cards.map((card) => (
              <ScrollStackItem
                key={card.id}
                label={card.title}
                itemClassName="!h-auto w-full max-w-[1400px] mx-auto aspect-[4/3] md:aspect-video !p-0 !border-0 overflow-hidden rounded-md md:rounded-lg relative !shadow-none"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </ProjectPreviewSection>

      {/* 2. v2 Terminal Directive */}
      <ProjectPreviewSection
        title="v2 Terminal Directive"
        description=""
        containerClassName="p-0 overflow-hidden relative"
      >
        <div className="relative z-10 w-full h-[300px] md:h-[600px] [&_.scroll-stack-inner]:!px-2 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
          <ScrollStack
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="10%"
            baseScale={0.95}
          >
            {v2Cards.map((card) => (
              <ScrollStackItem
                key={card.id}
                label={card.title}
                itemClassName="!h-auto w-full max-w-[1400px] mx-auto aspect-[4/3] md:aspect-video !p-0 !border-0 overflow-hidden rounded-md md:rounded-lg relative !shadow-none"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </ProjectPreviewSection>

      {/* 3. v3 Speculative Fragments */}
      <ProjectPreviewSection
        title="v3 Speculative Fragments"
        description=""
        containerClassName="p-0 overflow-hidden relative"
      >
        <div className="relative z-10 w-full h-[300px] md:h-[600px] [&_.scroll-stack-inner]:!px-2 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
          <ScrollStack
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="10%"
            baseScale={0.95}
          >
            {archiveCards.map((card) => (
              <ScrollStackItem
                key={card.id}
                label={card.title}
                itemClassName="!h-auto w-full max-w-[1400px] mx-auto aspect-[4/3] md:aspect-video !p-0 !border-0 overflow-hidden rounded-md md:rounded-lg relative !shadow-none"
              >
                <Image
                  src={card.image}
                  alt={`Archive ${card.id}`}
                  fill
                  className="object-contain"
                  priority={card.id === "1"}
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </ProjectPreviewSection>
    </div>
  );
}
