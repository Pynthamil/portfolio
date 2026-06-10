import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productDesignProjects, codingProjects } from "@/data/projectsData";
import TUIHero from "@/components/TUIHero";
import TUITabSwitcher from "@/components/TUITabSwitcher";

import TUIStackedPreview from "@/components/TUIStackedPreview";
import BlogPreview from "@/components/BlogPreview";
import LumaPreview from "@/components/LumaPreview";
import BlogStackedPreview from "@/components/BlogStackedPreview";
import SemanticPreview from "@/components/SemanticPreview";
import BlogColorPalette from "@/components/displays/BlogColorPalette";
import CraftrStackedPreview from "@/components/CraftrStackedPreview";
import RoasterPreview from "@/components/RoasterPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import HackathonPreview from "@/components/HackathonPreview";

/* ------------------------------------------------------------------ */
/*  Data model                                                        */
/* ------------------------------------------------------------------ */
type ProjectSection = {
  heading: string;
  body: string;
};

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  imageBg?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack?: string[];
  sections: ProjectSection[];
  outro: string;
};

/* ------------------------------------------------------------------ */
/*  Project content                                                   */
/* ------------------------------------------------------------------ */
const projects: Record<string, ProjectData> = {
  "my-blog": {
    title: "My Blog",
    subtitle: "A blog for my thoughts and ideas",
    description:
      "The personal blog platform focusing on performance, minimalism, and a fluid user experience. Designed to showcase both technical articles and casual musings in a distraction-free environment.",
    heroImage: "/assets/project-cards/my-blog.svg",
    imageBg: "#3b82f6",
    liveUrl: "https://my-blog-tan-tau.vercel.app",
    githubUrl: "https://github.com/Pynthamil/my-blog",
    techStack: ["Next.js", "TypeScript", "Supabase", "MDX", "Tailwind CSS"],
    sections: [
      {
        heading: "Local MDX Content Pipeline",
        body: "Posts live as local MDX files — no external CMS, no API calls, no rate limits. Each file is co-located with its metadata via frontmatter. At build time, Next.js reads and compiles them directly, so the content is always in sync with the codebase. Total ownership, zero dependency on third-party services.",
      },
      {
        heading: "Engagement Without a Backend",
        body: "Views and likes are tracked in real-time using Supabase. Each post has its own row — the like action is debounced client-side and written directly to the Supabase table via a lightweight API route. No auth required. It just works, quietly, in the background.",
      },
      {
        heading: "Static Generation + ISR",
        body: "Every post page is statically generated at build time using Next.js. For new posts, Incremental Static Regeneration kicks in — pages revalidate in the background without a full rebuild. This gives blog-speed load times with near-zero cold starts, even as the content grows.",
      },
      {
        heading: "Dark Mode as a First-Class Feature",
        body: "Dark mode isn't an afterthought — it's a core part of the reading experience. The theme is detected from system preferences and persisted in localStorage. The transition between modes is smooth, with CSS custom properties doing the heavy lifting to avoid a flash of unstyled content.",
      },
      {
        heading: "Search & Discovery",
        body: "Search is powered entirely client-side — no external service needed. Posts are indexed at build time into a lightweight JSON manifest, and filtering happens in real-time as you type. Tags let you slice across content by topic, with each tag having its own shareable URL.",
      },
      {
        heading: "Performance & SEO",
        body: "The site scores 95+ on Lighthouse across all metrics. Every post gets proper Open Graph images, JSON-LD structured data, and a canonical URL. Images are served via Next.js's optimized pipeline. An RSS feed is included for readers who still prefer their feed reader.",
      },
    ],
    outro:
      "This blog is a living project — actively written, designed, and engineered. It's where I work on writing clearly about technical topics, which is honestly one of the hardest skills in software engineering.",
  },

  "semantic-email": {
    title: "Semantic Email Intelligence",
    subtitle: "A Second Brain for your Emails",
    description:
      "An advanced email client concept that uses natural language processing to categorize, prioritize, and extract actionable insights from your inbox automatically.",
    heroImage: "/assets/project-cards/semantic-email.svg",
    imageBg: "#1e3a8a",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI"],
    sections: [
      {
        heading: "Meaning-Based Retrieval",
        body: "Instead of keyword matching, the design proposes a retrieval experience based on semantic embeddings. This aims to simplify the user's mental model by allowing information access through conceptual similarity and intent mapping.",
      },
      {
        heading: "Smart Partitioning",
        body: "The design imagines grouping communication by conceptual intent rather than rigid folders. The link between conversations, tasks, and follow-ups is intended to be surfaced contextually to support intuitive thinking and faster decision-making.",
      },
      {
        heading: "Privacy as Trust",
        body: "Data ownership is framed as a core UX principle. The architectural intent ensures that processing is designed with user control at the center, building trust through transparency and secure memory-based ephemeral workflows.",
      },
    ],
    outro:
      "This design exploration imagines how a shift in perception from email as a task to email as a knowledge system could redefine our relationship with digital communication.",
  },

  "terminal-browser": {
    title: "Terminal Browser",
    subtitle: "A browser that runs in the terminal",
    description:
      "A text-based web browser built for developers. Navigate the web without leaving your command line interface, with full keyboard navigation and raw text parsing.",
    liveUrl: "https://my-blog-tan-tau.vercel.app",
    heroImage: "/assets/project-cards/terminal-browser.svg",
    imageBg: "#10b981",
    githubUrl: "#",
    sections: [
      {
        heading: "Rendering Intent",
        body: "The concept proposes a pipeline designed to translate complex HTML and CSS into clean, terminal-adaptive output. The architecture aims to support block elements and inline formatting while ensuring the layout remains readable across varying terminal dimensions.",
      },
      {
        heading: "Keyboard Native UX",
        body: "Interaction design centers on keyboard-first logic. By proposing vim-style bindings and shortcut-driven navigation, the interface aims to eliminate the friction of mouse dependency, allowing for a seamless transition between coding and browsing.",
      },
      {
        heading: "Cognitive Efficiency",
        body: "The minimal interface philosophy is intended to shield the user from the attention-grabbing patterns of the modern web. The design focuses on content hierarchy, aiming to surface relevant information while hiding distractions like ads and complex layouts.",
      },
    ],
    outro:
      "Terminal Browser is an exploration into how browsing could feel when constrained by the terminal environment. It conceptualizes a world where the interface disappears, leaving only the information and the user's intent.",
  },

  luma: {
    title: "Luma",
    subtitle: "An AI-assisted error management system",
    description:
      "An intelligent error tracking dashboard that not only logs exceptions but uses AI to suggest immediate fixes and traces root causes across microservices.",
    heroImage: "/assets/project-cards/luma.svg",
    imageBg: "#ef4444",
    techStack: ["Vue.js", "Python", "Redis", "Elasticsearch"],
    sections: [
      {
        heading: "Intelligent Grouping",
        body: "The concept proposes grouping errors based on conceptual similarity rather than identical logs. This design intent aims to solve the noise reduction problem, helping teams prioritize root causes instead of triaging symptoms through a mental model simplification process.",
      },
      {
        heading: "Meaning-Based Analysis",
        body: "An exploration into translating cryptic technical failures into plain language. The design aims to support both junior and senior developers by providing contextual guidance and explainable fix proposals designed to reduce the mental effort of debugging.",
      },
      {
        heading: "Seamless Integration",
        body: "The proposal conceptualizes a frictionless adoption path where error insights flow directly into existing developer tools. The design assumes a future where observability dashboards and messaging platforms share a unified, context-aware information layer.",
      },
    ],
    outro:
      "Luma conceptualizes a world where production issues are approachable for the entire team, aiming to transform error management from a specialized burden into a shared, context-aware workflow that preserves developer focus.",
  },

  "resume-roaster": {
    title: "Resume Roaster",
    subtitle: "AI-powered resume roasting platform",
    description:
      "A fun, interactive tool that uses AI to brutally (but constructively) roast your resume, highlighting generic phrases, formatting errors, and giving actionable advice to stand out.",
    heroImage: "/assets/project-cards/resume-roaster.svg",
    imageBg: "#f97316",
    liveUrl: "#",
    sections: [
      {
        heading: "The Roasting Engine",
        body: "The core interaction centers around opinionated AI critique. The system evaluates formatting quality, content strength, keyword relevance, and structural clarity. The voice is intentionally confident to reduce ambiguity in feedback interpretation. The goal is not politeness, but clarity that supports measurable improvement.",
      },
      {
        heading: "Actionable Feedback",
        body: "Each critique includes concrete rewrite suggestions that demonstrate stronger phrasing and clearer impact. Before-and-after comparisons visualize improvement and reinforce learning patterns users can apply independently in future iterations. The product focuses on teaching users how to think about resume writing, not just correcting individual lines.",
      },
      {
        heading: "Privacy & Trust",
        body: "Resumes contain sensitive personal data. Files are processed ephemerally in memory and are not stored or reused for model training. The system architecture prioritizes privacy by design, ensuring users maintain control over their information.",
      },
    ],
    outro:
      "Resume Roaster demonstrates how personality-driven interfaces can increase engagement without compromising usability. By combining structured critique with a distinct voice, the product encourages users to confront weak signals in their professional narrative and iterate quickly. The result is a tool that makes improvement feel immediate, observable, and repeatable.",
  },

  "acm-hackathon": {
    title: "ACM Hackathon Portal",
    subtitle: "A website for ACM-VIT's Hackathon",
    description:
      "The official portal for a massive university hackathon. Handles user registration, team formation, project submissions, and live announcements over a 48-hour event window.",
    heroImage: "/assets/project-cards/acm-hackathon-portal.svg",
    imageBg: "#7c3aed",
    githubUrl: "#",
    sections: [
      {
        heading: "Cohesion by Design",
        body: "The proposed registration and team-building flow is intended to reduce the administrative load on participants. The concept explores automated verification and role-based discovery, aiming to help teams form and validate ideas faster during the initial critical hours of competition.",
      },
      {
        heading: "Dynamic Event Stream",
        body: "The architecture proposes a live information dashboard designed to surface critical updates, schedule shifts, and mentor availability. Interaction logic centers on immediate comprehension, aiming to provide a calm navigation experience in a dense, fast-moving environment.",
      },
      {
        heading: "Aesthetic Momentum",
        body: "The visual system is conceptualized to maintain excitement throughout the event. Vibrant typographic systems, responsive hierarchies, and modular layouts aim to create a sense of shared purpose and momentum while ensuring the interface remains accessible across all devices.",
      },
    ],
    outro:
      "This concept explores the role of specialized software in facilitating high-stakes creative collaboration. By reimagining the hackathon portal as a context-aware ecosystem, the design aims to transform complex event logistical hurdles into seamless participant successes.",
  },

  "craftr-docs": {
    title: "Craftr Docs",
    subtitle: "A conceptual exploration of expressive documentation",
    description:
      "Documentation tools today often force a compromise between structured information and creative freedom. Craftr Docs explores a hybrid model intended to combine the modular logic of block-based editors with the expressive control of design software.",
    heroImage: "/assets/project-cards/craftr-docs.svg",
    imageBg: "#f0f0f0",
    sections: [
      {
        heading: "Modular Logic",
        body: "The architecture proposes a system where every content unit is an independent, rearrangeable block. This design intent aims to support nonlinear thinking, allowing for spatial organization that reflects the user's mental model rather than a fixed template.",
      },
      {
        heading: "Spatial Organization",
        body: "Designed to dissolve the boundary between writing and layout. The concept explores a block-based environment intended to allow users to manipulate information spatially, treating the document as a flexible surface rather than a vertical stream.",
      },
      {
        heading: "Contextual Awareness",
        body: "An exploration into real-time collaboration that prioritizes shared context without disrupting individual focus. The design conceptualizes presence handles and inline discussions as lightweight layers intended to preserve flow during collective efforts.",
      },
    ],
    outro:
      "Craftr Docs explores how documentation tools could evolve beyond utility into creative playgrounds. By reimagining the document as a modular workspace, the concept aims to provide a more natural environment for both structured thinking and fluid expression.",
  },

  portfolios: {
    title: "Portfolios",
    subtitle: "A collection of portfolios I've designed and built",
    description:
      "An interactive gallery showcasing the evolution of my personal branding and portfolio designs over the years. A study in iterations, shifting trends, and refining the craft of digital storytelling.",
    heroImage: "/assets/project-cards/portfolios.svg",
    imageBg: "#6b7280",
    sections: [
      {
        heading: "v1 Expressionist Layer",
        body: "The first generation investigates a personality-forward aesthetic that prioritizes expressive visual storytelling. The design explores high-saturation palettes and botanical motifs to create an emotional connection with the user. Interaction logic focuses on aesthetic-driven hierarchy, utilizing nostalgic elements to define a distinct personal identity.",
      },
      {
        heading: "v2 Terminal Directive",
        body: "The second major iteration conceptualizes a technical, workspace-inspired layout focused on developer-native environments. This direction explores aggressive grid structures and bento-style information clusters, aiming to bridge the gap between creative fluidity and high-density technical precision through high-contrast navigation.",
      },
      {
        heading: "v3 Speculative Fragments",
        body: "An abandoned experimental direction that investigated industrial minimalism and high-contrast focused states. While stopped short of completion, these fragments conceptualize a transition toward desaturated surfaces and neon lime accents, preserved as an architectural archeology of a path that was ultimately paused.",
      },
      {
        heading: "Design Philosophy",
        body: "Interface design begins with the core narrative. Visual systems should provide a clear framework that supports content rather than competing with it. My approach emphasizes typography as a primary communication tool, using spacing rhythm and intuitive interaction patterns to guide user attention naturally.",
      },
      {
        heading: "Process Reflection",
        body: "Iteration allows for testing layout logic and interaction pacing without external constraints. Each version represents a snapshot of design thinking, investigating how visual structure influences perception and memorability.",
      },
      {
        heading: "Iterative Evolution",
        body: "The progression across versions reveals a shift from strict systematic rules to more expressive workspace metaphors. This constant refinement of visual hierarchy and structural restraint informs a clearer understanding of how to balance personality with functional clarity.",
      },
    ],
    outro:
      "Portfolio design provides a space to explore new layout systems and interaction ideas without external constraints. Each iteration contributes to a clearer understanding of how visual structure influences perception.",
  },
};

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */
export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  const currentHref = `/projects/${slug}`;
  const navigationList = [
    "/projects/my-blog",
    "/projects/semantic-email",
    "/projects/terminal-browser",
    "/projects/luma",
    "/projects/resume-roaster",
    "/projects/acm-hackathon",
    "/projects/craftr-docs",
    "/projects/portfolios",
    "/coding/focus-fuel",
    "/coding/codedex-wrapped",
    "/coding/semantic-parser"
  ];
  const currentIndex = navigationList.indexOf(currentHref);
  const allProjects = [...productDesignProjects, ...codingProjects];

  let nextIndex = (currentIndex + 1) % navigationList.length;
  let nextHref = navigationList[nextIndex];
  let nextProjectCard = allProjects.find(p => p.href === nextHref);
  let nextLimit = navigationList.length;
  while ((!nextProjectCard || nextProjectCard.locked) && nextLimit > 0) {
    nextIndex = (nextIndex + 1) % navigationList.length;
    nextHref = navigationList[nextIndex];
    nextProjectCard = allProjects.find(p => p.href === nextHref);
    nextLimit--;
  }

  let prevIndex = (currentIndex - 1 + navigationList.length) % navigationList.length;
  let prevHref = navigationList[prevIndex];
  let prevProjectCard = allProjects.find(p => p.href === prevHref);
  let prevLimit = navigationList.length;
  while ((!prevProjectCard || prevProjectCard.locked) && prevLimit > 0) {
    prevIndex = (prevIndex - 1 + navigationList.length) % navigationList.length;
    prevHref = navigationList[prevIndex];
    prevProjectCard = allProjects.find(p => p.href === prevHref);
    prevLimit--;
  }

  const hasCustomSections = ["my-blog", "luma", "acm-hackathon", "semantic-email", "resume-roaster", "craftr-docs", "terminal-browser", "portfolios"].includes(slug);

  const startIdx = hasCustomSections ? 0 : 1;
  const remainingSections = project.sections.slice(startIdx);
  const half = Math.ceil(remainingSections.length / 2);
  const approachSections = remainingSections.slice(0, half);
  const outcomesSections = remainingSections.slice(half);

  return (
    <main>
      <div className="project-detail-wrapper fade-up">
        {/* ---- Header ---- */}
        <div className="project-detail-header">
          <div className="project-detail-text">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-subtitle">{project.subtitle}</p>
            <span className="project-type-tag tag-design">Product Design</span>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="project-detail-link-btn"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="15" 
                  height="15" 
                  fill="currentColor" 
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
            )}
            
            {project.liveUrl && slug === "my-blog" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="project-detail-link-btn"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>


        {/* ---- Section 1: Overview ---- */}
        <div id="overview" className="scroll-mt-24">
          {/* ---- Intro ---- */}
          <div className="project-detail-intro">
            {slug === "my-blog" && (
              <p>
                I wanted a space that felt personal — somewhere I could write about things I'm learning, projects I'm building, and ideas I'm exploring. Most blogging platforms felt too generic, so I built my own from scratch with a focus on reading experience and minimal design.
              </p>
            )}
            {slug === "semantic-email" && (
              <p>
                Email workflows today are defined by cognitive overload and information retrieval friction. We spend significant mental effort sorting through noise to find what matters. Semantic Email Intelligence conceptualizes a shift from message lists to a knowledge-driven interface.
                <br /><br />
                The design explores how semantic understanding can transform the inbox into an organized system that surfaces relevant context at the right time. By imagining a future where AI supports decision-making rather than replacing user agency, the proposal aims to reduce the mental load of managing digital communication.
              </p>
            )}
            {slug === "terminal-browser" && (
              <p>
                What if the web felt as native as your command line? Terminal Browser explores a future where web browsing is stripped of visual noise and distilled into a purely functional text-based experience.
                <br /><br />
                This concept imagines a workflow where developers can access documentation, research, and technical articles without breaking their terminal stream. By conceptualizing the web as structured text, the design aims to reduce the cognitive load associated with modern graphical browsers while prioritizing speed and focus.
              </p>
            )}
            {slug === "luma" && (
              <p>
                Production environments are inherently chaotic. When errors occur, the resulting noise and repetition can lead to severe alert fatigue and exhausted triage workflows. Luma conceptualizes a shift from raw log aggregation to a decision-support system designed to improve signal clarity.
                <br /><br />
                The design explores how AI can group and explain complex errors to reduce cognitive load in high-stress environments. By imagining a future where technical issues are translated into understandable language and surfacing potential root causes contextually, the proposal aims to support faster, more confident decision-making for the entire team.
              </p>
            )}
            {slug === "resume-roaster" && (
              <p>
                Getting meaningful feedback on a resume is surprisingly difficult. Peer reviews are often overly polite, while professional services can be inaccessible or slow.
                <br /><br />
                Resume Roaster explores how AI can deliver fast, structured, and genuinely useful critique. The product combines natural language analysis with opinionated heuristics to surface weak phrasing, missing impact, and formatting issues that reduce hiring outcomes.
                <br /><br />
                The experience balances honesty with usability. Feedback is direct, specific, and designed to guide iteration rather than overwhelm.
              </p>
            )}
            {slug === "acm-hackathon" && (
              <p>
                Hackathon environments are characterized by high-intensity coordination and tight feedback loops. The ACM Hackathon Portal conceptualizes a unified platform designed to streamline the complexities of registration, team synergy, and real-time event navigation.
                <br /><br />
                The design explores how a centralized information layer can reduce the friction of large-scale competitive events. By imagining a future where participant workflows are handled ephemerally and contextually, the proposal aims to preserve creative energy and foster deeper networking within technical communities.
              </p>
            )}
            {slug === "craftr-docs" && (
              <p>
                Documentation tools today often force a compromise between structured information and creative freedom. Craftr Docs explores a hybrid model intended to combine the modular logic of block-based editors with the expressive control of design software.
                <br /><br />
                By conceptualizing the document as an expansive workspace rather than a rigid page, the design aims to reduce the friction of structuring complex ideas. The proposal imagines a future where documentation is both a tool for thinking and a medium for high-fidelity communication, balancing progressive complexity with intuitive, fast-access interaction patterns.
              </p>
            )}
            {slug === "portfolios" && (
              <p>
                Personal websites serve as a controlled environment for testing structural logic and visual rhythm. This collection documents a multi-year evolution of my personal design language, moving from systematic component libraries to high-density workspace aesthetics and exploratory archival transitions.
              </p>
            )}
            {!hasCustomSections && (
              <p>{project.description}</p>
            )}
          </div>

          {/* ---- Tech stack ---- */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="project-detail-tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="project-detail-tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ---- Hero image ---- */}
        {project.heroImage && (
          <div className="project-detail-preview">
            <div 
              className="project-detail-preview-inner"
              style={{ aspectRatio: "4/3", minHeight: "600px", background: "transparent" }}
            >
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                style={{ objectFit: "cover", objectPosition: "top center", transform: "scale(1.12)" }}
                priority
              />
            </div>
          </div>
        )}

        {/* ---- Section 2: Design (Custom or first standard section) ---- */}
        <div id="design" className="scroll-mt-24">
          {slug === "my-blog" && (
            <>
              <div className="project-detail-section" style={{ marginBottom: "32px" }}>
                <h2 className="project-detail-section-title">Design</h2>
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Reading Experience</h2>
                <p className="project-detail-section-body">Designed for focus and clarity. The interface adapts to provide the best reading environment for long-form content.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/blog1.webp"
                  alt="Blog Reader Interface"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Dynamic Article Covers</h2>
                <p className="project-detail-section-body">A set of uniquely designed vibrant covers crafted to capture attention and set the energetic mood.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 w-full detail-breakout">
                  <img loading="lazy" decoding="async" src="/assets/blog/banner1.webp" alt="Cover 1" className="w-full h-full object-cover rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300 aspect-video border border-black/10" />
                  <img loading="lazy" decoding="async" src="/assets/blog/banner2.webp" alt="Cover 2" className="w-full h-full object-cover rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300 aspect-video border border-black/10" />
                  <img loading="lazy" decoding="async" src="/assets/blog/banner3.webp" alt="Cover 3" className="w-full h-full object-cover rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300 aspect-video border border-black/10" />
                  <img loading="lazy" decoding="async" src="/assets/blog/banner4.webp" alt="Cover 4" className="w-full h-full object-cover rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300 aspect-video border border-black/10" />
                </div>
              </div>

              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Color Palette</h2>
                <p className="project-detail-section-body">Carefully selected thematic colors that evoke a soft but vibrant energy, preventing eye strain during long reading sessions.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/color-myblg.webp"
                  alt="Blog Color Palette"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout border border-black/10"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Textured Backgrounds</h2>
                <p className="project-detail-section-body">Subtle background textures add depth and warmth, helping combat pure white harshness while keeping the content feeling grounded.</p>
                <div className="w-full mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)] bg-white dark:bg-black/20">
                  <img loading="lazy" decoding="async"
                    src="/assets/blog/blog-bg.webp"
                    alt="Blog Background Aesthetics"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="project-detail-section" style={{ marginTop: "48px", marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Light Mode</h2>
                <p className="project-detail-section-body">A crisp, airy feel designed for daytime reading, ensuring high legibility and an inviting atmosphere.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/LightMode.webp"
                  alt="Light Mode"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Dark Mode</h2>
                <p className="project-detail-section-body">A carefully crafted dark theme that reduces eye strain while maintaining vibrant accent colors for late-night focus.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/DarkMode.webp"
                  alt="Dark Mode"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Categorization with Tags</h2>
                <p className="project-detail-section-body">Posts are organized with intuitive tags, making it easy to navigate through specific topics and technical deep-dives.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/Tags.webp"
                  alt="Tags Navigation"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">All Posts Archive</h2>
                <p className="project-detail-section-body">A comprehensive archive of all writing, designed for quick scanning and easy discovery of past content.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/AllPosts.webp"
                  alt="All Posts Archive"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Blog Details Page</h2>
                <p className="project-detail-section-body">A clean, distraction-free reading experience for individual blog posts, ensuring maximum legibility.</p>
                <img loading="lazy" decoding="async"
                  src="/assets/blog/BlogDetails.webp"
                  alt="Blog Details Page"
                  className="w-full h-auto mt-4 rounded-[16px] overflow-hidden detail-breakout shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
                />
              </div>
            </>
          )}
          {slug === "luma" && (
            <LumaPreview />
          )}
          {slug === "acm-hackathon" && (
            <HackathonPreview />
          )}
          {slug === "semantic-email" && (
            <SemanticPreview />
          )}
          {slug === "resume-roaster" && (
            <RoasterPreview />
          )}
          {slug === "craftr-docs" && (
            <>
              <BlogPreview
                title="Collaborative Canvas"
                description="Designed to dissolve the boundary between writing and layout. The concept explores a block-based environment intended to allow users to manipulate information spatially, treating the document as a flexible surface rather than a vertical stream."
                imageSrc="/assets/craftr/craftr-1.svg"
                alt="Craftr Editor Interface"
              />
              <CraftrStackedPreview />
              <BlogPreview
                title="Speculative Surface Design"
                description="The concept imagines a future where document covers are not static headers but dynamic, high-fidelity surfaces. The design proposes using generative patterns and rich typography to establish an immediate aesthetic mood for every workspace."
                imageSrc="/assets/craftr/cover-block.svg"
                alt="Craftr Cover Block Design"
              />
            </>
          )}
          {slug === "terminal-browser" && (
            <>
              <TUIHero />
              <TUITabSwitcher />
              <TUIStackedPreview />
            </>
          )}
          {slug === "portfolios" && (
            <PortfolioPreview />
          )}
          {!hasCustomSections && project.sections.length > 0 && (
            <div className="project-detail-section">
              <h2 className="project-detail-section-title">{project.sections[0].heading}</h2>
              <p className="project-detail-section-body">{project.sections[0].body}</p>
            </div>
          )}
        </div>

        {/* ---- Section 3: Approach / Build / Intelligence etc ---- */}
        <div id="implementation" className="scroll-mt-24">
          {slug === "my-blog" && (
            <div className="project-detail-section" style={{ marginBottom: "32px" }}>
              <h2 className="project-detail-section-title">Build</h2>
            </div>
          )}
          {slug === "semantic-email" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "terminal-browser" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "luma" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "resume-roaster" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "acm-hackathon" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "craftr-docs" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "portfolios" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {slug === "my-blog" && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section project-sub-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
          {!hasCustomSections && approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}
        </div>

        {/* ---- Section 4: Takeaways / Privacy / Integration etc (portfolios skips this) ---- */}
        {slug !== "portfolios" && (
        <div id="results" className="scroll-mt-24">

          {slug !== "my-blog" && outcomesSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>
            </div>
          ))}

          {slug === "my-blog" && (
            <div className="project-detail-section" style={{ marginTop: "48px", marginBottom: "48px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <h2 className="project-detail-section-title" style={{ margin: 0 }}>Read my latest post</h2>
                <a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" rel="noopener noreferrer" className="next-project-capsule-btn">
                  Check out the post &rarr;
                </a>
              </div>
              <a href="https://my-blog-tan-tau.vercel.app/posts/my-first-post" target="_blank" rel="noopener noreferrer" className="block w-full">
                <img loading="lazy" decoding="async" 
                  src="https://my-blog-tan-tau.vercel.app/banners/Post1.svg" 
                  alt="print('Hello World') was not enough, so I built a blog." 
                  className="w-full h-auto rounded-[16px] overflow-hidden detail-breakout"
                  style={{ marginTop: "16px" }}
                />
              </a>
            </div>
          )}

          {/* ---- Outro ---- */}
          <div className="project-detail-outro">
            <p>{project.outro}</p>
          </div>

          {/* ---- Project Navigation Links ---- */}
          {(prevProjectCard || nextProjectCard) && (
            <div className="next-project-btn-container">
              {prevProjectCard ? (
                <Link href={prevProjectCard.href} className="next-project-capsule-btn">
                  &larr; Previous project
                </Link>
              ) : (
                <div />
              )}
              {nextProjectCard ? (
                <Link href={nextProjectCard.href} className="next-project-capsule-btn">
                  Next project &rarr;
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}
        </div>
        )}

        {/* portfolios: nav buttons after the philosophy section */}
        {slug === "portfolios" && (prevProjectCard || nextProjectCard) && (
          <div className="next-project-btn-container">
            {prevProjectCard ? (
              <Link href={prevProjectCard.href} className="next-project-capsule-btn">
                &larr; Previous project
              </Link>
            ) : (
              <div />
            )}
            {nextProjectCard ? (
              <Link href={nextProjectCard.href} className="next-project-capsule-btn">
                Next project &rarr;
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
        {slug === "portfolios" && (
          <div className="project-detail-outro">
            <p>{project.outro}</p>
          </div>
        )}
      </div>
    </main>
  );
}
