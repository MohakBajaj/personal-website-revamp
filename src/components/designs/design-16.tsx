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

export default function Design16() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#faf8f5] p-6 text-[#2d2d2d]"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="relative z-10 w-full max-w-2xl stagger-entrance">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#d4a574]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#d4a574]">
            Portfolio
          </span>
          <div className="h-px flex-1 bg-[#d4a574]" />
        </div>

        <h1
          className="mb-2 text-6xl font-semibold leading-tight text-[#2d2d2d] sm:text-8xl"
          style={{ fontFamily: "'Literata', serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-8 text-6xl font-semibold leading-tight text-[#c17f59] sm:text-8xl"
          style={{ fontFamily: "'Literata', serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 text-xl text-[#8a8a8a]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-[#2d2d2d] transition-colors hover:text-[#c17f59]"
            >
              <span className="rounded-full bg-[#f0ebe5] p-2 transition-colors group-hover:bg-[#c17f59] group-hover:text-white">
                {ICON_MAP[l.name]}
              </span>
              {l.name}
            </a>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-[#d4a574]" />
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#c17f59] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#a66a47]"
          >
            <IconFile size={16} className="inline mr-2" />
            Resume
          </a>
          <div className="h-px flex-1 bg-[#d4a574]" />
        </div>
      </div>
    </div>
  );
}