import Link from "next/link";

export default function SocialFooterBar() {
  return (
    <footer 
      className="w-full max-w-[800px] mx-auto bg-white border border-[#000000]/[0.08] h-24 rounded-[20px] flex items-center justify-between"
      style={{ paddingLeft: "32px", paddingRight: "32px" }}
    >
      {/* Email */}
      <Link
        href="mailto:pavendanpynthamil@gmail.com"
        className="flex items-center gap-3.5 text-base md:text-[17px] font-medium tracking-tight text-gray-700 hover:text-black transition-all duration-300 group"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "SF Pro", "Helvetica Neue", sans-serif' }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4.5 h-4.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-gray-400 group-hover:text-black"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12zm0 0h7.5"
          />
        </svg>
        <span className="relative py-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 group-hover:after:w-full after:bg-black after:transition-all after:duration-300">
          pavendanpynthamil@gmail.com
        </span>
      </Link>

      {/* Social Icons */}
      <div className="flex items-center" style={{ gap: "20px" }}>
        <a
          href="https://github.com/Pynthamil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 active:scale-95 transition-transform duration-200 flex"
        >
          <img
            src="https://skillicons.dev/icons?i=github"
            alt="GitHub"
            className="w-10 h-10 md:w-11 md:h-11"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 active:scale-95 transition-transform duration-200 flex"
        >
          <img
            src="https://skillicons.dev/icons?i=linkedin"
            alt="LinkedIn"
            className="w-10 h-10 md:w-11 md:h-11"
          />
        </a>
      </div>
    </footer>
  );
}