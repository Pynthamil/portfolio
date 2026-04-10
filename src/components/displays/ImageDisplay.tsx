"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageDisplayProps {
  src: string;
  alt: string;
  className?: string;
  height?: string;
}

/**
 * ImageDisplay - Specialized display for showing a simple image preview.
 */
export default function ImageDisplay({ src, alt, className, height = "600px" }: ImageDisplayProps) {
  return (
    <div className={cn("relative w-full flex items-center justify-center p-10", height && `h-[${height}]`)} style={{ height }}>
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={800}
        style={{ width: 'auto', height: '90%' }}
        className={cn("object-contain object-center", className)}
        priority
      />
    </div>
  );
}
