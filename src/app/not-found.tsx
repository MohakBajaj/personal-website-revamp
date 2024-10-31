import Link from "next/link";
import TypewriterText from "@/components/type-writer-text";

export default function NotFound() {
  return (
    <div className="animate__animated animate__backInDown flex h-dvh w-full flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:gap-10">
      <h1 className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
        404
      </h1>
      <TypewriterText
        texts={["Page not found", "Are you lost?", "Let's get you back home"]}
      />
      <Link
        href="/"
        className="group relative rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-white/10 hover:shadow-lg sm:px-4 sm:py-2"
      >
        <span className="relative z-10 group-hover:animate-pulse">
          Return Home
        </span>
        <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 blur transition-opacity group-hover:opacity-100" />
      </Link>
    </div>
  );
}
