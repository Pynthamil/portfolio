"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

const mainNavLinks = [
  { href: "/", label: "Home", color: "#ff3b30" },
  { href: "/projects", label: "Projects", color: "#007aff" },
  { href: "/about", label: "About", color: "#34c759" },
  { href: "/contact", label: "Contact", color: "#ffcc00" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isProjectDetail =
    (pathname.startsWith("/projects/") || pathname.startsWith("/coding/")) &&
    pathname.split("/").length === 3;

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

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

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

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileMenuOpen]);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleScroll = () => setMobileMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeLink = projectDetailLinks.find((l) => l.activeSection === l.id) ??
    projectDetailLinks.find((l) => l.id === activeSection) ??
    projectDetailLinks[0];

  return (
    <>
      {/* ── Desktop nav (hidden on mobile) ── */}
      <nav className="site-nav site-nav--desktop" style={isProjectDetail ? { gap: "4px" } : undefined}>
        {isProjectDetail ? (
          <>
            <button
              onClick={() => router.back()}
              className="nav-item"
              style={{ marginRight: "16px", paddingLeft: "12px", paddingRight: "12px" }}
              aria-label="Go back"
            >
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)", marginRight: "6px", display: "inline-block" }}>
                <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
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
              <Link key={link.href} href={link.href} className={`nav-item${isActive ? " active" : ""}`}>
                <span className="nav-dot" aria-hidden="true" style={{ backgroundColor: link.color }} />
                {link.label}
              </Link>
            );
          })
        )}
      </nav>

      {/* ── Mobile nav ── */}
      <div className="site-nav--mobile-wrapper" ref={menuRef}>
        <nav className="site-nav site-nav--mobile">
          {isProjectDetail ? (
            <>
              {/* Back button */}
              <button
                onClick={() => router.back()}
                className="nav-item"
                style={{ paddingLeft: "10px", paddingRight: "10px" }}
                aria-label="Go back"
              >
                <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "rotate(180deg)" }}>
                  <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4H6C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3H11.5C11.7761 3 12 3.22386 12 3.5V9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                </svg>
              </button>

              {/* Divider */}
              <span className="nav-mobile-divider" aria-hidden="true" />

              {/* Current section label */}
              <span className="nav-item nav-mobile-current active" style={{ flex: 1, pointerEvents: "none" }}>
                <span className="nav-dot" aria-hidden="true" style={{ backgroundColor: activeLink?.color }} />
                {activeLink?.label ?? "Overview"}
              </span>

              {/* Hamburger toggle */}
              <button
                className="nav-mobile-menu-btn"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label="Toggle section menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className={`nav-hamburger${mobileMenuOpen ? " open" : ""}`}>
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </>
          ) : (
            <>
              {/* Main nav active label */}
              {(() => {
                const activeMain = mainNavLinks.find(
                  (l) =>
                    pathname === l.href ||
                    (l.href === "/projects" && (pathname.startsWith("/projects") || pathname.startsWith("/coding")))
                ) ?? mainNavLinks[0];
                return (
                  <span className="nav-item nav-mobile-current active" style={{ flex: 1, pointerEvents: "none" }}>
                    <span className="nav-dot" aria-hidden="true" style={{ backgroundColor: activeMain.color }} />
                    {activeMain.label}
                  </span>
                );
              })()}

              {/* Hamburger toggle */}
              <button
                className="nav-mobile-menu-btn"
                onClick={() => setMobileMenuOpen((o) => !o)}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className={`nav-hamburger${mobileMenuOpen ? " open" : ""}`}>
                  <span />
                  <span />
                  <span />
                </span>
              </button>
            </>
          )}
        </nav>

        {/* ── Mobile dropdown ── */}
        {mobileMenuOpen && (
          <div className="nav-mobile-dropdown">
            {isProjectDetail ? (
              projectDetailLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollClick(e, link.id)}
                    className={`nav-mobile-dropdown-item${isActive ? " active" : ""}`}
                  >
                    <span className="nav-mobile-dropdown-dot" style={{ backgroundColor: link.color }} />
                    {link.label}
                  </a>
                );
              })
            ) : (
              mainNavLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href === "/projects" && (pathname.startsWith("/projects") || pathname.startsWith("/coding")));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-mobile-dropdown-item${isActive ? " active" : ""}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="nav-mobile-dropdown-dot" style={{ backgroundColor: link.color }} />
                    {link.label}
                  </Link>
                );
              })
            )}
          </div>
        )}
      </div>
    </>
  );
}
