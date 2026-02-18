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
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.aldiadetodo.com',
          },
        ],
        destination: 'https://aldiadetodo.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
