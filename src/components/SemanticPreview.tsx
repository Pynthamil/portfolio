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
        description={`Semantic goes beyond text. It understands the underlying context, sentiment, and intent of every email thread, surface key signals and summarizing complex chains into actionable insights.`}
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
        description={`Data-driven inbox management. Semantic visualizes your email behavior, predicting reply urgency and surfacing potential blockers before they impact your workflow.`}
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
        description={`An AI-native writing environment. Semantic helps you draft responses that are perfectly aligned with your historical tone and current objectives.`}
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
