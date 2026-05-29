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
    <div className="space-y-16">
      {/* 1. Core Event Experience */}
      <ProjectPreviewSection
        title="Event Ecosystem"
        description="The concept proposes a centralized information layer designed to support hundreds of participants through real-time updates and seamless team management. The interface prioritizes high-stress usability, aiming to make critical event data immediate and accessible."
        containerClassName="p-0 overflow-hidden relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
          {dashboardCards.map((card) => (
            <div key={card.id} className="flex flex-col items-center w-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-[24px] hover:scale-[1.02] transition-transform duration-300 shadow-sm border border-gray-100"
              />
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-4">{card.title}</span>
            </div>
          ))}
        </div>
      </ProjectPreviewSection>

      {/* 2. Participation Lifecycle */}
      <ProjectPreviewSection
        title="Participation Lifecycle"
        description="Designed to manage the complexity of team-based submissions. The proposed workflow imagines a friction-free transition from registration to final project tracking, intended to preserve participant mental energy for the creative work."
        containerClassName="p-0 overflow-hidden relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
          {submissionCards.map((card) => (
            <div key={card.id} className="flex flex-col items-center w-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto rounded-[24px] hover:scale-[1.02] transition-transform duration-300 shadow-sm border border-gray-100"
              />
              <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest mt-4">{card.title}</span>
            </div>
          ))}
        </div>
      </ProjectPreviewSection>

      {/* 3. Community Space */}
      <BlogPreview
        title="Asynchronous Community"
        description="The concept proposes 'Hack Cafe' — a digital space conceptualized for casual interaction and community building. The design aims to balance the intensity of competition with modular social layers intended to foster peer-to-peer networking."
        imageSrc="/assets/hack-portal/hack-cafe.svg"
        alt="Hack Cafe Interface Concept"
      />
    </div>
  );
}
