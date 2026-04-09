"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface IPhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
}

/**
 * IPhoneMockup - A high-fidelity, reusable iPhone 15 Pro style mockup frame.
 * Only builds the hardware chassis, leaving the screen area for children.
 */
export default function IPhoneMockup({ children, className }: IPhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto pointer-events-none select-none", className)}>
      {/* Outer Hardware Frame (Silver/Metallic) */}
      <div className="relative mx-auto border-gray-300 bg-gray-300 dark:border-gray-800 dark:bg-gray-800 border-[8px] rounded-[3rem] h-[719px] w-[360px] shadow-2xl">
        
        {/* Subtle Metallic Highlight Border */}
        <div className="absolute -inset-[2px] rounded-[3.1rem] border-2 border-white/50 pointer-events-none"></div>

        {/* Side Buttons - Left (Mute/Volume) */}
        <div className="absolute -left-[12px] top-[124px] w-[4px] h-[34px] bg-gray-400 rounded-l-sm border-l border-white/10 shadow-sm"></div> {/* Action/Mute */}
        <div className="absolute -left-[12px] top-[180px] w-[4px] h-[64px] bg-gray-400 rounded-l-sm border-l border-white/10 shadow-sm"></div> {/* Vol Up */}
        <div className="absolute -left-[12px] top-[260px] w-[4px] h-[64px] bg-gray-400 rounded-l-sm border-l border-white/10 shadow-sm"></div> {/* Vol Down */}

        {/* Side Buttons - Right (Power) */}
        <div className="absolute -right-[12px] top-[242px] w-[4px] h-[100px] bg-gray-400 rounded-r-sm border-r border-white/10 shadow-sm"></div>

        {/* Inner Black Bezel */}
        <div className="relative h-full w-full rounded-[2.5rem] bg-black overflow-hidden border-[4px] border-black shadow-inner">
          
          {/* Dynamic Island */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[116px] h-[32px] bg-black rounded-[20px] z-50 flex items-center justify-end px-4 gap-1.5 overflow-hidden">
            {/* Optional subtle lens reflections */}
            <div className="w-2.5 h-2.5 rounded-full bg-white/5 shadow-inner"></div>
          </div>

          {/* Screen Content Area (Placeholder) */}
          <div className="relative w-full h-full bg-white dark:bg-zinc-950 overflow-hidden rounded-[2.2rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
