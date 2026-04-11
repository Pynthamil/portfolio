"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavDropdown from "./NavDropdown";
import { ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects", isDropdown: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset dropdown when pathname changes (React 19 pattern: Adjusting state during render)
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  }

  return (
    <nav className="site-nav" ref={navRef}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href || (link.isDropdown && pathname.startsWith("/projects"));
        
        if (link.isDropdown) {
          return (
            <div key={link.label} className="nav-item-container">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`nav-item dropdown-toggle ${isActive ? "active" : ""} ${isDropdownOpen ? "open" : ""}`}
              >
                {isActive && !isDropdownOpen && <span className="nav-dot" aria-hidden="true" />}
                {link.label}
                <ChevronDown size={14} className={`nav-chevron ${isDropdownOpen ? "rotated" : ""}`} />
              </button>
              <NavDropdown 
                isOpen={isDropdownOpen} 
                onClose={() => setIsDropdownOpen(false)} 
              />
            </div>
          );
        }

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
      })}
    </nav>
  );
}
