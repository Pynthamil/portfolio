"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SocialHeader() {
  const stats = [
    { label: "Archived Posts", value: "14" },
    { label: "Design Concepts", value: "38" },
    { label: "Visual Stems", value: "∞" }
  ];

  return (
    <header className="social-header">
      <div className="social-profile-container">
        {/* Avatar Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="social-avatar-wrapper"
        >
          <div className="social-avatar">
            <Image 
              src="/assets/memoji.svg" 
              alt="Profile" 
              width={150} 
              height={150} 
              className="avatar-img"
            />
          </div>
        </motion.div>

        {/* Info Section */}
        <div className="social-info">
          <div className="social-handle-row">
            <h2 className="social-handle">pyndu.diaries15</h2>
            <button className="social-btn-follow">Archived</button>
          </div>

          <div className="social-stats-row">
            {stats.map((stat, idx) => (
              <div key={idx} className="social-stat">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="social-bio">
            <span className="bio-name">Pynthamil Pavendan</span>
            <p className="bio-text">
              Digital product designer and developer exploring the intersection of structural logic and human experience. 
              Documenting visual archaeology and conceptual systems.
            </p>
            <Link href="/" className="bio-link">pynthamil.com</Link>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="social-tabs">
        <div className="social-tab active">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          POSTS
        </div>
        <div className="social-tab">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"></path><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
          REELS
        </div>
        <div className="social-tab">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          SAVED
        </div>
      </div>
    </header>
  );
}
