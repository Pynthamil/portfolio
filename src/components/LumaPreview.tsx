"use client";

import React from "react";
import Image from "next/image";
import ProjectPreviewSection from "./ProjectPreviewSection";
import IPhoneDisplay from "./displays/iPhoneDisplay";
import LumaChat from "./luma/LumaChat";

export default function LumaPreview() {
  return (
    <div className="space-y-4">
      {/* 1. Interactive AI Triage Flow */}
      <ProjectPreviewSection
        description="The proposal imagines an interface designed for AI-first analysis. Instead of presenting raw stack traces, the system is intended to propose summarized explanations and suggested actions within a familiar conversational interface, reducing the initial friction of incident response."
        bgColor="#fafafc"
      >
        <IPhoneDisplay height="820px" mockupHeight="780px">
          <Image 
            src="/assets/luma/Dashboard-green.svg" 
            alt="Luma Dashboard Concept" 
            fill 
            className="object-cover object-top"
          />
        </IPhoneDisplay>
      </ProjectPreviewSection>

      {/* 2. Contextual Analysis (Resolution Flow) */}
      <ProjectPreviewSection
        title="Deep-Dive Resolution"
        description="Designed to surface context beyond surface-level alerts. The concept proposes interactive notes that allow teams to document reasoning and maintain a shared understanding of root causes, aiming to build a centralized knowledge base for future resilience."
        bgColor="#ffffff"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full min-h-[850px]">
          <IPhoneDisplay height="820px" mockupHeight="780px" className="md:scale-[0.95] origin-top">
            <Image 
              src="/assets/luma/Error Detail - green.svg" 
              alt="Error Detail Green" 
              fill 
              className="object-cover object-top"
            />
          </IPhoneDisplay>
          <IPhoneDisplay height="820px" mockupHeight="780px" className="md:scale-[0.95] origin-top">
             <Image 
              src="/assets/luma/Error Notes - green.svg" 
              alt="Error Notes Green" 
              fill 
              className="object-cover object-top"
            />
          </IPhoneDisplay>
        </div>
      </ProjectPreviewSection>

      {/* 3. Clarity & Customization (White Variants) */}
      <ProjectPreviewSection
        title="Clarity & Contrast"
        description="High-fidelity light mode conceptualized for maximum readability. The layout hierarchy is intended to support quick scanning and decision-making during high-pressure incidents, prioritizing information density without overwhelming the user."
        bgColor="#fafafc"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full min-h-[850px]">
          <IPhoneDisplay height="820px" mockupHeight="780px" className="md:scale-[0.95] origin-top">
            <Image 
              src="/assets/luma/Error Detail - white.svg" 
              alt="Error Detail White" 
              fill 
              className="object-cover object-top"
            />
          </IPhoneDisplay>
          <IPhoneDisplay height="820px" mockupHeight="780px" className="md:scale-[0.95] origin-top">
             <Image 
              src="/assets/luma/Error Notes - white.svg" 
              alt="Error Notes White" 
              fill 
              className="object-cover object-top"
            />
          </IPhoneDisplay>
        </div>
      </ProjectPreviewSection>
    </div>
  );
}
