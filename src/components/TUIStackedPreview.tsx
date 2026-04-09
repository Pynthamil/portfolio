"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TUIStackedPreview() {
  const cards = [
    { id: 4, title: "Soft White", image: "/assets/tui/wikipedia-white.svg" },
    { id: 3, title: "Mystic Purple", image: "/assets/tui/wikipedia-purple.svg" },
    { id: 2, title: "Ocean Blue", image: "/assets/tui/wikipedia-blue.svg" },
    { id: 1, title: "Emerald Green", image: "/assets/tui/wikipedia-results.svg" },
  ];

  return (
    <div className="project-detail-section mb-20">
      <h2 className="project-detail-section-title">Different color/theme options</h2>
      <p className="project-detail-section-body !mb-12">
        Personalization is at the core of the Terminal Browser. Choose from a
        variety of carefully curated themes that adapt to your workflow.
      </p>

      {/* Themed Integrated Container - Matching local height and color exactly */}
      <div
        className="relative w-full h-[700px] bg-[#BFFFA1] rounded-[40px] border border-black/5 flex justify-center items-end pb-60 shadow-sm overflow-hidden"
      >
        <div className="relative w-full h-[400px] max-w-[850px] flex items-end justify-center px-8">
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
                  alt={`${card.title} Theme`}
                  fill
                  className="object-contain p-6 md:p-10"
                  priority={card.id === 1}
                />
                
                <div className="absolute bottom-6 left-10 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 text-[10px] md:text-[12px] uppercase tracking-widest font-bold text-white">
                  {card.title}
                </div>
                </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
