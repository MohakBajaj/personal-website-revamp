import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "./globals.css?url";
import { siteConfig } from "@/config/site";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: siteConfig.name },
      {
        name: "description",
        content: siteConfig.description,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: siteConfig.name,
      },
      {
        name: "twitter:description",
        content: siteConfig.description,
      },
      {
        name: "twitter:image",
        content: siteConfig.ogImage,
      },
      {
        property: "og:title",
        content: siteConfig.name,
      },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      {
        property: "og:image",
        content: siteConfig.ogImage,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        property: "og:url",
        content: siteConfig.url,
      },
      {
        property: "og:site_name",
        content: siteConfig.name,
      },
      {
        name: "author",
        content: siteConfig.name,
      },
      {
        name: "keywords",
        content: "Mohak Bajaj, Mohak, Bajaj, bmohak",
      },
      {
        name: "robots",
        content: "follow, index",
      },
    ],
    links: [
      {
        rel: "icon",
        href: siteConfig.ogImage,
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-dvh cursor-none select-none overflow-hidden bg-background font-sans antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}