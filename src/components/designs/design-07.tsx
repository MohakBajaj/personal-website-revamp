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
  Github: <IconBrandGithub size={18} />,
  LinkedIn: <IconBrandLinkedin size={18} />,
  "X (Twitter)": <IconBrandX size={18} />,
  Email: <IconMail size={18} />,
};

export default function Design07() {

  return (
    <div className="relative flex min-h-dvh w-full flex-col bg-white p-8 text-black md:p-16">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-between stagger-entrance">
        <header className="grid grid-cols-4 border-b-2 border-black pb-4">
          <span className="col-span-2 text-xs font-bold uppercase tracking-widest">
            Mohak Bajaj
          </span>
          <span className="text-xs font-bold uppercase tracking-widest">
            Software Engineer
          </span>
          <span className="text-right text-xs font-bold uppercase tracking-widest">
            India
          </span>
        </header>

        <main className="grid grid-cols-1 gap-8 py-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1
              className="mb-6 text-[12vw] font-bold uppercase leading-[0.9] tracking-tight md:text-[8vw]"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              {siteConfig.name.split(" ")[0]}
              <br />
              <span className="text-[#e30613]">
                {siteConfig.name.split(" ")[1]}
              </span>
            </h1>
          </div>
          <div className="flex flex-col justify-end gap-3 md:col-span-4">
            {typeWriterTexts.map((t) => (
              <div
                key={t}
                className="flex items-center gap-2 border-l-4 border-[#e30613] pl-3 text-sm font-bold uppercase tracking-wider"
              >
                {t}
              </div>
            ))}
          </div>
        </main>

        <footer className="grid grid-cols-1 gap-6 border-t-2 border-black pt-6 md:grid-cols-2">
          <div className="flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm font-bold uppercase tracking-wider hover:text-[#e30613]"
              >
                {ICON_MAP[l.name]}
                {l.name}
              </a>
            ))}
          </div>
          <div className="flex justify-start md:justify-end">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#e30613] px-6 py-2 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-black"
            >
              <IconFile size={16} />
              Resume
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}