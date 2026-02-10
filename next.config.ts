import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/website_visioninglab",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
