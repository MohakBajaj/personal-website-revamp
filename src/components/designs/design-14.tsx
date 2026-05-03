import { useEffect } from "react";
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
  Github: <IconBrandGithub size={18} />,
  LinkedIn: <IconBrandLinkedin size={18} />,
  "X (Twitter)": <IconBrandX size={18} />,
  Email: <IconMail size={18} />,
};

export default function Design14() {

  return (
    <div
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#e8dcc8] p-6 text-[#2c1810]"
      style={{ fontFamily: "'Libre Baskerville', serif" }}
    >
      {/* Paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-4xl stagger-entrance">
        {/* Masthead */}
        <div className="mb-6 border-b-2 border-[#2c1810] pb-2 text-center">
          <span className="text-xs uppercase tracking-[0.5em]"
                style={{ fontFamily: "'IM Fell English', serif" }}>
            The Daily Engineer
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Main article */}
          <div className="md:col-span-2">
            <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-7xl">
              {siteConfig.name}
            </h1>
            <div className="mb-6 h-px w-full bg-[#2c1810]" />
            <p className="mb-4 text-lg leading-relaxed">
              <span className="float-left mr-2 text-5xl font-bold leading-none">
                M
              </span>
              ohak Bajaj is a software engineer based in India, specializing in
              full-stack development, DevOps, and machine learning. With a
              passion for building elegant solutions to complex problems, he
              continues to push the boundaries of modern web development.
            </p>
            <div className="flex flex-wrap gap-2">
              {typeWriterTexts.map((t) => (
                <span
                  key={t}
                  className="border border-[#2c1810] px-3 py-1 text-xs uppercase tracking-wider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="border-l-0 border-t border-[#2c1810] pt-6 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <h3 className="mb-4 text-lg font-bold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:underline"
                >
                  {ICON_MAP[l.name]}
                  {l.name}
                </a>
              ))}
            </div>
            <div className="mt-6 border-t border-[#2c1810] pt-4">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#2c1810] px-4 py-2 text-sm text-[#e8dcc8]"
              >
                <IconFile size={16} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
