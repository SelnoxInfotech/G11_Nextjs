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
        source: '/Rss/Breakingnewsrss-Feed.xml',
        destination: '/api/Rss/icc-cricket-world-cup-2024RSS-feed.xml',
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
        source: '/sitemap/sitemapmatchpreview.xml',
        destination: '/api/Rss/sitemapmatchpreview.xml',
      },
      {
        source: '/sitemap/sitemapteamguide.xml',
        destination: '/api/Rss/sitemapteamguide.xml',
      },
      {
        source: '/sitemap/sitemapcheatsheet.xml',
        destination: '/api/Rss/sitemapcheatsheet.xml',
      },
      {
        source: '/sitemap/sitemapteam.xml',
        destination: '/api/Rss/sitemapteam.xml',
      },
      // Add more custom routing rules as needed
    ];
  },
};

module.exports = withFonts(withImages(nextConfig));