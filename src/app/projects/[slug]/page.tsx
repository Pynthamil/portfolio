import Image from "next/image";

/* ---- static project data (mirrors the list in /projects/page.tsx) ---- */
const projects: Record<
  string,
  { title: string; description: string; image?: string; imageBg?: string; liveUrl?: string }
> = {
  dotos: {
    title: "DotOS",
    description:
      "A context-aware OS for a more personal computer. DotOS reimagines the desktop experience with intelligent workspaces that adapt to your workflow, surfacing the right tools and information exactly when you need them.",
    image: "/project1.png",
    liveUrl: "#",
  },
  "take-out": {
    title: "Take-Out",
    description:
      "A gamified food delivery app concept that turns ordering into a playful experience. Points, streaks, and surprise rewards keep users coming back while supporting local restaurants.",
    image: "/project2.png",
    liveUrl: "#",
  },
  devflow: {
    title: "DevFlow",
    description:
      "A developer productivity toolkit that unifies your daily workflow — from code reviews and PR tracking to deep-focus timers — in one clean, minimal interface.",
    image: "/project3.png",
    liveUrl: "#",
  },
  marketplace: {
    title: "Marketplace",
    description:
      "Peer-to-peer commerce, reimagined. A modern platform that strips away the noise and lets buyers and sellers connect through a beautifully simple listing experience.",
    image: "/project4.png",
    liveUrl: "#",
  },
  branding: {
    title: "Branding",
    description:
      "Visual identity and design system created for Studio. A comprehensive brand toolkit including typography, color palettes, motion guidelines, and component libraries.",
    imageBg: "linear-gradient(135deg, #e8e0ff 0%, #c8bfff 100%)",
    liveUrl: "#",
  },
  portfolio: {
    title: "Portfolio",
    description:
      "A personal website built with Next.js. Designed and developed from scratch with a focus on minimal aesthetics, smooth interactions, and thoughtful micro-animations.",
    imageBg: "linear-gradient(135deg, #e0f0ff 0%, #b8d8ff 100%)",
    liveUrl: "#",
  },
};

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  /* ---- 404 fallback ---- */
  if (!project) {
    return (
      <main>
        <div className="project-detail-wrapper">
          <h1 className="project-detail-title">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="project-detail-wrapper fade-up">
        {/* ---- Header ---- */}
        <div className="project-detail-header">
          <div className="project-detail-text">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>
          </div>

          {project.liveUrl && (
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

        {/* ---- Preview container ---- */}
        <div className="project-detail-preview">
          <div
            className="project-detail-preview-inner"
            style={project.imageBg ? { background: project.imageBg } : undefined}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 900px"
                style={{ objectFit: "cover", objectPosition: "top center" }}
                priority
              />
            ) : (
              <div className="project-detail-preview-empty" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
