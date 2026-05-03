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

export default function Design23() {

  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#e8e4e1] p-6 text-[#1a1a1a]"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      {/* Diagonal red stripe */}
      <div className="pointer-events-none absolute -left-20 top-0 h-[150%] w-32 -rotate-12 bg-[#cc0000]" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-[150%] w-24 rotate-12 bg-[#1a1a1a]" />

      <div className="relative z-10 w-full max-w-4xl stagger-entrance">
        <div className="mb-6 flex items-center gap-3">
          <div className="h-3 w-3 bg-[#cc0000]" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            Software Engineer
          </span>
        </div>

        <h1
          className="mb-2 text-[15vw] leading-[0.85] text-[#1a1a1a] md:text-[10vw]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {siteConfig.name.split(" ")[0].toUpperCase()}
        </h1>
        <h1
          className="mb-8 text-[15vw] leading-[0.85] text-[#cc0000] md:text-[10vw]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {siteConfig.name.split(" ")[1].toUpperCase()}
        </h1>

        <div className="mb-10 flex flex-wrap gap-4">
          {typeWriterTexts.map((t) => (
            <span
              key={t}
              className="bg-[#1a1a1a] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#e8e4e1]"
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
              className="flex items-center gap-2 border-2 border-[#1a1a1a] px-5 py-2 font-bold uppercase tracking-wider transition-colors hover:bg-[#cc0000] hover:border-[#cc0000] hover:text-white"
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
          className="mt-4 inline-flex items-center gap-2 bg-[#cc0000] px-8 py-3 text-lg font-bold uppercase tracking-wider text-white"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
