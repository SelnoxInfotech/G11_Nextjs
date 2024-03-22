"use client"

import axios from "axios"
import Head from 'next/head';
import Card from "../../../../Component/card/index"
import dynamic from 'next/dynamic'
const Details = dynamic(() => import('../../../../Component/Details/Details'), { ssr: true, loading: () => <p>Loading...</p> });
import { useRouter } from "next/router";
import { Seo } from "../../../../Component/Seo/Seo";
import React from "react";
import TableOfContent from '../../../../Component/tableofcontent/index'

export default function Detailpage(props) {
    const router = useRouter()
    let k = props.l || props.l
    React.useEffect(() => {
        if (router.query.dynamicslug === "Cricket-BreakingNews") {
            router.replace(`/cricket-breaking-news/${router.query.index}/${router.query.dynamicslug2}`);
        }
    }, [])


    console.log(props.topNews.slice(0,5))
    const h = router.query.dynamicslug
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
            {
                k?.map((data, index) => {
                    console.log(data ,'n eru f  g df  y df  uk ma  ')
                    return (
                        <React.Fragment key={index}>
                            <Seo
                                image={"https://www.g11fantasy.com" + data.Image}
                                title={data?.Meta_title || data.title}
                                description={data?.Meta_Description}
                                keywords={ data.Keywords === null ? "IPL 2024, PBKS vs DC Dream11 Prediction | Dream11 Team Today, Dream11 Winning Tips, Dream11 prediction for today's match, Best Dream11 team for Today match,dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction, dream11 today team,dream11 update,dream11 prediction,today dream11 team, dream11 prediction today match,who will win today match,who win today ipl match, my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today match,fantasy cricket prediction,best prediction site,best prediction website" : data.Keywords}
                                canonical={`https://g11prediction.com/${router.query.dynamicslug + "/" + router.query.dynamicslug2 + "/" + router.query.index}`}
                            ></Seo>
                            <Details data={data} h={router.query.dynamicslug}></Details>
                        </React.Fragment>
                    )
                })
            }
          
                </div>
                <div className="col-lg-4 col-12">
                    <TableOfContent props={props.topNews.slice(0,5)}/>
                </div>
             
            </div>
            <Card data1={router.query.dynamicslug === "cricket-news" ? "cricket-news" : h} heading={<h2>{router.query.dynamicslug}</h2>} query={router.query.dynamicslug}  ></Card>

        </div>
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

            if (ctx.query.dynamicslug === "Cricket-BreakingNews") {
                const res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.dynamicslug2}`);
                const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
                const topNews = await topNewsRes.json();
                let l = res.data.data
                axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`, { "id": ctx.params.dynamicslug2 })
                return { props: { l  , topNews} };
            }
            else {
                const res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
                const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
                const topNews = await topNewsRes.json();
                let l = res.data.data
                axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`, { "id": ctx.params.index })
                return { props: { l, topNews } };
            }
        }

    }
    catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }

}
export const dynamicParams = true