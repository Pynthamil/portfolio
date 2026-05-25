"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const router = useRouter();
  
  const isProjectDetail = (pathname.startsWith("/projects/") || pathname.startsWith("/coding/")) && pathname.split("/").length === 3;
  
  const isDesignProject = pathname.startsWith("/projects/");
  const projectDetailLinks = isDesignProject ? [
    { id: "overview", label: "Overview" },
    { id: "design", label: "Design" },
    { id: "implementation", label: "Approach" },
    { id: "results", label: "Outcomes" }
  ] : [
    { id: "overview", label: "Overview" },
    { id: "design", label: "Design" },
    { id: "implementation", label: "Implementation" },
    { id: "results", label: "Results" }
  ];

  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    if (!isProjectDetail) return;

    const handleScroll = () => {
      let currentActive = "overview";
      for (const link of projectDetailLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            currentActive = link.id;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectDetail]);

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
                {isActive && <span className="nav-dot" aria-hidden="true" />}
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
              {isActive && <span className="nav-dot" aria-hidden="true" />}
              {link.label}
            </Link>
          );
        })
      )}
    </nav>
  );
}
