import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconFile,
  IconMail,
  type Icon,
} from "@tabler/icons-react";
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
    <div className="animate__animated animate__backInUp flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
      <div className="flex items-center gap-3 sm:gap-4">
        {links.map((link) => (
          <Tooltip key={link.name} content={link.name} className="inline-block">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${link.name}`}
              className="border-border text-primary hover:border-foreground hover:text-foreground inline-flex size-10 items-center justify-center rounded-full border-[4px] border-double transition-all duration-300 ease-in hover:-translate-y-1 sm:size-12"
            >
              {getIcon(link.name)}
            </a>
          </Tooltip>
        ))}
      </div>

      <a
        href="/resume"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-background hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-base font-medium transition-all duration-300 ease-in hover:-translate-y-1 sm:px-4 sm:py-2 sm:text-lg"
      >
        <IconFile size={20} className="sm:size-6" />
        <span>Resume</span>
      </a>
    </div>
  );
}
