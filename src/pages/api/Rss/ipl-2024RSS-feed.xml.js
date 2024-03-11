    // //  import { buildXml } from 'xmlbuilder';
    // import RSS from "rss"
    // import axios from "axios";
    // function modifystr(str) {
    //     str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    //     str = str.trim().replaceAll(' ', "-");
    //     let a = 0;
    //     while (a < 1) {
    //         if (str.includes("--")) {
    //             str = str.replaceAll("--", "-")
    //         } else if (str.includes("//")) {
    //             str = str.replaceAll("//", "/")
    //         } else if (str.includes("//")) {
    //             str = str.replaceAll("-/", "/")
    //         } else if (str.includes("//")) {
    //             str = str.replaceAll("/-", "/")
    //         } else {
    //             a++
    //         }
    //     }

    //     return str
    // }

    // function generateRssXml(data) {
    //     let feed = new RSS({
    //         title: 'Cricket Breaking News ON TRENDING TOPICS',
    //         description: 'Cricket Breaking News ON TRENDING TOPICS',
    //         feed_url: 'https://g11prediction.com/Rss/BreakingnewsRSS-feed.xml/',
    //         site_url: 'https://g11prediction.com/',
    //         image_url: 'https://g11prediction.com/image/G11.png',
    //         language: 'en',
    //         pubDate: new Date(),
    //     });
    //     data.map((url) => {
    //         const l = url.Description?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "")
    //         feed.item({
    //             title: url.Title,
    //             description: l['__html'],
    //             url: `https://g11prediction.com/cricket-breaking-news/${modifystr(url.Title)}/${url.id}`,
    //             date: new Date(url.created),
    //         });

    //     }).join('')
    //     const xml = feed.xml({ indent: true });
    //     return xml
    // }

    // export default async function handler(req, res) {
    //     // Fetch data from your application, for example:
    //     const data = axios.get(`https://www.g11fantasy.com/NewsSection/Get-News/1`)
    //     const l = await data
    //     const rssXml = generateRssXml(l.data);
    //     res.setHeader('Content-Type', 'text/xml');
    //     res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Cache the feed for 24 hours

    //     res.write(rssXml);
    //     res.end();
    // }

// rssGenerator.js

import RSS from "rss";
import axios from "axios";

function modifystr(str) {
    console.log(typeof str, " ffff")
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
    
    let feed = new RSS({
        title: 'Cricket Breaking News ON TRENDING TOPICS',
        description: 'Cricket Breaking News ON TRENDING TOPICS',
        feed_url: 'https://g11prediction.com/Rss/BreakingnewsRSS-feed.xml/',
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
            url: `https://g11prediction.com/ipl-2024/${modifystr(url.Title)}/${url.id}`,
            date: new Date(url.created),
        });
    });

    return feed.xml({ indent: true });
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