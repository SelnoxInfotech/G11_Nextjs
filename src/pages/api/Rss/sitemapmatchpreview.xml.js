import axios from "axios";
const cheerio = require('cheerio');

function modifystr(str) {
    // Your existing code for modifying strings
}

async function fetchMatchDetails(matchId) {
    try {
        const response = await axios.get(`https://grand11.in/g11/api/page/match_details/${matchId}`);
        return response.data;
    } catch (error) {
        console.log("Error fetching match details:", error);
        return null; // Or handle the error in another way
    }
}

export async function generateRssXml() {
    try {
        const matchesResponse = await axios.get('https://grand11.in/g11/all_matches_api.php');
        const rssData = matchesResponse.data;

        const matchDetailsPromises = rssData.map(async (matchdata) => {
            const matchDetailsData = await fetchMatchDetails(matchdata.id);
            return matchDetailsData;
        });

        const matchDetailsData = await Promise.all(matchDetailsPromises);

        const h = [];

        matchDetailsData.forEach((html, index) => {
            if (html) {
                const $ = cheerio.load(html);
                const firstParagraph = $('p').first();
                console.log(firstParagraph)
                if (firstParagraph) {
                    h.push({
                        url1: modifystr(firstParagraph.text().replace(firstParagraph.text().slice(0, firstParagraph.text().indexOf(":") + 1), "")),
                        id: rssData[index].id,
                        title: rssData[index].title
                    });
                }
            }
        });

        console.log(h);
        return h;
    } catch (error) {
        console.log("Error fetching matches:", error);
        return null; // Or handle the error in another way
    }
}

export default async function handler(req, res) {
    try {
        const rssXml = await generateRssXml();
        console.log(rssXml);
        // res.setHeader('Content-Type', 'text/xml');
        // res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        // res.write(rssXml);
        // res.end();
    } catch (error) {
        console.error('Error generating RSS feed:', error);
        res.status(500).end('Internal Server Error');
    }
}
