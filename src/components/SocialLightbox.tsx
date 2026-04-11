"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SocialPost } from "@/data/socialAssets";

interface SocialLightboxProps {
  post: SocialPost;
  onClose: () => void;
}

export default function SocialLightbox({ post, onClose }: SocialLightboxProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Add Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        if (currentSlide < post.slides.length - 1) setCurrentSlide(prev => prev + 1);
      } else if (e.key === "ArrowLeft") {
        if (currentSlide > 0) setCurrentSlide(prev => prev - 1);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, post.slides.length, onClose]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSlide < post.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="lightbox-close"
        onClick={onClose}
      >
        <X size={32} color="#fff" />
      </motion.button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`lightbox-content ${post.aspectRatio ? 'portrait-post' : ''}`}
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: post.aspectRatio ? '850px' : '1000px' }}
      >
        <div className="lightbox-image-panel" style={{ flex: post.aspectRatio ? 1 : 1.5 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lightbox-image-wrapper"
            >
              <Image
                src={post.slides[currentSlide]}
                alt={`${post.title} - Slide ${currentSlide + 1}`}
                fill
                className="lightbox-image"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          {post.slides.length > 1 && (
            <>
              {currentSlide > 0 && (
                <button className="carousel-nav prev" onClick={handlePrev} aria-label="Previous slide">
                  <ChevronLeft size={28} strokeWidth={2.5} />
                </button>
              )}
              {currentSlide < post.slides.length - 1 && (
                <button className="carousel-nav next" onClick={handleNext} aria-label="Next slide">
                  <ChevronRight size={28} strokeWidth={2.5} />
                </button>
              )}

              {/* Pagination Dots */}
              <div className="carousel-dots">
                {post.slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                  />
                ))}
              </div>

              <div className="carousel-counter">
                {currentSlide + 1} / {post.slides.length}
              </div>
            </>
          )}
        </div>

        <div className="lightbox-side-panel">
          <div className="lightbox-header">
            <div className="mini-avatar">
              <Image
                src="/assets/memoji.svg"
                alt="Profile"
                width={32}
                height={32}
                className="mini-avatar-img"
              />
            </div>
            <div className="header-info">
              <span className="mini-handle">pyndu.diaries15</span>
              <span className="mini-meta">Series Showcase</span>
            </div>
          </div>

          <div className="lightbox-body">
            <h3 className="lightbox-title">{post.title}</h3>
            <p className="lightbox-description">{post.description}</p>
            <div className="lightbox-date">{post.date}</div>
          </div>

          <div className="lightbox-footer">
            <div className="lightbox-category-tag">{post.category}</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
