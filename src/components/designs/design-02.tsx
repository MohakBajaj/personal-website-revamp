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
  Github: <IconBrandGithub size={24} />,
  LinkedIn: <IconBrandLinkedin size={24} />,
  "X (Twitter)": <IconBrandX size={24} />,
  Email: <IconMail size={24} />,
};

export default function Design02() {
  const [role, setRole] = useState<string>(typeWriterTexts[0]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % typeWriterTexts.length;
      setRole(typeWriterTexts[i]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#faf6f1] p-6 text-[#2d2d2d]"
    >
      <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#ffe4e1] blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#e6e6fa] blur-[120px]" />

      <div className="relative z-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 stagger-entrance">
        <div className="col-span-1 flex flex-col justify-center rounded-3xl bg-white/60 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl md:col-span-2 md:row-span-2">
          <h1
            className="mb-4 text-6xl leading-[0.9] tracking-tight text-[#1a1a1a] md:text-8xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {siteConfig.name.split(" ")[0]}
            <br />
            {siteConfig.name.split(" ")[1]}
          </h1>
          <p className="text-lg text-[#666]">
            Full Stack Developer & Engineer
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-3xl bg-[#fff0f5]/80 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          <span className="mb-2 text-xs font-bold uppercase tracking-widest text-[#999]">
            Current Role
          </span>
          <span className="text-2xl font-medium transition-all duration-500">
            {role}
          </span>
        </div>

        <div className="flex flex-col gap-3 rounded-3xl bg-[#f0fff0]/80 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl p-3 transition-all hover:bg-white hover:shadow-sm"
            >
              <span className="text-[#888] transition-colors group-hover:text-[#1a1a1a]">
                {ICON_MAP[l.name]}
              </span>
              <span className="font-medium">{l.name}</span>
            </a>
          ))}
        </div>

        <div className="col-span-1 flex items-center justify-center rounded-3xl bg-[#1a1a1a] p-6 text-white shadow-xl transition-transform hover:scale-[1.02] md:col-span-3">
          <a
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-xl font-medium"
          >
            <IconFile size={24} />
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
