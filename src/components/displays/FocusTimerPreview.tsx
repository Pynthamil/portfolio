"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Flame, Coffee, Terminal as TermIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FocusTimerPreview() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "System initialized. Select Focus or Break to begin.",
    "Mascot 'Sprout' is waiting for focus session... 🌱"
  ]);

  // Mascot expressions based on active/break/paused state
  // Mascot represented with premium CSS elements
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs((prev) => [`[${time}] ${message}`, ...prev.slice(0, 4)]);
  };

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer completed
            setIsActive(false);
            if (!isBreak) {
              setMinutes(5);
              setIsBreak(true);
              addLog("Focus session finished! Time for a short break. ☕");
            } else {
              setMinutes(25);
              setIsBreak(false);
              addLog("Break finished! Fuel up and let's get back to focus. ⚡");
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, seconds, minutes, isBreak]);

  const handleToggle = () => {
    if (!isActive) {
      addLog(isBreak ? "Break session started! Relax." : "Focus mode engaged. Coding stream active! 🚀");
    } else {
      addLog("Timer paused. Sprout is taking a nap... 💤");
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setMinutes(25);
    setSeconds(0);
    addLog("Timer reset to standard 25-minute focus session.");
  };

  const setMode = (breakMode: boolean) => {
    setIsActive(false);
    setIsBreak(breakMode);
    setMinutes(breakMode ? 5 : 25);
    setSeconds(0);
    addLog(breakMode ? "Switched to 5-minute break session." : "Switched to 25-minute focus session.");
  };

  // Get Sprout mascot state
  const getMascotState = () => {
    if (!isActive) return "sleepy";
    if (isBreak) return "dancing";
    return "happy";
  };

  const mascotState = getMascotState();

  return (
    <div className="w-full max-w-[800px] bg-neutral-950 border border-neutral-800 rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl relative overflow-hidden mx-auto my-12 text-white">
      {/* Background glow dots */}
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-emerald-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />

      {/* Left side: Interactive Timer */}
      <div className="flex-1 flex flex-col justify-between items-center bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800/40">
        <div className="flex gap-3 mb-6 w-full justify-center">
          <button
            onClick={() => setMode(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
              !isBreak
                ? "bg-emerald-500 text-neutral-950 shadow-lg shadow-emerald-500/20"
                : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            <Flame size={14} /> Focus
          </button>
          <button
            onClick={() => setMode(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-200 ${
              isBreak
                ? "bg-cyan-500 text-neutral-950 shadow-lg shadow-cyan-500/20"
                : "bg-neutral-800 text-neutral-400 hover:text-white"
            }`}
          >
            <Coffee size={14} /> Break
          </button>
        </div>

        {/* Display Timer */}
        <div className="my-4 text-center">
          <div className="text-6xl md:text-7xl font-mono font-bold tracking-tight bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
          <div className="text-xs uppercase tracking-widest text-neutral-500 mt-2">
            {isBreak ? "Relax & Fuel up" : "Time to craft code"}
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={handleToggle}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform active:scale-95 ${
              isActive
                ? "bg-neutral-800 text-white hover:bg-neutral-700"
                : "bg-white text-neutral-950 hover:bg-neutral-100"
            }`}
          >
            {isActive ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
          </button>
          <button
            onClick={handleReset}
            className="w-14 h-14 rounded-full bg-neutral-800/80 hover:bg-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-transform active:scale-95 border border-neutral-700/50"
          >
            <RotateCcw size={20} />
          </button>
        </div>
      </div>

      {/* Right side: Mascot and Terminal Logs */}
      <div className="flex-1 flex flex-col justify-between gap-6">
        {/* Animated Sprout Mascot Area */}
        <div className="bg-neutral-900/50 rounded-2xl p-6 border border-neutral-800/40 flex flex-col items-center justify-center min-h-[220px]">
          <div className="relative w-28 h-28 flex items-center justify-center mb-4">
            {/* Mascot drawing using CSS animations */}
            <motion.div
              animate={
                mascotState === "dancing"
                  ? { y: [0, -10, 0], rotate: [0, 5, -5, 0] }
                  : mascotState === "sleepy"
                  ? { scale: [1, 0.98, 1], y: [0, 2, 0] }
                  : { y: [0, -4, 0] }
              }
              transition={{ repeat: Infinity, duration: mascotState === "sleepy" ? 3 : 1.5 }}
              className="w-20 h-20 bg-emerald-500 rounded-3xl relative shadow-[0_12px_24px_rgba(16,185,129,0.2)] flex items-center justify-center border-2 border-emerald-400"
            >
              {/* Plant Leaves */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
                <motion.div
                  animate={mascotState === "dancing" ? { rotate: [15, 30, 15] } : { rotate: 15 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  className="w-6 h-6 bg-emerald-400 rounded-tr-[20px] rounded-bl-[20px] origin-bottom-left"
                />
                <motion.div
                  animate={mascotState === "dancing" ? { rotate: [-15, -30, -15] } : { rotate: -15 }}
                  transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  className="w-6 h-6 bg-emerald-400 rounded-tl-[20px] rounded-br-[20px] origin-bottom-right"
                />
              </div>

              {/* Eyes */}
              <div className="flex gap-4 mt-2">
                {mascotState === "sleepy" ? (
                  <>
                    <div className="w-3 h-1 bg-emerald-950 rounded-full" />
                    <div className="w-3 h-1 bg-emerald-950 rounded-full" />
                  </>
                ) : (
                  <>
                    <motion.div 
                      animate={mascotState === "dancing" ? { scaleY: [1, 0.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-2.5 h-2.5 bg-emerald-950 rounded-full" 
                    />
                    <motion.div 
                      animate={mascotState === "dancing" ? { scaleY: [1, 0.2, 1] } : {}}
                      transition={{ repeat: Infinity, duration: 4 }}
                      className="w-2.5 h-2.5 bg-emerald-950 rounded-full" 
                    />
                  </>
                )}
              </div>

              {/* Cheeks */}
              <div className="absolute bottom-6 left-2 w-2 h-1.5 bg-rose-400/50 rounded-full" />
              <div className="absolute bottom-6 right-2 w-2 h-1.5 bg-rose-400/50 rounded-full" />

              {/* Mouth */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                {mascotState === "sleepy" ? (
                  <div className="w-2.5 h-2.5 border-b-2 border-emerald-950 rounded-full" />
                ) : mascotState === "dancing" ? (
                  <div className="w-3 h-2 bg-emerald-950 rounded-b-full" />
                ) : (
                  <div className="w-2 h-1 bg-emerald-950 rounded-full" />
                )}
              </div>
            </motion.div>

            {/* Zzz sleeping indicators */}
            {mascotState === "sleepy" && (
              <div className="absolute -top-2 -right-2 flex flex-col gap-1 text-[10px] font-bold text-neutral-500 select-none animate-pulse">
                <span className="animate-bounce">Z</span>
                <span className="animate-bounce delay-150 pl-2">z</span>
              </div>
            )}
          </div>
          <span className="text-sm font-semibold tracking-wide">
            {mascotState === "sleepy" ? "Sprout is sleeping..." : mascotState === "dancing" ? "Sprout is dancing! 🕺" : "Sprout is coding... 💻"}
          </span>
        </div>

        {/* Real-time console logs */}
        <div className="bg-black border border-neutral-900 rounded-2xl p-4 font-mono text-[11px] leading-relaxed text-neutral-400 flex flex-col justify-end min-h-[140px]">
          <div className="flex items-center gap-2 border-b border-neutral-900 pb-2 mb-2 text-neutral-500 font-semibold tracking-wider uppercase text-[10px]">
            <TermIcon size={12} className="text-emerald-500 animate-pulse" /> Terminal Session Logs
          </div>
          <div className="flex flex-col-reverse gap-1.5">
            <AnimatePresence>
              {logs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className={`${index === 0 ? "text-emerald-400" : "text-neutral-500"}`}
                >
                  {log}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
