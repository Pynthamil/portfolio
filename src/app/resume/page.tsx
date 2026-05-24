import { Metadata } from "next";
import BackButton from "@/components/BackButton";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "View and download my professional resume (PDF / SVG).",
};

export default function ResumePage() {
  return (
    <main className="page-wrapper min-h-screen" id="resume-page-container">
      {/* Top action bar */}
      <div className="resume-actions-container flex justify-between items-center w-full mt-10 mb-6 animate-fade-in">
        <BackButton />
        <a 
          href="/pynthamil_resume.pdf" 
          download="Pynthamil_Resume.pdf" 
          className="hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
          id="resume-download-button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            backgroundColor: "#1d1d1f",
            color: "#ffffff",
            padding: "12px 28px",
            borderRadius: "99px",
            fontSize: "14px",
            fontWeight: 500,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
            whiteSpace: "nowrap"
          }}
        >
          <Download size={18} />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Title */}
      <div className="about-header animate-fade-in" style={{ marginTop: "20px", marginBottom: "40px" }}>
        <h1 className="about-title">
          my <span>resume</span>
        </h1>
      </div>

      {/* Resume Container */}
      <div className="resume-container flex justify-center items-center w-full mt-6 animate-fade-in">
        <div 
          className="resume-paper bg-white border border-[#e5e5ea] shadow-lg hover:shadow-xl rounded-2xl w-full max-w-[900px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
          id="resume-paper-doc"
        >
          <img 
            src="/Pynthamil_Resume.svg" 
            alt="Pynthamil Pavendan Resume" 
            className="w-full h-auto block" 
          />
        </div>
      </div>
    </main>
  );
}
