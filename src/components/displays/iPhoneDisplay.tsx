"use client";

import React from "react";
import IPhoneMockup from "../IPhoneMockup";
import { cn } from "@/lib/utils";

interface IPhoneDisplayProps {
  children: React.ReactNode;
  height?: string;
}

/**
 * iPhoneDisplay - Specialized display for showing content inside an iPhone mockup.
 */
export default function IPhoneDisplay({ children, height = "750px" }: IPhoneDisplayProps) {
  return (
    <div className={cn("flex justify-center items-center w-full", height && `h-[${height}]`)} style={{ height }}>
      <IPhoneMockup>
        {children}
      </IPhoneMockup>
    </div>
  );
}
