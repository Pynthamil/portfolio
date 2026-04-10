"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ImageDisplay from "./displays/ImageDisplay";

export default function SemanticPreview() {
  return (
    <div className="space-y-4">
      {/* 1. Intelligent Discourse (Thread) */}
      <ProjectPreviewSection
        title="Intelligent Discourse"
        description={`Semantic goes beyond text. It understands the underlying context, sentiment, and intent of every email thread, surface key signals and summarizing complex chains into actionable insights.`}
        bgColor="#EADDFE" // Soft Lavender
      >
        <ImageDisplay 
          src="/assets/semantic/mail-thread.svg" 
          alt="Semantic Email Thread" 
          height="800px"
        />
      </ProjectPreviewSection>

      {/* 2. Predictive Analytics (Stats) */}
      <ProjectPreviewSection
        title="Predictive Intelligence"
        description={`Data-driven inbox management. Semantic visualizes your email behavior, predicting reply urgency and surfacing potential blockers before they impact your workflow.`}
        bgColor="#ffffff"
      >
        <ImageDisplay 
          src="/assets/semantic/mail-intelligence(stats).svg" 
          alt="Semantic Intelligence Stats" 
          height="800px"
        />
      </ProjectPreviewSection>

      {/* 3. Focused Composition (Compose) */}
      <ProjectPreviewSection
        title="Cognitive Composer"
        description={`An AI-native writing environment. Semantic helps you draft responses that are perfectly aligned with your historical tone and current objectives.`}
        bgColor="#EADDFE" // Soft Lavender
      >
        <ImageDisplay 
          src="/assets/semantic/mail-compose.svg" 
          alt="Semantic Mail Compose" 
          height="800px"
        />
      </ProjectPreviewSection>
    </div>
  );
}
