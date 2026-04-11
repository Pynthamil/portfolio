"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

interface SocialStackedSectionProps {
  slides: string[];
  title?: string;
  description?: string;
  themeColor?: string;
  aspectRatio?: string;
}

export default function SocialStackedSection({ 
  slides, 
  title = "Visual Narrative", 
  description = "A deep dive into the visual narrative and structural logic of this series.",
  themeColor = "#f5f5f7",
  aspectRatio = "1/1"
}: SocialStackedSectionProps) {
  if (slides.length === 0) return null;

  return (
    <ProjectPreviewSection
      title={title}
      description={description}
      bgColor={themeColor}
      containerClassName="p-0 overflow-hidden relative flex items-center justify-center"
    >
      {/* Frame the ScrollStack into a specific height like the Blog preview */}
      <div className="w-full h-[350px] md:h-[650px] [&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-20">
        <ScrollStack
          itemDistance={120}
          itemScale={0.02}
          itemStackDistance={40}
          stackPosition="10%"
          baseScale={0.95}
        >
          {slides.map((slide, idx) => (
            <ScrollStackItem
              key={idx}
              itemClassName="w-full !p-0 !border-0 bg-transparent flex justify-center !max-w-none"
            >
              {/* Internal Chassis that provides the height & centering */}
              <div 
                className={`relative overflow-hidden rounded-xl md:rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-500 ${aspectRatio !== "2/3" ? 'p-4 md:p-8' : 'p-0'}`}
                style={{ 
                  width: "100%",
                  maxWidth: aspectRatio === "2/3" ? "520px" : "620px",
                  aspectRatio: aspectRatio, 
                  minHeight: "1px",
                  background: `linear-gradient(135deg, ${themeColor}11, transparent)`
                }}
              >
                <Image
                  src={slide}
                  alt={`Slide ${idx + 2}`} 
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                  priority={idx === 0}
                />
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </ProjectPreviewSection>
  );
}
