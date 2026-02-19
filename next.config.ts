import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  allowedDevOrigins: ["localhost:3000", "192.168.1.70:3000"],

};

export default nextConfig;
