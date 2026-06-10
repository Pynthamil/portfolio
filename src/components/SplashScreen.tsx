"use client";

import { useEffect, useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if it's the first visit to the site in this session
    const hasVisited = sessionStorage.getItem("hasVisited");
    
    if (hasVisited) {
      setShowSplash(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 500); // 500ms fade out duration
    }, 2000); // 2s display time

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) return null;

  return (
    <div className={`premium-loader-wrapper ${isFadingOut ? "fade-out" : ""}`}>
      <div className="premium-loader-glow" />
      <div className="premium-loader-content" style={{ width: "150px", height: "150px" }}>
        <DotLottieReact
          src="/assets/loading-animation.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
}
