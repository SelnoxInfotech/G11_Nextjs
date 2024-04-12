
import Head from 'next/head';


function Seo({ image, title, description , keywords, canonical}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name='robots' content='INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1' />
            <link rel="canonical" href={canonical}></link>
            <link rel="shortcut icon" href={`https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg`} />
            <meta property="og:image" content={ image !== undefined ? `${image}` : "https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"} />
            <meta property="og:title" content={title} />
            <meta name="author" content='g11prediction'/>
            <meta property="og:description" content={description} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
    )
}


export default Seo