import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ai-ustasi",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
