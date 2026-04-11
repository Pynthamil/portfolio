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
        description="A comprehensive, honest breakdown of your resume's impact. Traverse through AI-graded metrics, flag ATS compatibility issues, and receive brutal but actionable advice on what to fix."
        bgColor="transparent"
        containerClassName="p-10 md:p-20 lg:p-32 h-[600px] bg-gradient-to-bl from-[#FFDBB4] to-[#FFECD5]"
      >
        <div className="relative w-[95%] max-w-[900px] flex items-center justify-center">
          <Image
            src="/assets/roaster/dashboard.svg"
            alt="Resume Roaster Dashboard"
            width={1200}
            height={900}
            className="object-contain object-center w-full h-auto drop-shadow-2xl rounded-xl md:rounded-[20px]"
          />
        </div>
      </ProjectPreviewSection>

      {/* 2. Annotation Critique */}
      <ProjectPreviewSection
        title="Surgical Critique"
        description="The AI goes line-by-line through your resume, highlighting specific areas for improvement. Every annotation is a targeted strike on weak phrasing, missing keywords, or layout inconsistencies."
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
        description="Get deep into the meta-data of your career. The analyzer generates a comprehensive breakdown of readability, impact metrics, and ATS-friendliness to ensure you stand out in the pile."
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
        description="Getting started is as simple as dropping a PDF. The analyzer immediately begins parsing the document, extracting your experience and locking in context for the critique."
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
        description={`Command-K style search brings instant access. Pull up recent resume roasts, toggle preferences, or trigger a new analysis without losing context.`}
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
