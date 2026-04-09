"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectPreviewProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  bgColor?: string; // Optinal background color, defaults to neutral shade
}

/**
 * ProjectPreview - A reusable preview component for all project pages.
 * High-fidelity structure with customizable background and assets.
 */
export default function ProjectPreview({ 
  title, 
  description, 
  imageSrc, 
  alt, 
  bgColor = "#f5f5f7" 
}: ProjectPreviewProps) {
  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">{title}</h2>
      <p className="project-detail-section-body !mb-12">
        {description}
      </p>

      {/* 
          Main Container: 
          Preserves the structural styles of 'tui-tabs-container'
          while allowing for dynamic background colors.
      */}
      <div 
        className="tui-tabs-container relative flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center p-10"
        >
          <Image
            src={imageSrc || "/assets/tui/tui-default.svg"}
            alt={alt}
            width={1000}
            height={800}
            style={{ width: 'auto', height: '90%' }}
            className="object-contain object-center"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}
