import LinkButtons from "@/components/link-buttons";
import Title from "@/components/title";
import TypewriterText from "@/components/type-writer-text";
import { siteConfig, typeWriterTexts } from "@/config/site";

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:gap-10">
      <Title name={siteConfig.name} />
      <TypewriterText texts={typeWriterTexts} />
      <LinkButtons />
    </div>
  );
}
