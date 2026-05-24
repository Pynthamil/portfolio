"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Gamepad2, Award, Zap, Shield, Home, Compass, User } from "lucide-react";

type FeatureItem = {
  id: number;
  title: string;
  description: string;
  badge: string;
};

export default function CodedexFeaturesShowcase() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const features: FeatureItem[] = [
    {
      id: 0,
      title: "Interactive Arcade Wrapped",
      description: "A Spotify-wrapped style retro arcade recap. Students can replay their yearly learning milestones, check XP scorecards, and review key commits inside a virtual arcade cabinet interface.",
      badge: "RETRO ARCADE"
    },
    {
      id: 1,
      title: "Quest & Progress Tracking",
      description: "Visualizes active coding quests, completed stages, and curriculum lessons. Features a responsive progression bar, stars counter, and daily lesson guides to keep learners on track.",
      badge: "LEARNING QUESTS"
    },
    {
      id: 2,
      title: "Developer Archetype",
      description: "Analyzes learning patterns and stack commits to unlock a custom developer persona (like 'The Architect'). Includes a high-contrast shared card showing off your developer score.",
      badge: "DEVELOPER PERSONA"
    }
  ];

  return (
    <div style={{ marginTop: "60px", marginBottom: "80px" }}>
      <h2 
        style={{ 
          fontSize: "28px", 
          fontWeight: "600", 
          letterSpacing: "-0.02em", 
          color: "#1d1d1f", 
          marginBottom: "24px"
        }}
      >
        Best features
      </h2>

      {/* Main Container */}
      <div 
        className="w-full bg-[#f5f5f7] border border-black/[0.04] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row gap-10 md:gap-16 items-center justify-between"
      >
        {/* Left Side: Active Feature Graphic (No Extra Wrapper Container) */}
        <div className="w-full md:w-[320px] flex justify-center items-center flex-shrink-0">
          <img
            src="/assets/codedex/Screen1.svg"
            alt="Codédex Wrapped Screen"
            className="w-full h-auto max-w-[280px]"
          />
        </div>

        {/* Right Side: Accordion Dropdowns styled like the About page */}
        <div className="flex-grow flex flex-col gap-6 w-full">
          {features.map((feature, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={feature.id}
                onClick={() => setActiveIndex(isOpen ? -1 : index)}
                className={`accordion-item ${isOpen ? "open" : ""} cursor-pointer select-none`}
                style={{ borderRadius: "24px" }}
              >
                <div className="accordion-header" style={{ padding: "36px 40px", background: "none", border: "none" }}>
                  <div className="accordion-text">
                    <h3 className="accordion-title" style={{ fontSize: "22px" }}>{feature.title}</h3>
                  </div>

                  {/* Accordion toggle matching the About page circle */}
                  <div className="accordion-toggle" style={{ width: "48px", height: "48px" }}>
                    <ChevronDown 
                      size={20} 
                      className="transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
                      }}
                    />
                  </div>
                </div>

                {/* Smooth Heights Transition */}
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden w-full text-left"
                >
                  <div className="accordion-content" style={{ padding: "0 40px 36px 40px" }}>
                    <p className="text-base text-[#515154] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
