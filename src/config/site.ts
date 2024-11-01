export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mohak Bajaj",
  description: "Mohak Bajaj's personal website",
  url: "https://bmohak.codes",
  ogImage: "/favicon.png",
  links: {
    twitter: "https://x.com/MohakBajaj5",
  },
} as const;

export type TypeWriterTexts = typeof typeWriterTexts;

export const typeWriterTexts = [
  "Software Engineer",
  "Full Stack Developer",
  "DevOps Enthusiast",
  "Machine Learning Enthusiast",
] as const;
