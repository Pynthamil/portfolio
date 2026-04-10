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
}

export default function BlogPreview({
  title,
  description,
  imageSrc,
  alt,
  bgColor = "#E6E6FA", // Lavendar theme
}: BlogPreviewProps) {
  return (
    <ProjectPreviewSection
      title={title}
      description={description}
      bgColor={bgColor}
      containerClassName="p-10 md:p-20 lg:p-32 h-[600px]"
    >
      <div className="relative w-[85%] h-[95%] max-w-[800px] flex items-center justify-center">
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
