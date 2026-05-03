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
  Github: <IconBrandGithub size={24} />,
  LinkedIn: <IconBrandLinkedin size={24} />,
  "X (Twitter)": <IconBrandX size={24} />,
  Email: <IconMail size={24} />,
};

export default function Design08() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#fff5e6] p-6"
      style={{ fontFamily: "'Comic Neue', sans-serif" }}
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute left-10 top-20 h-24 w-24 rounded-full border-4 border-[#ff6b9d]" />
      <div className="pointer-events-none absolute right-20 top-40 h-16 w-16 rotate-45 bg-[#4ecdc4]" />
      <div className="pointer-events-none absolute bottom-32 left-20 h-20 w-20 rounded-full bg-[#ffe66d]" />
      <div className="pointer-events-none absolute bottom-20 right-10 h-32 w-4 -rotate-12 bg-[#ff6b9d]" />

      <div className="relative z-10 w-full max-w-3xl text-center stagger-entrance">
        <h1
          className="mb-4 text-7xl font-bold text-[#2d3436] sm:text-9xl"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-8 text-7xl font-bold text-[#ff6b9d] sm:text-9xl"
          style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-full bg-white px-8 py-3 text-2xl font-bold text-[#2d3436] shadow-[4px_4px_0px_0px_#4ecdc4]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border-2 border-[#2d3436] bg-white px-5 py-3 font-bold text-[#2d3436] shadow-[3px_3px_0px_0px_#2d3436] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
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
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#ff6b9d] px-8 py-4 text-xl font-bold text-white shadow-[4px_4px_0px_0px_#2d3436] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <IconFile size={22} />
          Resume
        </a>
      </div>
    </div>
  );
}