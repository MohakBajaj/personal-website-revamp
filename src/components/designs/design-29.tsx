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

export default function Design29() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#000000] p-6 text-[#00ff41]"
      style={{ fontFamily: "'Major Mono Display', monospace" }}
    >
      {/* Cyber grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 stagger-entrance flex flex-col items-center text-center">
        <div className="mb-2 text-xs tracking-[0.5em] text-[#00ff41]/60">
          SYSTEM_BREACH_DETECTED
        </div>

        <h1 className="mb-2 text-5xl tracking-tighter text-white sm:text-7xl md:text-8xl">
          {siteConfig.name.split(" ")[0].toUpperCase()}
        </h1>
        <h1 className="mb-8 text-5xl tracking-tighter text-[#00ff41] sm:text-7xl md:text-8xl">
          {siteConfig.name.split(" ")[1].toUpperCase()}
        </h1>

        <div className="mb-10 border border-[#00ff41]/30 bg-[#00ff41]/5 px-6 py-2 text-sm tracking-widest text-[#00ff41]">
          {typeWriterTexts[role].toUpperCase()}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
<a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#00ff41]/50 px-4 py-2 text-xs tracking-wider text-[#00ff41] transition-all hover:bg-[#00ff41] hover:text-black"
            >
              {ICON_MAP[l.name]}
              {l.name.toUpperCase()}
</a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 bg-[#00ff41] px-6 py-2 text-xs font-bold tracking-wider text-black shadow-[0_0_20px_#00ff4140] transition-all hover:shadow-[0_0_40px_#00ff4180]"
        >
          <IconFile size={16} />
          RESUME
        </a>
      </div>
    </div>
  );
}
