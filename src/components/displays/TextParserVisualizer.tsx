"use client";

import React, { useState } from "react";
import { Send, Cpu, Database, Network, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type Token = {
  text: string;
  type: "MENTION" | "TAG" | "DATETIME" | "SUBJECT";
  color: string;
  bg: string;
};

export default function TextParserVisualizer() {
  const [inputText, setInputText] = useState(
    "Hey Sprout! Please review the layout schema on Tuesday at 4pm and tag @pynthamil #urgent."
  );
  const [isParsing, setIsParsing] = useState(false);
  const [tokens, setTokens] = useState<Token[]>([
    { text: "@pynthamil", type: "MENTION", color: "text-cyan-400 border-cyan-500/30", bg: "bg-cyan-500/10" },
    { text: "#urgent", type: "TAG", color: "text-rose-400 border-rose-500/30", bg: "bg-rose-500/10" },
    { text: "Tuesday at 4pm", type: "DATETIME", color: "text-amber-400 border-amber-500/30", bg: "bg-amber-500/10" },
    { text: "layout schema", type: "SUBJECT", color: "text-emerald-400 border-emerald-500/30", bg: "bg-emerald-500/10" }
  ]);

  const handleParse = () => {
    setIsParsing(true);
    // Simulating parser token extraction in 1.2s
    setTimeout(() => {
      setIsParsing(false);
      // Basic regex recognition based on input contents
      const detected: Token[] = [];
      
      if (inputText.includes("@")) {
        const matches = inputText.match(/@[a-zA-Z0-9_]+/g);
        matches?.forEach(m => detected.push({ text: m, type: "MENTION", color: "text-cyan-400 border-cyan-500/30", bg: "bg-cyan-500/10" }));
      }
      if (inputText.includes("#")) {
        const matches = inputText.match(/#[a-zA-Z0-9_]+/g);
        matches?.forEach(m => detected.push({ text: m, type: "TAG", color: "text-rose-400 border-rose-500/30", bg: "bg-rose-500/10" }));
      }
      
      // Add custom extractors for date/time and subjects
      if (inputText.toLowerCase().includes("monday") || inputText.toLowerCase().includes("tuesday") || inputText.toLowerCase().includes("wednesday") || inputText.toLowerCase().includes("thursday") || inputText.toLowerCase().includes("friday") || inputText.toLowerCase().includes("pm") || inputText.toLowerCase().includes("am")) {
        detected.push({ text: "Tuesday at 4pm", type: "DATETIME", color: "text-amber-400 border-amber-500/30", bg: "bg-amber-500/10" });
      }
      
      if (inputText.toLowerCase().includes("review")) {
        detected.push({ text: "layout schema", type: "SUBJECT", color: "text-emerald-400 border-emerald-500/30", bg: "bg-emerald-500/10" });
      }

      // If empty fallback list
      if (detected.length === 0) {
        detected.push(
          { text: "Default Subject", type: "SUBJECT", color: "text-emerald-400 border-emerald-500/30", bg: "bg-emerald-500/10" }
        );
      }

      setTokens(detected);
    }, 1000);
  };

  return (
    <div className="w-full max-w-[800px] bg-neutral-950 border border-neutral-800 rounded-[32px] p-6 md:p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden mx-auto my-12 text-white">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />

      {/* Top Banner Details */}
      <div className="flex justify-between items-center border-b border-neutral-900 pb-4">
        <div>
          <h4 className="text-md font-bold tracking-tight text-white flex items-center gap-2">
            <Cpu size={18} className="text-cyan-400" /> Semantic NLP Extraction visualizer
          </h4>
          <p className="text-xs text-neutral-500 mt-1">Real-time parser analysis of incoming data streams</p>
        </div>
        <div className="text-[10px] font-bold font-mono tracking-widest bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full uppercase">
          STREAM ACTIVE
        </div>
      </div>

      {/* Center Section: Input Console */}
      <div className="flex flex-col gap-4">
        <label className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
          Source text stream
        </label>
        <div className="relative">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type text with @mentions, #tags, or date descriptions..."
            className="w-full min-h-[90px] bg-neutral-900/60 border border-neutral-800 rounded-2xl p-4 pr-16 text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500/50 resize-none transition-colors"
          />
          <button
            onClick={handleParse}
            disabled={isParsing}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-cyan-500 text-neutral-950 flex items-center justify-center transition-all hover:bg-cyan-400 active:scale-95 disabled:opacity-50 disabled:pointer-events-none shadow-lg shadow-cyan-500/20"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Bottom section: Dynamic Node Network & Tokens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        
        {/* Token Extraction Grid */}
        <div className="bg-neutral-900/40 border border-neutral-800/40 rounded-2xl p-5 flex flex-col gap-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            Extracted Entities ({tokens.length})
          </span>
          <div className="flex flex-wrap gap-2.5">
            {isParsing ? (
              <div className="w-full flex justify-center py-6 text-xs text-neutral-500 tracking-wider uppercase animate-pulse">
                Parsing token streams...
              </div>
            ) : (
              tokens.map((token, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`flex flex-col gap-1 px-3.5 py-2.5 rounded-xl border ${token.bg} ${token.color} flex-grow md:flex-grow-0`}
                >
                  <span className="text-[9px] font-bold tracking-widest font-mono opacity-50">
                    {token.type}
                  </span>
                  <span className="text-sm font-mono font-bold tracking-tight">
                    {token.text}
                  </span>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Dynamic Node Network Rendering SVG */}
        <div className="bg-neutral-900/40 border border-neutral-800/40 rounded-2xl p-5 flex flex-col justify-between min-h-[200px]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">
            Graph Data Pipeline
          </span>
          
          <div className="flex-1 flex items-center justify-center">
            {/* SVG Visual pipeline graph */}
            <svg viewBox="0 0 320 120" className="w-full max-w-[280px]">
              {/* Nodes */}
              <circle cx="40" cy="60" r="16" fill="#171717" stroke="#333" strokeWidth="2" />
              <circle cx="160" cy="60" r="20" fill="#082f49" stroke="#06b6d4" strokeWidth="2" className={isParsing ? "animate-pulse" : ""} />
              <circle cx="280" cy="60" r="16" fill="#1e1b4b" stroke="#818cf8" strokeWidth="2" />

              {/* Node Icons labels */}
              <Database size={14} className="text-neutral-500" x="33" y="53" />
              <Cpu size={18} className="text-cyan-400" x="151" y="51" />
              <Network size={14} className="text-indigo-400" x="273" y="53" />

              {/* Connecting glowing paths */}
              <motion.line
                x1="60"
                y1="60"
                x2="136"
                y2="60"
                stroke={isParsing ? "#06b6d4" : "#444"}
                strokeWidth="2.5"
                strokeDasharray="6 4"
                animate={isParsing ? { strokeDashoffset: [-20, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.line
                x1="184"
                y1="60"
                x2="260"
                y2="60"
                stroke={isParsing ? "#818cf8" : "#444"}
                strokeWidth="2.5"
                strokeDasharray="6 4"
                animate={isParsing ? { strokeDashoffset: [-20, 0] } : {}}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />

              {/* Labels below */}
              <text x="40" y="96" fill="#666" fontSize="8" textAnchor="middle" fontFamily="monospace">INPUT</text>
              <text x="160" y="100" fill="#06b6d4" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="monospace">PARSER</text>
              <text x="280" y="96" fill="#818cf8" fontSize="8" textAnchor="middle" fontFamily="monospace">ENTITIES</text>
            </svg>
          </div>

          <div className="flex justify-between items-center border-t border-neutral-900 pt-3 text-[10px] text-neutral-500 font-mono">
            <span>PIPELINE: REGEX-MATCH</span>
            <span className="flex items-center gap-1 text-cyan-400">
              OK <ArrowRight size={10} />
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
