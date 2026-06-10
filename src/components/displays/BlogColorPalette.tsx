import React from 'react';

export default function BlogColorPalette() {
  const colors = [
    { name: "Base White", hex: "#FFFFFF", textClass: "text-neutral-800" },
    { name: "Soft Lavender", hex: "#CBBEFD", textClass: "text-neutral-800" },
    { name: "Vibrant Lilac", hex: "#B39CFB", textClass: "text-neutral-900" },
    { name: "Deep Violet", hex: "#822FFE", textClass: "text-white" },
    { name: "Void Black", hex: "#0F0F11", textClass: "text-white" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row rounded-[16px] overflow-hidden detail-breakout mt-4 border border-black/10">
      {colors.map((color, index) => (
        <div 
          key={index} 
          className="flex-1 flex flex-col justify-end p-6 px-8 md:px-12 pb-10 md:pb-12 min-h-[160px] md:min-h-[220px] transition-all duration-300 hover:scale-[1.03] hover:z-10 relative cursor-default"
          style={{ backgroundColor: color.hex }}
        >
          <div className={`flex flex-col items-start gap-2 ${color.textClass}`}>
            <span className="font-semibold text-lg tracking-tight">{color.name}</span>
            <span className="font-mono text-sm opacity-80">{color.hex}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
