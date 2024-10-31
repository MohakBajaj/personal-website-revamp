import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects() {
    return Promise.resolve([
      {
        source: "/resume",
        destination: "https://resume.bmohak.codes",
        permanent: true,
      },
    ]);
  },
};

export default nextConfig;
