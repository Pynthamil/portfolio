"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowUp } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Contact channels data                                             */
/* ------------------------------------------------------------------ */
type ContactChannel = {
  id: string;
  icon: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
  bubbleText: string;
  bubbleColor: string;
  inputPlaceholder?: string;
  linkUrl?: string;
  linkLabel?: string;
  displayValue?: string;
};

const channels: ContactChannel[] = [
  {
    id: "message",
    icon: "/assets/Messages.svg",
    iconAlt: "Messages",
    iconWidth: 80,
    iconHeight: 80,
    bubbleText: "Send your message to me here, darling!",
    bubbleColor: "#FF60B2",
    inputPlaceholder: "type your message",
  },
  {
    id: "mail",
    icon: "/assets/Mail.svg",
    iconAlt: "Mail",
    iconWidth: 80,
    iconHeight: 80,
    bubbleText: "Reach me via email anytime!",
    bubbleColor: "#3B82F6",
    displayValue: "pynthamil@gmail.com",
    linkUrl: "mailto:pynthamil@gmail.com",
    linkLabel: "Send email",
  },
  {
    id: "github",
    icon: "/assets/Github.svg",
    iconAlt: "Github",
    iconWidth: 67,
    iconHeight: 67,
    bubbleText: "Check out my code on GitHub!",
    bubbleColor: "#1d1d1f",
    displayValue: "Pynthamil",
    linkUrl: "https://github.com/Pynthamil",
    linkLabel: "View profile",
  },
  {
    id: "terminal",
    icon: "/assets/Terminal.svg",
    iconAlt: "Terminal",
    iconWidth: 80,
    iconHeight: 80,
    bubbleText: "Find me on the terminal side of things!",
    bubbleColor: "#10B981",
    displayValue: "pynthamil.dev",
    linkUrl: "https://pynthamil.dev",
    linkLabel: "Visit site",
  },
  {
    id: "linkedin",
    icon: "/assets/Linkedin.svg",
    iconAlt: "Linkedin",
    iconWidth: 65,
    iconHeight: 65,
    bubbleText: "Let's connect on LinkedIn!",
    bubbleColor: "#0A66C2",
    displayValue: "Pynthamil",
    linkUrl: "https://linkedin.com/in/pynthamil",
    linkLabel: "Connect",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const [activeId, setActiveId] = useState("message");
  const active = channels.find((c) => c.id === activeId)!;

  return (
    <main className="page-wrapper min-h-screen flex flex-col items-center">

      <div className="w-full max-w-[600px] mt-48 relative">
        {/* Overlapping Memoji */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/assets/Me.svg"
              alt="Memoji"
              width={200}
              height={150}
              priority
              className="drop-shadow-xl"
            />
          </motion.div>
        </div>

        {/* Main Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="contact-card w-full bg-gray-50 rounded-[40px] top-35 relative pt-32 pb-16 px-12 min-h-[400px] shadow-sm border border-black/5 flex flex-col items-center text-center"
        >
          {/* Speech bubble — changes per channel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-bubble"}
              initial={{ opacity: 0, scale: 0.9, y: 5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -5 }}
              transition={{ duration: 0.25 }}
              className="speech-bubble mb-6 relative top-15"
              style={{ background: active.bubbleColor, boxShadow: `0 10px 25px ${active.bubbleColor}4D` }}
            >
              {active.bubbleText}
              <span
                className="speech-bubble-arrow"
                style={{ borderBottomColor: active.bubbleColor }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Content area — changes per channel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-content"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-[450px] relative top-20"
            >
              {active.inputPlaceholder ? (
                /* Message input */
                <div className="relative">
                  <input
                    type="text"
                    placeholder={active.inputPlaceholder}
                    className="w-full h-14 bg-white rounded-full px-6 text-lg outline-none"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2">
                    <CircleArrowUp className="w-10 h-10" />
                  </button>
                </div>
              ) : (
                /* Display value + link */
                <div className="contact-display-card">
                  <span className="contact-display-value">{active.displayValue}</span>
                  {active.linkUrl && (
                    <a
                      href={active.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-display-link"
                    >
                      {active.linkLabel} →
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dock icons */}
          <div className="contact-dock">
            {channels.map((channel) => (
              <button
                key={channel.id}
                onClick={() => setActiveId(channel.id)}
                className={`contact-dock-icon ${activeId === channel.id ? "active" : ""}`}
              >
                <Image
                  src={channel.icon}
                  alt={channel.iconAlt}
                  width={channel.iconWidth}
                  height={channel.iconHeight}
                  priority
                  className="drop-shadow-xl"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}