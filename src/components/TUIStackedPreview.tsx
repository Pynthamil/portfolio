"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

export default function TUIStackedPreview() {
  const cards = [
    { id: "emerald", title: "Emerald Green", image: "/assets/tui/wikipedia-results.svg" },
    { id: "blue", title: "Ocean Blue", image: "/assets/tui/wikipedia-blue.svg" },
    { id: "purple", title: "Mystic Purple", image: "/assets/tui/wikipedia-purple.svg" },
    { id: "white", title: "Soft White", image: "/assets/tui/wikipedia-white.svg" },
  ];

  return (
    <ProjectPreviewSection
      title="Adaptive Theme Ecosystem"
      description="Personalization is core to the terminal experience. The system proposes a variety of high-contrast, carefully curated themes designed to adapt to specific developer environments and creative workflows."
      bgColor="transparent"
      containerClassName="p-0 overflow-hidden relative"
    >
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, transparent 60%), linear-gradient(135deg, #F7FEE7 0%, #BFFFA1 50%, #D9F99D 100%)" 
        }} 
      />
      <div className="relative z-10 w-full h-[400px] md:h-[700px] [&_.scroll-stack-inner]:!px-2 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
        <ScrollStack
          itemDistance={100}
          itemScale={0.02}
          itemStackDistance={45}
          stackPosition="15%"
          baseScale={0.92}
        >
          {cards.map((card) => (
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
  );
}
