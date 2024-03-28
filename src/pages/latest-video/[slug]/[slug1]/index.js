import React from 'react';
import Videodetails from "../../../../Component/Details/Videodetails"
import _ from "lodash";
import style from "../../../../styles/Style.module.scss"
import Link from 'next/link';
import { Seo } from '../../../../Component/Seo/Seo';

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
                    <React.Fragment >
                        <Seo
                            image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                            title={"Video News | G11 Fantasy Cricket Prediction |"}
                            description={"Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
                            keywords={"fantasy cricket prediction"}
                            canonical={"https://g11prediction.com/latest-video"}
                        ></Seo>
                        <Videodetails data={props.initialData} />
                    </React.Fragment>
                </div>
                <div className="col-lg-4 col-12">
                    <Index data={props.fulldata} />
                </div>
            </div>
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
        const LatestVideo = responseData.breaking
        const find = _.find(LatestVideo, LatestVideo => LatestVideo.id === parseInt(ctx.query.slug1))
        return {
            props: {
                initialData: find,
                fulldata: responseData.breaking.slice(0, 10)
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