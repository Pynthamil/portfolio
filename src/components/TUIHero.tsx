"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TUIHeroProps {
  bgColor?: string;
}

export default function TUIHero({ bgColor = "transparent" }: TUIHeroProps) {
  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">Visual Identity</h2>
      <p className="project-detail-section-body !mb-12">
        The Terminal Browser explores a strictly minimalist aesthetic, seeking to
        combine retro terminal vibes with modern interaction patterns.
      </p>

      <div className="w-full flex justify-center mt-8">
        <img 
          src="/assets/tui/tui-default.svg" 
          alt="Terminal Browser TUI" 
          className="w-full h-auto rounded-[24px]"
          style={{ maxWidth: "960px", filter: "drop-shadow(0 12px 36px rgba(0, 0, 0, 0.05))" }}
        />
      </div>
    </div>
  );
}
