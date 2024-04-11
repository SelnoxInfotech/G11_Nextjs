import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';
import Card from "../../../../Component/card/index";
import TableOfContent from '../../../../Component/tableofcontent/index';
import Seo from "../../../../Component/Seo/Seo";
import style from "../../../../styles/Style.module.scss"


const Details = dynamic(() => import('../../../../Component/Details/Details'), { ssr: true });


export default function Detailpage({ l, topNews }) {
    let redirect
    const router = useRouter();
    const { dynamicslug } = router.query;
    const [loading, setLoading] = useState(true);
    function modifystr(str) {

        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str?.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str?.includes("--")) {
                str = str?.replaceAll("--", "-")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("//", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("-/", "/")
            } else if (str?.includes("//")) {
                str = str?.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str?.toLowerCase()
    }


    useEffect(() => {
        setLoading(true); // Set loading state to true before fetching data
        if (dynamicslug === "Cricket-BreakingNews") {
            router.replace(`/cricket-breaking-news/${router.query.index}/${router.query.dynamicslug2}`);
        }
        else {
            redirect = l[0].subcategoy_name === "IPL 2024"
                ? "/ipl-2024" : l[0].subcategoy_name === "IPL 2024 Prediction"
                    ? "/ipl-2024-dream11-predictions" : l[0].subcategoy_name === "Breaking News"
                        ? "/cricket-breaking-news" : l[0].subcategoy_name === "Fantasy Cricket Tips"
                            ? "/fantasy-cricket-tips" : l[0].subcategoy_name === "ICC T20 WORLD CUP 2024"
                                ? "/icc-cricket-world-cup-2024" : l[0].subcategoy_name === "cricket rules and regulation"
                                    ? "/cricket-rules-and-regulation" : l[0].subcategoy_name === "Cricket Players"
                                        ? "/cricket-players" : l[0].subcategoy_name === "IPL 2023"
                                            ? "/icc-cricket-world-cup-2023" : l[0].subcategoy_name === "IPL 2023" && "/ipl-2023"
            router.replace(`/${redirect.toLowerCase()}/${modifystr(l[0].Title)}/${l[0].id}`);
        }
    }, []);


    function formatString(str) {
        return str.replace(/-/g, ' ').replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase(); });
    }
    function capitalizeAndRemoveHyphens(str) {
        // Split the string by hyphens
        let words = str.split('-');
        
        // Capitalize the first letter of each word
        let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        
        // Join the words back together with spaces
        let result = capitalizedWords.join(' ');
        
        return result;
    }


// console.log(data)
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    {l?.map((data, index) => (
                   
                        <React.Fragment key={index}>
                            <Seo
                                image={"https://www.g11fantasy.com" + data.Image}
                                title={data?.Meta_title || data.title || data.Title}
                                description={data?.Meta_Description}
                                keywords={data.Keywords === null ? "IPL 2024, PBKS vs DC Dream11 Prediction | Dream11 Team Today, Dream11 Winning Tips, Dream11 prediction for today's match, Best Dream11 team for Today match,dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction, dream11 today team,dream11 update,dream11 prediction,today dream11 team, dream11 prediction today match,who will win today match,who win today ipl match, my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today match,fantasy cricket prediction,best prediction site,best prediction website" : data.Keywords}
                                canonical={`https://g11prediction.com/${router.query.dynamicslug}/${router.query.dynamicslug2}/${router.query.index}`}
                            />
                            <p className="mt-1 d-flex" style={{ margin: "0" , gap:"10px" , color:"#c2121c" , cursor:"pointer" }}><span onClick={()=>router.replace(`/`)}>Home</span>{">"}<span onClick={()=>router.replace(`/${router.query.dynamicslug}`)}>{capitalizeAndRemoveHyphens(router.query.dynamicslug)}</span>{">"}<span>{capitalizeAndRemoveHyphens(data.Title)}</span></p>
                            <Details data={data} h={dynamicslug} />

                        </React.Fragment>
                    ))}
                </div>
                <div className="col-lg-4 col-12">
                    <TableOfContent props={topNews?.slice(0, 6) || []} domain={dynamicslug === "cricket-news" ? "cricket-news" : undefined} />
                </div>
            </div>
            <Card data1={dynamicslug === "cricket-news" ? "cricket-news" : dynamicslug} heading={<h2>{formatString(dynamicslug)}</h2>} query={dynamicslug} domain={dynamicslug === "cricket-news" ? "https://grand11.in/g11/" : undefined} />
        </div>
    );
}

export async function getServerSideProps(ctx) {

    if (ctx.params.dynamicslug === "cricket-breaking-news"
        || ctx.params.dynamicslug === "ipl-2024"
        || ctx.params.dynamicslug === "ipl-2024-dream11-predictions"
        || ctx.params.dynamicslug === "cricket-rules-and-regulation"
        || ctx.params.dynamicslug === "icc-cricket-world-cup-2024"
        || ctx.params.dynamicslug === "icc-cricket-world-cup-2023"
        || ctx.params.dynamicslug === "cricket-players"
        || ctx.params.dynamicslug === "ipl-2023"
        || ctx.params.dynamicslug === "cricket-news"
        || ctx.params.dynamicslug === "fantasy-cricket-tips"
    ) {
        try {
            if (ctx.query.dynamicslug === "cricket-news") {
                const res = await axios.get(`https://grand11.in/g11/api/post`);
                let k = res.data.result;
                const p = k.find(x => x.id === ctx.params.index);
                let l = [p];
                return { props: { l: l, topNews: k } };
            } else {
                let res;
                if (ctx.query.dynamicslug === "Cricket-BreakingNews") {
                    res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.dynamicslug2}`);
                } else {
                    res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
                }

                const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
                const topNews = await topNewsRes?.json();

                let l = res?.data?.data;
                if (l) {
                    axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`, { "id": ctx.query.dynamicslug === "Cricket-BreakingNews" ? ctx.params.dynamicslug2 : ctx.params.index });
                    return { props: { l, topNews } };
                } else {
                    return { props: { l: [], topNews: [] } };
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            return { props: { error: "Failed to fetch data" } };
        }
    }

    else {
        return {
            redirect: {
                // destination: '/404',
                permanent: false, // Set to true for permanent redirection
            },
        };
    }

}

export const dynamicParams = true;
