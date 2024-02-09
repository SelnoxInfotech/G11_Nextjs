"use client"
import React from 'react';
import parse from 'html-react-parser';
import ScrollContainer from 'react-indiana-drag-scroll';
import ReactPlayer from 'react-player/youtube'
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import YouTubePlayer from 'youtube-player';
const HightLight = ({ Video }) => {
    function modifystr(str) {
        str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
        str = str.trim().replaceAll(' ', "-");
        let a = 0;
        while (a < 1) {
            if (str.includes("--")) {
                str = str.replaceAll("--", "-")
            } else if (str.includes("//")) {
                str = str.replaceAll("//", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("-/", "/")
            } else if (str.includes("//")) {
                str = str.replaceAll("/-", "/")
            } else {
                a++
            }
        }

        return str
    }
    const [val, setVal] = React.useState([])



    React.useEffect(() => {
        const callApi = async () => {
            const res = await fetch("https://www.g11fantasy.com/NewsSection/Get-VideoNews/");
            const data = await res.json();
            setVal(data.data)
        }
        callApi()
    }, [])
    const handleVideo = () => {
        // setHandleAudio(true)
    }
    console.log(val)
    React.useEffect(() => {



        var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/


        if (val.length !== 0) {
            // val.map((data) => {

            //     const player = YouTubePlayer('1', {

            //         videoId: data.VideoUrl.match(rx)[1],
            //         width: '100%',
            //         height: '100%',
            //     });
            //     console.log(player)
            //     return () => {
            //         player.destroy();
            //     };
            // })

            val.forEach(({id, VideoUrl }) => {
                console.log(id, VideoUrl.match(rx)[1])
                const player = YouTubePlayer("Youtube"+id, {
                  videoId: VideoUrl.match(rx)[1],
                  width: '100%',
                  height: '100%',
                });
            })
          


        }
    }, [val]);



    return (
        <div className={`${'container-fluid'} ${style.VideoSection}`} >
            <div className={style.latest_bottem}>
                <div className=" border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                            <h3><span className={style.hadding}> HighLight</span> </h3>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollContainer
                // hideScrollbars={false}
                // nativeMobileScroll={true}
                className={`${style.BreakingnewsScroll} responsive-scroll-container`} >
                <div className='col-12 d-flex gap-3 '>

                    {/* <ReactPlayer controls={false} url={Video[0].VideoUrl} onClick={handleVideo} className="react_player_home" /> */}
                    {
                        val.map((data, index) => {
                            // console.log(data.VideoUrl)
                            return (
                                <>
                                    <div className={`${style?.VideoSectionImage} col-2`} key={index}>
                                        <div id={"Youtube"+data.id}></div>
                                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/vYaqYCpPdDw?si=1YCGDfYrAFp5145g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                        {/* <ReactPlayer  className="react-player" url={"https://www.youtube.com/embed/2Y-M5N_l7Ec?si=QtaF7YB8FZhCt7b3"} onClick={handleVideo}   config={{ youtube: { playerVars: { origin: 'https://www.youtube.com' } } }}/> */}
                                    </div>
                                    {/* <div className='col'>
                                        <Link href={`/cricket-news/${data.id}/${data.title.replace(/\s+/g, '-')}`}>   <div className="hedding hovereffect text"><h3> {data.title.substr(0, 55)}</h3></div></Link>
                                        <div><span className="content text">{parse(data.content.substr(0, 1000))}</span></div>
                                        <Link href={`/cricket-news/${data.id}/${data.title.replace(/\s+/g, '-')}`}><button className="btn primary hovereffect" >Read Full News</button></Link>
                                    </div> */}

                                </>
                            )
                        })
                    }
                </div>
            </ScrollContainer>
        </div>



    );
};

export default HightLight;