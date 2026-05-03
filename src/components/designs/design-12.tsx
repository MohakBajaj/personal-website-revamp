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

export default function Design12() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f5f0e8] p-6 text-[#3d2b1f]"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Leaf pattern using CSS */}
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#8fbc8f] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#d2b48c] opacity-30 blur-3xl" />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl bg-white/70 p-10 shadow-xl backdrop-blur-sm sm:p-16 stagger-entrance">
        <h1
          className="mb-2 text-5xl font-bold text-[#2d5016] sm:text-7xl"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-8 text-5xl font-bold text-[#8b4513] sm:text-7xl"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-full bg-[#e8f5e9] px-6 py-2 text-lg font-semibold text-[#2d5016]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#8b4513] px-5 py-2 text-sm font-semibold text-[#8b4513] transition-all hover:bg-[#8b4513] hover:text-white"
            >
              {ICON_MAP[l.name]}
              {l.name}
            </a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2d5016] px-6 py-3 font-bold text-white transition-colors hover:bg-[#1a3009]"
        >
          <IconFile size={18} />
          Resume
        </a>
      </div>
    </div>
  );
}
