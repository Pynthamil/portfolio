"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";

interface BlogStackedPreviewProps {
  bgColor?: string;
}

export default function BlogStackedPreview({ bgColor = "transparent" }: BlogStackedPreviewProps) {
  const cards = [
    { id: "1", image: "/assets/blog/banner1.webp" },
    { id: "2", image: "/assets/blog/banner2.webp" },
    { id: "3", image: "/assets/blog/banner3.webp" },
    { id: "4", image: "/assets/blog/banner4.webp" },
  ];

  return (
    <ProjectPreviewSection
      title="Dynamic Article Covers"
      description="A matrix of uniquely designed vibrant covers crafted to capture attention and set the energetic mood."
      bgColor={bgColor}
      containerClassName="p-0 overflow-hidden relative w-full"
      className="project-sub-section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-full aspect-[1241/725] rounded-[24px] overflow-hidden relative shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300"
          >
            <Image
              src={card.image}
              alt={`Cover ${card.id}`}
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
              priority={card.id === "1"}
            />
          </div>
        ))}
      </div>
    </ProjectPreviewSection>
  );
}
