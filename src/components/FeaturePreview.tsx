"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import BrowserDisplay from "./displays/BrowserDisplay";

interface FeaturePreviewProps {
  title: string;
  description: string;
  children: React.ReactNode;
  bgColor?: string;
  className?: string;
}

/**
 * FeaturePreview - A reusable section for showcasing project features.
 * Combines the ProjectPreviewSection with a BrowserDisplay chassis.
 */
export default function FeaturePreview({
  title,
  description,
  children,
  bgColor = "#fafafc",
  className,
}: FeaturePreviewProps) {
  return (
    <ProjectPreviewSection
      title={title}
      description={description}
      bgColor={bgColor}
      className={className}
    >
      <BrowserDisplay>
        {children}
      </BrowserDisplay>
    </ProjectPreviewSection>
  );
}
