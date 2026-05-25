"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Compass, User, Gamepad2, Star } from "lucide-react";

export default function CodedexMobileShowcase() {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative w-[300px] h-[600px] bg-neutral-950 border-[12px] border-neutral-900 rounded-[50px]  overflow-hidden flex flex-col font-sans">
        
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-3xl z-50"></div>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 pt-12 pb-8 rounded-b-3xl  relative z-10">
          <div className="flex justify-between items-center text-white mb-6">
            <h3 className="font-black tracking-wider text-xl">CODÉDEX</h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded-full text-xs font-bold">
                <Star size={12} className="text-yellow-400 fill-yellow-400" /> 124
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
            <h4 className="text-sm font-bold opacity-80 mb-1 uppercase tracking-wider text-xs">Current Quest</h4>
            <p className="font-semibold text-lg flex items-center gap-2">
              <Gamepad2 size={18} /> React Native Lv. 3
            </p>
            <div className="mt-3 h-2 bg-black/30 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-yellow-400"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Feed */}
        <div className="flex-1 overflow-y-auto p-4 pb-24 bg-neutral-950 space-y-4">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-neutral-800 p-4 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {item}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Lesson {item}</h4>
                  <p className="text-neutral-500 text-xs">State Management</p>
                </div>
              </div>
              <button className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl text-sm font-bold transition-colors">
                START STAGE
              </button>
            </motion.div>
          ))}
        </div>

        {/* Tab Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-neutral-900/90 backdrop-blur-xl border-t border-neutral-800 p-6 pt-4 flex justify-between items-center text-neutral-500 z-20 pb-8">
          <Home size={24} className="text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
          <Compass size={24} />
          <User size={24} />
        </div>
      </div>
    </div>
  );
}
