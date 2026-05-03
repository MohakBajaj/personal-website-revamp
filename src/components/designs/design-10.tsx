import { useEffect } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconMail,
} from "@tabler/icons-react";
import { links } from "@/config/links";
import { siteConfig } from "@/config/site";

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <IconBrandGithub size={22} />,
  LinkedIn: <IconBrandLinkedin size={22} />,
  "X (Twitter)": <IconBrandX size={22} />,
  Email: <IconMail size={22} />,
};

export default function Design10() {

  return (
    <div
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[#120458] p-6 text-white"
      style={{ fontFamily: "'VT323', monospace" }}
    >
      {/* Sunset gradient bg */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#120458_0%,#590d82_30%,#f72585_60%,#ff9e00_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-[linear-gradient(to_top,#120458,transparent)]" />
        {/* Grid floor */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #120458), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.1) 40px), repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.1) 40px)",
            transform: "perspective(400px) rotateX(60deg) translateY(60px)",
          }}
        />
      </div>

      {/* Sun */}
      <div className="pointer-events-none absolute top-1/4 z-0 h-32 w-32 rounded-full bg-[#ff9e00] shadow-[0_0_60px_#ff9e00] sm:h-48 sm:w-48" />

      <div className="relative z-10 flex flex-col items-center text-center stagger-entrance">
        <h1
          className="mb-4 text-5xl tracking-widest text-white sm:text-7xl md:text-8xl"
          style={{ fontFamily: "'Zen Dots', sans-serif", textShadow: "0 0 20px #f72585" }}
        >
          {siteConfig.name.toUpperCase()}
        </h1>
        <div className="mb-10 inline-block border-2 border-[#00ffff] bg-[#120458]/80 px-6 py-2 text-2xl tracking-[0.2em] text-[#00ffff]">
          SOFTWARE ENGINEER
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#ff9e00] bg-[#120458]/80 px-5 py-2 text-lg tracking-wider text-[#ff9e00] transition-all hover:bg-[#ff9e00] hover:text-[#120458]"
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
          className="mt-6 flex items-center gap-2 bg-[#f72585] px-8 py-3 text-xl tracking-wider text-white shadow-[0_0_20px_#f72585] transition-all hover:shadow-[0_0_40px_#f72585]"
        >
          <IconFile size={22} />
          Resume
        </a>
      </div>
    </div>
  );
}