"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Gamepad2, Award, Zap, Code, Shield } from "lucide-react";

type Slide = {
  id: number;
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  gradient: string;
  badge: string;
  content: React.ReactNode;
};

export default function CodedexWrappedPreview() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [coinInserted, setCoinInserted] = useState(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "XP & Activity recap",
      icon: Award,
      color: "#FF007F",
      gradient: "from-pink-500 via-purple-600 to-indigo-700",
      badge: "LEVEL 42 REACHED",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-pink-500/20 border border-pink-400 flex items-center justify-center mb-6 text-pink-400"
          >
            <Award size={36} />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-pink-400 font-bold mb-2">Total developer score</span>
          <h3 className="text-4xl font-extrabold tracking-tight font-mono mb-4 text-white">45,280 XP</h3>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            You completed 1,248 tasks, earned 18 achievements, and ranked in the top 3% of global contributors! 🏆
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "Daily streak stats",
      icon: Zap,
      color: "#FFB000",
      gradient: "from-amber-500 to-rose-600",
      badge: "STREAK MASTER",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400 flex items-center justify-center mb-6 text-amber-400"
          >
            <Zap size={36} />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-2">Longest coding streak</span>
          <h3 className="text-4xl font-extrabold tracking-tight font-mono mb-4 text-white">124 DAYS</h3>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            Your most productive time was around 2:17 AM. A true night owl! 🦉 Keep that green grid active!
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: "Top language share",
      icon: Code,
      color: "#00E5FF",
      gradient: "from-cyan-500 to-blue-600",
      badge: "STACK ARCHITECT",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center mb-6 text-cyan-400"
          >
            <Code size={36} />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-2">Primary tech stack</span>
          <h3 className="text-4xl font-extrabold tracking-tight font-mono mb-4 text-white">TYPESCRIPT</h3>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            You committed 74% of code in TypeScript and React 19, followed by 18% in Node.js pipelines. Type safety secured! 🛡️
          </p>
        </div>
      )
    },
    {
      id: 4,
      title: "Your developer archetype",
      icon: Shield,
      color: "#A855F7",
      gradient: "from-purple-500 to-pink-600",
      badge: "ARCHETYPE UNLOCKED",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-16 rounded-2xl bg-purple-500/20 border border-purple-400 flex items-center justify-center mb-6 text-purple-400"
          >
            <Shield size={36} />
          </motion.div>
          <span className="text-xs uppercase tracking-widest text-purple-400 font-bold mb-2">Coding Persona</span>
          <h3 className="text-4.5xl font-extrabold tracking-tight font-mono mb-4 text-white">THE ARCHITECT</h3>
          <p className="text-sm text-neutral-400 max-w-xs leading-relaxed">
            Focused on highly detailed structural frameworks, modularity, and pixel-perfect interface animations. 📐
          </p>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="w-full max-w-[500px] aspect-[9/16] max-h-[750px] bg-neutral-950 border-4 border-neutral-800 rounded-[40px] shadow-3xl relative overflow-hidden flex flex-col justify-between p-6 mx-auto my-12 text-white">
      {/* Decorative Arcade Top Marquee */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-2xl border-x border-b border-neutral-800 flex items-center justify-center z-20">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-1.5" />
        <span className="text-[9px] font-bold tracking-widest text-neutral-400 font-mono">ARCADE CABINET v1.0</span>
      </div>

      {!coinInserted ? (
        /* Coin Insertion Start Screen */
        <div className="flex-1 flex flex-col items-center justify-center text-center p-6 z-10">
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-pink-500 mb-6 drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]"
          >
            <Gamepad2 size={64} />
          </motion.div>
          <h2 className="text-3xl font-extrabold font-mono tracking-wider mb-4 uppercase bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            CODÉDEX WRAPPED
          </h2>
          <p className="text-xs text-neutral-500 max-w-[240px] leading-relaxed mb-12">
            Click the button below to insert coin and reveal your annual developer wrap.
          </p>

          <button
            onClick={() => {
              setCoinInserted(true);
            }}
            className="px-8 py-3.5 rounded-full bg-pink-500 text-neutral-950 font-bold uppercase tracking-wider text-xs transition-transform active:scale-95 shadow-lg shadow-pink-500/30 hover:bg-pink-400"
          >
            INSERT COIN 🪙
          </button>
        </div>
      ) : (
        /* Main Slideshow */
        <>
          {/* Card Top Information */}
          <div className="flex justify-between items-center mt-6 z-10">
            <span className="text-[10px] font-bold tracking-widest font-mono text-neutral-500">
              SLIDE {currentSlide + 1} OF {slides.length}
            </span>
            <div className="bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wide uppercase text-neutral-300">
              {slides[currentSlide].badge}
            </div>
          </div>

          {/* Sliding Content Container */}
          <div className="flex-1 my-6 relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="w-full h-[90%] rounded-3xl bg-neutral-900 border border-neutral-800/60 p-6 flex flex-col justify-center relative overflow-hidden shadow-inner"
              >
                {/* Background colored blur dot specific to card */}
                <div
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-[60px] pointer-events-none opacity-40 transition-all duration-300"
                  style={{ background: slides[currentSlide].color }}
                />

                {slides[currentSlide].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Panel */}
          <div className="flex flex-col gap-4 pb-4 z-10">
            {/* Progress indicators */}
            <div className="flex gap-1.5 justify-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-6 bg-pink-500" : "w-1.5 bg-neutral-800"
                  }`}
                />
              ))}
            </div>

            {/* Arrow keys panel */}
            <div className="flex justify-between items-center bg-neutral-900/60 border border-neutral-800/40 rounded-full p-2">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
              >
                <ArrowLeft size={16} />
              </button>
              <span className="text-[10px] font-bold font-mono tracking-widest text-neutral-500 uppercase">
                {currentSlide === slides.length - 1 ? "FINISH DECK" : "NAVIGATE STATS"}
              </span>
              <button
                onClick={handleNext}
                disabled={currentSlide === slides.length - 1}
                className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-all duration-200"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </>
      )}

      {/* Retro cabinet bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />
    </div>
  );
}
