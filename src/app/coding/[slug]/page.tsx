import { notFound } from "next/navigation";
import type { Metadata } from "next";
import FocusTimerPreview from "@/components/displays/FocusTimerPreview";
import TextParserVisualizer from "@/components/displays/TextParserVisualizer";
import CodingProjectHeader from "@/components/CodingProjectHeader";
import ProjectSidebar from "@/components/ProjectSidebar";

type ProjectSection = {
  heading: string;
  body: string;
};

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
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
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React 19"],
    sections: [
      {
        heading: "Distraction-Free Flow State",
        body: "The core design philosophy is silence. The Pomodoro timer dominates the screen with bold, ultra-refined typography, giving developers an immediate visual signal of their remaining time without flashing alerts or distracting micro-counters.",
      },
      {
        heading: "State-Based Mascot Mechanics",
        body: "To keep focus engaging, we introduced Sprout: an active green companion mascot. Sprout reads the real-time Pomodoro state to display adaptive pixel moods. When you're focusing, Sprout is focused; when you pause, Sprout takes a peaceful nap; when your focus completes, Sprout celebrates with a custom victory dance.",
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
    techStack: ["React 19", "Framer Motion", "Tailwind CSS v4", "Next.js", "Lucide Icons"],
    sections: [
      {
        heading: "Playful Retro-Arcade Aesthetics",
        body: "We designed a dedicated high-fidelity virtual cabinet enclosure. Bright glowing neon boundaries, nostalgic retro game consoles, and arcade cabinet overlays establish an immediate technical yet playful theme.",
      },
      {
        heading: "Fluid Slideshow Choreography",
        body: "Framer Motion handles the slide-transition logic. When sliding from page to page, each layout element slides independently with custom delay stagger offsets, creating a sense of 3D parallax depth.",
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
  if (!project) return {};
  return {
    title: `${project.title} - Coding Project`,
    description: project.subtitle,
  };
}

export default async function CodingProjectPage({ params }: Props) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const project = projects[slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="coding-project-page-container" style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
      {/* Dynamic Client Header */}
      <CodingProjectHeader />

      {/* Floating Sticky Navigation Sidebar */}
      <ProjectSidebar />

      {/* Embedded CSS Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.4)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 18px rgba(34, 197, 94, 0.7)); }
        }
        @keyframes floatCartridge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}} />

      <main className="project-detail-wrapper animate-fade-in" style={{ maxWidth: "1000px", margin: "0 auto", padding: "60px 20px 100px" }}>
        
        {/* Section 1: OVERVIEW */}
        <section id="overview" className="scroll-mt-24" style={{ position: "relative", marginBottom: "80px", textAlign: "center" }}>

          <h1 
            className="project-detail-title" 
            style={{ 
              color: "#000000", 
              fontSize: "64px", 
              fontWeight: "800", 
              letterSpacing: "-0.03em", 
              lineHeight: "1.2",
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            {project.title}
          </h1>

          <div 
            className="project-detail-description" 
            style={{ 
              fontSize: "19px", 
              lineHeight: "1.6", 
              color: "#1d1d1f", 
              maxWidth: "800px", 
              margin: "0 auto", 
              fontWeight: "400",
              letterSpacing: "-0.01em",
              textAlign: "justify"
            }}
          >
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
        </section>

        {/* Section 2: IDEATION */}
        <section id="ideation" className="scroll-mt-24" style={{ paddingTop: "60px", marginBottom: "80px" }}>
          
          {/* Metadata Grid */}
          <div 
            className="project-detail-meta" 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "32px",
              maxWidth: "800px",
              margin: "0 auto 48px"
            }}
          >
            {project.techStack && (
              <div className="project-meta-item">
                <span className="project-meta-label" style={{ fontSize: "11px", fontWeight: "700", color: "#86868b", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>TECH STACK</span>
                <div className="project-tech-tags" style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="tech-tag"
                      style={{
                        backgroundColor: "#f5f5f7",
                        color: "#1d1d1f",
                        fontSize: "12px",
                        fontWeight: "500",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid rgba(0, 0, 0, 0.03)"
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="project-meta-item">
              <span className="project-meta-label" style={{ fontSize: "11px", fontWeight: "700", color: "#86868b", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>ROLE</span>
              <span className="project-meta-value" style={{ fontSize: "15px", fontWeight: "600", color: "#1d1d1f" }}>Solo Creator / Developer</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label" style={{ fontSize: "11px", fontWeight: "700", color: "#86868b", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>ARCHITECTURE</span>
              <span className="project-meta-value" style={{ fontSize: "15px", fontWeight: "600", color: "#1d1d1f" }}>Modular Interactive Widget</span>
            </div>
          </div>

          {slug !== "codedex-wrapped" && (
            <>
              {/* Side-by-side Showcase Layout */}
              <div className="text-center mb-4">
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                  VISUAL BRANDING & INTERACTIVE DEMO PREVIEW
                </span>
              </div>

              <div className="detail-showcase-grid">
                {/* Left Card: Branding Display */}
                {slug === "focus-fuel" && (
                  <div className="detail-showcase-card" style={{ minHeight: "340px", backgroundColor: "#fafafc" }}>
                    <div style={{ animation: "pulseGlow 3s ease-in-out infinite", display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                )}

                {slug === "semantic-parser" && (
                  <div className="detail-showcase-card" style={{ minHeight: "340px", backgroundColor: "#0c1017", color: "#ffffff", borderColor: "rgba(255,255,255,0.08)" }}>
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
                        <circle cx="50" cy="18" r="2.5" fill="#00f0ff">
                          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="4s" repeatCount="indefinite" />
                        </circle>
                      </svg>
                      <div style={{ marginTop: "20px", textAlign: "center" }}>
                        <h3 style={{ fontSize: "19px", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.02em" }}>Parsing Engine</h3>
                        <p className="font-handwritten" style={{ fontSize: "20px", color: "#00f0ff", margin: "4px 0 0", fontWeight: "600" }}>Knowledge Nodes</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Right Card: Interactive Widget */}
                <div className="detail-showcase-card" style={{ padding: "16px" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    {slug === "focus-fuel" && <FocusTimerPreview />}
                    {slug === "semantic-parser" && <TextParserVisualizer />}
                  </div>
                </div>
              </div>
            </>
          )}
        </section>

        {/* Section 3: DESIGN */}
        {project.sections[0] && (
          <section id="design" className="scroll-mt-24" style={{ paddingTop: "60px", marginBottom: "60px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: "40px", textAlign: "center" }}>
              Design
            </h2>
            <div className="project-detail-section" style={{ marginBottom: "64px" }}>
              <h3 className="project-detail-section-title" style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-0.01em", color: "#1d1d1f", marginBottom: "16px" }}>
                {project.sections[0].heading}
              </h3>
              <p className="project-detail-section-body" style={{ fontSize: "16px", lineHeight: "1.6", color: "#515154", marginBottom: "20px", textAlign: "justify" }}>
                {project.sections[0].body}
              </p>

              {slug !== "codedex-wrapped" && (
                <div className="project-detail-section-doodle">
                  {slug === "focus-fuel" && (
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
                  )}

                  {slug === "semantic-parser" && (
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
                  )}
                </div>
              )}

              {slug === "codedex-wrapped" && (
                <div 
                  className="project-detail-section-image-container" 
                  style={{ 
                    marginTop: "32px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "16px 0"
                  }}
                >
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
          </section>
        )}

        {/* Section 4: IMPLEMENTATION & OUTRO */}
        {project.sections[1] && (
          <section id="implementation" className="scroll-mt-24" style={{ paddingTop: "60px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: "40px", textAlign: "center" }}>
              Implementation
            </h2>
            <div className="project-detail-section" style={{ marginBottom: "64px" }}>
              <h3 className="project-detail-section-title" style={{ fontSize: "21px", fontWeight: "700", letterSpacing: "-0.01em", color: "#1d1d1f", marginBottom: "16px" }}>
                {project.sections[1].heading}
              </h3>
              <p className="project-detail-section-body" style={{ fontSize: "16px", lineHeight: "1.6", color: "#515154", marginBottom: "20px", textAlign: "justify" }}>
                {project.sections[1].body}
              </p>

              {slug !== "codedex-wrapped" && (
                <div className="project-detail-section-doodle">
                  {slug === "focus-fuel" && (
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
                  )}

                  {slug === "semantic-parser" && (
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
                  )}
                </div>
              )}
            </div>

            {/* Outro section block */}
            {slug === "codedex-wrapped" ? (
              <div className="project-detail-outro">
                <p>{project.outro}</p>
              </div>
            ) : (
              <div 
                className="project-detail-outro" 
                style={{ 
                  backgroundColor: "#fafafc", 
                  border: "1px solid rgba(0, 0, 0, 0.06)", 
                  borderRadius: "28px", 
                  padding: "40px", 
                  marginTop: "80px",
                  textAlign: "center",
                  marginBottom: "80px"
                }}
              >
                <span style={{ fontSize: "24px", display: "block", marginBottom: "16px" }}>⚡</span>
                <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#1d1d1f", fontWeight: "500", maxWidth: "800px", margin: "0 auto" }}>
                  {project.outro}
                </p>
              </div>
            )}
          </section>
        )}

      </main>
    </div>
  );
}
