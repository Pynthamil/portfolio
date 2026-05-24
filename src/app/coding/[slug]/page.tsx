import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FocusTimerPreview from "@/components/displays/FocusTimerPreview";
import TextParserVisualizer from "@/components/displays/TextParserVisualizer";
import ProjectSidebar from "@/components/ProjectSidebar";
import { codingProjects } from "@/data/projectsData";
import BackButton from "@/components/BackButton";

type ProjectSection = {
  heading: string;
  body: string;
};

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  liveUrl?: string;
  githubUrl?: string;
  techStack?: string[];
  sections: ProjectSection[];
  outro: string;
};

const projects: Record<string, ProjectData> = {
  "focus-fuel": {
    title: "FocusFuel",
    subtitle: "A minimalist study companion and motivational developer hub with custom sprite mascots",
    description:
      "FocusFuel was born out of frustration with overly complex, notification-heavy study applications. Developers don't need distracting streaks or loud visual noise; we need pure, minimalist flow environments and a companion that respects our focus. I built FocusFuel as a high-fidelity Pomodoro study app with custom pixel-art mascots that change expressions depending on the current flow state.",
    heroImage: "/assets/project-cards/git-person.svg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"],
    sections: [
      {
        heading: "Distraction-Free Flow State",
        body: "The core design philosophy is silence. The Pomodoro timer dominates the screen with bold, ultra-refined typography, giving developers an immediate visual signal of their remaining time without flashing alerts or distracting micro-counters.",
      },
      {
        heading: "State-Based Mascot Mechanics",
        body: "To keep focus engaging, we introduced Sprout: an active green companion mascot. Sprout reads the real-time Pomodoro state to display adaptive pixel moods. When you're focusing, Sprout is focused; when you pause, Sprout takes a peaceful napping state; when your focus completes, Sprout celebrates with a custom victory dance.",
      },
    ],
    outro:
      "FocusFuel proves that motivation hubs can be extremely aesthetic, distraction-free, and functional, helping developers maintain flow state for hours at a time.",
  },

  "codedex-wrapped": {
    title: "Codédex App",
    subtitle: "Spotify-wrapped style retro arcade annual developer recap built with Framer Motion",
    description:
      "Every year, developers love to reflect on their learning journey. For the Codédex platform, we conceptualized a Spotify-wrapped style yearly recap feature. Striking a balance between playfulness and technical precision, the recaps are animated like retro-arcade games using Framer Motion and v4 Tailwind layers.",
    heroImage: "/assets/project-cards/codedex-app.svg",
    techStack: ["React 19", "Framer Motion", "Tailwind CSS v4", "Next.js", "Lucide Icons"],
    sections: [

      {
        heading: "Implementation",
        body: "Framer Motion drives the technical implementation. Staggered element entrances, custom Bezier transitions, and GPU-accelerated transforms achieve a fluid, native-feeling app flow. Tailwind layers structure modular layouts to maintain clean spacing across screens.",
      },
      {
        heading: "Results",
        body: "The recap experience yielded exceptional platform engagement, driving a substantial spike in user social shares. Optimized asset packing and static build pipelines ensure the animations load instantaneously without page weight penalties.",
      },
    ],
    outro:
      "Codédex Wrapped showcases how personality-driven UI elements and robust motion libraries can make platform analytics feel incredibly rewarding.",
  },

  "semantic-parser": {
    title: "Semantic Parser",
    subtitle: "High-performance NLP parsing pipeline transforming text streams into knowledge nodes",
    description:
      "Raw message streams, logs, and emails contain high cognitive load. Semantic Parser is a backend and frontend conceptual utility designed to parse text streams in real-time, extract mentions, tags, and datetime entities, and render them as interconnected database graph entities.",
    heroImage: "/assets/project-cards/readmeflier.svg",
    techStack: ["TypeScript", "Regular Expressions", "SVG rendering", "Tailwind CSS", "Lucide Icons"],
    sections: [
      {
        heading: "Streamlined NLP Tokenizer",
        body: "The core utility implements regex parsing and meaning extraction to isolate contextual parameters (like tag priorities, due dates, action items) as high-value, structured database attributes.",
      },
      {
        heading: "Real-time Entity Graph Linking",
        body: "To help developers visualize relationships, the parser maps output tokens to an interactive, glowing node-link SVG graph, showing data flowing through the parsing engine to structured database schemas in real-time.",
      },
    ],
    outro:
      "Semantic Parser is a masterclass in combining high-performance textual processing with highly intuitive, visual data structure rendering.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects[resolvedParams.slug];
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default async function CodingProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  const slugList = ["focus-fuel", "codedex-wrapped", "semantic-parser"];
  const currentIndex = slugList.indexOf(slug);
  const nextIndex = (currentIndex + 1) % slugList.length;
  const nextSlug = slugList[nextIndex];
  const nextProject = projects[nextSlug];
  const nextProjectCard = codingProjects.find(p => p.href === `/coding/${nextSlug}`);

  const remainingSections = project.sections;
  const half = Math.ceil(remainingSections.length / 2);
  const approachSections = remainingSections.slice(0, half);
  const outcomesSections = remainingSections.slice(half);

  return (
    <main>
      {/* Floating Sticky Navigation Sidebar */}
      <ProjectSidebar />

      <div className="project-detail-wrapper fade-up">
        {/* Go Back Link */}
        <BackButton>Back to Coding</BackButton>

        {/* ---- Header ---- */}
        <div className="project-detail-header">
          <div className="project-detail-text">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-subtitle">{project.subtitle}</p>
          </div>

          {(project.liveUrl || project.githubUrl) && (
            <a
              href={project.liveUrl || project.githubUrl}
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

        {/* ---- Hero image ---- */}
        {project.heroImage && (
          <div className="project-detail-preview">
            <div className="project-detail-preview-inner">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
            </div>
          </div>
        )}

        {/* ---- Section 1: Overview ---- */}
        <div id="overview" className="scroll-mt-24">
          <div className="project-detail-intro">
            {slug === "focus-fuel" && (
              <p>
                FocusFuel was born out of frustration with overly complex, notification-heavy study applications. Developers don&apos;t need distracting streaks or loud visual noise; <span className="highlight-pink">we need pure, minimalist flow environments</span> and a companion that <span className="highlight-pink">respects our focus</span>. I built FocusFuel as a high-fidelity Pomodoro study app with custom pixel-art mascots that change expressions depending on the current flow state.
              </p>
            )}
            {slug === "codedex-wrapped" && (
              <p>
                Every year, developers love to reflect on their learning journey. For the Codédex platform, we conceptualized a Spotify-wrapped style yearly recap feature. Striking a balance between <span className="highlight-pink">playfulness and technical precision</span>, the recaps are <span className="highlight-pink">animated like retro-arcade games</span> using Framer Motion and v4 Tailwind layers.
              </p>
            )}
            {slug === "semantic-parser" && (
              <p>
                Raw message streams, logs, and emails contain high cognitive load. Semantic Parser is a backend and frontend conceptual utility designed to parse text streams in real-time, <span className="highlight-pink">extract mentions, tags, and datetime entities</span>, and render them as <span className="highlight-pink">interconnected database graph entities</span>.
              </p>
            )}
          </div>

          {/* Tech stack */}
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

        {/* ---- Section 2: Design ---- */}
        <div id="design" className="scroll-mt-24">
          {slug === "focus-fuel" && (
            <>
              <div className="text-center mb-4" style={{ marginTop: "40px" }}>
                <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.15em", color: "#86868b", textTransform: "uppercase" }}>
                  VISUAL BRANDING & INTERACTIVE DEMO PREVIEW
                </span>
              </div>
              <div className="detail-showcase-grid">
                <div className="detail-showcase-card" style={{ minHeight: "340px", background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <svg width="120" height="120" viewBox="0 0 64 64" fill="none">
                      {/* Pot */}
                      <rect x="20" y="44" width="24" height="14" rx="2" fill="#8B4513" stroke="#1d1d1f" strokeWidth="2.5" />
                      <line x1="20" y1="48" x2="44" y2="48" stroke="#1d1d1f" strokeWidth="2.5" />
                      {/* Soil */}
                      <rect x="22" y="41" width="20" height="3" fill="#5c2e0b" />
                      {/* Stem */}
                      <path d="M32 41 Q31 24 38 20" stroke="#1d1d1f" strokeWidth="3" strokeLinecap="round" />
                      <path d="M32 41 Q31 24 38 20" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" />
                      {/* Leaves */}
                      <path d="M38 20 C46 12 40 6 36 12 C32 18 36 20 38 20 Z" fill="#22c55e" stroke="#1d1d1f" strokeWidth="2.5" strokeLinejoin="round" />
                      <path d="M32 28 C24 24 22 18 28 18 C34 18 32 26 32 28 Z" fill="#4ade80" stroke="#1d1d1f" strokeWidth="2.5" strokeLinejoin="round" />
                      {/* Eyes */}
                      <rect x="27" y="32" width="2" height="2" fill="#000" />
                      <rect x="37" y="32" width="2" height="2" fill="#000" />
                      <path d="M26 30 L29 31 M39 30 L36 31" stroke="#1d1d1f" strokeWidth="1.5" />
                      {/* Blush */}
                      <rect x="25" y="35" width="2" height="1" fill="#e0009c" />
                      <rect x="39" y="35" width="2" height="1" fill="#e0009c" />
                    </svg>
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                      <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#1d1d1f", letterSpacing: "-0.02em" }}>Meet Sprout</h3>
                      <p className="font-handwritten" style={{ fontSize: "20px", color: "#e0009c", margin: "4px 0 0", fontWeight: "600" }}>Your Pixel Companion</p>
                    </div>
                  </div>
                </div>
                <div className="detail-showcase-card" style={{ padding: "16px", background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <FocusTimerPreview />
                  </div>
                </div>
              </div>
            </>
          )}

          {slug === "semantic-parser" && (
            <>
              <div className="text-center mb-4" style={{ marginTop: "40px" }}>
                <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "0.15em", color: "#86868b", textTransform: "uppercase" }}>
                  VISUAL BRANDING & INTERACTIVE DEMO PREVIEW
                </span>
              </div>
              <div className="detail-showcase-grid">
                <div className="detail-showcase-card" style={{ minHeight: "340px", background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                    <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="10" fill="rgba(0, 240, 255, 0.15)" stroke="#00f0ff" strokeWidth="2" />
                      <circle cx="25" cy="25" r="6" fill="#ffffff" stroke="#e0009c" strokeWidth="1.5" />
                      <circle cx="75" cy="25" r="6" fill="#ffffff" stroke="#fcf003" strokeWidth="1.5" />
                      <circle cx="75" cy="75" r="6" fill="#ffffff" stroke="#30d158" strokeWidth="1.5" />
                      <circle cx="25" cy="75" r="6" fill="#ffffff" stroke="#bf5af2" strokeWidth="1.5" />
                      
                      <path d="M 31 31 L 44 44" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 69 31 L 56 44" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 69 69 L 56 56" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2 2" />
                      <path d="M 31 69 L 44 56" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="2 2" />

                      <circle cx="50" cy="50" r="32" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                    </svg>
                    <div style={{ marginTop: "20px", textAlign: "center" }}>
                      <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#1d1d1f", letterSpacing: "-0.02em" }}>Parsing Engine</h3>
                      <p className="font-handwritten" style={{ fontSize: "20px", color: "#e0009c", margin: "4px 0 0", fontWeight: "600" }}>Knowledge Nodes</p>
                    </div>
                  </div>
                </div>
                <div className="detail-showcase-card" style={{ padding: "16px", background: "linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <TextParserVisualizer />
                  </div>
                </div>
              </div>
            </>
          )}

          {slug === "codedex-wrapped" && (
            <>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Platform Features</h2>
                <img
                  src="/assets/codedex/Features.svg"
                  alt="Codédex App Features"
                  className="w-full h-auto mt-8 rounded-[24px] overflow-hidden"
                />
              </div>
              <div className="project-detail-section" style={{ marginBottom: "48px" }}>
                <h2 className="project-detail-section-title">Design</h2>
                <div className="detail-showcase-grid is-equal" style={{ marginTop: "32px", marginBottom: "24px" }}>
                  <div 
                    className="detail-showcase-card" 
                    style={{ 
                      minHeight: "400px", 
                      background: "#FEC5BA",
                      borderRadius: "24px",
                      border: "1px dashed rgba(0,0,0,0.06)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                    }}
                  >
                    {/* Insert Left Column SVG here */}
                  </div>
                  <div 
                    className="detail-showcase-card" 
                    style={{ 
                      minHeight: "400px", 
                      background: "#CADBBB",
                      borderRadius: "24px",
                      border: "1px dashed rgba(0,0,0,0.06)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                    }}
                  >
                    {/* Insert Right Column SVG here */}
                  </div>
                </div>
                <div 
                  className="detail-showcase-card is-wide-card" 
                  style={{ 
                    minHeight: "500px", 
                    background: "#D5E2EA",
                    borderRadius: "24px",
                    border: "1px dashed rgba(0,0,0,0.06)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                    marginBottom: "24px"
                  }}
                >
                  {/* Insert Full-width SVG here */}
                </div>
                <div className="detail-showcase-grid is-equal" style={{ marginTop: "24px", marginBottom: "24px" }}>
                  <div 
                    className="detail-showcase-card" 
                    style={{ 
                      minHeight: "400px", 
                      background: "#F5D6EB",
                      borderRadius: "24px",
                      border: "1px dashed rgba(0,0,0,0.06)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                    }}
                  >
                    {/* Insert Row 3 Left SVG here */}
                  </div>
                  <div 
                    className="detail-showcase-card" 
                    style={{ 
                      minHeight: "400px", 
                      background: "#FCE4C8",
                      borderRadius: "24px",
                      border: "1px dashed rgba(0,0,0,0.06)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                    }}
                  >
                    {/* Insert Row 3 Right SVG here */}
                  </div>
                </div>
                <div className="detail-showcase-grid is-equal" style={{ marginTop: "24px", marginBottom: "24px" }}>
                  <div 
                    className="detail-showcase-card" 
                    style={{ 
                      minHeight: "400px", 
                      background: "#D1E8E2",
                      borderRadius: "24px",
                      border: "1px dashed rgba(0,0,0,0.06)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                    }}
                  >
                    {/* Insert Row 4 Left SVG here */}
                  </div>
                  <div 
                    className="detail-showcase-card" 
                    style={{ 
                      minHeight: "400px", 
                      background: "#E2D4F0",
                      borderRadius: "24px",
                      border: "1px dashed rgba(0,0,0,0.06)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
                    }}
                  >
                    {/* Insert Row 4 Right SVG here */}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* ---- Section 3: Implementation ---- */}
        <div id="implementation" className="scroll-mt-24">
          {approachSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>

              {slug === "focus-fuel" && section.heading === "Distraction-Free Flow State" && (
                <div className="project-detail-section-doodle">
                  <svg viewBox="0 0 500 140" width="100%" height="100%" style={{ stroke: "#1d1d1f", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
                    <path d="M 70 70 A 45 43 0 1 1 69.9 70 Z" strokeDasharray="3 3" />
                    <path d="M 70 70 C 60 40 80 40 70 30" />
                    <path d="M 60 35 C 70 38 80 32 90 35" />
                    <path d="M 70 70 L 95 50" strokeWidth="3" />
                    
                    <path d="M 140 70 C 170 50 190 90 220 70" strokeDasharray="2 2" />
                    <path d="M 215 63 L 221 70 L 213 74" strokeWidth="2" />
                    
                    <path d="M 250 50 C 270 30 280 70 300 50 C 320 30 330 70 350 50 C 370 30 380 70 400 50" strokeWidth="2.5" stroke="#e0009c" />
                    <path d="M 260 70 C 280 50 290 90 310 70 C 330 50 340 90 360 70 C 380 50 390 90 410 70" strokeWidth="1.5" opacity="0.6" />
                    <path d="M 270 90 C 290 70 300 110 320 90 C 340 70 350 110 370 90 C 390 70 400 110 420 90" strokeWidth="1" opacity="0.3" />

                    <text x="45" y="130" style={{ fontFamily: "var(--font-caveat)", fontSize: "19px", fill: "#1d1d1f", stroke: "none", fontWeight: "bold" }}>25:00 Focus Timer</text>
                    <text x="290" y="130" style={{ fontFamily: "var(--font-caveat)", fontSize: "19px", fill: "#e0009c", stroke: "none", fontWeight: "bold" }}>Silent Flow Waves</text>
                  </svg>
                </div>
              )}

              {slug === "semantic-parser" && section.heading === "Streamlined NLP Tokenizer" && (
                <div className="project-detail-section-doodle">
                  <svg viewBox="0 0 500 130" width="100%" height="100%" style={{ stroke: "#1d1d1f", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
                    <rect x="10" y="15" width="480" height="35" rx="8" strokeDasharray="3 3" fill="rgba(0, 0, 0, 0.01)" />
                    <text x="25" y="37" style={{ fontFamily: "var(--font-sans)", fontSize: "13px", fill: "#1d1d1f", stroke: "none" }}>
                      &quot;Setup <tspan fill="#e0009c" fontWeight="bold">#onboarding</tspan> docs for <tspan fill="#00a4ef" fontWeight="bold">@alice</tspan> by <tspan fill="#f59e0b" fontWeight="bold">Friday at 5pm</tspan>&quot;
                    </text>

                    <path d="M 120 50 L 100 80" strokeDasharray="2 2" stroke="#e0009c" />
                    <path d="M 104 77 L 100 80 L 100 75" strokeWidth="2" stroke="#e0009c" />

                    <path d="M 240 50 L 250 80" strokeDasharray="2 2" stroke="#00a4ef" />
                    <path d="M 246 76 L 250 80 L 252 75" strokeWidth="2" stroke="#00a4ef" />

                    <path d="M 360 50 L 400 80" strokeDasharray="2 2" stroke="#f59e0b" />
                    <path d="M 395 76 L 400 80 L 400 74" strokeWidth="2" stroke="#f59e0b" />

                    <g transform="translate(40, 85)">
                      <rect x="0" y="0" width="110" height="30" rx="6" fill="rgba(224, 0, 156, 0.1)" stroke="#e0009c" />
                      <text x="55" y="20" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fill: "#e0009c", stroke: "none", fontWeight: "bold" }}>TAG: onboarding</text>
                    </g>

                    <g transform="translate(195, 85)">
                      <rect x="0" y="0" width="110" height="30" rx="6" fill="rgba(0, 164, 239, 0.1)" stroke="#00a4ef" />
                      <text x="55" y="20" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fill: "#00a4ef", stroke: "none", fontWeight: "bold" }}>USER: alice</text>
                    </g>

                    <g transform="translate(350, 85)">
                      <rect x="0" y="0" width="110" height="30" rx="6" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" />
                      <text x="55" y="20" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fill: "#b45309", stroke: "none", fontWeight: "bold" }}>DATE: Fri 5:00 PM</text>
                    </g>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ---- Section 4: Results ---- */}
        <div id="results" className="scroll-mt-24">
          {outcomesSections.map((section, i) => (
            <div key={i} className="project-detail-section">
              <h2 className="project-detail-section-title">{section.heading}</h2>
              <p className="project-detail-section-body">{section.body}</p>

              {slug === "focus-fuel" && section.heading === "State-Based Mascot Mechanics" && (
                <div className="project-detail-section-doodle">
                  <svg viewBox="0 0 600 140" width="100%" height="100%" style={{ stroke: "#1d1d1f", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
                    <g transform="translate(40, 15)">
                      <rect x="0" y="0" width="100" height="70" rx="12" strokeDasharray="4 4" />
                      <path d="M 50 55 C 35 55 35 35 50 35 C 65 35 65 55 50 55" fill="rgba(34, 197, 94, 0.15)" />
                      <path d="M 50 35 Q 50 20 60 22" stroke="#22c55e" strokeWidth="3" />
                      <path d="M 60 22 Q 55 15 50 20" stroke="#22c55e" strokeWidth="3" />
                      <circle cx="43" cy="45" r="2" fill="#000" />
                      <circle cx="57" cy="45" r="2" fill="#000" />
                      <path d="M 47 50 Q 50 48 53 50" />
                      <text x="50" y="90" textAnchor="middle" style={{ fontFamily: "var(--font-caveat)", fontSize: "17px", fill: "#1d1d1f", stroke: "none", fontWeight: "bold" }}>1. Focus Mode</text>
                    </g>

                    <path d="M 160 50 Q 200 30 240 50" strokeDasharray="3 3" />
                    <path d="M 235 43 L 241 50 L 233 53" strokeWidth="2" />

                    <g transform="translate(250, 15)">
                      <rect x="0" y="0" width="100" height="70" rx="12" strokeDasharray="4 4" />
                      <path d="M 50 55 C 35 55 35 40 50 40 C 65 40 65 55 50 55" fill="rgba(34, 197, 94, 0.15)" />
                      <path d="M 50 40 Q 42 30 45 28" stroke="#22c55e" strokeWidth="2" />
                      <path d="M 45 48 Q 50 48 55 48" />
                      <text x="75" y="25" style={{ fontFamily: "var(--font-sans)", fontSize: "10px", fill: "#6e6e73", stroke: "none", fontWeight: "bold" }}>Zzz</text>
                      <text x="50" y="90" textAnchor="middle" style={{ fontFamily: "var(--font-caveat)", fontSize: "17px", fill: "#1d1d1f", stroke: "none", fontWeight: "bold" }}>2. Rest State</text>
                    </g>

                    <path d="M 370 50 Q 410 30 450 50" strokeDasharray="3 3" />
                    <path d="M 445 43 L 451 50 L 443 53" strokeWidth="2" />

                    <g transform="translate(460, 15)">
                      <rect x="0" y="0" width="100" height="70" rx="12" strokeDasharray="4 4" />
                      <path d="M 50 50 C 35 50 35 30 50 30 C 65 30 65 50 50 50" fill="rgba(34, 197, 94, 0.3)" />
                      <path d="M 50 30 Q 50 15 65 15" stroke="#22c55e" strokeWidth="3" />
                      <circle cx="43" cy="38" r="3" fill="#000" />
                      <circle cx="57" cy="38" r="3" fill="#000" />
                      <path d="M 45 43 Q 50 48 55 43" stroke="#ff3b30" strokeWidth="2" />
                      <path d="M 20 20 L 25 25 M 80 20 L 75 25 M 85 45 L 80 43" stroke="#fcf003" strokeWidth="2" />
                      <text x="50" y="90" textAnchor="middle" style={{ fontFamily: "var(--font-caveat)", fontSize: "17px", fill: "#22c55e", stroke: "none", fontWeight: "bold" }}>3. Celebrate!</text>
                    </g>
                  </svg>
                </div>
              )}

              {slug === "semantic-parser" && section.heading === "Real-time Entity Graph Linking" && (
                <div className="project-detail-section-doodle">
                  <svg viewBox="0 0 500 160" width="100%" height="100%" style={{ stroke: "#1d1d1f", fill: "none", strokeWidth: 2, strokeLinecap: "round" }}>
                    <circle cx="250" cy="80" r="16" fill="rgba(0, 240, 255, 0.15)" stroke="#00b0ff" strokeWidth="3" />
                    <text x="250" y="84" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "9px", fill: "#0070a0", stroke: "none", fontWeight: "bold" }}>ROOT</text>

                    <circle cx="150" cy="40" r="12" fill="#ffffff" stroke="#e0009c" />
                    <text x="150" y="44" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "8px", fill: "#e0009c", stroke: "none", fontWeight: "bold" }}>TAG</text>

                    <circle cx="140" cy="120" r="12" fill="#ffffff" stroke="#ff9f0a" />
                    <text x="140" y="124" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "8px", fill: "#ff9f0a", stroke: "none", fontWeight: "bold" }}>USER</text>

                    <circle cx="350" cy="50" r="12" fill="#ffffff" stroke="#30d158" />
                    <text x="350" y="54" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "8px", fill: "#30d158", stroke: "none", fontWeight: "bold" }}>DATE</text>

                    <circle cx="360" cy="110" r="12" fill="#ffffff" stroke="#bf5af2" />
                    <text x="360" y="114" textAnchor="middle" style={{ fontFamily: "var(--font-sans)", fontSize: "8px", fill: "#bf5af2", stroke: "none", fontWeight: "bold" }}>TASK</text>

                    <path d="M 235 73 Q 190 55 162 45" stroke="#00b0ff" strokeDasharray="3 3" />
                    <path d="M 236 87 Q 185 105 152 116" stroke="#00b0ff" strokeDasharray="3 3" />
                    <path d="M 265 74 Q 305 60 338 54" stroke="#00b0ff" strokeDasharray="3 3" />
                    <path d="M 264 86 Q 310 100 348 107" stroke="#00b0ff" strokeDasharray="3 3" />

                    <text x="250" y="145" textAnchor="middle" style={{ fontFamily: "var(--font-caveat)", fontSize: "19px", fill: "#0070a0", stroke: "none", fontWeight: "bold" }}>Interactive Entity Link Graph</text>
                  </svg>
                </div>
              )}

              {slug === "codedex-wrapped" && section.heading === "Fluid Slideshow Choreography" && (
                <div className="project-detail-section-image-container" style={{ marginTop: "32px", display: "flex", justifyContent: "center", alignItems: "center", padding: "16px 0" }}>
                  <img 
                    src="/assets/codedex/documentation.svg" 
                    alt="Codédex App Design Assets" 
                    style={{ 
                      width: "100%", 
                      height: "auto", 
                      maxHeight: "600px",
                      filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))"
                    }}
                  />
                </div>
              )}
            </div>
          ))}

          {/* ---- Outro ---- */}
          <div className="project-detail-outro">
            <p>{project.outro}</p>
          </div>

          {/* ---- Next Project Link ---- */}
          <div className="next-project-section">
            {/* Left Side: Pointing Character */}
            <div className="next-project-character-container">
              <div className="character-doodle-wrapper">
                <img 
                  src="/assets/girl_doodle.png" 
                  alt="Pynthamil pointing illustration" 
                  className="character-doodle" 
                />
              </div>
            </div>

            {/* Right Side: Next Project Card */}
            <div className="next-project-card-container">
              <span className="next-project-title-label">Next Project</span>
              <h3 className="next-project-card-label">Check this out!</h3>
              <div className="next-project-arrows">
                <span>&darr;</span>
                <span>&darr;</span>
                <span>&darr;</span>
              </div>
              {nextProjectCard && (
                <Link href={nextProjectCard.href} className="next-project-card-link">
                  <div className="next-project-card-graphic" style={nextProjectCard.imageBg ? { background: nextProjectCard.imageBg } : undefined}>
                    {nextProjectCard.image ? (
                      <img src={nextProjectCard.image} alt={nextProjectCard.title} />
                    ) : (
                      <div className="card-image-empty" />
                    )}
                  </div>
                  <div className="next-project-card-title-hover">
                    {nextProjectCard.title} &rarr;
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
