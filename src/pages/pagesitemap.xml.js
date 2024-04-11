
export async function getServerSideProps({ res }) {

    // Generate the XML sitemap with the blog data
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Add the static URLs manually -->
      <url>
        <loc>https://g11prediction.com/</loc>
      </url>
      <url>
        <loc>https://g11prediction.com/icc-cricket-world-cup-2024/</loc>
      </url>
      <url>
      <loc>https://g11prediction.com/icc-cricket-world-cup-2023/</loc>
    </url>
    <url>
    <loc>https://g11prediction.com/ipl-2023/</loc>
  </url>
  <url>
  <loc>https://g11prediction.com/ipl-2024/</loc>
  </url>
  <url>
  <loc>https://g11prediction.com/cricket-rules-and-regulation/</loc>
  </url>
      <url>
        <loc>https://g11prediction.com/cricket-match-predictions/</loc>
      </url>
      <url>
      <loc>https://g11prediction.com/latest-video/</loc>
    </url>
    <url>
    <loc>https://g11prediction.com/ipl-2024-dream11-predictions/</loc>
  </url>
  <url>
  <loc>https://g11prediction.com/fantasy-cricket-tips/</loc>
  </url>  
    </urlset>
  `;

    res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function SiteMap() { }
