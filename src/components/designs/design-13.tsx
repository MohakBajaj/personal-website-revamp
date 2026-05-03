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

export default function Design13() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#050510] p-6 text-white"
      style={{ fontFamily: "'Exo 2', sans-serif" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#7c3aed] opacity-20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#06b6d4] opacity-20 blur-[120px]" />

      <div className="relative z-10 w-full max-w-4xl">
        {/* Glass card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur-xl sm:p-16 stagger-entrance">
          <h1
            className="mb-2 text-6xl font-bold tracking-tight sm:text-8xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {siteConfig.name.split(" ")[0]}
          </h1>
          <h1
            className="mb-8 text-6xl font-bold tracking-tight text-[#a78bfa] sm:text-8xl"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            {siteConfig.name.split(" ")[1]}
          </h1>

          <div className="mb-10 inline-block rounded-full border border-[#06b6d4]/30 bg-[#06b6d4]/10 px-6 py-2 text-lg text-[#06b6d4]">
            {typeWriterTexts[role]}
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-sm transition-all hover:border-[#7c3aed] hover:bg-[#7c3aed]/20"
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
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#06b6d4] px-6 py-3 font-bold text-[#050510] transition-all hover:shadow-[0_0_30px_#06b6d480]"
          >
            <IconFile size={18} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
