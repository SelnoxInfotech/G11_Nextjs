/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      largePageDataBytes: 800 * 1000,
    },
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;