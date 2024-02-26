import React from 'react';
import Head from 'next/head';
import Card from "../Component/card/index"

const Icc2024 = (props) => {
    return (
        <>
            <Head>
                <title>Breaking news</title>
                {/* <meta property="og:image" content={`https://www.g11fantasy.com/${props.ImageData[8].image}`} /> */}
                <meta property="og:title" content="Your Title" />
                <meta property="og:description" content="A full description of the page." />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <Card props={props.l.data} query={"icc-cricket-world-cup-2024"}></Card>
        </>
    );
};

export default Icc2024;

export const getStaticProps = async (context) => {  

    const res = await fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/8')
    const props = await res.json()
    const l = props
    console.log("new by NewsSection ", props)
    // const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    // const Imageprops = await Image.json()
    // const ImageData = Imageprops

    return { props: { l } }


}