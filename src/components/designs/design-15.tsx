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

export default function Design15() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0f380f] p-6 text-[#9bbc0f]"
      style={{ fontFamily: "'Press Start 2P', monospace" }}
    >
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px]" />

      <div className="relative z-20 w-full max-w-3xl">
        {/* Pixel border box */}
        <div className="border-4 border-[#9bbc0f] bg-[#0f380f] p-6 shadow-[8px_8px_0px_0px_#306230] sm:p-10 stagger-entrance">
          <div className="mb-6 text-center text-xs text-[#8bac0f]">
            PLAYER 1 READY
          </div>

          <h1 className="mb-2 text-center text-3xl leading-tight text-[#9bbc0f] sm:text-5xl">
            {siteConfig.name.split(" ")[0].toUpperCase()}
          </h1>
          <h1 className="mb-8 text-center text-3xl leading-tight text-[#9bbc0f] sm:text-5xl">
            {siteConfig.name.split(" ")[1].toUpperCase()}
          </h1>

          <div className="mb-8 border-2 border-[#8bac0f] bg-[#306230] p-4 text-center text-sm text-[#9bbc0f]">
            {typeWriterTexts[role]}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 border-2 border-[#9bbc0f] p-3 text-center text-xs transition-all hover:bg-[#9bbc0f] hover:text-[#0f380f]"
              >
                {ICON_MAP[l.name]}
                <span>{l.name}</span>
              </a>
            ))}
          </div>

          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex w-full items-center justify-center gap-2 border-2 border-[#9bbc0f] bg-[#306230] p-3 text-center text-xs transition-all hover:bg-[#9bbc0f] hover:text-[#0f380f]"
          >
            <IconFile size={16} />
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
