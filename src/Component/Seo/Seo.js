
import Head from 'next/head';


function Seo({ image, title, description, keywords, canonical, schema, createdate, Breadcrumlist , faq }) {
    function convertDateFormat(dateString) {
        try {
            // Create a new Date object from the provided date string
            const date = new Date(dateString);

            // Extract the date components
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const seconds = String(date.getSeconds()).padStart(2, '0');
            const timezoneOffset = date.getTimezoneOffset();

            // Convert timezone offset to hours and minutes
            const timezoneOffsetHours = Math.abs(Math.floor(timezoneOffset / 60));
            const timezoneOffsetMinutes = Math.abs(timezoneOffset) % 60;
            const timezoneSign = timezoneOffset >= 0 ? '+' : '-';

            // Construct the new date string in the desired format
            const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneSign}${String(timezoneOffsetHours).padStart(2, '0')}:${String(timezoneOffsetMinutes).padStart(2, '0')}`;

            return formattedDate;
        } catch (error) {
            return ""
        }
    }
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
        },
        "headline": title,
        "description": description,
        "keywords": keywords,
        "image": image,
        "author": {
            "@type": "Organization",
            "name": "Team G11prediction",
            "url": "https://g11prediction.com/"
        },
        "publisher": {
            "@type": "Organization",
            "name": "selnox infotech",
            "logo": {
                "@type": "ImageObject",
                "url": "https://g11prediction.com/"
            }
        },
        "datePublished": createdate ? convertDateFormat(createdate) : ""
    };
    const jsonLD = JSON.stringify(structuredData);
    let BreadcrumbList
    const itemList = [];
    Boolean(Breadcrumlist) && Breadcrumlist?.forEach((data, index) => {
        itemList.push({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@id": Object.values(data)[0],
                "name": Object.keys(data)[0]
            }
        });
        BreadcrumbList = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": itemList
        };

    });
    let FAQ
    const itemList1 = [];
    Boolean(faq) && faq?.forEach((data, index) => {
        itemList1.push({
            "@type": "Question",
            "name": data.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": data.answer
            }
        });
        FAQ = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": itemList1
        };

    });


    console.log(BreadcrumbList)
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
            <meta name="publisher" content="selnox infotech" />
            <meta property="og:description" content={description} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLD }} />}
            {Boolean(Breadcrumlist) && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbList) }} />}
            {Boolean(faq) && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ) }} />}
        </Head>
    )
}


export default Seo