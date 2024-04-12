
import Head from 'next/head';


function Seo({ image, title, description, keywords, canonical , schema , createdate }) {
    function formatDate(dateString) {
        // Create a new Date object from the provided date string
        const date = new Date(dateString);
    
        // Extract year, month, and day from the Date object
        const year = date.getFullYear(); // Full year (e.g., 2024)
        const month = ('0' + (date.getMonth() + 1)).slice(-2); // Month (zero-based index, so add 1)
        const day = ('0' + date.getDate()).slice(-2); // Day of the month
    
        // Combine year, month, and day with slashes
        const formattedDate = `${year}-${month}-${day}`;
    
        return formattedDate;
    }
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
            <link rel="canonical" href={canonical}></link>
            <link rel="shortcut icon" href={`https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg`} />
            <meta property="og:image" content={image !== undefined ? `${image}` : "https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"} />
            <meta property="og:title" content={title} />
            <meta name="author" content='g11prediction' />
            <meta name="publisher" content="selnox infotech"/>  
            <meta property="og:description" content={description} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
     { schema &&  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": "${canonical}"
                  },
                  "headline": "${title}",
                  "description": "${description}",
                  "image": "${image}",
                  "author": {
                    "@type": "Person",
                    "name": "selnox info",
                    "url": "https://g11prediction.com/"
                  },
                  "publisher": {
                    "@type": "Organization",
                    "name": "selnox infotech",
                    "logo": {
                      "@type": "ImageObject",
                      "url": ""
                    }
                  },
                  "datePublished": "${formatDate(createdate)}"
                }
            `}} />}
        </Head>
    )
}


export default Seo