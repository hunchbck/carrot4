import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
