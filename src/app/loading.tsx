"use client";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loading() {
  return (
    <div className="premium-loader-wrapper">
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
