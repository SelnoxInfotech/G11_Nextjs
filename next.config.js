/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withImages = require('next-images');
const nextConfig = {
  // useFileSystemPublicRoutes: false,
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 2000 * 2000,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

};

module.exports = withFonts(withImages(nextConfig));