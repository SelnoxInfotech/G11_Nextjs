
export async function getServerSideProps({ res }) {

  // Generate the XML sitemap with the blog data
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemap xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>https://g11prediction.com/breaking-news.xml</loc>
    </sitemap>
    <sitemap>
      <loc>https://g11prediction.com/icc-t20-world-cup-2024.xml</loc>
    </sitemap>
    <sitemap>
    <loc>https://g11prediction.com/icc-cricket-world-cup-2023.xml</loc>
  </sitemap>
  <sitemap>
  <loc>https://g11prediction.com/ipl-2023.xml</loc>
</sitemap>
<sitemap>
<loc>https://g11prediction.com/ipl-2024.xml</loc>
</sitemap>
<sitemap>
<loc>https://g11prediction.com/cricket-rules-and-regulation.xml</loc>
</sitemap>
    <sitemap>
      <loc>https://g11prediction.com/cricket-prediction.xml</loc>
    </sitemap>
    <sitemap>
    <loc>https://g11prediction.com/latest-video.xml</loc>
  </sitemap>
  <sitemap>
  <loc>https://g11prediction.com/ipl-2024-dream11-predictions.xml</loc>
</sitemap>
<sitemap>
<loc>https://g11prediction.com/fantasy-cricket-tips.xml</loc>
</sitemap>  
  </sitemap>
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
