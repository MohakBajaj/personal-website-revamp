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

export default function Design25() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-white p-6 text-black"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.05,
        }}
      />

      <div className="relative z-10 w-full max-w-4xl stagger-entrance">
        <div className="mb-8 flex items-center justify-between border-b-2 border-black pb-4">
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
            bmohak.codes
          </span>
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
            v1.0.0
          </span>
        </div>

        <h1 className="mb-2 text-[12vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[8vw]">
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-[12vw] font-bold uppercase leading-[0.85] tracking-tighter md:text-[8vw]">
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 border-l-4 border-black pl-4 text-lg" style={{ fontFamily: "'DM Mono', monospace" }}>
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-black px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all hover:bg-black hover:text-white"
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
          className="mt-4 inline-flex items-center gap-2 bg-black px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_#000]"
        >
          <IconFile size={18} />
          Resume
        </a>
      </div>
    </div>
  );
}
