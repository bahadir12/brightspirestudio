import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/brightspirestudio',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
