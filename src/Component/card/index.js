"use client"
import React from 'react';
import style from "../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai"
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import Button from "react-bootstrap/Button";
import axios from 'axios';
const Card = ({ props, query  ,data1 , heading}) => {
    const [data, setdata] = React.useState(props)
    const imagePerRow = 12
    const [next, setNext] = React.useState(imagePerRow);
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
    // const imageLoader = ({ src, width, height, quality }) => {
    //     return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
    // }
    const imageLoader = ({ src, width, height, quality }) => {
        const l  =  data1 === "cricket-news" ? 'https://grand11.in/g11/': "https://www.g11fantasy.com"
            return (`${l}${src}?w=${width}&h=${height}&q=${quality || 100}`)
        }

    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    React.useEffect(() => {
        if (data1 === undefined) {
            axios.get('/api/utils/getpostbycategory')
                .then(response => {
                    setdata(response.data)
                })
        }
        else if (data1 === "cricket-news") {
            axios.get(`https://grand11.in/g11/api/post`).then((res) => {
                setdata(res.data.result)
            })
        }
        else if (data1 === "icc-cricket-world-cup-2024") {
            axios.get(`/FilterbySubCategory/${8}`).then((response) => {
                setdata(response.data)
            })
        }

        else if (data1 === "IPL-2024-Latest-News-Live-Updates") {
            axios.get(`/FilterbySubCategory/${7}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "cricket-breaking-news") {
            axios.get(`/api/utils/breakingnew`).then((response) => {
                setdata(response.data.breaking)
            })
        }
        else if (data1 === "ipl-2023") {
            axios.get(`/FilterbySubCategory/${1}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "ipl-2024") {
            axios.get(`/FilterbySubCategory/${7}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "cricket-rules-and-regulation") {
            axios.get(`/Filterbycategory/${2}`).then((response) => {
                setdata(response.data)
            })
        }
        else if (data1 === "cricket-players") {
            axios.get(`/Filterbycategory/${3}`).then((response) => {
                setdata(response.data)
            })
        }
    },[data1])



    return (
        <div className='container center'>
            <div className={`${"row"} ${style.Breaking_new}`}>
                <div className={`col-12 ${style.breaking_news_hed}`}>
                   {heading}
                </div>
               <div className={style.Breaking_newCardWrapper}>
                    {
                        data?.slice(0, next)?.map((breakingnews, index) => {
                            return (

                                <div className={`${style.Breaking_news_gap}`} key={index}>
                                    <div className={style.BreakingNewscard}>
                                        
                                            <div className={`${"col"}`}>
                                                <RWebShare
                                                    data={{
                                                        // url: `http://weedx.site/cricket-breaking-news/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title || breakingnews?.title)}/${breakingnews.id}`

                                                    }}
                                                    onClick={() => console.log("shared successfully!")}
                                                >
                                                    <Button className={`${style.ShareButton}`}>
                                                        <BsFillShareFill  color='#c2121c'></BsFillShareFill>
                                                    </Button>
                                                </RWebShare>

                                            </div>
                                            <Link className={`${style.hovereffect}`} href={`/${query}/${breakingnews?.urlslug !== (null || undefined) ? modifystr(breakingnews?.urlslug) : modifystr(breakingnews?.Title ||  breakingnews?.title)}/${breakingnews.id}`} >
                                                <Image className={style.News_image} loader={imageLoader} src={`${breakingnews?.Image || breakingnews?.image}`} height={10} width={100} alt="news_image" quality={100} />
                                                <div className={style.News_image_title}>
                                                    <h2 className={`card-text  ${style.card_text}`}>{breakingnews?.Title?.slice(0, 80) || breakingnews?.title}</h2>
                                                </div>
                                            </Link>
                                            <div className={`col-12 ${style.viewCount}`}>
                                                <div className={`col-md-6 col-4 ${style.viewCounteye}`}>
                                                    <span>{breakingnews?.ViewCount}</span><AiFillEye></AiFillEye>
                                                </div>
                                                <div className={`col-md-6 col-8 ${style.ViewCountDate}`}>
                                                    <p >{breakingnews?.created?.slice(0, 10) || breakingnews?.post_date}</p>
                                                </div>
                                            </div>
                                    
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
                <div className={`${'row'} ${style.BreakingButton}`}>
                    <div className='col-12 ' id='Buttongap'>
                        {next < data?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < data?.length && (
                            <button className={next <= 5 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                            >
                                Read Less
                            </button>
                        )}
                    </div>

                </div>
            </div>

        </div>
    )
}



export default Card


