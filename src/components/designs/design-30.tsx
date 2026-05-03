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

export default function Design30() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f5f5f0] p-6 text-[#1e3a5f]"
      style={{ fontFamily: "'Lora', serif" }}
    >
      {/* Wave decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-[#1e3a5f]" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }} />
      <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-32 bg-[#d4a574]/30" style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }} />

      <div className="relative z-10 stagger-entrance flex flex-col items-center text-center">
        <h1 className="mb-2 text-7xl font-bold text-[#1e3a5f] sm:text-9xl">
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-bold text-[#d4a574] sm:text-9xl">
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 rounded-full border-2 border-[#1e3a5f] bg-white px-8 py-2 text-lg font-bold text-[#1e3a5f]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
<a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-[#1e3a5f] bg-white px-5 py-2 text-sm font-bold text-[#1e3a5f] transition-all hover:bg-[#1e3a5f] hover:text-white"
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
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1e3a5f] px-8 py-3 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#152a45]"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
