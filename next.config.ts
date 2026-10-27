import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Emit /press/index.html rather than /press.html so that the address printed
  // in the book (www.visioninglab.com/press/) resolves on GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
