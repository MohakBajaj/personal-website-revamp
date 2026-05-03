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

export default function Design05() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRole((r) => (r + 1) % typeWriterTexts.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0a0a0a] p-8 text-[#d4af37]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#d4af37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center stagger-entrance">
        <div className="mb-6 flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-[#d4af37]" />
          <div className="h-2 w-2 rotate-45 bg-[#d4af37]" />
          <div className="h-px flex-1 bg-[#d4af37]" />
        </div>

        <h1
          className="mb-2 text-center text-5xl tracking-[0.2em] text-[#f5f5dc] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-6 text-center text-5xl tracking-[0.2em] text-[#f5f5dc] sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 flex items-center gap-4 text-xl uppercase tracking-[0.3em] text-[#d4af37]">
          <div className="h-px w-12 bg-[#d4af37]" />
          <span>{typeWriterTexts[role]}</span>
          <div className="h-px w-12 bg-[#d4af37]" />
        </div>

        <div className="flex gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 transition-colors hover:text-[#f5f5dc]"
            >
              <span className="rounded-full border border-[#d4af37] p-3 transition-all group-hover:border-[#f5f5dc] group-hover:bg-[#d4af37] group-hover:text-[#0a0a0a]">
                {ICON_MAP[l.name]}
              </span>
              <span className="text-xs uppercase tracking-[0.2em]">
                {l.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex w-full items-center gap-4">
          <div className="h-px flex-1 bg-[#d4af37]" />
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#d4af37] px-6 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#0a0a0a] transition-colors hover:bg-[#f5f5dc]"
          >
            <IconFile size={18} />
            Resume
          </a>
          <div className="h-px flex-1 bg-[#d4af37]" />
        </div>
      </div>
    </div>
  );
}
