"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HorizontalScrollText() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const textContent =
    "I build seamless interfaces that blend beautiful typography with rich, dynamic animations. Every pixel is crafted with performant underlying code, ensuring interactions feel as smooth as they look.";

  // Splitting text manually to avoid needing premium SplitText plugin
  const words = textContent.split(" ");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const textNode = textRef.current;
    if (!wrapper || !textNode) return;

    // Use gsap.context to properly isolate and clean up in React Strict Mode
    // Without this, gsap.from() runs twice and locks the letters into a scattered state!
    const ctx = gsap.context(() => {
      // Create the horizontal scrolling tween
      const scrollTween = gsap.to(textNode, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          pin: true,
          end: "+=5000px",
          scrub: true,
        },
      });

      // Select all our manually created character spans
      const chars = textNode.querySelectorAll(".char");

      // Apply the container animation staggered reveal to each character
      chars.forEach((char) => {
        gsap.from(char, {
          yPercent: "random(-150, 150)", // Slightly less extreme throw
          rotation: "random(-15, 15)",
          opacity: 0, // Fade them in as well for a cleaner assembly
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: char,
            containerAnimation: scrollTween,
            start: "left 95%",
            end: "left 40%", // Assemblies earlier, giving more reading time
            scrub: true,
          },
        });
      });
    }, wrapperRef);

    return () => {
      ctx.revert(); // Automatically cleans up all ScrollTriggers and tween inline styles
    };
  }, []);

  return (
    <>
      <style>{`
        .Horizontal {
          overflow: hidden;
          height: 100vh;
          display: flex;
          align-items: center;
          background-color: #000;
          color: #fff;
        }

        .Horizontal__text {
          display: flex;
          width: max-content;
          white-space: nowrap;
          gap: 2vw; /* tailored gap */
          padding-left: 100vw;
          margin: 0;
        }

        .heading-xl {
          font-size: clamp(2rem, 10vw, 10rem);
          font-weight: 600;
          line-height: 1.1;
          font-family: "Inter", sans-serif;
        }

        .word {
          display: inline-flex;
        }

        .char {
          display: inline-block;
          will-change: transform;
        }
      `}</style>
      <section className="Horizontal" ref={wrapperRef}>
        <div className="container" style={{ display: "contents" }}>
          <h3 className="Horizontal__text heading-xl" ref={textRef}>
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="word">
                {word.split("").map((char, charIndex) => (
                  <span key={`${wordIndex}-${charIndex}`} className="char">
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h3>
        </div>
      </section>
    </>
  );
}
