const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const RSS = require('rss');

async function fetchMatchDetails(matchId) {
  try {
    const response = await axios.get(`https://grand11.in/g11/api/page/match_details/${matchId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching match details for ID ${matchId}: ${error.message}`);
    return null;
  }
}

function modifyString(inputString) {
  if (typeof inputString === 'string') {
    return inputString.replace(/[^a-zA-Z0-9_]/g, '-').replace(/-+/g, '-').toLowerCase();
  } else {
    return '';
  }
}

async function generateRssXml(rssData) {
  try {
    const matchDetailsPromises = rssData.map(async (matchData) => {
      try {
        const matchDetailsData = await fetchMatchDetails(matchData.id);
        return matchDetailsData;
      } catch (error) {
        console.error(`Error fetching match details for ID ${matchData.id}: ${error.message}`);
        return null;
      }
    });

    const matchDetailsData = await Promise.all(matchDetailsPromises);

    const urls = matchDetailsData.reduce((acc, html, index) => {
      if (html) {
        const $ = cheerio.load(html);
        const firstParagraph = $('p').first();
        if (firstParagraph.text().split(':')[1] !== undefined) {
          acc.push({
            url1: firstParagraph.text().split(':')[1],
            id: rssData[index].id,
            title: rssData[index].title,
            description: firstParagraph.text().split(':')[1]
          });
        }
      }
      return acc;
    }, []);

    return urls;
  } catch (error) {
    throw new Error(`Error generating RSS XML: ${error.message}`);
  }
}

async function generateSitemap() {
  try {
    const matchesResponse = await axios.get('https://grand11.in/g11/all_matches_api.php');
    const rssData = matchesResponse.data.reverse();

    const rssXml = await generateRssXml(rssData);
    let feed = new RSS({
      title: 'Today Match Predictions - Cricket Betting Tips from Experts (100% Free)',
      description: 'Today Match Predictions - Cricket Betting Tips from Experts (100% Free)',
      feed_url: 'https://g11prediction.com/Rss/cheat-sheet-feed.xml/',
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });

    if (rssXml && rssXml.length > 0) {
      rssXml.forEach((url) => {
        feed.item({
          title: url.title,
          description: url.description,
          url: `https://g11prediction.com/cricket-match-predictions/${modifyString(url.url1 + "-dream11-prediction-today-match")}/${url.id}`,
        });
      });

      const rssXmlContent = feed.xml({ indent: true });
      fs.writeFileSync('./Xml/Rss/matches.xml', rssXmlContent, 'utf-8');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${rssXml.map((data) => `
          <url>
            <loc>https://g11prediction.com/cricket-match-predictions/${modifyString(data.url1 + "-dream11-prediction-today-match")}/${data.id}</loc>
            <changefreq>daily</changefreq>
            <priority>0.7</priority>
          </url>
        `).join('')}
      </urlset>`;
      fs.writeFileSync('./Xml/matches.xml', xml, 'utf-8');

      console.log('Sitemap XML generated successfully.');
      return 0;
    } else {
      throw new Error('Failed to generate RSS XML. No data available.');
    }
  } catch (error) {
    console.error(`Error generating sitemap: ${error.message}`);
  }
}

module.exports = generateSitemap;
