import React from 'react';
import { AiFillEye } from "react-icons/ai"
import Image from 'next/image';
import parse from 'html-react-parser';
import style from "../../styles/Style.module.scss"
import ReactPlayer from 'react-player'
import Link from 'next/link'; // Import Link from next.js
// import  Youtubevideo from  'youtube-video-js';

function getYoutubeEmbedUrl(url) {
    let videoId = '';

    // Match the video ID using regular expression
    const regex = /[?&]([^=#]+)=([^&#]*)/g;
    let match;
    while ((match = regex.exec(url)) !== null) {
        if (match[1] === 'v') {
            videoId = match[2];
            break;
        }
    }

    // If video ID is not found, check for alternative URL formats
    if (!videoId) {
        const alternativeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const alternativeMatch = url.match(alternativeRegex);
        if (alternativeMatch) {
            videoId = alternativeMatch[1];
        }
    }

    // Return the embed URL
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}??autoplay=1&mute=1&controls=1&loop=1&modestbranding=1&rel=0&showinfo=0&autohide=1&fs=1&color=white&cc_load_policy=1&iv_load_policy=3&enablejsapi=1`;
    } else {
        return ''; // Return empty string if video ID is not found
    }
}

function Videodetails({ data, h }) {
    const [video, Setvideo] = React.useState(false)

    return (
        <div className={style.detailspaget}>
            <div className="container ">
                <div className="row ">
                    <div className="col-12 d-flex" > <h1 className="title_had">{data.Title}</h1></div>
                    <div className="col-12 imag">
                        <div className={`col ${style.headeringImage}`}>
                            {/* <ReactPlayer controls={video} url={data?.VideoUrl} width="100%" height="400px"  onClick={handleVideo}/> */}
                            <iframe height="480" width="100%"
                                src={getYoutubeEmbedUrl(data?.VideoUrl)}>
                            </iframe>


                            {/* <div className={style.headeringImagehover}></div> */}
                        </div>
                        <div className={style.detailspagecontent}>
                            {parse(data.Description || data.content)}
                        </div>
                        <div className={`col-12 ${style.ViewCountDetailspage}`}>
                            <div className={`col-6 ${style.ViewCount}`}>
                                {data?.ViewCount && <>
                                    <AiFillEye></AiFillEye>  <span>{data?.ViewCount + 1} view</span>
                                </>}
                            </div>
                            <div className={`col-6 ${style.ViewCountDate}`}>
                                <p >{data?.created?.slice(0, 10) || data.post_date}</p>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
}

export default Videodetails;
