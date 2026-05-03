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

export default function Design01() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = typeWriterTexts[idx];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          100
        );
      } else {
        timer = setTimeout(() => setPhase("deleting"), 1500);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          60
        );
      } else {
        setPhase("typing");
        setIdx((i) => (i + 1) % typeWriterTexts.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, idx, phase]);


  return (
    <div
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      className="relative flex min-h-dvh w-full items-center justify-center bg-[#050505] p-6 text-[#00ff41] selection:bg-[#00ff41] selection:text-black"
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      <div className="relative z-20 w-full max-w-4xl border-4 border-[#00ff41] p-8 shadow-[8px_8px_0px_0px_#00ff41] sm:p-12 stagger-entrance">
        <div className="mb-8 flex items-center gap-3 border-b-2 border-[#00ff41] pb-4">
          <div className="h-4 w-4 bg-[#00ff41]" />
          <span className="text-sm font-bold uppercase tracking-widest">
            user@bmohak:~$
          </span>
        </div>
        <h1 className="mb-6 text-5xl font-extrabold uppercase tracking-tighter sm:text-7xl md:text-8xl">
          {siteConfig.name}
        </h1>
        <div className="mb-10 flex items-center gap-2 text-xl sm:text-2xl">
          <span className="font-bold">$</span>
          <span>{text}</span>
          <span className="inline-block h-6 w-3 animate-pulse bg-[#00ff41]" />
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {links.map((l) => (
<a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#00ff41] px-4 py-3 font-bold uppercase tracking-widest transition-all hover:bg-[#00ff41] hover:text-black"
            >
              {ICON_MAP[l.name]}
              <span className="hidden sm:inline">{l.name}</span>
            </a>
          ))}
        </div>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 border-2 border-white px-6 py-4 text-lg font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-black"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
