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
  Github: <IconBrandGithub size={24} />,
  LinkedIn: <IconBrandLinkedin size={24} />,
  "X (Twitter)": <IconBrandX size={24} />,
  Email: <IconMail size={24} />,
};

export default function Design18() {

  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#ffea00] p-6 text-black"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="relative z-10 w-full max-w-4xl stagger-entrance">
        <h1 className="mb-2 text-7xl font-extrabold uppercase leading-none sm:text-9xl md:text-[10rem]">
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-extrabold uppercase leading-none text-white sm:text-9xl md:text-[10rem]"
          style={{ WebkitTextStroke: "2px black" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 flex flex-wrap gap-3">
          {typeWriterTexts.map((t) => (
            <span
              key={t}
              className="border-2 border-black bg-white px-4 py-2 text-sm font-bold uppercase tracking-wider shadow-[3px_3px_0px_0px_#000]"
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
              className="flex items-center gap-2 border-2 border-black bg-white px-5 py-3 font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
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
          className="mt-4 inline-flex items-center gap-2 bg-black px-8 py-4 text-lg font-bold uppercase tracking-wider text-[#ffea00] shadow-[4px_4px_0px_0px_#fff] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
        >
          <IconFile size={22} />
          Resume
        </a>
      </div>
    </div>
  );
}