"use client";

import React from "react";
import IPhoneMockup from "./IPhoneMockup";

export default function LumaPreview() {
  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">Mobile Triage</h2>
      <p className="project-detail-section-body !mb-12">
        Stay updated on production health from anywhere. Luma's mobile interface
        notifies you of critical issues and allows for instant AI-assisted
        root cause analysis on the go.
      </p>

      {/* Reusable Container with IPhoneMockup inside */}
      <div className="relative w-full h-[850px] bg-[#f5f5f7] rounded-[40px] border border-black/5 flex justify-center items-center shadow-sm overflow-hidden p-12">
        <IPhoneMockup>
          {/* Internal Dashboard UI */}
          <div className="h-full w-full bg-zinc-950 text-white flex flex-col p-6 font-sans">
            {/* Status Bar */}
            <div className="flex justify-between items-center mb-8 px-2">
              <span className="text-[14px] font-medium opacity-80">9:41</span>
              <div className="flex gap-1.5 grayscale opacity-50">
                <div className="w-4 h-4 rounded-full border border-white/20"></div>
                <div className="w-4 h-4 rounded-full border border-white/20"></div>
              </div>
            </div>

            {/* Dashboard Header */}
            <div className="mb-8">
              <div className="text-zinc-500 text-xs uppercase tracking-widest font-bold mb-1">
                Security Core
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">System Status</h3>
            </div>

            {/* AI Health Visualizer */}
            <div className="relative aspect-square w-full rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center mb-8 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
               <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-blue-500/20 flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 rounded-full border-4 border-blue-500/40 flex items-center justify-center">
                       <div className="w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)]"></div>
                    </div>
                  </div>
               </div>
               <div className="absolute bottom-4 text-[10px] text-zinc-500 font-mono uppercase tracking-tighter">
                  Active AI Monitoring
               </div>
            </div>

            {/* Metrics List */}
            <div className="space-y-3">
              {[
                { label: "Critical Errors", value: "0", color: "text-zinc-400" },
                { label: "Resolved by AI", value: "142", color: "text-blue-400" },
                { label: "Mean Time to Resolve", value: "4m", color: "text-zinc-400" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                  <span className="text-sm font-medium text-zinc-400">{item.label}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="mt-auto pb-6">
              <div className="w-full py-4 rounded-2xl bg-white text-black text-center font-bold text-sm shadow-xl active:scale-95 transition-transform cursor-pointer">
                Run Diagnostic
              </div>
            </div>
          </div>
        </IPhoneMockup>
      </div>
    </div>
  );
}
