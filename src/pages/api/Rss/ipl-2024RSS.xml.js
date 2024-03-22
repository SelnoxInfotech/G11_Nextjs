
import axios from "axios";

function modifystr(str) {
    str = str.replaceAll(/[^a-zA-Z0-9/ ]/g, "-");
    str = str.trim().replaceAll(' ', "-");
    let a = 0;
    while (a < 1) {
        if (str.includes("--")) {
            str = str.replaceAll("--", "-")
        } else if (str.includes("//")) {
            str = str.replaceAll("//", "/")
        } else if (str.includes("//")) {
            str = str.replaceAll("-/", "/")
        } else if (str.includes("//")) {
            str = str.replaceAll("/-", "/")
        } else {
            a++
        }
    }

    return str.toLowerCase()
}

export async function generateRssXml() {
    const data = await axios.get(`https://g11fantasy.com/NewsSection/FilterbySubCategory/7`);
    const rssData = data.data.data;
    const sitemapTeamguide = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
             ${rssData.map((url) => `
                       <url>
                        <loc>https://g11prediction.com/ipl-2024/${modifystr(url.Title)}/${url.id}/</loc>
                       <changefreq>daily</changefreq>
                        <priority>0.7</priority>
                       </url>
               `).join('')}
                 </urlset>`;
    return sitemapTeamguide;
}

export default async function handler(req, res) {
    try {
        const rssXml = await generateRssXml();
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        res.status(500).end('Internal Server Error');
    }
}