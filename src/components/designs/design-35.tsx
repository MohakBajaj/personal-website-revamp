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

export default function Design35() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-white p-6 text-black"
      style={{ fontFamily: "'Sawarabi Mincho', serif" }}
    >
      {/* Halftone dots pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1.5px, transparent 1.5px)`,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Speed lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-full w-px -rotate-12 bg-black/5" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-black/5" />
        <div className="absolute left-3/4 top-0 h-full w-px rotate-12 bg-black/5" />
      </div>

      <div className="relative z-10 stagger-entrance flex flex-col items-center text-center">
        <h1 className="mb-2 text-7xl font-bold tracking-tight sm:text-9xl"
          style={{
            textShadow: "4px 4px 0px rgba(0,0,0,0.1)",
          }}
        >
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-bold tracking-tight sm:text-9xl"
          style={{
            textShadow: "4px 4px 0px rgba(0,0,0,0.1)",
          }}
        >
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 border-4 border-black bg-white px-6 py-2 text-lg font-bold shadow-[4px_4px_0px_#000]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-black bg-white px-4 py-2 text-sm font-bold shadow-[3px_3px_0px_#000] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
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
          className="mt-6 inline-flex items-center gap-2 bg-black px-8 py-3 text-lg font-bold text-white shadow-[4px_4px_0px_#666] transition-transform hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
