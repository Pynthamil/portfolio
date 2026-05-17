import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FocusTimerPreview from "@/components/displays/FocusTimerPreview";
import CodedexWrappedPreview from "@/components/displays/CodedexWrappedPreview";
import TextParserVisualizer from "@/components/displays/TextParserVisualizer";

type ProjectSection = {
  heading: string;
  body: string;
};

type ProjectData = {
  title: string;
  subtitle: string;
  description: string;
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
    title: "Codédex Wrapped",
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
    <main>
      <div className="project-detail-wrapper animate-fade-in">
        {/* Back Link */}
        <Link href="/coding" className="project-detail-back">
          <ArrowLeft size={16} /> Back to coding projects
        </Link>

        {/* Hero Header */}
        <div className="project-detail-header">
          <span className="project-detail-category">CODING PROJECT / UTILITY</span>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-subtitle">{project.subtitle}</p>
        </div>

        {/* Description / Info grid */}
        <div className="project-detail-info">
          <div className="project-detail-description">
            <p>{project.description}</p>
          </div>
          <div className="project-detail-meta">
            {project.techStack && (
              <div className="project-meta-item">
                <span className="project-meta-label">TECH STACK</span>
                <div className="project-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="project-meta-item">
              <span className="project-meta-label">ROLE</span>
              <span className="project-meta-value">Solo Creator / Developer</span>
            </div>
            <div className="project-meta-item">
              <span className="project-meta-label">ARCHITECTURE</span>
              <span className="project-meta-value">Modular Interactive Widget</span>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Showcases */}
        <div className="my-8 md:my-16">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
              INTERACTIVE DEMO / INTERFACE PREVIEW
            </span>
          </div>
          {slug === "focus-fuel" && <FocusTimerPreview />}
          {slug === "codedex-wrapped" && <CodedexWrappedPreview />}
          {slug === "semantic-parser" && <TextParserVisualizer />}
        </div>

        {/* Breakdown Sections */}
        {project.sections.map((section, i) => (
          <div key={i} className="project-detail-section">
            <h2 className="project-detail-section-title">{section.heading}</h2>
            <p className="project-detail-section-body">{section.body}</p>
          </div>
        ))}

        {/* Outro */}
        <div className="project-detail-outro">
          <p>{project.outro}</p>
        </div>
      </div>
    </main>
  );
}
