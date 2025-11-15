import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  turbopack: {
    root: __dirname // This tells Turbopack to use the Next.js app directory as root
  }
};

export default nextConfig;
