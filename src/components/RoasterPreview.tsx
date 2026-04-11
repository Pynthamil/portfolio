"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import Image from "next/image";

export default function RoasterPreview() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 mt-8 md:mt-12">
      {/* 1. Roastr Banner */}
      <div className="w-full flex justify-center">
        <Image
          src="/assets/roaster/roastr-banner.svg"
          alt="Resume Roaster Banner Interface"
          width={1200}
          height={900}
          className="w-full max-w-[1000px] h-auto object-contain object-center drop-shadow-sm rounded-[24px]"
          priority
        />
      </div>

      {/* 2. Menu Search */}
      <ProjectPreviewSection
        title="Immediate Navigation"
        description={`Command-K style search brings instant access. Pull up recent resume roasts, toggle preferences, or trigger a new analysis without losing context.`}
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-br from-[#FFEAE0] via-[#FFF6F0] to-[#FFD6C2]"
      >
        <div className="relative w-[85%] sm:w-[70%] md:w-[60%] max-w-[550px] flex items-center justify-center">
          <Image
            src="/assets/roaster/menu-search.svg"
            alt="Resume Roaster Menu Search"
            width={800}
            height={700}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>
    </div>
  );
}
