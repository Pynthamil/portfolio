"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItemProps {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  content: string[];
  isOpen: boolean;
  toggle: () => void;
}

function AccordionItem({
  avatar,
  title,
  subtitle,
  content,
  isOpen,
  toggle,
}: AccordionItemProps) {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={toggle} aria-expanded={isOpen}>
        <div className="accordion-avatar">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={avatar} alt={title} />
        </div>
        <div className="accordion-text">
          <h3 className="accordion-title">{title}</h3>
          <p className="accordion-subtitle">{subtitle}</p>
        </div>
        <div className="accordion-toggle">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="accordion-content">
              <ul>
                {content.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    + {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutAccordion() {
  const [openId, setOpenId] = useState<number | null>(2); // Default open third item as per mockup (index 2)

  const items = [
    {
      id: 0,
      avatar: "/assets/idea.svg",
      title: "who am i and what do i do for a living?",
      subtitle: "a little less mystery about me",
      content: [
        "I'm a digital product designer based in San Francisco",
        "Focused on creating minimalist and functional interfaces",
        "Previously worked with various startups to scale their products",
      ],
    },
    {
      id: 1,
      avatar: "/assets/laugh.svg",
      title: "my philosophy and design approach",
      subtitle: "how i think about solving problems",
      content: [
        "Less is always more if done right",
        "User experience is about feelings, not just flows",
        "I believe technology should be invisible yet powerful",
      ],
    },
    {
      id: 2,
      avatar: "/assets/celeb.svg",
      title: "who am i and what do i do for a living?",
      subtitle: "a little less mystery about me",
      content: [
        "I'm a dreamer duh I'm a dreamer duh",
        "I'm a dreamer duh",
        "I'm a dreamer duh",
      ],
    },
  ];

  return (
    <div className="accordion-container">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          {...item}
          isOpen={openId === item.id}
          toggle={() => setOpenId(openId === item.id ? null : item.id)}
        />
      ))}
    </div>
  );
}
