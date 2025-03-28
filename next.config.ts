import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "idiamarket.kz",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
