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
  Github: <IconBrandGithub size={18} />,
  LinkedIn: <IconBrandLinkedin size={18} />,
  "X (Twitter)": <IconBrandX size={18} />,
  Email: <IconMail size={18} />,
};

export default function Design33() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f0f0f0] p-6 text-[#1a1a1a]"
      style={{ fontFamily: "'Courier Prime', monospace" }}
    >
      {/* Photocopy texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 stagger-entrance w-full max-w-3xl">
        {/* Cut-out style header */}
        <div className="mb-6 inline-block -rotate-2 bg-[#ff006e] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
          DIY ZINE #001
        </div>

        <h1 className="mb-2 text-6xl font-bold leading-none text-[#1a1a1a] sm:text-8xl">
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 inline-block text-6xl font-bold leading-none text-white sm:text-8xl"
          style={{ WebkitTextStroke: "2px #1a1a1a" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-8 inline-block rotate-1 border-2 border-[#1a1a1a] bg-[#ffff00] px-4 py-2 text-sm font-bold">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-[#1a1a1a] bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0px_#1a1a1a] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
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
          className="mt-4 inline-flex items-center gap-2 bg-[#1a1a1a] px-6 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-[3px_3px_0px_#ff006e] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
        >
          <IconFile size={16} />
          Resume
        </a>
      </div>
    </div>
  );
}
