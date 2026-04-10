"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import StackedDisplay from "./displays/StackedDisplay";

export default function TUIStackedPreview() {
  const cards = [
    { id: 4, title: "Soft White", image: "/assets/tui/wikipedia-white.svg" },
    { id: 3, title: "Mystic Purple", image: "/assets/tui/wikipedia-purple.svg" },
    { id: 2, title: "Ocean Blue", image: "/assets/tui/wikipedia-blue.svg" },
    { id: 1, title: "Emerald Green", image: "/assets/tui/wikipedia-results.svg" },
  ];

  return (
    <ProjectPreviewSection
      title="Different color/theme options"
      description="Personalization is at the core of the Terminal Browser. Choose from a variety of carefully curated themes that adapt to your workflow."
      bgColor="#BFFFA1"
      containerClassName="items-end pb-32 md:pb-60"
    >
      <StackedDisplay cards={cards} height="400px" />
    </ProjectPreviewSection>
  );
}
