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

export default function Design21() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#1a0a2e] p-6 text-white"
      style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}
    >
      {/* Sunset gradient */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ff6b6b_0%,#feca57_40%,#48dbfb_100%)] opacity-30" />
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top,#1a0a2e,transparent)]" />
      </div>

      {/* Chrome circle decoration */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 z-0 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#feca57,#ff6b6b)] opacity-40 blur-sm" />

      <div className="relative z-10 flex flex-col items-center text-center stagger-entrance">
        <h1
          className="mb-2 text-6xl tracking-[0.2em] text-white sm:text-8xl md:text-9xl"
          style={{
            fontFamily: "'Kosugi', sans-serif",
            textShadow:
              "0 0 10px #feca57, 0 0 20px #feca57, 0 0 40px #ff6b6b",
          }}
        >
          {siteConfig.name.split(" ")[0].toUpperCase()}
        </h1>
        <h1
          className="mb-8 text-6xl tracking-[0.2em] text-[#feca57] sm:text-8xl md:text-9xl"
          style={{
            fontFamily: "'Kosugi', sans-serif",
            textShadow:
              "0 0 10px #ff6b6b, 0 0 20px #ff6b6b, 0 0 40px #feca57",
          }}
        >
          {siteConfig.name.split(" ")[1].toUpperCase()}
        </h1>

        <div className="mb-10 rounded-full border border-white/20 bg-white/10 px-8 py-2 text-lg tracking-widest backdrop-blur-md">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-[#feca57] px-5 py-2 text-sm tracking-wider text-[#feca57] transition-all hover:bg-[#feca57] hover:text-[#1a0a2e]"
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
          className="mt-6 flex items-center gap-2 rounded-full bg-[#ff6b6b] px-8 py-3 font-bold tracking-wider text-white shadow-[0_0_20px_#ff6b6b] transition-all hover:shadow-[0_0_40px_#ff6b6b]"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
