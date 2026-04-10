"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ProjectPreviewSectionProps {
  title: string;
  description: string;
  bgColor?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

/**
 * ProjectPreviewSection - A reusable wrapper for all project page interactive sections.
 * Handles the heading, description, and the standard rounded container logic.
 */
export default function ProjectPreviewSection({
  title,
  description,
  bgColor = "#fafafc",
  children,
  className,
  containerClassName,
}: ProjectPreviewSectionProps) {
  return (
    <div className={cn("project-detail-section mb-20", className)}>
      <h2 className="project-detail-section-title">{title}</h2>
      <p className="project-detail-section-body !mb-12 whitespace-pre-line">
        {description}
      </p>

      <div
        className={cn(
          "relative w-full rounded-[40px] border border-black/5 flex justify-center items-center shadow-sm overflow-hidden p-8 md:p-12 transition-colors duration-500",
          containerClassName
        )}
        style={{ backgroundColor: bgColor }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
