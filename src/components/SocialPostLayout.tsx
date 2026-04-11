"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { SocialPost } from "@/data/socialAssets";
import SocialStackedSection from "./SocialStackedSection";

interface SocialPostLayoutProps {
  post: SocialPost;
}

export default function SocialPostLayout({ post }: SocialPostLayoutProps) {
  // Slides 2+ for the ScrollStack section
  const remainingSlides = post.slides.slice(1);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Immersive Page Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: `linear-gradient(to bottom, ${post.themeColor}33, ${post.themeColor}11 40%, transparent 70%)` 
        }}
      />
      {/* Minimalist Floating Nav */}
      <nav className="fixed top-0 left-0 right-0 z-[100] py-10 pointer-events-none">
        <div className="max-w-[1400px] mx-auto px-10 md:px-20 flex justify-between items-start">
          <Link 
            href="/social" 
            className="pointer-events-auto group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-black/20 hover:text-black transition-all duration-500"
          >
            <div className="w-10 h-10 rounded-full border border-black/5 bg-white/40 backdrop-blur-xl grid place-items-center transition-all group-hover:bg-white/80 group-hover:border-black/10 leading-[0] overflow-hidden">
              <ArrowLeft size={14} strokeWidth={2.5} className="block relative top-[0.5px]" />
            </div>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">Archive</span>
          </Link>
        </div>
      </nav>

      <div className="project-detail-wrapper fade-up !pt-52">
        {/* ---- Header ---- */}
        <div className="project-detail-header !mb-24">
          <div className="project-detail-text">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-black/30 mb-8 block">
              {post.category}
            </span>
            <h1 className="project-detail-title !text-6xl md:!text-9xl !mb-8 tracking-tighter">{post.title}</h1>
            <p className="project-detail-subtitle !text-xl opacity-30 font-medium tracking-tight">Digital Archive Series — {post.date}</p>
          </div>
        </div>

        {/* ---- Hero Image (Full Vertical Card) ---- */}
        <div
          className="project-detail-preview !bg-transparent !mb-32 flex flex-col items-center justify-center w-full relative group py-20 overflow-visible"
        >
          {/* Atmospheric Mesh Gradient System */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Main Project Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30 blur-[130px] rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${post.themeColor}, transparent 70%)`
              }}
            />
            {/* Secondary Ambient Accent (Top Left) */}
            <div
              className="absolute -top-[20%] -left-[10%] w-[80%] h-[80%] opacity-20 blur-[100px] rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${post.themeColor}, transparent 60%)`,
                filter: 'hue-rotate(-20deg) brightness(1.2)'
              }}
            />
            {/* Tertiary Highlight (Bottom Right) */}
            <div
              className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] opacity-15 blur-[100px] rounded-full"
              style={{
                background: `radial-gradient(circle at center, ${post.themeColor}, transparent 60%)`,
                filter: 'hue-rotate(20deg) contrast(1.1)'
              }}
            />
          </div>

          <div className="project-detail-preview-inner !h-auto !w-full flex justify-center relative z-10 !bg-transparent !border-0 shadow-none">
            <div 
              className={`relative overflow-hidden rounded-3xl md:rounded-[40px] backdrop-blur-3xl border border-white/20 transition-all duration-700 group-hover:scale-[1.02] ${post.aspectRatio !== "2/3" ? 'p-6 md:p-12' : 'p-0'}`}
              style={{ 
                width: "100%",
                maxWidth: post.aspectRatio === "2/3" ? "500px" : "620px",
                aspectRatio: post.aspectRatio || "1/1",
                background: `linear-gradient(135deg, ${post.themeColor}22, rgba(255,255,255,0.05), transparent)`
              }}
            >
              <Image
                src={post.slides[0]}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* ---- Intro ---- */}
        <div className="project-detail-intro !max-w-3xl !mb-24">
          <p className="!text-xl !leading-relaxed opacity-80">{post.description}</p>
        </div>

        {/* ---- Multi-Slide Sequence (ScrollStack) ---- */}
        {remainingSlides.length > 0 && (
          <SocialStackedSection
            slides={remainingSlides}
            title="Visual Narrative"
            description="The following sequence documents the evolution of the visual logic and thematic depth of this series."
            themeColor={post.themeColor + "30"}
            aspectRatio={post.aspectRatio}
          />
        )}

        {/* ---- Outro / Meta ---- */}
        <div className="project-detail-outro !pt-32 !pb-40 text-center">
          <div className="max-w-xl mx-auto">
            <div className="w-px h-24 bg-black/10 mx-auto mb-16" />
            <p className="text-[10px] font-black tracking-[0.3em] uppercase text-black/20 mb-12">
              Archive Segment — {post.date.split(' ').pop()}
            </p>
            <Link
              href="/social"
              className="group inline-flex items-center gap-4 text-2xl md:text-4xl font-black tracking-tighter text-black/20 hover:text-black transition-all duration-500"
            >
              <span>Back to Archive</span>
              <div className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                <ArrowLeft className="rotate-180" size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
