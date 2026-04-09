import AboutAccordion from "@/components/AboutAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, philosophy, and expertise.",
};

export default function AboutPage() {
  return (
    <main className="page-wrapper min-h-screen">
      
      <div className="about-header animate-fade-in" style={{ marginTop: "40px" }}>
        <h1 className="about-title">
          about <span>me</span>
        </h1>
      </div>

      <div className="fade-up">
        <AboutAccordion />
      </div>
    </main>
  );
}
