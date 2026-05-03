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

export default function Design31() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0a0a0a] p-6 text-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Gradient mesh blobs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#ff006e] opacity-50 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-[#3a86ff] opacity-50 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffbe0b] opacity-40 blur-[100px]" />

      <div className="relative z-10 stagger-entrance flex flex-col items-center text-center">
        <h1 className="mb-2 text-7xl font-black text-white sm:text-9xl"
          style={{ textShadow: "0 0 40px rgba(255,255,255,0.3)" }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-black sm:text-9xl"
          style={{
            background: "linear-gradient(135deg, #ff006e, #3a86ff, #ffbe0b)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 rounded-full bg-white/10 px-8 py-2 text-lg font-bold text-white backdrop-blur-md">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
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
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-lg font-bold text-black shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
