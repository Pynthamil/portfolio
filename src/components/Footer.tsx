"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="footer-container" style={{ textAlign: "center", padding: "60px 20px 80px", borderTop: "1px solid rgba(0, 0, 0, 0.06)", marginTop: "80px" }}>
      <div style={{ display: "inline-block", position: "relative", marginBottom: "16px" }}>
        {/* Cute handdrawn smiling flower doodle */}
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Petals */}
          {/* Top petal */}
          <path d="M 35 35 C 31 15, 39 15, 35 35" stroke="#0022ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Top-Right petal */}
          <path d="M 35 35 C 51 21, 55 31, 35 35" stroke="#0022ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Bottom-Right petal */}
          <path d="M 35 35 C 55 39, 51 49, 35 35" stroke="#0022ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Bottom petal */}
          <path d="M 35 35 C 39 55, 31 55, 35 35" stroke="#0022ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Bottom-Left petal */}
          <path d="M 35 35 C 19 49, 15 39, 35 35" stroke="#0022ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Top-Left petal */}
          <path d="M 35 35 C 15 31, 19 21, 35 35" stroke="#0022ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          
          {/* Center head */}
          <circle cx="35" cy="35" r="11" stroke="#0022ff" strokeWidth="3.5" fill="#ffffff" />
          
          {/* Smiley Face */}
          {/* Left Eye */}
          <circle cx="31.5" cy="33" r="1.5" fill="#0022ff" />
          {/* Right Eye */}
          <circle cx="38.5" cy="33" r="1.5" fill="#0022ff" />
          {/* Smile */}
          <path d="M 31 38 C 32 41, 38 41, 39 38" stroke="#0022ff" strokeWidth="1.8" strokeLinecap="round" />

          {/* Sparkles */}
          {/* Top-Right Sparkle */}
          <path d="M 55 12 L 57 15 L 60 16 L 57 17 L 55 20 L 53 17 L 50 16 L 53 15 Z" fill="#0022ff" />
          {/* Bottom-Left Sparkle */}
          <path d="M 15 50 L 16.5 52 L 19 53 L 16.5 54 L 15 56 L 13.5 54 L 11 53 L 13.5 52 Z" fill="#0022ff" />
        </svg>
      </div>
      <div style={{ fontSize: "17px", color: "#1d1d1f", fontWeight: "500", letterSpacing: "-0.01em", lineHeight: "1.4" }}>
        live, love, git
      </div>
    </footer>
  );
}
