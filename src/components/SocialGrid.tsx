"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { socialPosts } from "@/data/socialAssets";
import { Eye, Layers } from "lucide-react";

export default function SocialGrid() {
  return (
    <div className="social-grid" style={{ alignItems: "start" }}>
      {socialPosts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
        >
          <Link href={`/social/${post.id}`} className="social-grid-item-link">
            <div 
              className="social-grid-item"
              style={{ aspectRatio: post.aspectRatio || "1/1" }}
            >
              <div className="post-image-container">
                <Image 
                  src={post.slides[0]} 
                  alt={post.title} 
                  fill 
                  className="post-image"
                  sizes="(max-width: 768px) 33vw, 30vw"
                />
                
                {/* Carousel Indicator */}
                {post.slides.length > 1 && (
                  <div className="post-carousel-indicator">
                    <Layers size={18} strokeWidth={2.5} />
                  </div>
                )}

                <div className="post-overlay">
                  <div className="post-overlay-content">
                    <Eye size={24} color="#fff" strokeWidth={2.5} />
                    <span className="view-text">View Story</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
