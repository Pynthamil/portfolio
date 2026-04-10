"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Loader2, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

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
    inputPlaceholder: "   type your message",
  },
  {
    id: "mail",
    icon: "/assets/Mail.svg",
    iconAlt: "Mail",
    iconWidth: 80,
    iconHeight: 80,
    bubbleText: "Reach me via email anytime!",
    bubbleColor: "#3B82F6",
    displayValue: "pavendanpynthamil@gmail.com",
    linkUrl: "mailto:pavendanpynthamil@gmail.com",
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
    displayValue: "my-blog-tan-tau.vercel.app",
    linkUrl: "https://my-blog-tan-tau.vercel.app/",
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
    linkUrl: "https://www.linkedin.com/in/pynthamil-pavendan-55795228a/",
    linkLabel: "Connect",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  const [activeId, setActiveId] = useState("message");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const active = channels.find((c) => c.id === activeId)!;

  const handleSubmit = async () => {
    if (!message.trim() || isSending) return;

    setIsSending(true);
    setError(false);

    // EmailJS Keys - fallback to simulation if missing
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            message: message,
            from_name: "Portfolio Visitor",
            reply_to: "no-reply@portfolio.com",
          },
          publicKey
        );
      } else {
        // Simulation mode
        console.warn("EmailJS keys missing. Running in simulation mode.");
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }

      setIsSent(true);
      setMessage("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } catch (err: any) {
      console.error("Failed to send message:", err?.text || err?.message || err || "Unknown error");
      setError(true);
      setTimeout(() => setError(false), 3000);
    } finally {
      setIsSending(false);
    }
  };

  const getBubbleText = () => {
    if (isSending && activeId === "message") return "Sending your message...";
    if (isSent && activeId === "message") return "Got it! I'll get back to you soon 🚀";
    if (error && activeId === "message") return "Oops! Something went wrong. Try again?";
    return active.bubbleText;
  };

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
              style={{ height: "auto" }}
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
              {getBubbleText()}
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
                <div className="relative flex items-center w-full bg-white border border-gray-200 rounded-full pl-4 pr-11 py-1 shadow-sm min-h-[44px]">
                  <input
                    type="text"
                    placeholder={active.inputPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 bg-transparent py-2 text-[16px] outline-none placeholder:text-gray-400/50 disabled:opacity-50"
                    disabled={isSending || isSent}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit();
                      }
                    }}
                  />
                  <motion.button
                    initial={false}
                    animate={{
                      backgroundColor: message.trim() ? active.bubbleColor : "#D1D1D6",
                    }}
                    whileHover={message.trim() ? { scale: 1.05, filter: "brightness(1.1)" } : {}}
                    whileTap={message.trim() ? { scale: 0.95 } : {}}
                    disabled={!message.trim() || isSending || isSent}
                    onClick={handleSubmit}
                  >
                    {isSending ? (
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    ) : isSent ? (
                      <Check className="w-5 h-5 text-white" />
                    ) : (
                      <ArrowUp className="w-5 h-5 text-white stroke-[3.5px]" />
                    )}
                  </motion.button>
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