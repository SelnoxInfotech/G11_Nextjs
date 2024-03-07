/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withImages = require('next-images');
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 128 * 100000,
  },

  images: {
    // disableStaticImages: true,
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
  
  async rewrites() {
    return [
      {
        source: '/latest-match/cricket-prediction/[...slug]',
        destination: '/latest-match/cricket-prediction/[...slug]',
      },
      // Add more custom routing rules as needed
    ];
  },
};

module.exports = withFonts(withImages(nextConfig));