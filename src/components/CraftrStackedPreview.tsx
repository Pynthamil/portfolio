"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

interface CraftrStackedPreviewProps {
  bgColor?: string;
}

export default function CraftrStackedPreview({ bgColor = "#FFFDE7" }: CraftrStackedPreviewProps) {
  const cards = [
    { id: "1", image: "/assets/craftr/pink-qb.svg" },
    { id: "2", image: "/assets/craftr/orange-qb.svg" },
    { id: "3", image: "/assets/craftr/green-qb.svg" },
    { id: "4", image: "/assets/craftr/red-qb.svg" },
  ];

  return (
    <ProjectPreviewSection
      title="Dynamic Element Blocks"
      description="The proposal introduces a modular mental model for content insertion. Through a command-driven system, the design aims to make sophisticated formatting discoverable and immediate, aiming to reduce the cognitive load of managing multiple toolsets."
      bgColor={bgColor}
      containerClassName="p-0 overflow-hidden relative"
    >
      {/* Container framing the ScrollStack */}
      <div className="w-full h-[300px] md:h-[450px] [&_.scroll-stack-inner]:!px-4 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
        <ScrollStack
          itemDistance={80}
          itemScale={0.02}
          itemStackDistance={40}
          stackPosition="10%"
          baseScale={0.95}
        >
          {cards.map((card) => (
            <ScrollStackItem
              key={card.id}
              itemClassName="!h-auto w-full max-w-[685px] mx-auto !p-0 !border-0 !shadow-none flex justify-center items-center"
            >
              <Image
                src={card.image}
                alt={`Quick Block ${card.id}`}
                width={685}
                height={173}
                className="w-full h-auto rounded-[20px]"
                priority={card.id === "1"}
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </ProjectPreviewSection>
  );
}
