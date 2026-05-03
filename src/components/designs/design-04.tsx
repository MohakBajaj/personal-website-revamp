import { useEffect } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconMail,
} from "@tabler/icons-react";
import { links } from "@/config/links";
import { siteConfig } from "@/config/site";

const ICON_MAP: Record<string, React.ReactNode> = {
  Github: <IconBrandGithub size={22} />,
  LinkedIn: <IconBrandLinkedin size={22} />,
  "X (Twitter)": <IconBrandX size={22} />,
  Email: <IconMail size={22} />,
};

export default function Design04() {

  return (
    <div
      style={{ fontFamily: "'Rajdhani', sans-serif" }}
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-[#0d0221] p-6 text-white"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#2d1b4e,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,#ff00ff20,transparent)]" />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_bottom,transparent,#0d0221),repeating-linear-gradient(90deg,transparent,transparent_49px,#00ffff10_50px)]"
          style={{
            transform:
              "perspective(500px) rotateX(60deg) translateY(100px)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center stagger-entrance">
        <h1
          className="mb-4 bg-[linear-gradient(180deg,#ffffff_0%,#ff00ff_100%)] bg-clip-text text-6xl text-transparent sm:text-8xl md:text-9xl"
          style={{ fontFamily: "'Orbitron', sans-serif" }}
        >
          {siteConfig.name.toUpperCase()}
        </h1>
        <div className="mb-10 inline-block border border-[#00ffff] px-6 py-2 text-xl tracking-[0.3em] text-[#00ffff] shadow-[0_0_15px_#00ffff80]">
          SOFTWARE ENGINEER
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2 overflow-hidden border border-[#ff00ff] px-6 py-3 font-bold uppercase tracking-widest text-[#ff00ff] transition-all hover:text-white"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#ff00ff] transition-transform group-hover:translate-x-0" />
              <span className="relative z-10">{ICON_MAP[l.name]}</span>
              <span className="relative z-10">{l.name}</span>
            </a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-6 flex items-center gap-3 overflow-hidden bg-[#00ffff] px-8 py-4 text-lg font-bold uppercase tracking-widest text-[#0d0221] shadow-[0_0_20px_#00ffff80] transition-all hover:shadow-[0_0_40px_#00ffff]"
        >
          <IconFile size={22} />
          Resume
        </a>
      </div>
    </div>
  );
}
