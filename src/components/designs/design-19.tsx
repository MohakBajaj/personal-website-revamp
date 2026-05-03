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

export default function Design19() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#1a2f23] p-8 text-[#c9b037]"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(201,176,55,0.03) 2px, rgba(201,176,55,0.03) 4px)`,
        }}
      />

      <div className="relative z-10 w-full max-w-2xl border border-[#c9b037]/30 bg-[#1a2f23]/90 p-10 shadow-2xl backdrop-blur-sm sm:p-16 stagger-entrance">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-block border-b border-[#c9b037] pb-1 text-xs uppercase tracking-[0.4em] text-[#c9b037]">
            Curriculum Vitae
          </div>
        </div>

        <h1
          className="mb-2 text-center text-6xl font-bold text-[#f4e4bc] sm:text-8xl"
          style={{ fontFamily: "'Unna', serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-10 text-center text-6xl font-bold text-[#f4e4bc] sm:text-8xl"
          style={{ fontFamily: "'Unna', serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 text-center text-lg italic text-[#8a9a7a]">
          &ldquo;{typeWriterTexts[role]}&rdquo;
        </div>

        <div className="flex justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 text-[#8a9a7a] transition-colors hover:text-[#c9b037]"
            >
              <span className="rounded-sm border border-[#c9b037]/30 p-2 transition-all group-hover:border-[#c9b037] group-hover:bg-[#c9b037]/10">
                {ICON_MAP[l.name]}
              </span>
              <span className="text-xs uppercase tracking-wider">{l.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#c9b037] px-6 py-2 text-sm uppercase tracking-[0.2em] text-[#c9b037] transition-all hover:bg-[#c9b037] hover:text-[#1a2f23]"
          >
            <IconFile size={16} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}