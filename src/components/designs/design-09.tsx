import { useEffect, useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
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

export default function Design09() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f7f3eb] p-8 text-[#1a1a1a]"
      style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* Subtle texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center text-center stagger-entrance">
        <div className="mb-12 h-24 w-px bg-[#1a1a1a]" />

        <h1
          className="mb-4 text-6xl font-light tracking-[0.15em] text-[#1a1a1a] sm:text-8xl"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-12 text-6xl font-light tracking-[0.15em] text-[#1a1a1a] sm:text-8xl"
          style={{ fontFamily: "'Noto Serif JP', serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-12 text-lg tracking-[0.2em] text-[#666]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex gap-6">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <span className="text-[#999] transition-colors group-hover:text-[#1a1a1a]">
                {ICON_MAP[l.name]}
              </span>
              <span className="text-xs tracking-[0.15em] text-[#999] transition-colors group-hover:text-[#1a1a1a]">
                {l.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 h-24 w-px bg-[#1a1a1a]" />

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-sm tracking-[0.2em] text-[#666] underline underline-offset-8 transition-colors hover:text-[#1a1a1a]"
        >
          View Resume
        </a>
      </div>
    </div>
  );
}