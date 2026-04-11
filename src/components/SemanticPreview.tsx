"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import Image from "next/image";

export default function SemanticPreview() {
  return (
    <div className="space-y-4">
      {/* 1. Intelligent Discourse (Thread) */}
      <ProjectPreviewSection
        title="Intelligent Discourse"
        description="The proposal imagines an interface that goes beyond text to understand underlying context and sentiment. The design is intended to surface key signals and summarize complex threads into actionable insights, helping users maintain continuity across long conversations."
        bgColor="#EADDFE" // Soft Lavender
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px]"
      >
        <div className="relative w-[85%] h-[95%] max-w-[800px] flex items-center justify-center">
          <Image
            src="/assets/semantic/mail-thread.svg"
            alt="Semantic Email Thread"
            width={1000}
            height={900}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 2. Predictive Analytics (Stats) */}
      <ProjectPreviewSection
        title="Predictive Intelligence"
        description="Inbox management designed around prioritization. The concept proposes visualizing behavior to predict reply urgency, aiming to surface potential blockers before they impact flow. This design problem focuses on communicating confidence levels to the user without overwhelming the interface."
        bgColor="#EADDFE" // Soft Lavender
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px]"
      >
        <div className="relative w-[85%] h-[95%] max-w-[800px] flex items-center justify-center">
          <Image
            src="/assets/semantic/mail-intelligence(stats).svg"
            alt="Semantic Intelligence Stats"
            width={1000}
            height={900}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 3. Focused Composition (Compose) */}
      <ProjectPreviewSection
        title="Cognitive Composer"
        description="An AI-native writing environment conceptualized to align with user tone. The design aims to support drafting responses through calibrated personalization, solving the trust design problem inherent in automated communication."
        bgColor="#EADDFE" // Soft Lavender
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px]"
      >
        <div className="relative w-[85%] h-[95%] max-w-[800px] flex items-center justify-center">
          <Image
            src="/assets/semantic/mail-compose.svg"
            alt="Semantic Mail Compose"
            width={1000}
            height={900}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>
    </div>
  );
}
