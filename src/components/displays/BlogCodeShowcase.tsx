"use client";

import React, { useState } from "react";
import { Code2, LayoutTemplate } from "lucide-react";

export default function BlogCodeShowcase() {
  const [content, setContent] = useState(
    `# Hello World\n\nThis is a custom MDX parser built for my blog.\n\n\`\`\`javascript\nconst beautiful = true;\nconsole.log("Typography matters.");\n\`\`\`\n\n> "Design is not just what it looks like and feels like. Design is how it works."\n`
  );

  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-2xl flex flex-col md:flex-row h-[400px]">
      
      {/* Editor Pane */}
      <div className="flex-1 border-r border-neutral-200 flex flex-col bg-[#fdfdfc]">
        <div className="p-3 border-b border-neutral-200 flex items-center gap-2 text-xs font-semibold text-neutral-500 bg-white">
          <Code2 size={14} /> content.mdx
        </div>
        <textarea 
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="flex-1 p-6 font-mono text-[13px] text-neutral-700 bg-transparent focus:outline-none resize-none leading-relaxed"
          spellCheck={false}
        />
      </div>

      {/* Preview Pane */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-3 border-b border-neutral-200 flex items-center gap-2 text-xs font-semibold text-amber-600 bg-amber-50/50">
          <LayoutTemplate size={14} /> Live Render
        </div>
        <div className="flex-1 p-8 overflow-y-auto">
          <article className="prose prose-sm prose-amber max-w-none">
            {/* Simple mock renderer for demo purposes */}
            {content.split('\n\n').map((block, i) => {
              if (block.startsWith('# ')) {
                return <h1 key={i} className="text-3xl font-bold tracking-tight text-neutral-900 mb-6">{block.replace('# ', '')}</h1>;
              }
              if (block.startsWith('```')) {
                return (
                  <pre key={i} className="bg-neutral-900 text-neutral-100 p-4 rounded-xl font-mono text-xs my-4 overflow-x-auto border border-neutral-800">
                    <code>{block.replace(/```(javascript)?/g, '').trim()}</code>
                  </pre>
                );
              }
              if (block.startsWith('> ')) {
                return (
                  <blockquote key={i} className="border-l-4 border-amber-500 pl-4 py-1 text-neutral-600 italic my-6 bg-amber-50/30">
                    {block.replace('> ', '')}
                  </blockquote>
                );
              }
              return <p key={i} className="text-neutral-700 leading-loose mb-4">{block}</p>;
            })}
          </article>
        </div>
      </div>

    </div>
  );
}
