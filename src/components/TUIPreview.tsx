"use client";

import ProjectPreviewSection from "./ProjectPreviewSection";
import ImageDisplay from "./displays/ImageDisplay";

interface TUIPreviewProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export default function TUIPreview({ title, description, imageSrc, alt }: TUIPreviewProps) {
  return (
    <ProjectPreviewSection title={title} description={description} bgColor="#fafafc">
      <ImageDisplay src={imageSrc} alt={alt} className="rounded-2xl shadow-2xl" />
    </ProjectPreviewSection>
  );
}
