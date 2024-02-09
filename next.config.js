/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      largePageDataBytes:2000 * 2000,
    },
    images: {
      unoptimized: true,
    }, serverOptions: {
      https: false,
    },
  };
  
  module.exports = nextConfig;