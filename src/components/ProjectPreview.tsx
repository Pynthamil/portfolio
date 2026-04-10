"use client";

import ProjectPreviewSection from "./ProjectPreviewSection";
import ImageDisplay from "./displays/ImageDisplay";

interface ProjectPreviewProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  bgColor?: string;
}

/**
 * ProjectPreview - A legacy wrapper refactored to use the new modular system.
 */
export default function ProjectPreview({ 
  title, 
  description, 
  imageSrc, 
  alt, 
  bgColor = "#fafafc" 
}: ProjectPreviewProps) {
  return (
    <ProjectPreviewSection
      title={title}
      description={description}
      bgColor={bgColor}
    >
      <ImageDisplay src={imageSrc} alt={alt} />
    </ProjectPreviewSection>
  );
}
