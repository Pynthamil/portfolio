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
    subtitle: "An AI-assisted error management system",
    description:
      "Production errors are noisy, repetitive, and exhausting to triage. Luma is an intelligent error management platform that groups, prioritizes, and explains errors using AI — so your team spends time fixing bugs instead of reading stack traces.",
    heroImage: "/assets/project-cards/luma.svg",
    sections: [
      {
        heading: "Intelligent Grouping",
        body: "Luma doesn't just match identical stack traces. It uses semantic similarity to group errors that have the same root cause, even if they manifest differently across services. One error, one alert — not a hundred duplicates flooding your Slack channel at 3am.",
      },
      {
        heading: "AI-Powered Analysis",
        body: "Each error group gets an AI-generated explanation in plain English: what went wrong, why it likely happened, and suggested fixes with code snippets. Junior developers can understand and resolve issues that would normally require senior-level debugging skills.",
      },
      {
        heading: "Workflow Integration",
        body: "Errors flow into your existing tools. Slack notifications with context. Auto-created Jira tickets with reproduction steps. Grafana dashboard widgets showing error trends. Luma fits into your workflow instead of creating a new one.",
      },
    ],
    outro:
      "Error management shouldn't require a dedicated on-call engineer to interpret cryptic logs. Luma makes production issues approachable for the entire team, reducing mean time to resolution and keeping developers sane.",
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
    subtitle: "A website for ACM-VIT's Hackathon",
    description:
      "ACM-VIT needed a registration and information portal for their flagship hackathon event. I designed and built a responsive web application that handled team registration, event schedules, sponsor showcases, and real-time updates for hundreds of participants.",
    heroImage: "/assets/project-cards/acm-hackathon-portal.svg",
    sections: [
      {
        heading: "Registration Flow",
        body: "The registration system supported both individual and team signups with email verification, team invite links, and role-based access. Team leaders could manage members, and participants received automated confirmation emails with event details and QR codes for check-in.",
      },
      {
        heading: "Event Experience",
        body: "A live dashboard showed the event schedule, workshop timings, mentor availability, and announcement feeds. Push notifications kept participants updated on schedule changes. The sponsor showcase gave partners prominent visibility with interactive profiles.",
      },
      {
        heading: "Design & Branding",
        body: "The visual design matched ACM-VIT's brand guidelines while pushing into a more modern, energetic direction. Bold typography, vibrant gradients, and playful micro-animations created excitement around the event. The site was fully responsive and optimized for mobile check-in.",
      },
    ],
    outro:
      "Building for a live event with hundreds of users taught me the importance of reliability and clear UX under pressure. When registration opens and 200 people hit your site simultaneously, there's no room for bugs.",
  },

  "craftr-docs": {
    title: "Craftr Docs",
    subtitle: "The lovechild of Notion, Docs, and Figma",
    description:
      "Documentation tools force you to choose: rich formatting or great collaboration? Structured data or freeform writing? Craftr Docs combines the best parts of Notion's blocks, Google Docs' collaboration, and Figma's design tools into a single document editor.",
    heroImage: "/assets/project-cards/craftr-docs.svg",
    sections: [
      {
        heading: "Block-Based Editing",
        body: "Documents are built from composable blocks — text, code, tables, embeds, callouts, toggles, and more. Each block is independently styled and can be rearranged by drag-and-drop. Slash commands make inserting new block types feel instant and discoverable.",
      },
      {
        heading: "Real-Time Collaboration",
        body: "Multiple users can edit the same document simultaneously with live cursors, presence indicators, and conflict-free merging powered by Y.js CRDTs. Changes sync in milliseconds. Comments and suggestions live inline with threaded discussions.",
      },
      {
        heading: "Design-Aware Formatting",
        body: "Unlike typical doc editors, Craftr gives you precise control over spacing, typography, and layout. Create multi-column sections, apply custom color themes, and export to PDF with pixel-perfect formatting. Your docs look as good as they read.",
      },
    ],
    outro:
      "Craftr Docs is my most ambitious project — building a collaborative editor from scratch is genuinely hard. But every time I use it to write documentation, I'm reminded why the existing tools weren't enough.",
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
              description="A seamless, block-based editing experience that blurs the line between word processing and freeform design."
              imageSrc="/assets/craftr/craftr-1.svg"
              alt="Craftr Editor Interface"
              bgColor="#FFFDE7" // Soft Yellow
            />
            <CraftrStackedPreview bgColor="#FFFDE7" />
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
