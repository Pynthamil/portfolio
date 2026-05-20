"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Loader2, Check } from "lucide-react";
import emailjs from "@emailjs/browser";
import ContactBar from "@/components/ContactBar";

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
    bubbleText: "Feel free to drop me a message here!",
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
    icon: "/assets/linkedin.svg",
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

  return (
    <main className="page-wrapper min-h-screen flex flex-col items-center">
      <ContactBar />
    </main>
  );
}