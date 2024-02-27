
import Head from 'next/head';


function Seo({ image, title, description , keywords }) {
    //   console.log(image , title)
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="shortcut icon" href={`https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg`} />
            <meta property="og:image" content={ image !== undefined ? `https://www.g11fantasy.com${image}` : "https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
        </Head>
    )
}


export { Seo }