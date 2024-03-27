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
    disableStaticImages: true,
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
        source: '/ads.txt',
        destination: '/api/Rss/ads.txt',
      },
      {
        source: '/robots.txt',
        destination: '/api/Rss/robots.txt',
      },
      {
        source: '/icc-cricket-world-cup-2024.xml',
        destination: '/api/Rss/icc-cricket-world-cup-2024.xml',
      },
      {
        source: '/icc-cricket-world-cup-2023.xml',
        destination: '/api/Rss/icc-cricket-world-cup-2023.xml',
      },
      {
        source: '/ipl-2023.xml',
        destination: '/api/Rss/ipl-2023RSS.xml',
      },
      {
        source: '/ipl-2024.xml',
        destination: '/api/Rss/ipl-2024RSS.xml',
      },
      {
source:"/ipl-2024-dream11-predictions.xml",
destination: '/api/Rss/ipl2024pridiction',
      },
      {
        source: '/breaking-news.xml',
        destination: '/api/Rss/breaking-news.xml',
      },
      {
        source: '/cricket-rules-and-regulation.xml',
        destination: '/api/Rss/cricket-rules-and-regulation.xml',
      },
      // {
      //   source: '/sitemapBreakingnews.xml',
      //   destination: '/api/Rss/sitemapBreakingnews.xml',
      // },
      {
        source: '/breaking-news',
        destination: '/cricket-breaking-news',
      },
      {
        source: '/BreakingNews',
        destination: '/cricket-breaking-news',
      },
      {
        source: '/Cricket-BreakingNews\\(default\\)/:slug2/:slug',
        destination: '/cricket-breaking-news/:slug/:slug2',
      },
      {

        source: '/latest-match',
        destination: '/cricket-match-predictions',
      },
      {
        source: '/latest-match/:slug*',
        destination: '/cricket-match-predictions/:slug*',
      },
      {
        source: '/Cricket-news',
        destination: '/cricket-news',
      }
      // Add more custom routing rules as needed
    ];
  },
};

module.exports = withFonts(withImages(nextConfig));