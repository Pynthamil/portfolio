"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import Image from "next/image";

export default function RoasterPreview() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-32 mt-8 md:mt-12">
      
      {/* 1. Dashboard */}
      <ProjectPreviewSection
        title="The Roast Report"
        description="A structured evaluation layer translates resume content into measurable signals. The report presents clarity, impact strength, and ATS compatibility through digestible scoring systems. Rather than vague advice, the interface highlights what is working, what is not, and why. Each insight is framed to support quick decision-making and immediate iteration."
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-bl from-[#FFDBB4] to-[#FFECD5]"
      >
        <div className="relative w-[95%] max-w-[900px] flex items-center justify-center">
          <Image
            src="/assets/roaster/dashboard.svg"
            alt="Resume Roaster Dashboard"
            width={1200}
            height={900}
            priority
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 2. Annotation Critique */}
      <ProjectPreviewSection
        title="Surgical Critique"
        description="The annotation system provides contextual feedback directly on the document surface. Instead of separating critique from content, comments appear inline to preserve reading flow and reduce cognitive switching. Each annotation identifies weak phrasing, missing specificity, or structural inconsistencies. Feedback is intentionally concise to encourage rapid scanning and faster revision cycles."
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-tl from-[#FFDBB4] to-[#FFECD5]"
      >
        <div className="relative w-[95%] max-w-[850px] flex items-center justify-center">
          <Image
            src="/assets/roaster/annotation.svg"
            alt="Resume Roaster Annotation Critique"
            width={1100}
            height={800}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 3. Detailed Analysis */}
      <ProjectPreviewSection
        title="Granular Analytics"
        description="Beyond surface-level feedback, the analyzer interprets resume structure as data. Metrics such as readability distribution, keyword relevance, and impact density help users understand how their experience is perceived algorithmically. These signals help translate subjective writing quality into observable patterns that can be improved iteratively."
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-r from-[#FFDBB4] to-[#FFECD5]"
      >
        <div className="relative w-[95%] max-w-[850px] flex items-center justify-center">
          <Image
            src="/assets/roaster/analysis-output.svg"
            alt="Resume Roaster Deep Analysis"
            width={1100}
            height={800}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 4. Uploading Interface */}
      <ProjectPreviewSection
        title="Frictionless Upload"
        description="The upload interaction is designed to reduce hesitation. Users can drag and drop a PDF and immediately receive structured feedback. The system parses document hierarchy, extracts semantic groupings, and prepares the content for critique within seconds. Reducing friction at this stage improves completion rates and encourages experimentation."
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-br from-[#FFDBB4] to-[#FFECD5]"
      >
        <div className="relative w-[85%] sm:w-[70%] md:w-[60%] max-w-[550px] flex items-center justify-center">
          <Image
            src="/assets/roaster/uploading.svg"
            alt="Resume Roaster File Upload"
            width={800}
            height={700}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 5. Menu Search */}
      <ProjectPreviewSection
        title="Immediate Navigation"
        description="Command-style search enables fast interaction across the product surface. Users can quickly switch between analyses, revisit past feedback, or initiate new roasts without losing context. The navigation pattern prioritizes speed, familiarity, and minimal interface noise."
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-tr from-[#FFDBB4] to-[#FFECD5]"
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
