// pages/sitemap.xml.js

// import { getSortedPostsData } from "../lib/posts";


function generateSiteMap() {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Add the static URLs manually -->
     <url>
       <loc>https://g11prediction.com/sitemapBreakingnews.xml</loc>
     </url>
     <url>
       <loc>https://g11prediction.com/sitemap/sitemapmatchpreview.xml</loc>
     </url>
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
    
    // Generate the XML sitemap with the blog data
    const sitemap = generateSiteMap();

    res.setHeader("Content-Type", "text/xml");
    // Send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default function SiteMap() { }
