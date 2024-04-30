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
    const [loading, setLoading] = useState(false);
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
        async function redirection() {
            if (dynamicslug === "Cricket-BreakingNews") {
                router.replace(`/cricket-breaking-news/${router.query.index}/${router.query.dynamicslug2}`);
            } else {
                // let redirect;

                if (l[0]?.subcategoy_name !== (null || undefined)) {
                    setLoading(false)
                    switch (l[0]?.subcategoy_name) {
                        case "IPL 2024":
                            setLoading(true)
                            router.replace(`/${'ipl-2024'}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "IPL 2024 Prediction": setLoading(true)
                            router.replace(`/${'ipl-2024-dream11-predictions'}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "Breaking News": setLoading(true)
                            router.replace(`/${'cricket-breaking-news'}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "Fantasy Cricket Tips": setLoading(true)
                            router.replace(`/${'fantasy-cricket-tips'}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "ICC T20 WORLD CUP 2024": setLoading(true)
                            router.replace(`/${"icc-cricket-world-cup-2024"}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "cricket rules and regulation": setLoading(true)
                            router.replace(`/${"cricket-rules-and-regulation"}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "Cricket Players": setLoading(true)
                            router.replace(`/${"cricket-players"}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "ICC Cricket World Cup 2023": setLoading(true)
                            router.replace(`/${"icc-cricket-world-cup-2023"}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        case "IPL 2023": setLoading(true)
                            router.replace(`/${"ipl-2023"}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                            break;
                        default:
                            setLoading(false)
                    }
                }
                else {

                    router.replace(`/${'cricket-news'}/${modifystr(l[0]?.Title || l[0]?.title)}/${l[0].id}`, undefined, { shallow: true });
                    setLoading(true)


                }

            }
        }

        redirection(); // Call the redirection function asynchronously

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

    if (loading) {

        //  return    <div>{'loading.....'}</div>
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        {l?.map((data, index) => (
                            <React.Fragment key={index}>
                                <Seo
                                    Breadcrumlist={[{ Home: "https://g11prediction.com/" }, { [formatString(router.query.dynamicslug)]: "https://g11prediction.com/" + router.query.dynamicslug }, { [data?.title || data?.Title]: `https://g11prediction.com/${router.query.dynamicslug}/${router.query.dynamicslug2}/${router.query.index}` }]}
                                    createdate={data.created}
                                    schema={true}
                                    image={"https://www.g11fantasy.com" + data.Image}
                                    title={data?.Meta_title || data?.title || data?.Title}
                                    description={data?.Meta_Description}
                                    keywords={data.Keywords === null ? "IPL 2024, PBKS vs DC Dream11 Prediction | Dream11 Team Today, Dream11 Winning Tips, Dream11 prediction for today's match, Best Dream11 team for Today match,dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction, dream11 today team,dream11 update,dream11 prediction,today dream11 team, dream11 prediction today match,who will win today match,who win today ipl match, my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today match,fantasy cricket prediction,best prediction site,best prediction website" : data.Keywords}
                                    canonical={`https://g11prediction.com/${router.query.dynamicslug}/${router.query.dynamicslug2}/${router.query.index}`}
                                />
                                <p className={`${style.bredcrumlong} mb-0`} ><span onClick={() => router.replace(`/`)}>Home</span>{" > "}<span onClick={() => router.replace(`/${router.query.dynamicslug}`)}>{capitalizeAndRemoveHyphens(router.query.dynamicslug)}</span>{" > "}<span className={style.activeRoute}>{capitalizeAndRemoveHyphens(data?.Title || data?.title)}</span></p>
                                <Details data={loading && data} h={dynamicslug} />

                            </React.Fragment>
                        ))}
                    </div>
                    <div className="col-lg-4 col-12">
                        <TableOfContent props={topNews?.slice(0, 6) || []} domain={dynamicslug === "cricket-news" ? "cricket-news" : undefined} />
                    </div>
                </div>
                <div className="d-md-block d-none">
                    <Card basecorme={true} data1={dynamicslug === "cricket-news" ? "cricket-news" : dynamicslug} heading={<h2>{formatString(dynamicslug)}</h2>} query={dynamicslug} domain={dynamicslug === "cricket-news" ? "https://grand11.in/g11/" : undefined} />

                </div>
            </div>
        );
    }
}

export async function getServerSideProps(ctx) {
    function isInteger(value) {
        // First, check if the value is a number or a numeric string
        if (!isNaN(value)) {
            // If it is a number or a numeric string, convert it to a number
            const num = Number(value);
            // Then check if the number is an integer
            return num === parseInt(value, 10);
        } else {
            // If it's not a number or a numeric string, return false
            return false;
        }
    }
    
      
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
                 const b = isInteger(ctx.query.index) ? ctx.query.index : ctx.query.dynamicslug2
                const p = k.find(x => x.id === b);
                let l = [p];
               if(p) {
                return { props: { l: l, topNews: k } };
               }else {
                return {
                    redirect: {
                        destination: '/404',
                        permanent: false, // Set to true for permanent redirection
                    },
                };
            }
               
            } else {

                let res;
                if (ctx?.query?.dynamicslug === "Cricket-BreakingNews") {
                    res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.dynamicslug2}`);
                } else {
                    res = await axios.get(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${ctx.params.index}`);
                }
                const topNewsRes = await fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1');

                const topNews = await topNewsRes?.json();




                let l = res?.data?.data;
                if (l) {
                    axios.post(`https://www.g11fantasy.com/NewsSection/Update-ViewCounter/`, { "id": ctx.query.dynamicslug === "Cricket-BreakingNews" ? ctx.params.dynamicslug2 : ctx.params.index });
                    return { props: { l, topNews } };
                } else {
                    const res = await axios.get(`https://grand11.in/g11/api/post`);
                    let k = res.data.result;
                    const p = k.find(x => x.id === ctx.params.index);
                    let l = [p];
                    if (l) {

                        return { props: { l: l, topNews: k } };
                    }
                    else {

                        return { props: { l: [], topNews: [] } };
                    }
                }
            }
        } catch (error) {
            // console.error("Error fetching data:", error);
            return {
                redirect: {
                    destination: '/404',
                    permanent: false, // Set to true for permanent redirection
                },
            };
        }
    }

    else {
        return {
            redirect: {
                destination: '/404',
                permanent: false, // Set to true for permanent redirection
            },
        };
    }

}

export const dynamicParams = true;
