"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const mainNavLinks = [
  { href: "/", label: "Home", color: "#ff3b30" },
  { href: "/projects", label: "Projects", color: "#007aff" },
  { href: "/about", label: "About", color: "#34c759" },
  { href: "/contact", label: "Contact", color: "#ffcc00" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isProjectDetail = (pathname.startsWith("/projects/") || pathname.startsWith("/coding/")) && pathname.split("/").length === 3;
  
  const slug = pathname.split("/")[2] ?? "";

  // Per-slug nav label maps — IDs stay fixed, only visible labels change
  const navLabelsBySlug: Record<string, { id: string; label: string; color: string }[]> = {
    "my-blog": [
      { id: "overview", label: "Overview",   color: "#ff3b30" },
      { id: "design",   label: "Design",     color: "#007aff" },
      { id: "implementation", label: "Build",color: "#34c759" },
      { id: "results",  label: "Posts",      color: "#ffcc00" },
    ],
    "semantic-email": [
      { id: "overview", label: "Overview",   color: "#ff3b30" },
      { id: "design",   label: "Interface",  color: "#007aff" },
      { id: "implementation", label: "Approach", color: "#34c759" },
      { id: "results",  label: "Privacy",    color: "#ffcc00" },
    ],
    "terminal-browser": [
      { id: "overview", label: "Overview",   color: "#ff3b30" },
      { id: "design",   label: "Interface",  color: "#007aff" },
      { id: "implementation", label: "Rendering", color: "#34c759" },
      { id: "results",  label: "Efficiency", color: "#ffcc00" },
    ],
    "luma": [
      { id: "overview", label: "Overview",     color: "#ff3b30" },
      { id: "design",   label: "Interface",    color: "#007aff" },
      { id: "implementation", label: "Intelligence", color: "#34c759" },
      { id: "results",  label: "Integration",  color: "#ffcc00" },
    ],
    "resume-roaster": [
      { id: "overview", label: "Overview",  color: "#ff3b30" },
      { id: "design",   label: "Interface", color: "#007aff" },
      { id: "implementation", label: "Critique", color: "#34c759" },
      { id: "results",  label: "Trust",     color: "#ffcc00" },
    ],
    "acm-hackathon": [
      { id: "overview", label: "Overview",  color: "#ff3b30" },
      { id: "design",   label: "Interface", color: "#007aff" },
      { id: "implementation", label: "Flow", color: "#34c759" },
      { id: "results",  label: "Momentum",  color: "#ffcc00" },
    ],
    "craftr-docs": [
      { id: "overview", label: "Overview",  color: "#ff3b30" },
      { id: "design",   label: "Canvas",    color: "#007aff" },
      { id: "implementation", label: "Structure", color: "#34c759" },
      { id: "results",  label: "Collab",    color: "#ffcc00" },
    ],
    "portfolios": [
      { id: "overview", label: "Overview",    color: "#ff3b30" },
      { id: "design",   label: "Iterations",  color: "#007aff" },
      { id: "implementation", label: "Philosophy", color: "#34c759" },
    ],
  };

  // Coding projects
  const codingNavLabels: Record<string, { id: string; label: string; color: string }[]> = {
    "focus-fuel": [
      { id: "overview", label: "Overview",   color: "#ff3b30" },
      { id: "design",   label: "Design",     color: "#007aff" },
      { id: "implementation", label: "Implementation", color: "#34c759" },
      { id: "results",  label: "Results",    color: "#ffcc00" },
    ],
    "codedex-wrapped": [
      { id: "overview",   label: "Overview",   color: "#ff3b30" },
      { id: "design",     label: "Mascot",     color: "#007aff" },
      { id: "app-design", label: "App Design", color: "#bf5af2" },
      { id: "implementation", label: "Impact", color: "#ffcc00" },
    ],
    "semantic-parser": [
      { id: "overview", label: "Overview",   color: "#ff3b30" },
      { id: "design",   label: "Design",     color: "#007aff" },
      { id: "implementation", label: "Implementation", color: "#34c759" },
      { id: "results",  label: "Results",    color: "#ffcc00" },
    ],
  };

  const isDesignProject = pathname.startsWith("/projects/");
  const isCodingProject = pathname.startsWith("/coding/");

  const projectDetailLinks =
    isDesignProject
      ? (navLabelsBySlug[slug] ?? [
          { id: "overview", label: "Overview",  color: "#ff3b30" },
          { id: "design",   label: "Design",    color: "#007aff" },
          { id: "implementation", label: "Approach", color: "#34c759" },
          { id: "results",  label: "Outcomes",  color: "#ffcc00" },
        ])
      : isCodingProject
      ? (codingNavLabels[slug] ?? [
          { id: "overview", label: "Overview",  color: "#ff3b30" },
          { id: "design",   label: "Design",    color: "#007aff" },
          { id: "implementation", label: "Implementation", color: "#34c759" },
          { id: "results",  label: "Results",   color: "#ffcc00" },
        ])
      : [
          { id: "overview", label: "Overview",  color: "#ff3b30" },
          { id: "design",   label: "Design",    color: "#007aff" },
          { id: "implementation", label: "Implementation", color: "#34c759" },
          { id: "results",  label: "Results",   color: "#ffcc00" },
        ];

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    if (!isProjectDetail) return;

    const ids = projectDetailLinks.map((l) => l.id);

    const getActiveSection = () => {
      let currentActive = "overview";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // We consider a section active if its top is above the middle of the screen
          if (rect.top <= window.innerHeight / 2 + 80) {
            currentActive = id;
          }
        }
      }
      return currentActive;
    };

    const updateActive = () => {
      const active = getActiveSection();
      setActiveSection(active);
    };

    // 1. Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -50% 0px",
      threshold: [0, 0.1],
    };

    const observer = new IntersectionObserver(() => {
      updateActive();
    }, observerOptions);

    const observedElements: Element[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observedElements.push(el);
      }
    });

    // 2. Scroll listener
    window.addEventListener("scroll", updateActive, { passive: true });
    
    // Initial check
    updateActive();

    // Delayed checks for initial render / hydration
    const timer1 = setTimeout(updateActive, 100);
    const timer2 = setTimeout(updateActive, 500);

    return () => {
      observedElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
      window.removeEventListener("scroll", updateActive);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname, isProjectDetail]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="site-nav" style={isProjectDetail ? { gap: '4px' } : undefined}>
      {isProjectDetail ? (
        <>
          <button 
            onClick={() => router.back()}
            className="nav-item"
            style={{ marginRight: '16px', paddingLeft: '12px', paddingRight: '12px' }}
            aria-label="Go back"
          >
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)', marginRight: '6px', display: 'inline-block' }}>
              <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"/>
            </svg>
            Back
          </button>
          {projectDetailLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollClick(e, link.id)}
                className={`nav-item${isActive ? " active" : ""}`}
              >
                <span className="nav-dot" aria-hidden="true" style={{ backgroundColor: link.color }} />
                {link.label}
              </a>
            );
          })}
        </>
      ) : (
        mainNavLinks.map((link) => {
          const isActive = 
            pathname === link.href || 
            (link.href === "/projects" && (pathname.startsWith("/projects") || pathname.startsWith("/coding")));

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-item${isActive ? " active" : ""}`}
            >
              <span className="nav-dot" aria-hidden="true" style={{ backgroundColor: link.color }} />
              {link.label}
            </Link>
          );
        })
      )}
    </nav>
  );
}
