import axios from "axios";
const cheerio = require('cheerio');

function modifyStr(str) {
    // Replace non-alphanumeric characters with hyphens
    str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    // Replace consecutive spaces with a single hyphen
    str = str.trim().replace(/\s+/g, "-");
    return str.toLowerCase();
}

async function fetchMatchDetails(matchId) {
    try {
        const response = await axios.get(`https://grand11.in/g11/api/page/match_details/${matchId}`);
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function generateRssXml() {
    try {
        const matchesResponse = await axios.get('https://grand11.in/g11/all_matches_api.php');
        const rssData = matchesResponse.data.reverse();

        const matchDetailsPromises = rssData.map(async (matchdata) => {
            return fetchMatchDetails(matchdata.id);
        });

        const matchDetailsData = await Promise.all(matchDetailsPromises);

        const xmlItems = [];
        matchDetailsData.forEach((html, index) => {
            if (html) {
                const $ = cheerio.load(html);
                const firstParagraph = $('p').first();
                const url1 = firstParagraph.text().split(":")[1];
                if (url1) {
                    xmlItems.push({
                        url1: url1.trim(),
                        id: rssData[index].id,
                        title: rssData[index].title,
                        time: rssData[index].date,
                    });
                }
            }
        });

        return xmlItems.map((item) => `
            <url>
                <loc>https://g11prediction.com/latest-match/cricket-predictions/team-guide/${modifyStr(item.title)}/${modifyStr(item.url1)}/${item.id}</loc>
                <lastmod>${url.time}</lastmod>
                <changefreq>daily</changefreq>
                <priority>0.7</priority>
            </url>
        `).join('');
    } catch (error) {
        return null;
    }
}

export default async function handler(req, res) {
    try {
        const rssXml = await generateRssXml();
        if (rssXml) {
            const sitemapTeamguide = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                    ${rssXml}
                </urlset>`;
            res.setHeader('Content-Type', 'text/xml');
            res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
            res.write(sitemapTeamguide);
        } else {
            res.status(500).end('Failed to generate XML.');
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).end('Internal Server Error');
    } finally {
        res.end();
    }
}
