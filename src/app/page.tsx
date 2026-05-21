"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import { homeProjects } from "@/data/projectsData";
import ShapeOverlay, { ShapeOverlayRef } from "@/components/ShapeOverlay";

export default function Home() {
  const overlayRef = useRef<ShapeOverlayRef>(null);
  const router = useRouter();
  const [targetUrl, setTargetUrl] = useState<string | null>(null);

  const handleProjectClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setTargetUrl(href);
    if (overlayRef.current) {
      overlayRef.current.play();
    } else {
      router.push(href);
    }
  };

  const handleNavigation = () => {
    if (targetUrl) {
      router.push(targetUrl);
    } else {
      router.push("/projects");
    }
  };

  return (
    <main className="min-h-screen">
      <div className="page-wrapper animate-fade-in">
        {/* Intro Hero Section */}
        <div className="about-header" style={{ marginTop: "40px", marginBottom: "80px", textAlign: "left" }}>
          <div 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "8px", 
              padding: "6px 14px", 
              borderRadius: "9999px", 
              border: "1px solid rgba(0, 0, 0, 0.08)", 
              backgroundColor: "rgba(0, 0, 0, 0.02)", 
              fontSize: "12px", 
              fontWeight: "600", 
              textTransform: "uppercase", 
              letterSpacing: "0.05em", 
              color: "#ff3b30",
              marginBottom: "24px"
            }}
          >
            <span className="nav-dot" style={{ margin: 0 }} aria-hidden="true" />
            Designer & Developer
          </div>
          <h1 className="about-title" style={{ fontSize: "72px", lineHeight: "1.05", textAlign: "left", letterSpacing: "-0.05em" }}>
            designing & building <br />
            <span>digital products</span>
          </h1>
          <p style={{ color: "#1d1d1f", fontSize: "24px", lineHeight: "1.5", marginTop: "32px", letterSpacing: "-0.02em", maxWidth: "900px", fontWeight: "400" }}>
            I am a passionate developer and designer dedicated to crafting immersive, high-performance digital experiences. With a relentless focus on front-end excellence, pixel-perfect design, and interactive storytelling, my web applications dynamically change the way users discover and engage.
          </p>
        </div>

        {/* Section Header */}
        <div style={{ borderTop: "1px solid rgba(0, 0, 0, 0.08)", paddingTop: "60px", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "36px", fontWeight: "700", letterSpacing: "-0.03em", color: "#1d1d1f" }}>
            featured <span>projects</span>
          </h2>
          <p style={{ color: "#86868b", fontSize: "18px", marginTop: "8px", letterSpacing: "-0.01em" }}>
            a selection of interfaces, architectures, and digital products i&apos;ve designed and built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {homeProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onClick={handleProjectClick}
            />
          ))}
        </div>
      </div>
      
      {/* Cinematic liquid transition overlay - Final Aurora theme */}
      <ShapeOverlay 
        ref={overlayRef} 
        theme="aurora" 
        onComplete={handleNavigation} 
      />
    </main>
  );
}
