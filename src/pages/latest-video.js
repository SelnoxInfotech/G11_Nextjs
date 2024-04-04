"use client"
import React , {useEffect} from 'react';
import dynamic from 'next/dynamic'
import Seo from '../Component/Seo/Seo';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import Link from 'next/link';
import style from "../styles/Style.module.scss"
import Videocardskeleton from '../Component/skeleton/Videocardskeleton';
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

const Video = (initialData) => {
    const router = useRouter();
    const imagePerRow = 8
    const [next, setNext] = React.useState(imagePerRow);
    const k = initialData
    const { data: fetchedData, error } = useSWR(`https://www.g11fantasy.com/NewsSection/Get-VideoNews/`, fetcher, { k });

    const data = fetchedData ;

    if (!fetchedData) {
        return (
          <div className='container '>
            
                     < Videocardskeleton />
                
            
          </div>
        )
      }

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
    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };

    const alternativeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;



  //  router.replace({ pathname: '/latest-video/'});

  if(router.asPath === "/Latest-Video/"){
    router.replace({ pathname: '/latest-video/'});
  }

    return (
        <>
            <Seo
                image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={"Video News | G11 Fantasy Cricket Prediction |"}
                description={"Video Breaking News on latest cricket updates. G11 Fantasy Cricket Prediction Website and Application for Today's match. # 1 Dream11 Fantasy Cricket Prediction tips."}
                keywords={"fantasy cricket prediction"}
                canonical={"https://g11prediction.com/latest-video"}
            ></Seo>
            <div className={`${'container'} ${style.latestVideoPage}`}>
                <div className="row">

                   <div  className={style.videopagetitle}>
                   <h1 >Latest Video</h1> <h2>New</h2>
                    </div> 
                    <div className={style.videoh1box}>
                        {data.data?.slice(0, next)?.map((ele) => {
                            return (
                                <div className={style.latestvideo_card} key={ele.id}>

                                    <div className={style.react_player}>
                                       
                                            <iframe className={`w-100 ${style.videoplayer}`}
                                                    title='Youtube player'
                                                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                                                    src={`https://youtube.com/embed/${ele.VideoUrl.match(alternativeRegex)[1]}?autoplay=0&showinfo=0&modestbranding=0&part=snippet&wmode=transparent&controls=1&color=white&rel=0&enablejsapi=1&playsinline=1&&version=3&theme=light&autohide=1&egm=0&showsearch=0&loop=1`}>
                                            </iframe>
                                            
                                            </div>
                                          
                                            <div className="col ">
                                                <Link href={`/latest-video/${modifystr(ele.Translated_Title)}/${ele.id}`}><p className={style.latest_video_title}>{ele.Title.substr(0, 100)}</p></Link>
                                                <span className={style.Latest_video_date}>
                                                    {ele.created.slice(0, 10)}
                                                </span>
                                            </div>
                                

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>  
                <div className='mt-5 d-flex gap-2 justify-content-center '>
                    {next < data.data?.length && (
                        <button className={style.loadmorebtm} onClick={handleMoreImage}
                        >
                            Load more
                        </button>
                    )}
                    {next < data.data?.length && (
                        <button className={next <= 3 ? 'hidden' : style.loadmorebtm} onClick={handlelessImage}
                        >
                            Read Less
                        </button>
                    )}
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

