"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Card {
  id: string | number;
  title: string;
  image: string;
}

interface StackedDisplayProps {
  cards: Card[];
  height?: string;
}

/**
 * StackedDisplay - Specialized display for the stacked card effect.
 */
export default function StackedDisplay({ cards, height = "400px" }: StackedDisplayProps) {
  return (
    <div 
      className={cn("relative w-full max-w-[850px] flex items-end justify-center px-8", height && `h-[${height}]`)} 
      style={{ height }}
    >
      {cards.map((card, index) => {
        const stagger = cards.length - 1 - index;
        return (
          <motion.div
            key={card.id}
            className="absolute w-full aspect-[16/10] rounded-[24px] md:rounded-[32px] overflow-hidden transition-all duration-300 cursor-pointer"
            style={{ zIndex: index }}
            initial={{ 
              y: stagger * -18,
              scale: 1 - (stagger * 0.03)
            }}
            whileHover={{ 
              y: (stagger * -35) - 60,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <Image
              src={card.image}
              alt={`${card.title}`}
              fill
              className="object-contain p-6 md:p-10"
              priority={index === cards.length - 1}
            />
            
            <div className="absolute bottom-6 left-10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-[10px] md:text-[12px] uppercase tracking-widest font-bold text-white">
              {card.title}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
