/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withImages = require('next-images');
const nextConfig = {
  // cacheHandler: require.resolve('./cache-handler.js'),
  // cacheMaxMemorySize: 0, // disable default in-memory caching
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 100000,
  },
  images: {
    // formats: ['image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/Image/**',
      }, 
    ],
  },

};

module.exports = withFonts(withImages(nextConfig));