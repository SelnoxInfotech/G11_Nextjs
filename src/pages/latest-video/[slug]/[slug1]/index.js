import React from 'react';
import Videodetails from "../../../../Component/Details/Videodetails"
import _ from "lodash";
import  style from "../../../../styles/Style.module.scss"
import Link from 'next/link';


function Index({ data }) {
    return (
        <div className={style.breaknewssidebar}>
            <h4 className={style.breaknewssidebartitle}>Recent News</h4>
            <div className={style.breaknewssidebarList}>
                {data?.map((item, index) => {
                    return <Link key={index} href={`/latest-video/${item?.Title.replace(/\s+/g, '-').slice(0, -1).toLowerCase()}/${item.id}`}><h2 className={style.breaknewssidebarListitem}>{item.Title}</h2></Link>
                })}
            </div>
        </div>
    )
}

function index(props) {
    return (
        <div className="container">
        <div className="row">
            <div className="col-lg-8 col-12">
                {/* {[  ]?.map((data, index) => ( */}
                    <React.Fragment >
                        {/* <Seo
                            image={"https://www.g11fantasy.com" + data.Image}
                            title={data?.Meta_title || data.title}
                            description={data?.Meta_Description}
                            keywords={data.Keywords === null ? "IPL 2024, PBKS vs DC Dream11 Prediction | Dream11 Team Today, Dream11 Winning Tips, Dream11 prediction for today's match, Best Dream11 team for Today match,dream 11 team today,cricket prediction,today dream 11 team,cricket betting tips,dream 11 prediction,dream11 team today,dream 11 today team,best team for dream11 today match,who will win today ipl match,today ipl match prediction, dream11 today team,dream11 update,dream11 prediction,today dream11 team, dream11 prediction today match,who will win today match,who win today ipl match, my 11 circle team prediction today,cricket tips,online cricket betting tips,cricket betting tips free,cricket jackpot tips,today cricket match prediction tips,Today Live Toss prediction,cricket match prediction,free cricket match prediction,who will win today match,fantasy cricket prediction,best prediction site,best prediction website" : data.Keywords}
                            canonical={`https://g11prediction.com/${router.query.dynamicslug}/${router.query.dynamicslug2}/${router.query.index}`}
                        /> */}
                        <Videodetails data={props.initialData}  />
                    </React.Fragment>
                {/* ))} */}
            </div>
            <div className="col-lg-4 col-12">
            <Index data={props.fulldata} />
            </div>
        </div>
        {/* <Card data1={dynamicslug === "cricket-news" ? "cricket-news" : dynamicslug} heading={<h2>{dynamicslug}</h2>} query={dynamicslug} /> */}
    </div>
    );
}

export async function getServerSideProps(ctx) {
    try {
        const [topNewsRes] = await Promise.all([
            fetch(`
      https://www.g11fantasy.com/NewsSection/Get-VideoNews/`),
        ]);

        const [topNews] = await Promise.all([
            topNewsRes.json(),
        ]);

        const responseData = {
            breaking: topNews.data,
        };
   const  LatestVideo  =  responseData.breaking
    const find =  _.find(LatestVideo, LatestVideo => LatestVideo.id === parseInt(ctx.query.slug1))
        return {
            props: {
                initialData: find,
                fulldata: responseData.breaking.slice(0,10)
            },
        };
  
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            props: {
                initialData: null,
                error: 'Failed to fetch data',
            },
        };
    }
}
export default index;