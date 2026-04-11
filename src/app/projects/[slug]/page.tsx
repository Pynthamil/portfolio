import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TUIHero from "@/components/TUIHero";
import TUITabSwitcher from "@/components/TUITabSwitcher";
import TUIPreview from "@/components/TUIPreview";
import TUIStackedPreview from "@/components/TUIStackedPreview";
import BlogPreview from "@/components/BlogPreview";
import LumaPreview from "@/components/LumaPreview";
import BlogStackedPreview from "@/components/BlogStackedPreview";
import SemanticPreview from "@/components/SemanticPreview";
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
      "I wanted a space that felt personal — somewhere I could write about things I'm learning, projects I'm building, and ideas I'm exploring. Most blogging platforms felt too generic, so I built my own from scratch with a focus on reading experience and minimal design.",
    heroImage: "/assets/project-cards/my-blog.svg",
    liveUrl: "https://pyndulogs.vercel.app",
    techStack: ["Next.js", "TypeScript", "Supabase", "Hashnode API", "Tailwind CSS"],
    sections: [
      {
        heading: "The Reading Experience",
        body: "Every design decision was made with the reader in mind. Large, comfortable typography with generous line-height. A muted color palette that doesn't fight for attention. Code blocks with syntax highlighting that actually looks good. The goal was to make long-form content feel effortless to read.",
      },
      {
        heading: "Content Pipeline",
        body: "Posts are authored on Hashnode and pulled in via their GraphQL API. This gives me a proper editor with drafts, scheduling, and media management — while the frontend stays completely custom. Views and likes are tracked through a Supabase backend with real-time counters.",
      },
      {
        heading: "Performance & SEO",
        body: "Built on Next.js with static generation for fast page loads. Every post gets proper meta tags, Open Graph images, and structured data. The site scores 95+ on Lighthouse across all metrics. RSS feed included for the few people who still use RSS readers.",
      },
    ],
    outro:
      "This blog is a living project — I'm constantly tweaking the design and adding features. It's where I practice writing clearly about technical topics, which honestly might be the hardest skill in software engineering.",
  },

  "semantic-email": {
    title: "Semantic Email Intelligence",
    subtitle: "A conceptual model for meaning-based communication",
    description:
      "Email workflows today are defined by cognitive overload and information retrieval friction. We spend significant mental effort sorting through noise to find what matters. Semantic Email Intelligence conceptualizes a shift from message lists to a knowledge-driven interface.\n\nThe design explores how semantic understanding can transform the inbox into an organized system that surfaces relevant context at the right time. By imagining a future where AI supports decision-making rather than replacing user agency, the proposal aims to reduce the mental load of managing digital communication.",
    heroImage: "/assets/project-cards/semantic-email.svg",
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
    subtitle: "A conceptual interface for text-based web navigation",
    description:
      "What if the web felt as native as your command line? Terminal Browser explores a future where web browsing is stripped of visual noise and distilled into a purely functional text-based experience.\n\nThis concept imagines a workflow where developers can access documentation, research, and technical articles without breaking their terminal stream. By conceptualizing the web as structured text, the design aims to reduce the cognitive load associated with modern graphical browsers while prioritizing speed and focus.",
    heroImage: "/assets/project-cards/terminal-browser.svg",
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
    subtitle: "A conceptual design for intelligent error management",
    description:
      "Production environments are inherently chaotic. When errors occur, the resulting noise and repetition can lead to severe alert fatigue and exhausted triage workflows. Luma conceptualizes a shift from raw log aggregation to a decision-support system designed to improve signal clarity.\n\nThe design explores how AI can group and explain complex errors to reduce cognitive load in high-stress environments. By imagining a future where technical issues are translated into understandable language and surfacing potential root causes contextually, the proposal aims to support faster, more confident decision-making for the entire team.",
    heroImage: "/assets/project-cards/luma.svg",
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
    subtitle: "AI critique that improves resumes with clarity, precision, and just enough bite.",
    description:
      "Getting meaningful feedback on a resume is surprisingly difficult. Peer reviews are often overly polite, while professional services can be inaccessible or slow.\n\nResume Roaster explores how AI can deliver fast, structured, and genuinely useful critique. The product combines natural language analysis with opinionated heuristics to surface weak phrasing, missing impact, and formatting issues that reduce hiring outcomes.\n\nThe experience balances honesty with usability. Feedback is direct, specific, and designed to guide iteration rather than overwhelm.",
    heroImage: "/assets/project-cards/resume-roaster.svg",
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
    subtitle: "A conceptual ecosystem for competitive collaboration",
    description:
      "Hackathon environments are characterized by high-intensity coordination and tight feedback loops. The ACM Hackathon Portal conceptualizes a unified platform designed to streamline the complexities of registration, team synergy, and real-time event navigation.\n\nThe design explores how a centralized information layer can reduce the friction of large-scale competitive events. By imagining a future where participant workflows are handled ephemerally and contextually, the proposal aims to preserve creative energy and foster deeper networking within technical communities.",
    heroImage: "/assets/project-cards/acm-hackathon-portal.svg",
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
      "Documentation tools today often force a compromise between structured information and creative freedom. Craftr Docs explores a hybrid model intended to combine the modular logic of block-based editors with the expressive control of design software.\n\nBy conceptualizing the document as an expansive workspace rather than a rigid page, the design aims to reduce the friction of structuring complex ideas. The proposal imagines a future where documentation is both a tool for thinking and a medium for high-fidelity communication, balancing progressive complexity with intuitive, fast-access interaction patterns.",
    heroImage: "/assets/project-cards/craftr-docs.svg",
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
      "Over the years, I've designed and developed multiple portfolio websites — both for myself and for others. Each one explores a different aesthetic direction, from minimal and typographic to bold and experimental. This is a collection of those explorations.",
    heroImage: "/assets/project-cards/portfolios.svg",
    sections: [
      {
        heading: "Design Philosophy",
        body: "Every portfolio starts with a question: what story does this person want to tell? A developer's portfolio needs different energy than a designer's. I focus on letting the work speak for itself — minimal chrome, generous whitespace, and interactions that feel natural rather than flashy.",
      },
      {
        heading: "Technical Craft",
        body: "These sites are built with performance as a priority. Static generation for instant loads, optimized images, minimal JavaScript bundles, and smooth animations that don't jank on mobile. Lighthouse scores above 95 across the board. A portfolio that loads slowly is already a bad first impression.",
      },
      {
        heading: "Iterative Process",
        body: "No portfolio is ever truly finished. Each version teaches me something new about layout, typography, or interaction design. I treat these projects as a playground for trying new techniques — CSS scroll animations, view transitions, creative grid layouts — before bringing them into client work.",
      },
    ],
    outro:
      "Building portfolios is how I stay sharp as a frontend developer. There's something satisfying about a project with no constraints except 'make it as good as possible.' This site you're on right now is the latest iteration.",
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

  return (
    <main>
      <div className="project-detail-wrapper fade-up">
        {/* ---- Header ---- */}
        <div className="project-detail-header">
          <div className="project-detail-text">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-subtitle">{project.subtitle}</p>
          </div>

          {(project.liveUrl || project.githubUrl) && slug !== "terminal-browser" && (
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

        {/* ---- Intro ---- */}
        <div className="project-detail-intro">
          <p>{project.description}</p>
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

        {/* ---- Custom Interactive Sections ---- */}
        {slug === "my-blog" && (
          <>
            <BlogPreview
              title="Reading Experience"
              description="Designed for focus and clarity. The interface adapts to provide the best reading environment for long-form content."
              imageSrc="/assets/blog/blog-1.svg"
              alt="Blog Reader Interface"
            />
            <BlogStackedPreview />
            <BlogPreview
              title="Brand Identity"
              description="A crisp, minimal logo mark that establishes a distinct aesthetic tone while remaining adaptable across both light and dark modes."
              imageSrc="/assets/blog/blog-logo.svg"
              alt="Blog Logo Identity"
            />
            <BlogPreview
              title="Color Palette"
              description="Carefully selected thematic colors that evoke a soft but vibrant energy, preventing eye strain during long reading sessions."
              imageSrc="/assets/blog/blog-color.svg"
              alt="Blog Color Palette"
            />
            <BlogPreview
              title="Textured Backgrounds"
              description="Subtle background textures add depth and warmth, helping combat pure white harshness while keeping the content feeling grounded."
              imageSrc="/assets/blog/blog-bg.svg"
              alt="Blog Background Aesthetics"
            />
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
              bgColor="#FFFDE7" // Soft Yellow
            />
            <CraftrStackedPreview bgColor="#FFFDE7" />
            <BlogPreview
              title="Speculative Surface Design"
              description="The concept imagines a future where document covers are not static headers but dynamic, high-fidelity surfaces. The design proposes using generative patterns and rich typography to establish an immediate aesthetic mood for every workspace."
              imageSrc="/assets/craftr/cover-block.svg"
              alt="Craftr Cover Block Design"
              bgColor="#FFFDE7"
            />
          </>
        )}
        {slug === "terminal-browser" && (
          <>
            <TUIHero bgColor="#BFFFA1" />
            <TUITabSwitcher />
            <TUIPreview
              title="Deep Content Exploration"
              description="The concept imagines fetching deep content like Wikipedia articles with high fidelity. The goal is to maintain a retro-future aesthetic while delivering rich information in a format that feels coherent within a shell environment."
              imageSrc="/assets/tui/wikipedia-results.svg"
              alt="Wikipedia Results Concept"
              bgColor="#BFFFA1"
            />
            <TUIPreview
              title="Error Resilience"
              description="Perceived reliability is central to the design. The proposal includes clear, stylized TUI messaging for 404s and connection states, ensuring that technical failures are handled with the same minimal aesthetic as successful renders."
              imageSrc="/assets/tui/not-found.svg"
              alt="404 Not Found Concept"
              bgColor="#BFFFA1"
            />
            <TUIStackedPreview bgColor="#BFFFA1" />
          </>
        )}
        {slug === "portfolios" && (
          <PortfolioPreview />
        )}

        {/* ---- Sections ---- */}
        {project.sections.map((section, i) => (
          <div key={i} className="project-detail-section">
            <h2 className="project-detail-section-title">{section.heading}</h2>
            <p className="project-detail-section-body">{section.body}</p>
          </div>
        ))}

        {/* ---- Outro ---- */}
        <div className="project-detail-outro">
          <p>{project.outro}</p>
        </div>
      </div>
    </main>
  );
}
