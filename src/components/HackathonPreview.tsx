"use client";

import React from "react";
import ProjectPreviewSection from "./ProjectPreviewSection";
import BlogPreview from "./BlogPreview";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import Image from "next/image";

export default function HackathonPreview() {
  const dashboardCards = [
    { id: "landing", image: "/assets/hack-portal/landing-page.svg", title: "Landing Page" },
    { id: "profile", image: "/assets/hack-portal/profile.svg", title: "Participant Profile" },
    { id: "projects", image: "/assets/hack-portal/profile-projects.svg", title: "Team Dashboard" },
    { id: "leaderboard", image: "/assets/hack-portal/leaderboard.svg", title: "Live Leaderboard" },
  ];

  const submissionCards = [
    { id: "details", image: "/assets/hack-portal/hack-details.svg", title: "Event Details" },
    { id: "submission", image: "/assets/hack-portal/submission.svg", title: "Active Submission" },
    { id: "track", image: "/assets/hack-portal/track-submission.svg", title: "Track Progress" },
  ];

  return (
    <div className="space-y-4">
      {/* 1. Core Event Experience */}
      <ProjectPreviewSection
        title="Event Ecosystem"
        description="The concept proposes a centralized information layer designed to support hundreds of participants through real-time updates and seamless team management. The interface prioritizes high-stress usability, aiming to make critical event data immediate and accessible."
        bgColor="transparent"
        containerClassName="p-0 overflow-hidden relative"
      >
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: "radial-gradient(circle at 10% 10%, rgba(255,255,255,0.7) 0%, transparent 40%), linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #F5F3FF 100%)" 
          }} 
        />
        <div className="relative z-10 w-full h-[400px] md:h-[650px] [&_.scroll-stack-inner]:!px-4 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
          <ScrollStack
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="10%"
            baseScale={0.95}
          >
            {dashboardCards.map((card) => (
              <ScrollStackItem
                key={card.id}
                itemClassName="!h-auto w-full max-w-[1400px] mx-auto aspect-[4/3] md:aspect-video !p-0 !border-0 overflow-hidden rounded-md md:rounded-lg relative !shadow-none"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                  priority={card.id === "landing"}
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </ProjectPreviewSection>

      {/* 2. Participation Lifecycle */}
      <ProjectPreviewSection
        title="Participation Lifecycle"
        description="Designed to manage the complexity of team-based submissions. The proposed workflow imagines a friction-free transition from registration to final project tracking, intended to preserve participant mental energy for the creative work."
        bgColor="transparent"
        containerClassName="p-0 overflow-hidden relative"
      >
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            background: "radial-gradient(circle at 90% 10%, rgba(255,255,255,0.6) 0%, transparent 50%), linear-gradient(225deg, #EEF2FF 0%, #E0E7FF 50%, #FAF5FF 100%)" 
          }} 
        />
        <div className="relative z-10 w-full h-[400px] md:h-[650px] [&_.scroll-stack-inner]:!px-4 sm:[&_.scroll-stack-inner]:!px-4 md:[&_.scroll-stack-inner]:!px-10">
          <ScrollStack
            itemDistance={100}
            itemScale={0.02}
            itemStackDistance={40}
            stackPosition="10%"
            baseScale={0.95}
          >
            {submissionCards.map((card) => (
              <ScrollStackItem
                key={card.id}
                itemClassName="!h-auto w-full max-w-[1400px] mx-auto aspect-[4/3] md:aspect-video !p-0 !border-0 overflow-hidden rounded-md md:rounded-lg relative !shadow-none"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </ProjectPreviewSection>

      {/* 3. Community Space */}
      <BlogPreview
        title="Asynchronous Community"
        description="The concept proposes 'Hack Cafe' — a digital space conceptualized for casual interaction and community building. The design aims to balance the intensity of competition with modular social layers intended to foster peer-to-peer networking."
        imageSrc="/assets/hack-portal/hack-cafe.svg"
        alt="Hack Cafe Interface Concept"
        bgColor="transparent"
        childrenBackground={
          <div 
            className="absolute inset-0 z-0" 
            style={{ 
              background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7) 0%, transparent 60%), linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #FAE8FF 100%)" 
            }} 
          />
        }
      />
    </div>
  );
}
