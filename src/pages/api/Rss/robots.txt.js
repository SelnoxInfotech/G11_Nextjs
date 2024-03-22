export default async function handler(req, res) {
    try {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(
            `            User-agent: *
            Disallow:
            
            Sitemap: https://g11prediction.com/sitemap.xml
            Sitemap: https://g11prediction.com/breaking-news.xml
            Sitemap: https://g11prediction.com/icc-cricket-world-cup-2024.xml
            Sitemap: https://g11prediction.com/icc-cricket-world-cup-2023.xml
            Sitemap: https://g11prediction.com/ipl-2023.xml
            Sitemap: https://g11prediction.com/ipl-2024.xml
            Sitemap: https://g11prediction.com/cricket-rules-and-regulation.xml
            Sitemap: https://g11prediction.com/cricket-prediction.xml
            `
        );
        res.end();
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        res.status(500).end('Internal Server Error');
    }
}