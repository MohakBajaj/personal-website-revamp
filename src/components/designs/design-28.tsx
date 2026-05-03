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

export default function Design28() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRole((r) => (r + 1) % typeWriterTexts.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0d0d0d] p-8 text-[#c9a96e]"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      {/* Ornate border */}
      <div className="pointer-events-none absolute inset-4 border border-[#c9a96e]/30" />
      <div className="pointer-events-none absolute inset-6 border border-[#c9a96e]/20" />

      <div className="relative z-10 flex flex-col items-center text-center stagger-entrance">
        <div className="mb-4 text-xs uppercase tracking-[0.5em] text-[#8b0000]">
          Est. 2024
        </div>

        <h1
          className="mb-2 text-7xl text-[#c9a96e] sm:text-9xl" style={{ fontFamily: "'UnifrakturMaguntia', cursive" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-8 text-7xl text-[#8b0000] sm:text-9xl" style={{ fontFamily: "'UnifrakturMaguntia', cursive" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 flex items-center gap-4 text-lg italic text-[#666]">
          <div className="h-px w-12 bg-[#c9a96e]" />
          <span>{typeWriterTexts[role]}</span>
          <div className="h-px w-12 bg-[#c9a96e]" />
        </div>

        <div className="flex gap-6">
          {links.map((l) => (
<a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#666] transition-colors hover:text-[#c9a96e]"
            >
              <span className="rounded-sm border border-[#c9a96e]/30 p-2 transition-all group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e]/10">
                {ICON_MAP[l.name]}
              </span>
              <span className="text-xs uppercase tracking-wider">{l.name}</span>
</a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center gap-2 border border-[#8b0000] bg-[#8b0000] px-6 py-2 text-sm uppercase tracking-[0.2em] text-[#f4f4f0] transition-all hover:bg-transparent hover:text-[#8b0000]"
        >
          <IconFile size={16} />
          Resume
        </a>
      </div>
    </div>
  );
}
