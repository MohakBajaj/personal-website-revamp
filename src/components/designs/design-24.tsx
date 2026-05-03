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

export default function Design24() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#fff8f0] p-6 text-[#2d3436]"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      {/* Palm leaf shadows using gradients */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rotate-12 rounded-full bg-[#00b894] opacity-10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 -rotate-12 rounded-full bg-[#e17055] opacity-10 blur-3xl" />

      <div className="relative z-10 w-full max-w-3xl text-center stagger-entrance">
        <h1
          className="mb-2 text-7xl text-[#00b894] sm:text-9xl"
          style={{ fontFamily: "'Pacifico', sans-serif" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-8 text-7xl text-[#e17055] sm:text-9xl"
          style={{ fontFamily: "'Pacifico', sans-serif" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-full bg-[#ffeaa7] px-8 py-2 text-lg font-bold text-[#2d3436]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-[#00b894] px-5 py-2 text-sm font-bold text-[#00b894] transition-all hover:bg-[#00b894] hover:text-white"
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
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e17055] px-8 py-3 font-bold text-white shadow-lg transition-all hover:bg-[#d63031]"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
