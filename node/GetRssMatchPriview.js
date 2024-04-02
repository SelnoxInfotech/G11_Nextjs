const router = require('express').Router();
const path = require('path')
const fs = require("fs");
const { default: axios } = require('axios');
const RSS = require('rss');


router.get('/rss/:category', (req, res) => {
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

  async function generateRssXml(url, link, siteurl) {
    const data = await axios.get(url);


    const rssData = link === "icc-cricket-world-cup-2023RSS-feed.xml" ? data.data.data : link === "ipl-2023RSS-feed.xml" ? data.data.data : link === "ipl-2024RSS-feed.xml" ? data.data.data : link === "ipl-2024-dream11-predictions.xml" ? data.data.data : link === "latest-video.xml" ? data.data.data : data.data;

    let feed = new RSS({
      title: 'Cricket Breaking News ON TRENDING TOPICS',
      description: 'Cricket Breaking News ON TRENDING TOPICS',
      feed_url: `https://g11prediction.com/rss/${link}/`,
      site_url: 'https://g11prediction.com/',
      image_url: 'https://g11prediction.com/image/G11.png',
      language: 'en',
      pubDate: new Date(),
    });

    rssData.forEach((url) => {
      const l = url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
      feed.item({
        title: url.Title,
        description: l['__html'],
        url: `https://g11prediction.com/${siteurl}/${link === "latest-video.xml" ? url.Title.replace(/\s+/g, '-').slice(0, -1).toLowerCase() : modifystr(url.Title)}/${url.id}/`,
        date: new Date(url.created),
      });
    });

    return feed.xml({ indent: true });
  }


  if (req.params.category === "cricket-prediction.xml") {
    const filePath = path.join(__dirname, '../Xml/Rss/matches.xml'); // Update the file path accordingly

    // Check if the file exists
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(err);
        return res.status(404).send('XML file not found');
      }

      // Set headers to specify XML content and to open directly in browser
      res.set({
        'Content-Type': 'application/xml',
        // 'Content-Disposition': 'inline', // This header tells the browser to open the file instead of downloading it
      });

      // Stream the file as response
      const fileStream = fs.createReadStream(filePath);
      fileStream.pipe(res);
    });
  }
  else if (req.params.category === "Breakingnewsrss-Feed.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://www.g11fantasy.com/NewsSection/Get-News/1", "Breakingnewsrss-feed.xml", "cricket-breaking-news");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }

  else if (req.params.category === "icc-cricket-world-cup-2023RSS-feed.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/2", "icc-cricket-world-cup-2023RSS-feed.xml", "icc-cricket-world-cup-2023");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }
  else if (req.params.category === "icc-cricket-world-cup-2024RSS-feed.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/8", "icc-cricket-world-cup-2024RSS-feed.xml", "icc-cricket-world-cup-2024");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }
  else if (req.params.category === "ipl-2023RSS-feed.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/1", "ipl-2023RSS-feed.xml", "ipl-2023");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }

  else if (req.params.category === "ipl-2024RSS-feed.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/7", "ipl-2024RSS-feed.xml", "ipl-2024");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }
  else if (req.params.category === "ipl-2024-dream11-predictions.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/11", "ipl-2024-dream11-predictions.xml", "ipl-2024-dream11-predictions");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }
  else if (req.params.category === "latest-video.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://www.g11fantasy.com/NewsSection/Get-VideoNews/", "latest-video.xml", "latest-video");
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }
  else if (req.params.category === "cricket-prediction.xml") {
    function modifyString(inputString) {
      if (typeof inputString === 'string') {
        return inputString.replace(/[^a-zA-Z0-9_]/g, '-').replace(/-+/g, '-').toLowerCase();
      } else {
        return '';
      }
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
      const data = await axios.get("https://g11fantasy.com/NewsSection/tbl_matchApi/");

      const rssData = data.data;
      let feed = new RSS({
        title: 'Cricket Breaking News ON TRENDING TOPICS',
        description: 'Cricket Breaking News ON TRENDING TOPICS',
        feed_url: `https://g11prediction.com/rss/${"link"}/`,
        site_url: 'https://g11prediction.com/',
        image_url: 'https://g11prediction.com/image/G11.png',
        language: 'en',
        pubDate: new Date(),
      });

      rssData.forEach((url) => {
        const l = url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
        feed.item({
          title: url.match_title,
          // description: l['__html'],
          url: `https://g11prediction.com/cricket-match-predictions/${htmlStringToJson(url.match_discription).Match !== undefined ? modifystr(htmlStringToJson(url.match_discription).Match) : '-'}/${url.id}/`,
          date: new Date(url.create_date),
        });
      });

      return feed.xml({ indent: true });
    }
    try {
      async function k() {
        const rssXml = await generateRssXml();
        res.setHeader('Content-Type', 'text/xml');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours
        res.write(rssXml);
        res.end();
      }
      k()
    } catch (error) {
      console.error('Error generating RSS feed:', error);
      res.status(500).end('Internal Server Error');
    }
  }

  else {
    res.status(200).json("page Not Found");
  }

});


module.exports = router;