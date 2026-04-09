"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TUIPreviewProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export default function TUIPreview({ title, description, imageSrc, alt }: TUIPreviewProps) {
  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">{title}</h2>
      <p className="project-detail-section-body mb-20">
        {description}
      </p>

      <div className="tui-tabs-container relative flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full flex items-center justify-center p-10"
        >
          <Image
            src={imageSrc}
            alt={alt}
            width={1000}
            height={800}
            style={{ width: 'auto', height: '90%' }}
            className="object-contain object-center rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
