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

export default function Design27() {
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
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#ffe4f3] p-6 text-[#ff69b4]"
      style={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      {/* Floating hearts */}
      <div className="pointer-events-none absolute left-[10%] top-[15%] text-2xl opacity-30">💖</div>
      <div className="pointer-events-none absolute right-[15%] top-[20%] text-xl opacity-20">🌸</div>
      <div className="pointer-events-none absolute bottom-[20%] left-[20%] text-lg opacity-25">✨</div>
      <div className="pointer-events-none absolute bottom-[15%] right-[10%] text-2xl opacity-20">💫</div>

      <div className="relative z-10 flex flex-col items-center text-center stagger-entrance">
        <h1 className="mb-2 text-7xl font-bold text-[#ff69b4] sm:text-9xl">
          {siteConfig.name.split(" ")[0]}
        </h1>
        <h1 className="mb-8 text-7xl font-bold text-[#ff1493] sm:text-9xl">
          {siteConfig.name.split(" ")[1]}
        </h1>

        <div className="mb-10 inline-block rounded-2xl bg-white px-8 py-3 text-xl font-bold text-[#ff69b4] shadow-[4px_4px_0px_#ff69b4]">
          {typeWriterTexts[role]}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-[#ff69b4] bg-white px-5 py-2 font-bold text-[#ff69b4] shadow-[2px_2px_0px_#ff69b4] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
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
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff69b4] px-8 py-3 text-lg font-bold text-white shadow-[4px_4px_0px_#ff1493] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
        >
          <IconFile size={20} />
          Resume
        </a>
      </div>
    </div>
  );
}
