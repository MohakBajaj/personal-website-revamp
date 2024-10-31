import Link from "next/link";
import TypewriterText from "@/components/type-writer-text";

export default function NotFound() {
  return (
    <div className="animate__animated animate__backInDown flex h-dvh w-full flex-col items-center justify-center gap-10">
      <h1 className="text-7xl font-bold text-white">404</h1>
      <TypewriterText
        texts={["Page not found", "Are you lost?", "Let's get you back home"]}
      />
      <Link
        href="/"
        className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:bg-white/10"
      >
        Return Home
      </Link>
    </div>
  );
}
