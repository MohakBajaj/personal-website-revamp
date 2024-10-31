import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconMail,
  type Icon,
} from "@tabler/icons-react";
import Link from "next/link";
import { links } from "@/config/links";
import Tooltip from "./tooltip";

type IconMapping = {
  [key: string]: Icon;
};

const ICON_MAP: IconMapping = {
  Github: IconBrandGithub,
  LinkedIn: IconBrandLinkedin,
  "X (Twitter)": IconBrandX,
  Email: IconMail,
} as const;

export default function LinkButtons() {
  const getIcon = (name: string) => {
    const IconComponent = ICON_MAP[name];
    return IconComponent ? <IconComponent /> : null;
  };

  return (
    <div className="animate__animated animate__backInUp flex flex-col items-center gap-10">
      <div className="flex items-center gap-4">
        {links.map((link) => (
          <Tooltip key={link.name} content={link.name} className="inline-block">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={link.url}
              aria-label={`Visit ${link.name}`}
              className="inline-flex size-12 items-center justify-center rounded-full border-[4px] border-double border-border text-primary transition-all duration-300 ease-in hover:-translate-y-1 hover:border-foreground hover:text-foreground"
            >
              {getIcon(link.name)}
            </Link>
          </Tooltip>
        ))}
      </div>

      <Link
        target="_blank"
        rel="noopener noreferrer"
        href="/resume"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-lg font-medium text-background transition-all duration-300 ease-in hover:-translate-y-1 hover:bg-primary/90"
      >
        <IconFile size={24} />
        <span>Resume</span>
      </Link>
    </div>
  );
}