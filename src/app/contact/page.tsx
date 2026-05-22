"use client";

import ContactBar from "@/components/ContactBar";

export default function ContactPage() {
  return (
    <main className="page-wrapper min-h-screen">
      <div className="about-header animate-fade-in" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <h1 className="about-title">
          contact <span>me</span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <ContactBar />
      </div>
    </main>
  );
}