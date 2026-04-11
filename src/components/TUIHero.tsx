"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TUIHeroProps {
  bgColor?: string;
}

export default function TUIHero({ bgColor = "#BFFFA1" }: TUIHeroProps) {
  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">Visual Identity</h2>
      <p className="project-detail-section-body !mb-12">
        The Terminal Browser explores a strictly minimalist aesthetic, seeking to
        combine retro terminal vibes with modern interaction patterns. Hover over
        the container below to imagine the interface.
      </p>

      <motion.div
        className="tui-hero-container relative flex justify-center items-end overflow-hidden cursor-pointer rounded-[40px] border border-black/5 shadow-sm"
        style={{ height: '480px', backgroundColor: bgColor }}
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="tui-terminal-wrapper relative w-[90%] h-[85%] rounded-t-[24px] overflow-hidden"
          variants={{
            initial: { y: 60 },
            hover: { y: 10 }
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
        >
          <Image
            src="/assets/tui/tui-default.svg"
            alt="Terminal Browser TUI"
            fill
            style={{ objectFit: "contain", objectPosition: "top center" }}
            priority
            className="shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
