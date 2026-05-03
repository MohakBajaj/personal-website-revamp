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
  Github: <IconBrandGithub size={22} />,
  LinkedIn: <IconBrandLinkedin size={22} />,
  "X (Twitter)": <IconBrandX size={22} />,
  Email: <IconMail size={22} />,
};

export default function Design34() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#f8f9fa] p-6 text-[#2d3436]"
      style={{ fontFamily: "'Nunito', sans-serif" }}
    >
      {/* Big flat shapes */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ff7675] opacity-60" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#74b9ff] opacity-60" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-32 w-32 rotate-12 rounded-2xl bg-[#00b894] opacity-50" />

      <div className="relative z-10 stagger-entrance flex flex-col items-center text-center">
        <h1 className="mb-2 text-7xl font-black text-[#2d3436] sm:text-9xl">
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-black text-[#ff7675] sm:text-9xl">
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-2xl bg-[#74b9ff] px-8 py-3 text-xl font-black text-white">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#2d3436] shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
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
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#2d3436] px-8 py-4 text-lg font-black text-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
        >
          <IconFile size={22} />
          Resume
        </a>
      </div>
    </div>
  );
}
