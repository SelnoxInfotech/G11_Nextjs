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
        source: '/ads.txt',
        destination: '/api/Rss/ads.txt',
      },
      {
        source: '/robot.txt',
        destination: '/api/Rss/robot.txt',
      },
      {
        source: '/Rss/Breakingnewsrss-Feed.xml',
        destination: '/api/Rss/Breakingnewsrss-Feed.xml',
      },
      {
        source: '/Rss/ipl-2024RSS-feed.xml',
        destination: '/api/Rss/ipl-2024RSS-feed.xml',
      },
      {
        source: '/Rss/icc-cricket-world-cup-2023RSS-feed.xml',
        destination: '/api/Rss/icc-cricket-world-cup-2023RSS-feed.xml',
      },
      {
        source: '/Rss/icc-cricket-world-cup-2024RSS-feed.xml',
        destination: '/api/Rss/icc-cricket-world-cup-2024RSS-feed.xml',
      },
      {
        source: '/Rss/ipl-2023RSS-feed.xml',
        destination: '/api/Rss/ipl-2023RSS-feed.xml',
      },
      {
        source: '/sitemap/sitemapBreakingnews.xml',
        destination: '/api/Rss/sitemapBreakingnews.xml',
      },
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