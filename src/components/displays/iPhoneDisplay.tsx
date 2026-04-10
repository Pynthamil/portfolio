"use client";

import React from "react";
import IPhoneMockup from "../IPhoneMockup";
import { cn } from "@/lib/utils";

interface IPhoneDisplayProps {
  children: React.ReactNode;
  height?: string; // Container height
  mockupHeight?: string; // Actual hardware mockup height
  className?: string;
}

/**
 * iPhoneDisplay - Specialized display for showing content inside an iPhone mockup.
 */
export default function IPhoneDisplay({ 
  children, 
  height = "750px", 
  mockupHeight = "719px",
  className 
}: IPhoneDisplayProps) {
  return (
    <div className={cn("flex justify-center items-center w-full", className)} style={{ height }}>
      <IPhoneMockup height={mockupHeight}>
        {children}
      </IPhoneMockup>
    </div>
  );
}
