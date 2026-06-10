import Link from "next/link";

export default function SocialFooterBar() {
  return (
    <footer 
      className="w-full max-w-[800px] mx-auto bg-white border border-[#000000]/[0.08] rounded-[20px] flex items-center justify-between flex-wrap gap-4 px-6 sm:px-8 py-5"
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
          className="w-4.5 h-4.5 -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-gray-400 group-hover:text-black flex-shrink-0"
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
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/Pynthamil"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:scale-110 active:scale-95 transition-transform duration-200 flex"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-8 h-8 md:w-9 md:h-9 text-[#1d1d1f]" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/pynthamil-pavendan-55795228a/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-110 active:scale-95 transition-transform duration-200 flex"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-8 h-8 md:w-9 md:h-9 text-[#0a66c2]" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}
