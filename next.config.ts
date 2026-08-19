import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/advise",
        destination: "/build",
        permanent: true,
      },
      {
        source: "/cultivate",
        destination: "/steward",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
