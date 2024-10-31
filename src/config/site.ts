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
