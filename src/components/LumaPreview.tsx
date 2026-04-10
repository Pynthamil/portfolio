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
        title="AI-Native Triage"
        description={`Designed for AI from the ground up. Luma doesn't just notify; it analyzes, summarizes, and recommends actions in a familiar chat interface.\n\n(Note: The prototype below is interactive. Try typing "Hi bro" to see it in action.)`}
        bgColor="#fafafc"
      >
        <IPhoneDisplay height="820px" mockupHeight="780px">
          <LumaChat />
        </IPhoneDisplay>
      </ProjectPreviewSection>

      {/* 2. Contextual Analysis (Resolution Flow) */}
      <ProjectPreviewSection
        title="Deep-Dive Resolution"
        description={`Going beyond the initial alert. Luma provides deep context into the error's root cause, paired with interactive notes to document the resolution process.`}
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
        description={`A high-fidelity light mode designed for maximum clarity in high-pressure environments. Every detail is optimized for readability and quick decision-making.`}
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
