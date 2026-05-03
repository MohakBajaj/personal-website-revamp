import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconMail,
} from "@tabler/icons-react";
import { links } from "@/config/links";
import { siteConfig, typeWriterTexts } from "@/config/site";

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <IconBrandGithub size={20} />,
  LinkedIn: <IconBrandLinkedin size={20} />,
  "X (Twitter)": <IconBrandX size={20} />,
  Email: <IconMail size={20} />,
};

export default function Design22() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRole((r) => (r + 1) % typeWriterTexts.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#050505] p-6 text-white"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      {/* Morphing blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-[#ff006e] opacity-40 blur-[80px] animate-pulse" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-[#8338ec] opacity-40 blur-[80px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3a86ff] opacity-30 blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 w-full max-w-3xl text-center stagger-entrance">
        <h1 className="mb-2 text-7xl font-bold tracking-tight sm:text-9xl"
          style={{
            background: "linear-gradient(135deg, #ff006e, #8338ec, #3a86ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-bold tracking-tight sm:text-9xl"
          style={{
            background: "linear-gradient(135deg, #3a86ff, #06ffa5, #ffbe0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-2xl border border-white/10 bg-white/5 px-6 py-2 text-lg backdrop-blur-xl">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm backdrop-blur-md transition-all hover:border-[#ff006e] hover:bg-[#ff006e]/20"
            >
              {ICON_MAP[l.name]}
              <span className="ml-1">{l.name}</span>
            </a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#ff006e,#8338ec)] px-8 py-3 font-bold text-white shadow-lg transition-all hover:shadow-[0_0_30px_#ff006e80]"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
