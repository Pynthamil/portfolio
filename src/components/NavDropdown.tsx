"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Layout, Share2, ArrowRight } from "lucide-react";

interface NavDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const categories = [
  {
    title: "Product Design",
    description: "Interface architecture and modular software concepts.",
    icon: Layout,
    href: "/projects",
    active: true
  },
  {
    title: "Social Media Design",
    description: "Visual narratives and aesthetic storytelling for platforms.",
    icon: Share2,
    href: "#",
    active: false,
    badge: "Coming Soon"
  }
];

export default function NavDropdown({ isOpen, onClose }: NavDropdownProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={isOpen ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className={`nav-dropdown-overlay ${isOpen ? "visible" : "hidden"}`}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <div className="nav-dropdown-content">
        <div className="nav-dropdown-grid">
          {categories.map((cat, idx) => (
            <Link 
              key={cat.title} 
              href={cat.href}
              className={`nav-dropdown-item ${!cat.active ? 'disabled' : ''}`}
              onClick={() => cat.active && onClose()}
            >
              <div className="item-icon-wrapper">
                <cat.icon size={20} strokeWidth={2.5} />
              </div>
              <div className="item-text">
                <div className="item-header">
                  <span className="item-title">{cat.title}</span>
                  {cat.badge && <span className="item-badge">{cat.badge}</span>}
                  {cat.active && <ArrowRight size={14} className="item-arrow" />}
                </div>
                <p className="item-description">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
