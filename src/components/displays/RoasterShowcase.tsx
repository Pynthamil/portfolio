"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Cpu, AlertTriangle, ArrowRight } from "lucide-react";

export default function RoasterShowcase() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResult(null);
    setTimeout(() => {
      setAnalyzing(false);
      setResult("Wait, you 'synergized cross-functional paradigms'? This means absolutely nothing. Replace this fluff with a concrete metric. Example: 'Led a 5-person team to ship Feature X, increasing retention by 15%.' The AI filter just threw your resume in the trash.");
    }, 1500);
  };

  return (
    <div className="w-full max-w-2xl bg-[#0d0d0d] rounded-2xl overflow-hidden border border-neutral-800  font-mono text-sm">
      <div className="p-4 border-b border-neutral-800 flex justify-between items-center bg-[#141414]">
        <div className="flex items-center gap-2 text-rose-500 font-bold tracking-widest text-xs uppercase">
          <Cpu size={14} /> AI Critique Engine v2.0
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4 text-neutral-400 text-xs tracking-wider uppercase mb-2">Target Snippet:</div>
        <div className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex items-start gap-4 mb-6">
          <FileText size={20} className="text-neutral-500 mt-1 flex-shrink-0" />
          <p className="text-neutral-300 leading-relaxed">
            "Synergized cross-functional paradigms to deliver impactful solutions in a fast-paced environment."
          </p>
        </div>

        <button 
          onClick={handleAnalyze}
          disabled={analyzing}
          className="w-full py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {analyzing ? (
             <span className="animate-pulse">Analyzing BS metrics...</span>
          ) : (
            <>Roast this bullet <ArrowRight size={16} /></>
          )}
        </button>

        {result && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 bg-rose-950/30 border border-rose-900/50 p-5 rounded-xl flex items-start gap-3"
          >
            <AlertTriangle size={18} className="text-rose-500 mt-1 flex-shrink-0" />
            <div>
              <span className="text-rose-400 font-bold block mb-2">Critique Output:</span>
              <p className="text-rose-200/80 leading-relaxed">{result}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
