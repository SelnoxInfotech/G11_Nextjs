import axios from "axios";
const cheerio = require('cheerio');
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

async function fetchMatchDetails(matchId) {
    try {
        const response = await axios.get(`https://grand11.in/g11/api/page/match_details/${matchId}`);
        return response.data;
    } catch (error) {
        return null; // Or handle the error in another way
    }
}

export async function generateRssXml(priview) {
    try {
        const matchesResponse = await axios.get('https://grand11.in/g11/all_matches_api.php');
        const rssData = matchesResponse.data.reverse();

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
                if (firstParagraph.text().split(":")[1] !== undefined) {
                    h.push({
                        url1: firstParagraph.text().split(":")[1],
                        id: rssData[index].id,
                        title: rssData[index].title,
                        time: new Date(rssData[index].date),
                        priview: priview
                    });
                }
            }
        });
        return h;
    } catch (error) {
        return null; // Or handle the error in another way
    }
}

export default async function handler(req, res) {
  
}
