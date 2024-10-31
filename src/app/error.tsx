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
    <div className="animate__animated animate__backInDown flex h-dvh w-full flex-col items-center justify-center gap-10">
      <h1 className="text-7xl font-bold text-white">Oops!</h1>
      <TypewriterText
        texts={[
          "Something went wrong",
          "Don't worry, it's not your fault",
          "Let's try again",
        ]}
      />
      <button
        onClick={reset}
        className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
      >
        Try again
      </button>
    </div>
  );
}
