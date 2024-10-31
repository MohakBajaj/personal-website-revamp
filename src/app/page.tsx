import LinkButtons from "@/components/link-buttons";
import Title from "@/components/title";
import TypewriterText from "@/components/type-writer-text";

export default function Home() {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:gap-10">
      <Title name="Mohak Bajaj" />
      <TypewriterText
        texts={[
          "Software Engineer",
          "Full Stack Developer",
          "DevOps Enthusiast",
          "Machine Learning Enthusiast",
        ]}
      />
      <LinkButtons />
    </div>
  );
}
