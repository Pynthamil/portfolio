"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TUITabSwitcher() {
  const [activeTab, setActiveTab] = useState<"wiki" | "google">("google");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setActiveTab("wiki");
      } else if (e.key === "ArrowDown") {
        setActiveTab("google");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">Multi-Tab Experience</h2>
      <p className="project-detail-section-body !mb-12">
        The browser handles multiple simultaneous sessions with ease. Use the
        <span className="font-bold text-[#BFFFA1]"> ↑ Up</span> and
        <span className="font-bold text-[#BFFFA1]"> ↓ Down</span> arrow keys to
        switch between open tabs in the preview below.
      </p>

      <div className="tui-tabs-container group relative focus:outline-none">
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.99, y: activeTab === "wiki" ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.01, y: activeTab === "wiki" ? -10 : 10 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="w-full h-full absolute inset-0 flex items-center justify-center p-10"
          >
            <Image
              src={activeTab === "wiki" ? "/assets/tui/wikipedia.svg" : "/assets/tui/google.svg"}
              alt={`${activeTab} tab`}
              className="object-contain object-center rounded-2xl shadow-2xl"
              priority
              width={1000}
              height={800}
              style={{ width: 'auto', height: '90%' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Interaction Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="bg-black/90 backdrop-blur-md text-[#BFFFA1] text-[12px] font-bold px-5 py-2.5 rounded-full border border-[#BFFFA1]/20 flex items-center gap-3 shadow-xl uppercase tracking-widest">
            <div className="flex gap-1">
              <span className="bg-[#BFFFA1] text-black px-1.5 py-0.5 rounded text-[10px]">↑</span>
              <span className="bg-[#BFFFA1] text-black px-1.5 py-0.5 rounded text-[10px]">↓</span>
            </div>
            Use Arrows to switch tabs
          </div>
        </div>
      </div>
    </div>
  );
}
