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
      avatar: "/assets/laptop.svg",
      title: "who am i and what do i do for a living?",
      subtitle: "a little less mystery about me",
      content: [
        "My name is Pynthamil Pavendan!",
        "I'm a student developer who enjoys turning ideas into things people can actually use",
        "I like building interfaces that feel simple, fast, and intentional",
        "I spend most of my time working with modern web technologies, experimenting with interaction design, and refining the small details that make products feel polished",
        "I'm especially interested in how design and engineering come together to create experiences that feel effortless",
        "Currently focused on building projects that are useful, visually clean, and quietly memorable",
      ],
    },
    {
      id: 1,
      avatar: "/assets/laugh.svg",
      title: "things i enjoy outside of screens",
      subtitle: "when the laptop finally closes",
      content: [
        "I love reading books, watching movies, writing, and drawing",
        "I'm very curious so I love to constantly explore new things",
        "I don't believe the saying \"curiosity kills the cat\" — haha",
      ],
    },
    {
      id: 2,
      avatar: "/assets/celeb.svg",
      title: "fun facts about me",
      subtitle: "the lore drops",
      content: [
        "favourite boy band: ENHYPEN",
        "music taste: a bit of everything → if it sounds good, I'm listening",
        "I love singing and dancing like nobody's watching (because usually nobody is)",
        "introvert… who also loves to yap when the topic is interesting",
        "personality type: INTJ",
        "I enjoy challenging myself just for the plot",
        "currently in my 3rd year of college, about to enter my final year — slightly terrifying & slightly exciting",
      ],
    },
    {
      id: 3,
      avatar: "/assets/stars.svg",
      title: "about my blog",
      subtitle: "my brain leaving sticky notes for itself",
      content: [
        "I write about things I'm learning, things I'm building, and things I randomly become obsessed with at 2:17 am",
        "sometimes it's about tech, sometimes design, sometimes a thought that refuses to leave me alone until I write it down",
        "it's less \"expert advice\" and more \"let me see if this idea makes sense outside my head\"",
        "mostly curiosity. occasionally clarity. always slightly unhinged but in a productive way",
      ],
    },
    {
      id: 4,
      avatar: "/assets/idea.svg",
      title: "what i am currently learning",
      subtitle: "learning, unlearning, relearning",
      content: [
        "currently learning how to make things feel simple without making them boring",
        "exploring better ways to structure code, design cleaner interfaces, and build products that feel intentional from the first click",
        "trying to understand why some digital experiences feel effortless while others feel confusing, even when they do the same thing",
        "also learning to be okay with not knowing everything yet and building anyway",
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
