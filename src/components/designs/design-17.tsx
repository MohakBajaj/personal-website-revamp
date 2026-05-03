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

export default function Design17() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f3edf7] p-6 text-[#1d1b20]"
      style={{ fontFamily: "'Roboto Flex', sans-serif" }}
    >
      <div className="relative z-10 w-full max-w-4xl">
        <div className="rounded-[28px] bg-[#fffbfe] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.24)] sm:p-12 stagger-entrance">
          <div className="mb-2 text-sm font-medium text-[#6750a4]">
            {typeWriterTexts[role]}
          </div>
          <h1 className="mb-2 text-5xl font-normal tracking-tight text-[#1d1b20] sm:text-7xl">
            {siteConfig.name.split(" ")[0]}
          </h1>
          <h1 className="mb-10 text-5xl font-normal tracking-tight text-[#6750a4] sm:text-7xl">
            {siteConfig.name.split(" ")[1]}
          </h1>

          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#e8def8] px-5 py-2.5 text-sm font-medium text-[#1d192b] transition-all hover:bg-[#d0bcff]"
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
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#6750a4] px-6 py-3 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg"
          >
            <IconFile size={18} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}