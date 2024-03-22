export default async function handler(req, res) {
    try {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(
            `User-agent: *
            Disallow:
            Sitemap: https://g11prediction.com/sitemap.xml
            `
        );
        res.end();
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        res.status(500).end('Internal Server Error');
    }
}