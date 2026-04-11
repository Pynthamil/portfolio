export interface SocialPost {
  id: string;
  title: string;
  category: string;
  slides: string[];
  description: string;
  date: string;
  aspectRatio?: string;
  themeColor: string; // Dynamic background for the case study page
}

export const socialPosts: SocialPost[] = [
  // --- ROW 1: THE INTRODUCTION ---
  {
    id: "inspiher-coming-soon",
    title: "Coming Soon: Inspiher",
    category: "Branding & Community",
    slides: ["/assets/social-media/inspiher/Coming Soon.svg"],
    description: "Teaser series for the upcoming Inspiher community initiative.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0FFF4" // Mint Green
  },
  {
    id: "what-is-inspiher",
    title: "What is Inspiher?",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/what is inspiher.svg",
      "/assets/social-media/inspiher/what is inspiher 2.svg"
    ],
    description: "An introductory series defining the mission and vision of the Inspiher initiative.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0FFF4" // Mint Green
  },
  {
    id: "inspiher-instructions",
    title: "How to Participate: Inspiher",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/Instructions a.svg",
      "/assets/social-media/inspiher/instructions b.svg",
      "/assets/social-media/inspiher/instructions c.svg"
    ],
    description: "A step-by-step guide for the community on how to engage.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0FFF4" // Mint Green
  },

  // --- ROW 2: THE SPOTLIGHT ---
  {
    id: "inspiher-topic",
    title: "Inspiher: The Session Theme",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/topic a.svg",
      "/assets/social-media/inspiher/topic b.svg"
    ],
    description: "Core topics and conceptual pillars behind the live sessions.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#FFF1EB" // Soft Peach/Orange
  },
  {
    id: "inspiher-speaker-1",
    title: "Inspiher: Speaker Spotlight 1",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/Speaker1a.svg",
      "/assets/social-media/inspiher/Speaker1b.svg"
    ],
    description: "Highlighting our premier session guest's background.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#FFF1EB" // Soft Peach/Orange
  },
  {
    id: "inspiher-speaker-3",
    title: "Inspiher: Speaker Spotlight 3",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/Speaker3a.svg",
      "/assets/social-media/inspiher/Speaker3b.svg",
      "/assets/social-media/inspiher/Speaker3c.svg"
    ],
    description: "Continuing the speaker narrative with Series 3 insights.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#FFF1EB" // Soft Peach/Orange
  },

  // --- ROW 3: THE DEEP DIVE ---
  {
    id: "inspiher-cover",
    title: "Inspiher: Session Reveal",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/Cover 2a.svg",
      "/assets/social-media/inspiher/About session.svg"
    ],
    description: "Conceptual cover and session briefing.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0F4FF" // Soft Blue
  },
  {
    id: "inspiher-muskan-session",
    title: "Inspiher Spotlight: Muskan Agarwal",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/Muskan Agarwal final.svg",
      "/assets/social-media/inspiher/about session slide 1.svg",
      "/assets/social-media/inspiher/about session slide 2.svg"
    ],
    description: "Featuring Muskan Agarwal and an overview of her session themes.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0F4FF" // Soft Blue
  },
  {
    id: "inspiher-after-session",
    title: "Expert Perspectives",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/About Speaker1.svg",
      "/assets/social-media/inspiher/About Speaker2.svg"
    ],
    description: "Perspectives and deep-dives from our expert panel.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0F4FF" // Soft Blue
  },

  // --- ROW 4+: THE ARCHIVE ---
  {
    id: "inspiher-session-details",
    title: "About the Session",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/about session slide 1.svg",
      "/assets/social-media/inspiher/about session slide 2.svg"
    ],
    description: "Technical briefing and thematic overview.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0F4FF" // Soft Blue
  },
  {
    id: "inspiher-speaker-narrative",
    title: "Speaker Narrative Series",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/about speaker slide 1.svg",
      "/assets/social-media/inspiher/about speaker slide 2.svg",
      "/assets/social-media/inspiher/about speaker slide 3.svg"
    ],
    description: "Professional deep-dives and design empathy narratives.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#FFF1EB" // Soft Peach
  },
  {
    id: "inspiher-insights-3",
    title: "Campaign Insights: Series 3",
    category: "Branding & Community",
    slides: [
      "/assets/social-media/inspiher/insights 3.1.svg",
      "/assets/social-media/inspiher/insights 3.2.svg",
      "/assets/social-media/inspiher/insights 3.3.svg"
    ],
    description: "Strategic and visual foundations of the campaign.",
    date: "January 2026",
    aspectRatio: "2/3",
    themeColor: "#F0F4FF" // Soft Blue
  },

  // --- PROJECT ARCHIVE ---
  {
    id: "miu-exploration-1",
    title: "Miu: Chromatic Evolution",
    category: "Product Rebranding",
    slides: [
      "/assets/social-media/miu1-blue.svg",
      "/assets/social-media/miu1-green.svg",
      "/assets/social-media/miu1-orange.svg",
      "/assets/social-media/miu1-pink.svg",
      "/assets/social-media/miu1-purple.svg",
      "/assets/social-media/miu1-red.svg"
    ],
    description: "Deep dive into the Miu chromatic system.",
    date: "February 2026",
    themeColor: "#F0F4FF" // Soft Blue
  },
  {
    id: "miu-exploration-2",
    title: "Miu Interface Systems",
    category: "Product Architecture",
    slides: [
      "/assets/social-media/Mui2-cover.svg",
      "/assets/social-media/Mui2-mvp.svg",
      "/assets/social-media/Mui2-repo.svg",
      "/assets/social-media/Mui2-userflow.svg"
    ],
    description: "Architecture and patterns of the Luma rebranded ecosystem.",
    date: "February 2026",
    themeColor: "#F0F4FF" // Soft Blue
  },
  {
    id: "dear-rust",
    title: "Dear Rust: A Visual Narrative",
    category: "Experimental Design",
    slides: [
      "/assets/social-media/dear-rust1.svg",
      "/assets/social-media/dear-rust2.svg",
      "/assets/social-media/dear-rust3.svg",
      "/assets/social-media/dear-rust4.svg",
      "/assets/social-media/dear-rust5.svg"
    ],
    description: "Technical narrative and Rust visual stem exploration.",
    date: "February 2026",
    themeColor: "#FDF2F8" // Soft Pink/Lavender
  },
  {
    id: "codedex-visuals",
    title: "Codédex Branding & Narrative",
    category: "Social Media Design",
    slides: [
      "/assets/social-media/codedex1.1.svg",
      "/assets/social-media/codedex1.2.svg",
      "/assets/social-media/codedex1.3.svg",
      "/assets/social-media/codedex1.4.svg"
    ],
    description: "Visual logic for high-impact technical storytelling.",
    date: "April 2026",
    themeColor: "#FFF1EB" // Soft Peach
  },
  {
    id: "luma-exploration-1",
    title: "Luma Visual Explorer vol. 1",
    category: "Interface Design",
    slides: [
      "/assets/social-media/luma1.1.svg",
      "/assets/social-media/luma1.2.svg",
      "/assets/social-media/luma1.3.svg",
      "/assets/social-media/luma1.4.svg"
    ],
    description: "Experimental interface foundations.",
    date: "March 2026",
    themeColor: "#FFF1EB" // Soft Peach
  },
  {
    id: "luma-exploration-2",
    title: "Luma Visual Explorer vol. 2",
    category: "Interface Design",
    slides: [
      "/assets/social-media/luma2.1.svg",
      "/assets/social-media/luma2.2.svg",
      "/assets/social-media/luma2.3.svg",
      "/assets/social-media/luma2.4.svg",
      "/assets/social-media/luma2.5.svg",
      "/assets/social-media/luma2.6.svg",
      "/assets/social-media/luma2.7.svg"
    ],
    description: "Hardware-inspired UI containers.",
    date: "March 2026",
    themeColor: "#FFF1EB" // Soft Peach
  }
];
