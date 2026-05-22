"use client";

import React from "react";
import Link from "next/link";

export default function CodingProjectHeader() {
  return (
    <header className="project-sticky-header animate-fade-in">
      {/* Go Back with handwritten styled arrow */}
      <Link href="/coding" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#1d1d1f" }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ transform: "rotate(-5deg)" }}>
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span className="font-handwritten" style={{ fontSize: "21px", fontWeight: "600", color: "#6e6e73" }}>Go back</span>
      </Link>
    </header>
  );
}
