export default async function fetchData1(req, res) {
  try {
    // Make an HTTP request to fetch data from source 1
    const [topNewsRes, matchesRes, allMatchesRes, postRes, teamsRes, imageRes] = await Promise.all([
      fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1'),
      fetch('https://grand11.in/g11/api/matches'),
      fetch('https://grand11.in/g11/all_matches_api.php'),
      fetch('https://grand11.in/g11/api/post'),
      fetch('https://grand11.in/g11/api/teams'),
      fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    ]);
    const [topNews, matches, allMatches, posts, teams, images] = await Promise.all([
      topNewsRes.json(),
      matchesRes.json(),
      allMatchesRes.json(),
      postRes.json(),
      teamsRes.json(),
      imageRes.json()
    ]);

 // Assuming breaking news is the first item in topNews array
    const responseData = {
      breaking: topNews ,
      l: topNews[0],
      l1: matches,
      l2: allMatches.reverse().slice(0, 100),
      l3: posts.result,
      teamsData: teams.result,
      imageData: images
    };

    // Parse the response and return the data
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching data from source 1:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}


// export async function fetchData2byid(id) {
//   try {
//     // Make an HTTP request to fetch data from source 2
//     const response = await fetch(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${id}`);

//     // Parse the response and return the data
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error('Error fetching data from source 2:', error);
//     throw error; // Rethrow the error for handling in getServerSideProps
//   }
// }

// // import { buildXml } from 'xmlbuilder';
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

