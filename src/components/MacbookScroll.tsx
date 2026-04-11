"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MacbookScroll() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const html = document.documentElement;

    // Set up frames
    const frameCount = 121;
    const currentFrame = (i: number) =>
      `https://www.apple.com/105/media/us/macbook-pro-16/2019/fa0563a0-8534-4e01-a62a-081b87805fea/anim/hero/large/large_${i
        .toString()
        .padStart(4, "0")}.jpg`;

    const images: HTMLImageElement[] = [];

    const preloadImages = () => {
      for (let i = 0; i <= frameCount; i++) {
        const img = new window.Image();
        img.src = currentFrame(i);
        images.push(img);
      }
    };
    preloadImages();

    // Load first image
    const initialImg = new window.Image();
    initialImg.src = currentFrame(0);
    initialImg.onload = () => {
      ctx.drawImage(initialImg, 0, 0);
    };

    // Update image on scroll
    const updateImage = (i: number) => {
      if (images[i]) {
        ctx.drawImage(images[i], 0, 0);
      }
    };

    // GSAP ScrollTrigger for frames
    const obj = { frame: 0 };
    const container = document.querySelector(".sticky-container");
    
    if (container) {
      // Frame animation - linked specifically to the container distance
      gsap.to(obj, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: () => {
            updateImage(Math.round(obj.frame));
          }
        }
      });

      // Headline fade/move
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -400,
          opacity: 0,
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=800",
            scrub: true,
          },
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        .sticky-container {
          height: calc(100vh + 1100px);
          min-height: 1400px;
        }

        .sticky-element {
          position: sticky;
          top: 0px;
          height: auto;
          overflow: hidden;
          padding-top: 0px;
        }

        .hero-container {
          max-width: 1096px;
          width: 125vh;
          min-width: 900px;
          margin: 0 auto;
        }

        #canvas {
          display: block;
          width: 100%;
          height: auto;
        }

        .headline {
          will-change: opacity, transform;
          position: absolute;
          top: 160px;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: 800px;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          z-index: 2;
        }

        .headline h1,
        .headline h2 {
          margin: 0;
          font-family: "Inter", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          font-weight: 700;
          opacity: 0;
          color: #1d1d1f;
        }

        .headline h1 {
          font-size: 32px;
          line-height: 1.25;
          letter-spacing: 0em;
          animation: reveal 1s ease-out 0s 1 normal both;
        }

        .headline h2 {
          font-size: 80px;
          line-height: 1;
          letter-spacing: -0.015em;
          margin-top: 12px;
          animation: reveal 1s ease-out 0s 1 normal both;
        }

        @keyframes reveal {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }

          100% {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        .hero-content {
          width: 980px;
          max-width: 90vw;
          margin: 100px auto;
        }

        .hero-content p {
          color: #888;
          font-size: 36px;
          line-height: 1.16667;
          font-weight: 500;
          letter-spacing: 0em;
          font-family: "Inter", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          padding-right: 48px;
        }

        @media (max-width: 768px) {
          .hero-content p {
            font-size: 24px;
            padding-right: 0;
          }
        }
      `}</style>
      
      <div className="sticky-container">
        <div className="sticky-element">
          <div className="headline" ref={headlineRef}>
            <h1>Pynthamil Pavendan</h1>
            <h2>Crafting digital experiences.</h2>
          </div>

          <div className="hero-container">
            <canvas id="canvas" ref={canvasRef} width="1096" height="724"></canvas>
          </div>

          <div className="hero-content">
            <p>
              I am a passionate developer and designer dedicated to crafting immersive, high-performance digital experiences. With a relentless focus on front-end excellence, pixel-perfect design, and interactive storytelling, my web applications dynamically change the way users discover and engage.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
