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

export default function Design20() {
  const [role, setRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setRole((r) => (r + 1) % typeWriterTexts.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#ff69b4] p-6 text-white"
      style={{ fontFamily: "'MS Sans Serif', 'Arial', sans-serif" }}
    >
      <div className="pointer-events-none absolute left-10 top-10 text-4xl animate-pulse">⭐</div>
      <div className="pointer-events-none absolute right-20 top-20 text-3xl animate-pulse">✨</div>
      <div className="pointer-events-none absolute bottom-20 left-20 text-5xl animate-pulse">🌟</div>
      <div className="pointer-events-none absolute bottom-10 right-10 text-2xl animate-pulse">💫</div>

      <div className="relative z-10 w-full max-w-3xl text-center stagger-entrance">
        <h1 className="mb-2 text-6xl font-black uppercase tracking-tight text-white sm:text-8xl"
          style={{ textShadow: "3px 3px 0px #00bfff, -1px -1px 0px #ff1493" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-6xl font-black uppercase tracking-tight text-[#00ffff] sm:text-8xl"
          style={{ textShadow: "3px 3px 0px #ff1493, -1px -1px 0px #fff" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-lg bg-[#000080] px-6 py-2 text-lg font-bold tracking-wider text-white"
          style={{ boxShadow: "4px 4px 0px #ff1493" }}
        >
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[linear-gradient(180deg,#e0e0e0_0%,#a0a0a0_100%)] px-5 py-2 text-sm font-bold text-black shadow-[2px_2px_0px_#000] transition-transform hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000]"
            >
              {ICON_MAP[l.name]}
              <span className="ml-1">{l.name}</span>
            </a>
          ))}
        </div>

        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#00ff00] px-8 py-3 text-lg font-bold text-black shadow-[3px_3px_0px_#000] transition-transform hover:translate-y-[1px] hover:shadow-[1px_1px_0px_#000]"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}