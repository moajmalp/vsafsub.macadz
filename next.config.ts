import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vsafsub.macadz.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
