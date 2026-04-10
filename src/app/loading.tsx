import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4 animate-in fade-in duration-500">
        <Loader2 className="h-8 w-8 animate-spin text-[#1d1d1f]" />
        <p className="text-sm font-medium text-[#6e6e73] tracking-tight">
          Loading...
        </p>
      </div>
    </div>
  );
}
