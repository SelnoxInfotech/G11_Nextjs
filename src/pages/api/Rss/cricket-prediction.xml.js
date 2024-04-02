import axios from "axios";

export default async function handler(req, res) {

    function modifystr(str) {
        // Correcting replaceAll usage
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replace(/ /g, "-");
        let a = 0;
        while (a < 1) {
          if (str.includes("--")) {
            str = str.replace("--", "-");
          } else if (str.includes("//")) {
            str = str.replace("//", "/");
          } else if (str.includes("//")) {
            str = str.replace("-/", "/");
          } else if (str.includes("//")) {
            str = str.replace("/-", "/");
          } else {
            a++;
          }
        }
        return str.toLowerCase();
      }
    
      function htmlStringToJson(htmlString) {
        const regex = /<strong>(.*?)<\/strong>[\s:]+(.*?)(?=<)/g;
        let match;
        const data = {};
        while ((match = regex.exec(htmlString)) !== null) {
            const key = match[1].trim();
            const value = match[2].trim();
            data[key] = value;
        }
        return data;
      }
    
      async function generateRssXml() {
        try {
          // Fetch data from API
          const response = await axios.get('https://g11fantasy.com/NewsSection/tbl_matchApi/');
          const rssData = response.data.reverse(); // Assuming data structure is correct
    
          // Generating XML
          const xml = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              ${rssData.map((url) => `
                <url>
                  <loc>https://g11prediction.com/cricket-match-predictions/${ htmlStringToJson(url.match_discription).Match !== undefined ? modifystr(htmlStringToJson(url.match_discription).Match)+"-dream11-prediction-today-match": 'dream11-prediction-today-match'}/${url.id}/</loc>
                  <changefreq>daily</changefreq>
                  <priority>0.7</priority>
                </url>
              `).join('')}
            </urlset>`;
          return xml;
        } catch (error) {
          throw error;
        }
      }
    
      try {
        const rssXml = await generateRssXml(); // Await here
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.send(rssXml);
      } catch (error) {
        console.error('Error generating RSS feed:', error);
        res.status(500).end('Internal Server Error');
      }
}