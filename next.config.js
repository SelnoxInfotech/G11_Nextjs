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