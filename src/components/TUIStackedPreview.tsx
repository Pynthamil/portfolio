"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import StackedDisplay from "./displays/StackedDisplay";

interface TUIStackedPreviewProps {
  bgColor?: string;
}

export default function TUIStackedPreview({ bgColor = "#BFFFA1" }: TUIStackedPreviewProps) {
  const cards = [
    { id: 4, title: "Soft White", image: "/assets/tui/wikipedia-white.svg" },
    { id: 3, title: "Mystic Purple", image: "/assets/tui/wikipedia-purple.svg" },
    { id: 2, title: "Ocean Blue", image: "/assets/tui/wikipedia-blue.svg" },
    { id: 1, title: "Emerald Green", image: "/assets/tui/wikipedia-results.svg" },
  ];

  return (
    <ProjectPreviewSection
      title="Theme Customization"
      description="Personalization is intended to be core to the Experience. The concept proposes a variety of carefully curated themes designed to adapt to specific developer workflows."
      bgColor={bgColor}
      containerClassName="items-end pb-32 md:pb-60"
    >
      <StackedDisplay cards={cards} height="700px" />
    </ProjectPreviewSection>
  );
}
