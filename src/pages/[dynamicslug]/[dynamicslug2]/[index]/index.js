import axios from "axios"
import Head from 'next/head';
import Card from "../../../../Component/card/index"
import dynamic from 'next/dynamic'
const Details = dynamic(() => import('../../../../Component/Details/Details'), { ssr: true, loading: () => <p>Loading...</p> });
import { useRouter } from "next/router";
import { Seo } from "../../../../Component/Seo/Seo";
import React from "react";

export default function Detailpage(props) {
    const router = useRouter()
    const h = router.query.dynamicslug
    let k = props.l || props.l
    console.log(h)
    return (
        <>
            {
                k.map((data, index) => {
                    // console.log(data.Keywords)
                    return (
                        <React.Fragment key={index}>
                            <Seo
                                image={"https://www.g11fantasy.com" + data.Image}
                                title={data?.Meta_title || data.title}
                                description={data?.Meta_Description}
                                keywords={"Cricket Betting Tips & Predictions"}
                                canonical={`https://g11prediction.com/${router.query.dynamicslug + "/" + router.query.dynamicslug2 + "/" + router.query.index}`}
                            ></Seo>
                            <Details data={data} h={router.query.dynamicslug}></Details>
                        </React.Fragment>
                    )
                })

            }
            <Card data1={router.query.dynamicslug === "cricket-news" ? "cricket-news" : h} query={router.query.dynamicslug} ></Card>
        </>
    )

}

export async function getServerSideProps(ctx) {
    try {
        if (ctx.query.dynamicslug === "cricket-news") {
            const res = await axios.get(`https://grand11.in/g11/api/post`);
            let k = res.data.result
            const p = k.find(x => x.id === ctx.params.index)
            let l = [p]
            return { props: { l } };
        }
        else {
            const res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
            let l = res.data.data
            axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`, { "id": ctx.params.index })
            return { props: { l } };
        }

    }
    catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }

}
export const dynamicParams = true