import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-copyright">
        Copyright © {currentYear} Pynthamil Pavendan. All rights reserved.
      </div>
      <div className="footer-links">
        <a href="https://github.com/Pynthamil" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </footer>
  );
}
