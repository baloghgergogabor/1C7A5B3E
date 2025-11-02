import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      data: path.resolve(__dirname, "data"),
    };
    return config;
  },
};

export default nextConfig;