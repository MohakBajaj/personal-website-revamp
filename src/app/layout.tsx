import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import "./globals.css";
import "animate.css";
import ParticlesBg from "@/components/particles-bg";
import Cursor from "@/components/cursor";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter,
    site: siteConfig.url,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    countryName: "India",
  },
  authors: {
    name: siteConfig.name,
    url: siteConfig.links.twitter,
  },
  keywords: ["Mohak Bajaj", "Mohak", "Bajaj", "bmohak"],
  robots: "follow, index",
  metadataBase: new URL(siteConfig.url),
  verification: {
    google:
      "google-site-verification=lAY-xi36h7ZE5dj8YjhBRXTZuiGwWTU8m5tTrNvX_G8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          roboto.className,
          "min-h-dvh cursor-none select-none overflow-hidden bg-background font-sans antialiased"
        )}
      >
        <ParticlesBg />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
