const router = require('express').Router();
const cheerio = require('cheerio');
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


    const rssData = link === "icc-cricket-world-cup-2023RSS-feed.xml" ? data.data.data : link === "ipl-2023RSS-feed.xml" ? data.data.data : link === "ipl-2024RSS-feed.xml" ? data.data.data : link === "ipl-2024-dream11-predictions.xml" ? data.data.data
      : link === "latest-video.xml" ? data.data.data : link === "icc-cricket-world-cup-2024RSS-feed.xml" ? data.data.data : link === "Breakingnewsrss-feed.xml" ? data.data.data : data.data.data;

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



  if (req.params.category === "Breakingnewsrss-Feed.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/5", "Breakingnewsrss-feed.xml", "cricket-breaking-news");
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

    async function generateRssXml() {
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
    
      const data = await axios.get("https://g11fantasy.com/NewsSection/tbl_matchApi/");

      const rssData = data.data.reverse();

      let feed = new RSS({
        title: 'Cricket Breaking News ON TRENDING TOPICS',
        description: 'Cricket Breaking News ON TRENDING TOPICS',
        feed_url: `https://g11prediction.com/rss/cricket-match-predictions/`,
        site_url: 'https://g11prediction.com/',
        image_url: 'https://g11prediction.com/image/G11.png',
        language: 'en',
        pubDate: new Date(),
      });

      rssData.forEach((url) => {
        const matchesObject = {};
        const l = url.match_discription?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
        [l].forEach((match, index) => {
          matchesObject[`Match_${index + 1}`] = match.replace(/&ndash;/g, '-');
        });
        feed.item({
          title:Boolean(matchesObject.Match_1.split(/:|-/)[1]) ?  matchesObject.Match_1.split(/:|-/)[1].replace(/&nbsp;/g, '') : matchesObject.Match_1.replace(/&nbsp;/g, '') + " dream11 prediction today match, dream 11 prediction , Fantasy Cricket Tips, Playing XI, Pitch Report, Injury Update ",
          description: url.match_discription,
          url: `https://g11prediction.com/cricket-match-predictions/${Boolean(matchesObject.Match_1.split(/:|-/)[1]) ? modifystr(matchesObject.Match_1.split(/:|-/)[1].replace(/&nbsp;/g, '')+"-dream11-prediction-today-match"): modifystr(matchesObject.Match_1.replace(/&nbsp;/g, '') + "-dream11-prediction-today-match")}/${url.id}/`,
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


  else if (req.params.category === "fantasy-cricket-tips.xml") {
    try {
      async function k() {
        const rssXml = await generateRssXml("https://g11fantasy.com/NewsSection/FilterbySubCategory/12", "fantasy-cricket-tips.xml", "fantasy-cricket-tips");
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