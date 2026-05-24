"use client";

import { useRouter } from "next/navigation";

type Props = {
  children?: React.ReactNode;
};

export default function BackButton({ children }: Props) {
  const router = useRouter();

  return (
    <button 
      onClick={() => router.back()} 
      className="back-link"
      style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
      type="button"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "6px" }}>
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      {children || "Back"}
    </button>
  );
}
