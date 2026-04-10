import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import TUIHero from "@/components/TUIHero";
import TUITabSwitcher from "@/components/TUITabSwitcher";
import TUIPreview from "@/components/TUIPreview";
import TUIStackedPreview from "@/components/TUIStackedPreview";
import ProjectPreview from "@/components/ProjectPreview";
import LumaPreview from "@/components/LumaPreview";

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
    subtitle: "A Second Brain for your Emails",
    description:
      "Email is broken. We spend hours sorting through noise to find what matters. Semantic Email Intelligence uses AI to understand the context and intent behind every message, turning your inbox into an organized knowledge base that surfaces the right information at the right time.",
    heroImage: "/assets/project-cards/semantic-email.svg",
    techStack: ["Python", "FastAPI", "OpenAI API", "Pinecone", "React", "PostgreSQL"],
    sections: [
      {
        heading: "Context-Aware Processing",
        body: "Every incoming email is analyzed for intent, urgency, and topic. The system builds semantic embeddings that capture meaning — not just keywords. This means searching for 'that invoice from last month' actually finds the invoice, even if the word 'invoice' never appeared in the email.",
      },
      {
        heading: "Smart Categorization",
        body: "Instead of rigid folders and rules, emails are organized by understanding. Related conversations are linked across threads. Action items are extracted automatically. Follow-ups are suggested based on context. The system learns your patterns and adapts over time.",
      },
      {
        heading: "Privacy-First Architecture",
        body: "All processing happens on your own infrastructure. Emails are encrypted at rest and in transit. The AI models run locally where possible, with cloud fallback only for heavy processing. You own your data — always.",
      },
    ],
    outro:
      "This project started from my own frustration with Gmail's search. It's still evolving, but the core idea — that AI should help us manage information, not just generate it — feels more relevant every day.",
  },

  "terminal-browser": {
    title: "Terminal Browser",
    subtitle: "A browser that runs in the terminal",
    description:
      "What if you could browse the web without leaving your terminal? Terminal Browser is a fully functional web browser that renders pages as styled text in your command line. Built for developers who live in the terminal and want to quickly check documentation, read articles, or test APIs without switching contexts.",
    heroImage: "/assets/project-cards/terminal-browser.svg",
    githubUrl: "#",
    techStack: ["Rust", "Tokio", "HTML Parser", "CSS Engine", "TUI Framework"],
    sections: [
      {
        heading: "Rendering Engine",
        body: "The browser implements a custom rendering pipeline that converts HTML and CSS into terminal-compatible output. Block elements, inline formatting, tables, lists, and even images (as ASCII art) are supported. The layout engine handles responsive reflow based on terminal width.",
      },
      {
        heading: "Navigation & Interaction",
        body: "Full keyboard-driven navigation with vim-style bindings. Tab through links, submit forms, scroll smoothly, and manage multiple tabs — all without touching a mouse. History, bookmarks, and session restore are built in. It feels like a proper browser, just text-based.",
      },
      {
        heading: "Performance",
        body: "Built in Rust for speed and memory efficiency. Pages load and render in milliseconds. The async networking layer handles concurrent requests efficiently. Startup time is near-instant compared to graphical browsers. It's the fastest way to check a quick URL.",
      },
    ],
    outro:
      "Terminal Browser started as a weekend experiment and turned into one of my most interesting systems projects. It taught me more about how browsers actually work than any textbook ever could.",
  },

  luma: {
    title: "Luma",
    subtitle: "An AI-assisted error management system",
    description:
      "Production errors are noisy, repetitive, and exhausting to triage. Luma is an intelligent error management platform that groups, prioritizes, and explains errors using AI — so your team spends time fixing bugs instead of reading stack traces.",
    heroImage: "/assets/project-cards/luma.svg",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "PostgreSQL", "Redis", "Docker"],
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
    subtitle: "AI-powered resume roasting platform",
    description:
      "Getting honest feedback on your resume is hard. Friends are too nice, and professional reviews are expensive. Resume Roaster uses AI to give you brutally honest, actionable feedback on your resume — with just the right amount of humor to keep it fun.",
    heroImage: "/assets/project-cards/resume-roaster.svg",
    liveUrl: "#",
    techStack: ["Next.js", "TypeScript", "OpenAI API", "PDF.js", "Framer Motion"],
    sections: [
      {
        heading: "The Roasting Engine",
        body: "Upload a PDF and get back a detailed analysis covering formatting, content quality, impact metrics, keyword optimization, and ATS compatibility. The AI persona is deliberately opinionated — it tells you what recruiters think but won't say. Tough love, but useful.",
      },
      {
        heading: "Actionable Feedback",
        body: "Every roast comes with specific, implementable suggestions. Not just 'improve your bullet points' — but exactly how to rewrite them with stronger action verbs and quantified impact. Before/after comparisons show the difference clearly.",
      },
      {
        heading: "Privacy & Trust",
        body: "Resumes contain sensitive personal information. Files are processed in memory and never stored on disk. No resume data is used for model training. The entire pipeline is ephemeral — upload, analyze, deliver, delete.",
      },
    ],
    outro:
      "Resume Roaster has helped hundreds of people improve their resumes. The best part? Watching someone go from 'my resume is fine' to 'oh wow, I need to fix this' in about 30 seconds.",
  },

  "acm-hackathon": {
    title: "ACM Hackathon Portal",
    subtitle: "A website for ACM-VIT's Hackathon",
    description:
      "ACM-VIT needed a registration and information portal for their flagship hackathon event. I designed and built a responsive web application that handled team registration, event schedules, sponsor showcases, and real-time updates for hundreds of participants.",
    heroImage: "/assets/project-cards/acm-hackathon-portal.svg",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Framer Motion"],
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
    techStack: ["Next.js", "TypeScript", "Tiptap", "Y.js", "WebSocket", "PostgreSQL"],
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
    techStack: ["Next.js", "React", "Framer Motion", "CSS", "Figma"],
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
          <ProjectPreview
            title="Reading Experience"
            description="Designed for focus and clarity. The interface adapts to provide the best reading environment for long-form content."
            imageSrc="/assets/blog/blog-1.svg"
            alt="Blog Reader Interface"
          />
        )}
        {slug === "luma" && (
          <LumaPreview />
        )}
        {slug === "terminal-browser" && (
          <>
            <TUIHero bgColor="#BFFFA1" />
            <TUITabSwitcher />
            <TUIPreview
              title="Deep Search Results"
              description="The terminal isn't just for local files. It can fetch and render complex Wikipedia articles with high fidelity, maintaining its signature retro-future aesthetic while delivering deep content."
              imageSrc="/assets/tui/wikipedia-results.svg"
              alt="Wikipedia Results Preview"
              bgColor="#BFFFA1"
            />
            <TUIPreview
              title="Error Handling"
              description="Even in a text-based environment, feedback is key. Replicating the web experience means handling 404s and connection errors with clear, stylized TUI messaging."
              imageSrc="/assets/tui/not-found.svg"
              alt="404 Not Found Preview"
              bgColor="#BFFFA1"
            />
            <TUIStackedPreview bgColor="#BFFFA1" />
          </>
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
