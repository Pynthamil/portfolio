"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

interface BlogStackedPreviewProps {
  bgColor?: string;
}

export default function BlogStackedPreview({ bgColor = "#E6E6FA" }: BlogStackedPreviewProps) {
  const cards = [
    { id: "1", image: "/assets/blog/banner1.svg" },
    { id: "2", image: "/assets/blog/banner2.svg" },
    { id: "3", image: "/assets/blog/banner3.svg" },
    { id: "4", image: "/assets/blog/banner4.svg" },
  ];

  return (
    <ProjectPreviewSection
      title="Dynamic Article Covers"
      description="Scroll through the uniquely designed vibrant covers crafted to capture attention and set the energetic mood."
      bgColor={bgColor}
      containerClassName="p-0 overflow-hidden relative"
    >
      {/* We frame the ScrollStack into a specific viewport height so it scrolls within itself seamlessly */}
      <div className="w-full h-[300px] md:h-[600px] [&_.scroll-stack-inner]:!px-2 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
        <ScrollStack
          itemDistance={120}
          itemScale={0.02}
          itemStackDistance={40}
          stackPosition="10%"
          baseScale={0.95}
        >
          {cards.map((card) => (
            <ScrollStackItem
              key={card.id}
              itemClassName="!h-auto w-full max-w-[1400px] mx-auto aspect-[4/3] md:aspect-video !p-0 !border-0 overflow-hidden rounded-md md:rounded-lg relative shadow-[0_0_40px_rgba(0,0,0,0.15)]"
            >
              <Image
                src={card.image}
                alt={`Cover ${card.id}`}
                fill
                className="object-cover"
                priority={card.id === "1"}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </ProjectPreviewSection>
  );
}
