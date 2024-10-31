"use client";

import { useEffect } from "react";
import TypewriterText from "@/components/type-writer-text";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="animate__animated animate__backInDown flex h-dvh w-full flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:gap-10">
      <h1 className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        Oops!
      </h1>
      <TypewriterText
        texts={[
          "Something went wrong",
          "Don't worry, it's not your fault",
          "Let's try again",
        ]}
      />
      <button
        onClick={() => {
          reset();
          // Add a small animation when clicking
          const btn = document.activeElement as HTMLElement;
          btn?.classList.add("animate__animated", "animate__pulse");
        }}
        className="group rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-white/10 hover:shadow-lg sm:px-4 sm:py-2"
      >
        <span className="group-hover:animate-pulse">Try again</span>
      </button>
    </div>
  );
}
