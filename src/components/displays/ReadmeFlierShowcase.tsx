"use client";

import React, { useState } from "react";
import { Terminal, Copy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ReadmeFlierShowcase() {
  const [projectName, setProjectName] = useState("Awesome Tool");
  const [description, setDescription] = useState("A blazing fast utility for developers.");
  const [copied, setCopied] = useState(false);

  const markdownOutput = `# ${projectName}\n\n![License](https://img.shields.io/badge/license-MIT-blue.svg)\n![Version](https://img.shields.io/badge/version-1.0.0-green.svg)\n\n> ${description}\n\n## 🚀 Installation\n\n\`\`\`bash\nnpm install ${projectName.toLowerCase().replace(/ /g, '-')}\n\`\`\`\n\n## 💡 Usage\n\nCheck out the docs for more info.`;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl bg-[#0a0a0a] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl flex flex-col md:flex-row h-[420px] font-sans">
      
      {/* Settings Pane */}
      <div className="flex-1 border-r border-neutral-800 flex flex-col bg-[#111]">
        <div className="p-4 border-b border-neutral-800 flex items-center gap-2 text-xs font-semibold text-emerald-500 uppercase tracking-widest">
          <Terminal size={14} /> Readmeflier Config
        </div>
        <div className="p-6 flex flex-col gap-5">
          <div>
            <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Project Name</label>
            <input 
              type="text" 
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Short Description</label>
            <textarea 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-colors h-24 resize-none"
            />
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-[10px] font-mono text-neutral-400">MIT License</span>
            <span className="px-3 py-1 bg-neutral-800 rounded-full text-[10px] font-mono text-neutral-400">NPM Install</span>
          </div>
        </div>
      </div>

      {/* Output Pane */}
      <div className="flex-[1.2] flex flex-col bg-[#050505]">
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-400 font-mono">README.md</span>
          <button 
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            {copied ? <CheckCircle2 size={14} className="text-emerald-500" /> : <Copy size={14} />}
            {copied ? "Copied!" : "Copy Raw"}
          </button>
        </div>
        <div className="flex-1 p-6 overflow-y-auto">
          <motion.pre 
            key={markdownOutput}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            className="text-xs font-mono text-emerald-400/80 leading-loose whitespace-pre-wrap"
          >
            {markdownOutput}
          </motion.pre>
        </div>
      </div>

    </div>
  );
}
