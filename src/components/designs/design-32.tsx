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
  Github: <IconBrandGithub size={18} />,
  LinkedIn: <IconBrandLinkedin size={18} />,
  "X (Twitter)": <IconBrandX size={18} />,
  Email: <IconMail size={18} />,
};

export default function Design32() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#003366] p-6 text-white"
      style={{ fontFamily: "'Inconsolata', monospace" }}
    >
      {/* Blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 stagger-entrance w-full max-w-3xl border-2 border-white/40 bg-[#003366]/90 p-8 shadow-2xl backdrop-blur-sm sm:p-12">
        {/* Corner brackets */}
        <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-white" />
        <div className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-white" />
        <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-white" />
        <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-white" />

        <div className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">
          Blueprint v1.0
        </div>

        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          {siteConfig.name.split(" ")[0].toUpperCase()}
        </h1>
        <h1 className="mb-8 text-5xl font-bold tracking-tight text-white/80 sm:text-7xl md:text-8xl">
          {siteConfig.name.split(" ")[1].toUpperCase()}
        </h1>

        <div className="mb-8 border border-white/30 bg-white/5 px-4 py-2 text-sm">
          {typeWriterTexts[role].toUpperCase()}
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/40 px-4 py-2 text-xs uppercase tracking-wider transition-all hover:bg-white hover:text-[#003366]"
            >
              {ICON_MAP[l.name]}
              {l.name.toUpperCase()}
</a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-white px-6 py-2 text-sm font-bold uppercase tracking-wider text-[#003366] transition-all hover:bg-white/90"
        >
          <IconFile size={16} />
          Resume
        </a>
      </div>
    </div>
  );
}
