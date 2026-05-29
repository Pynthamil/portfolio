"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";

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
      containerClassName="p-0 overflow-hidden relative w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-col items-center w-full">
            <img
              src={card.image}
              alt={card.title}
              className={`w-full h-auto rounded-[24px] hover:scale-[1.02] transition-transform duration-300 ${
                card.id === "white" ? "border border-gray-200" : ""
              }`}
            />
            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-4">{card.title}</span>
          </div>
        ))}
      </div>
    </ProjectPreviewSection>
  );
}
