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

export default function Design06() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "deleting">("typing");

  useEffect(() => {
    const current = typeWriterTexts[idx];
    let timer: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timer = setTimeout(() => setPhase("deleting"), 1200);
      }
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), 40);
      } else {
        setPhase("typing");
        setIdx((i) => (i + 1) % typeWriterTexts.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, idx, phase]);


  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0a0a0f] p-6 text-[#ff6600]"
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#ff660010,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#00ffff08,transparent_50%)]" />
      </div>
      <div className="relative z-10 w-full max-w-4xl stagger-entrance">
        <div className="mb-6 flex items-center gap-4">
          <div className="h-2 w-2 animate-pulse bg-[#ff6600] shadow-[0_0_10px_#ff6600]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#00ffff]">
            System Online // v2.0.1
          </span>
        </div>
        <h1
          className="mb-2 text-6xl font-black uppercase tracking-tight text-white sm:text-8xl md:text-9xl"
          style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 20px #ff660080" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1
          className="mb-8 text-6xl font-black uppercase tracking-tight text-[#ff6600] sm:text-8xl md:text-9xl"
          style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 30px #ff6600" }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>
        <div className="mb-10 border-l-2 border-[#00ffff] pl-4 text-xl text-[#00ffff]">
          <span className="text-[#ff6600]">&gt;&gt;</span> {text}
          <span className="inline-block h-5 w-2 animate-pulse bg-[#00ffff]" />
        </div>
        <div className="flex flex-wrap gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#ff6600] px-5 py-2 text-sm uppercase tracking-widest text-[#ff6600] transition-all hover:bg-[#ff6600] hover:text-black hover:shadow-[0_0_15px_#ff6600]"
            >
              {ICON_MAP[l.name]}
              {l.name}
            </a>
          ))}
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[#00ffff] px-5 py-2 text-sm uppercase tracking-widest text-[#00ffff] transition-all hover:bg-[#00ffff] hover:text-black hover:shadow-[0_0_15px_#00ffff]"
          >
            <IconFile size={18} />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}