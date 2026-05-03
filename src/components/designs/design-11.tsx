import { useEffect } from "react";
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

export default function Design11() {

  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f0f0f0] p-6 text-[#1a1a1a]"
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >
      {/* Geometric decorations */}
      <div className="pointer-events-none absolute left-8 top-8 h-32 w-32 rounded-full bg-[#e30613]" />
      <div className="pointer-events-none absolute bottom-16 right-12 h-24 w-24 bg-[#ffde00]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-16 w-16 rotate-45 bg-[#0047ab]" />
      <div className="pointer-events-none absolute bottom-1/4 left-1/4 h-12 w-12 rounded-full border-4 border-[#1a1a1a]" />

      <div className="relative z-10 w-full max-w-4xl stagger-entrance">
        <div className="mb-8 flex items-center gap-4">
          <div className="h-4 w-4 bg-[#e30613]" />
          <div className="h-4 w-4 bg-[#ffde00]" />
          <div className="h-4 w-4 bg-[#0047ab]" />
        </div>

        <h1
          className="mb-2 text-6xl leading-none text-[#1a1a1a] sm:text-8xl md:text-9xl"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          {siteConfig.name.split(" ")[0].toUpperCase()}
        </h1>
        <h1
          className="mb-8 text-6xl leading-none text-[#e30613] sm:text-8xl md:text-9xl"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          {siteConfig.name.split(" ")[1].toUpperCase()}
        </h1>

        <div className="mb-10 flex flex-wrap gap-3">
          {typeWriterTexts.map((t) => (
            <span
              key={t}
              className="inline-block bg-[#1a1a1a] px-4 py-2 text-sm font-bold uppercase tracking-wider text-white"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#1a1a1a] px-5 py-2 font-bold uppercase tracking-wider transition-colors hover:bg-[#1a1a1a] hover:text-white"
            >
              {ICON_MAP[l.name]}
              {l.name}
            </a>
          ))}
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0047ab] px-6 py-2 font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#e30613]"
          >
            <IconFile size={18} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
