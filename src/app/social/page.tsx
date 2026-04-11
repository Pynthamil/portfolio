import SocialHeader from "@/components/SocialHeader";
import SocialGrid from "@/components/SocialGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Design",
  description: "A archival showcase of visual storytelling and social media assets.",
};

export default function SocialPage() {
  return (
    <main className="page-wrapper min-h-screen">
      <div className="social-page-container fade-up">
        {/* Instagram Profile Style Header */}
        <SocialHeader />

        {/* 3-Column Square Grid */}
        <SocialGrid />
      </div>
    </main>
  );
}
