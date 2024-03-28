import React from 'react';

import dynamic from 'next/dynamic'
const Card = dynamic(() => import('../Component/card/index'), { ssr: true, loading: () => <p>Loading...</p> });
import { Seo } from '../Component/Seo/Seo';
import useSWR from 'swr';
import ReactPlayer from 'react-player'
import Link from 'next/link';
import style from "../styles/Style.module.scss"
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

const Video = (initialData) => {
    const imagePerRow = 8
    const [next, setNext] = React.useState(imagePerRow);
    const [setHandleAudio] = React.useState(false)
    const k = initialData
    const { data: fetchedData, error } = useSWR(`https://www.g11fantasy.com/NewsSection/Get-VideoNews/`, fetcher, { k });

    const data = fetchedData || k;

    if (!data) return <div>Loading...</div>;
    const handleVideo = () => {
        setHandleAudio(true)
    }
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };


    return (
        <>
            <Seo
                image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={"Video News | G11 Fantasy Cricket Prediction |"}
                description={"Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
                keywords={"fantasy cricket prediction"}
                canonical={"https://g11prediction.com/latest-video"}
            ></Seo>
            <div className={`${'container'} ${style.videoBox}`}>
                <div className="row">
                    <div className={style.videoh1box}>
                        <h1>Latest Video News </h1><h2>- G11 Fantasy Cricket Prediction</h2>
                    </div>
                    {data.data?.slice(0, next)?.map((ele) => {
                        return (
                            <div className='col-md-3' key={ele.id}>
                                <div className='video' style={{ margin: "20px" }}>
                                    <div className='react_player iframeContainer'>
                                        <ReactPlayer controls={false} url={ele.VideoUrl} width="100%" height="100%" onClick={handleVideo} />
                                    </div>
                                    <div>
                                        <div className="col latest_video_title">
                                            <Link className="hedding hovereffect text" href={`/latest-video/${ele.Title.replace(/\s+/g, '-').slice(0, -1).toLowerCase()}/${ele.id}`}><p>{ele.Title.substr(0, 100)}</p></Link>
                                            <span className="Latest_video_date">
                                                {/* <span className="ClenderIcon"> <CiCalendarDate></CiCalendarDate></span> */}
                                                {ele.created.slice(0, 10)}
                                            </span>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='row'>
                <div className='col-12 center '>
                    {next < data.data?.length && (
                        <button className="btn readleft" onClick={handleMoreImage}
                        >
                            Load more
                        </button>
                    )}
                    {next < data.data?.length && (
                        <button className={next <= 3 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                        >
                            Read Less
                        </button>
                    )}
                </div>

            </div>

        </>
    );
};

export default Video;



export async function getStaticProps(ctx) {
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

        return {
            props: {
                initialData: responseData.breaking,
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

