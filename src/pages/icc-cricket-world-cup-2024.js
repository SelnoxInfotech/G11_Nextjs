import React from 'react';
import Head from 'next/head';
import Card from "../Component/card/index"
import { Seo } from '@/Component/Seo/Seo';

const Icc2024 = (props) => {
    return (
        <>
            <Seo
                image={props.ImageData[9].image}
                title={"Breaking News | G11 Fantasy Cricket Prediction |"}
                description={"Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
                keywords={"Breaking News, Cricket news, G11 Fantasy Cricket Prediction, Dream11 prediction, Cricket News Today, Live Cricket News, Online Cricket News, Cricket News Today Match, world cup 2023 cricket news,"}
            ></Seo>
            <Card props={props.l.data} query={"icc-cricket-world-cup-2024"}></Card>
        </>
    );
};

export default Icc2024;

export const getServerSideProps = async (context) => {

    const res = await fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/8')
    const props = await res.json()
    const l = props
    console.log("new by NewsSection ", props)
    const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    const Imageprops = await Image.json()
    const ImageData = Imageprops

    return { props: { l, ImageData } }


}