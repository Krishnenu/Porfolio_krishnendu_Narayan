import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d123abc456.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "krishnendu-portfolio-site.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
