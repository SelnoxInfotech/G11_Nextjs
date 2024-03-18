export default async function handler(req, res) {
  try {
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
      res.write("google.com, pub-9898508472606807, DIRECT, f08c47fec0942fa0");
      res.end();
  } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
  }
}