import { useEffect } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconMail,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { links } from "@/config/links";
import { siteConfig, typeWriterTexts } from "@/config/site";

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <IconBrandGithub size={28} />,
  LinkedIn: <IconBrandLinkedin size={28} />,
  "X (Twitter)": <IconBrandX size={28} />,
  Email: <IconMail size={28} />,
};

export default function Design03() {

  return (
    <div
      style={{ fontFamily: "'Lora', serif" }}
      className="relative flex min-h-dvh w-full flex-col justify-between overflow-hidden bg-white p-8 text-black md:p-16 stagger-entrance"
    >
      <div className="pointer-events-none absolute right-0 top-0 z-0 select-none text-[20vw] font-bold leading-none text-[#f5f5f5] opacity-50">
        2024
      </div>

      <header className="relative z-10 flex justify-between border-b-2 border-black pb-4">
        <span className="text-sm font-bold uppercase tracking-widest">
          Portfolio
        </span>
        <span className="text-sm font-bold uppercase tracking-widest">
          India
        </span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col justify-center py-12">
        <h1
          className="mb-2 text-[15vw] leading-[0.85] tracking-tight text-black md:text-[10vw]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          {siteConfig.name.split(" ")[0]}
          <br />
          <span className="text-[#e63946]">
            {siteConfig.name.split(" ")[1]}
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-8">
          {typeWriterTexts.map((t) => (
            <span
              key={t}
              className="inline-block border border-black px-4 py-2 text-sm font-semibold uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </main>

      <footer className="relative z-10 grid grid-cols-1 gap-6 border-t-2 border-black pt-8 md:grid-cols-2">
        <div className="flex flex-wrap gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-lg font-semibold hover:text-[#e63946]"
            >
              {ICON_MAP[l.name]}
              <span className="underline decoration-2 underline-offset-4">
                {l.name}
              </span>
              <IconArrowUpRight
                size={16}
                className="opacity-0 transition-opacity group-hover:opacity-100"
              />
            </a>
          ))}
        </div>
        <div className="flex justify-start md:justify-end">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black px-6 py-3 text-white transition-colors hover:bg-[#e63946]"
          >
            <IconFile size={20} />
            <span className="font-semibold">Resume</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
