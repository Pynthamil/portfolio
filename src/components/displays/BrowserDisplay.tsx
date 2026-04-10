"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrowserDisplayProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

/**
 * BrowserDisplay - A premium "window" or "browser" style chassis.
 * Provides a clean white background, soft shadow, and thick rounded corners.
 */
export default function BrowserDisplay({
  children,
  className,
  padding = "p-6 md:p-10"
}: BrowserDisplayProps) {
  return (
    <div className={cn(
      "w-full max-w-[1000px] bg-white rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-black/5 mx-auto",
      padding,
      className
    )}>
      <div className="relative w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
