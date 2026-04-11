"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import MacbookScroll from "@/components/MacbookScroll";
import HorizontalScrollText from "@/components/HorizontalScrollText";
import ShapeOverlay, { ShapeOverlayRef } from "@/components/ShapeOverlay";

export default function Home() {
  const overlayRef = useRef<ShapeOverlayRef>(null);
  const router = useRouter();

  const handleFinish = () => {
    if (overlayRef.current) {
      overlayRef.current.play();
    }
  };

  const handleNavigation = () => {
    router.push("/projects");
  };

  return (
    <main className="min-h-screen">
      <MacbookScroll />
      <HorizontalScrollText onFinish={handleFinish} />
      
      {/* Cinematic liquid transition overlay - Final Aurora theme */}
      <ShapeOverlay 
        ref={overlayRef} 
        theme="aurora" 
        onComplete={handleNavigation} 
      />
    </main>
  );
}
