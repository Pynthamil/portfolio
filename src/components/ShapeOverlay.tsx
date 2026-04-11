"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";

export interface ShapeOverlayRef {
  play: () => void;
}

export type TransitionTheme = 'aurora' | 'solar' | 'emerald' | 'cherry' | 'ice';

interface ShapeOverlayProps {
  onComplete?: () => void;
  theme?: TransitionTheme;
}

const THEMES = {
  aurora: {
    g1: ["#0a0a0a", "#3c096c"],
    g2: ["#5a189a", "#c77dff"]
  },
  solar: {
    g1: ["#ff8709", "#f7bdf8"],
    g2: ["#ffd9b0", "#ff8709"]
  },
  emerald: {
    g1: ["#020202", "#0d2c0b"],
    g2: ["#1a4301", "#39ff14"]
  },
  cherry: {
    g1: ["#120101", "#7b0000"],
    g2: ["#ff0055", "#ffcc33"]
  },
  ice: {
    g1: ["#002b36", "#268bd2"],
    g2: ["#2aa198", "#eee8d5"]
  }
};

const ShapeOverlay = forwardRef<ShapeOverlayRef, ShapeOverlayProps>(({ onComplete, theme = 'aurora' }, ref) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);

  const numPoints = 10;
  const numPaths = 2;
  const delayPointsMax = 0.3;
  const delayPerPath = 0.25;
  const duration = 0.8;

  const allPoints = useRef<number[][]>([]);
  // Critical fix: Initial state must be 'true' so that points=100 results in an empty path
  const isOpenedRef = useRef(true);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Initialize data
  if (allPoints.current.length === 0) {
    for (let i = 0; i < numPaths; i++) {
      allPoints.current.push(new Array(numPoints).fill(100));
    }
  }

  useImperativeHandle(ref, () => ({
    play: () => {
      toggle();
    }
  }));

  const render = () => {
    if (!pathRefs.current || !allPoints.current) return;

    for (let i = 0; i < numPaths; i++) {
      const path = pathRefs.current[i];
      const points = allPoints.current[i];
      if (!path) continue;

      let d = "";
      // points=100 + isOpened=true => Empty (Bottom line)
      // points=0   + isOpened=true => Full (Whole area 0 to 100)
      d += isOpenedRef.current ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

      for (let j = 0; j < numPoints - 1; j++) {
        const p = (j + 1) / (numPoints - 1) * 100;
        const cp = p - (1 / (numPoints - 1) * 100) / 2;
        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
      }

      d += isOpenedRef.current ? ` V 100 H 0` : ` V 0 H 0`;
      path.setAttribute("d", d);
    }
  };

  useEffect(() => {
    // Render the initial 'Empty' state
    render();

    tlRef.current = gsap.timeline({
      paused: true,
      onUpdate: render,
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      }
    });

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [onComplete]);

  const toggle = () => {
    if (!tlRef.current || tlRef.current.isActive()) return;

    // We stay in isOpened=true mode for the transition, we just animate the points to 0 to fill screen
    const pointsDelay: number[] = [];
    for (let i = 0; i < numPoints; i++) {
      pointsDelay[i] = Math.random() * delayPointsMax;
    }

    tlRef.current.clear();

    for (let i = 0; i < numPaths; i++) {
      const points = allPoints.current[i];
      const pathDelay = delayPerPath * i;

      for (let j = 0; j < numPoints; j++) {
        const delay = pointsDelay[j];
        tlRef.current.to(points, {
          [j]: 0,
          duration: duration,
          ease: "power2.inOut"
        }, delay + pathDelay);
      }
    }

    tlRef.current.play(0);
  };

  const currentTheme = THEMES[theme] || THEMES.aurora;

  return (
    <svg
      ref={svgRef}
      className="shape-overlays fixed inset-0 pointer-events-none z-[9999]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', display: 'block' }}
    >
      <defs>
        <linearGradient id="cta-gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={currentTheme.g1[0]} />
          <stop offset="100%" stopColor={currentTheme.g1[1]} />
        </linearGradient>
        <linearGradient id="cta-gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={currentTheme.g2[0]} />
          <stop offset="100%" stopColor={currentTheme.g2[1]} />
        </linearGradient>
      </defs>
      <path
        ref={(el) => (pathRefs.current[0] = el)}
        fill="url(#cta-gradient2)"
      ></path>
      <path
        ref={(el) => (pathRefs.current[1] = el)}
        fill="url(#cta-gradient1)"
      ></path>
    </svg>
  );
});

ShapeOverlay.displayName = "ShapeOverlay";

export default ShapeOverlay;
