"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Image from "next/image";

export default function PortfolioPreview() {
  const cards = [
    { id: "1", image: "/assets/portfolio/pa-1.svg" },
    { id: "2", image: "/assets/portfolio/pa-2.svg" },
  ];

  return (
    <ProjectPreviewSection
      title="Design Archives"
      description="A curated selection of previous portfolio iterations, exploring different typographic systems and layout constraints. Each version represents a snapshot of design thinking at various stages of my practice."
      bgColor="#F3F3F5"
      containerClassName="p-0 overflow-hidden relative"
    >
      <div className="w-full h-[300px] md:h-[600px] [&_.scroll-stack-inner]:!px-2 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
        <ScrollStack
          itemDistance={100}
          itemScale={0.02}
          itemStackDistance={40}
          stackPosition="10%"
          baseScale={0.95}
        >
          {cards.map((card) => (
            <ScrollStackItem
              key={card.id}
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
  );
}
