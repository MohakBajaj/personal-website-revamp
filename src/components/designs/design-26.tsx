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

export default function Design26() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f4f4f0] p-8 text-[#1a1a1a]"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      {/* Swiss grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-0 h-full w-px bg-[#1a1a1a]/5" />
        <div className="absolute left-[50%] top-0 h-full w-px bg-[#1a1a1a]/5" />
        <div className="absolute right-[10%] top-0 h-full w-px bg-[#1a1a1a]/5" />
        <div className="absolute left-0 top-[20%] h-px w-full bg-[#1a1a1a]/5" />
        <div className="absolute left-0 bottom-[20%] h-px w-full bg-[#1a1a1a]/5" />
      </div>

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-12 gap-4 stagger-entrance">
        <div className="col-span-12 border-b-2 border-[#1a1a1a] pb-2">
          <span className="text-xs font-bold uppercase tracking-widest">
            Portfolio 2024
          </span>
        </div>

        <div className="col-span-8">
          <h1 className="text-[8vw] font-bold leading-[0.9] tracking-tight md:text-[6vw]">
            {siteConfig.name.split(" ")[0]}
          </h1>
          <h1 className="text-[8vw] font-bold leading-[0.9] tracking-tight text-[#ff3300] md:text-[6vw]">
            {siteConfig.name.split(" ")[1]}
          </h1>
        </div>

        <div className="col-span-4 flex flex-col justify-end">
          <div className="border-l-2 border-[#1a1a1a] pl-4">
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-[#666]">
              Role
            </div>
            <div className="text-lg font-bold">{typeWriterTexts[role]}</div>
          </div>
        </div>

        <div className="col-span-12 mt-8 border-t-2 border-[#1a1a1a] pt-4">
          <div className="flex flex-wrap gap-6">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#ff3300]"
              >
                {ICON_MAP[l.name]}
                {l.name}
</a>
            ))}
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 text-sm font-bold uppercase tracking-wider text-[#f4f4f0] transition-colors hover:bg-[#ff3300]"
            >
              <IconFile size={16} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
