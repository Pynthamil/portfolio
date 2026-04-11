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

      {/* 2. Uploading Interface */}
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

      {/* 3. Menu Search */}
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
