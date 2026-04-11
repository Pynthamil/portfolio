"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";

interface BlogPreviewProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  bgColor?: string;
  childrenBackground?: React.ReactNode;
}

export default function BlogPreview({
  title,
  description,
  imageSrc,
  alt,
  bgColor = "#E6E6FA", // Lavendar theme
  childrenBackground,
}: BlogPreviewProps) {
  return (
    <ProjectPreviewSection
      title={title}
      description={description}
      bgColor={bgColor}
      containerClassName="p-10 md:p-20 lg:p-32 h-[600px] overflow-hidden relative"
    >
      {childrenBackground}
      <div className="relative z-10 w-[85%] h-[95%] max-w-[800px] flex items-center justify-center">
        <Image
          src={imageSrc}
          alt={alt}
          width={1000}
          height={900}
          className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          priority
        />
      </div>
    </ProjectPreviewSection>
  );
}
