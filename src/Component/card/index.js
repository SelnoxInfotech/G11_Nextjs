"use client"
import React from 'react';
import style from "../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { AiFillEye } from "react-icons/ai"
import { RWebShare } from "react-web-share";
import { BsFillShareFill } from "react-icons/bs"
import Button from "react-bootstrap/Button";
import { fetchData1 } from '../../pages/api/utils/api';
const Card = ({ props, query }) => {
    const [data, setdata] = React.useState(props)
    const imagePerRow = 8
    const [next, setNext] = React.useState(imagePerRow);
    function modifystr(str) {
        str = str?.replace(/[^a-zA-Z0-9/ ]/g, "-");
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
    const imageLoader = ({ src, width, height, quality }) => {
        return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
    }


    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    React.useEffect(() => {
        if (data === undefined) {

            fetchData1().then((res) => {
                setdata(res)
            })
        }
    })


    return (
        <div className='container-fluid center'>
            <div className={`${"row"} ${style.Breaking_new}`}>
                <div className={`col-12 ${style.breaking_news_hed}`}>
                    <h1> Cricket Breaking News ON TRENDING TOPICS</h1>
                </div>

                {
                    data?.slice(0, next)?.map((breakingnews, index) => {
                        return (

                            <div className={`col-xs-12 col-sm-6 col-md-3  ${style.Breaking_news_gap}`} key={index}>
                                <div className="card1 card">
                                    <div className="video text-center">

                                        <div className={`${"col"} ${style.ShareOption}`}>
                                            <RWebShare
                                                data={{
                                                    url: `http://weedx.site/cricket-breaking-news/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title)}/${breakingnews.id}`

                                                }}
                                                onClick={() => console.log("shared successfully!")}
                                            >
                                                <Button className={`${style.ShareButton}`}>
                                                    <BsFillShareFill color='#c2121c'></BsFillShareFill>
                                                </Button>
                                            </RWebShare>

                                        </div>
                                        <Link className={`${style.hovereffect}`} href={`/${query}/${modifystr(breakingnews?.urlslug !== null ? breakingnews?.urlslug?.toLowerCase() : breakingnews?.Title)}/${breakingnews.id}`} >
                                            <Image className={style.News_image} loader={imageLoader} src={`${breakingnews.Image}`} height={10} width={100} alt="news_image" quality={100} />
                                            <div className={style.News_image_title}>
                                                <h2 className={`card-text  ${style.card_text}`}>{breakingnews.Title.slice(0, 80)}</h2>
                                            </div>
                                        </Link>
                                        <div className={`col-12 ${style.viewCount}`}>
                                            <div className={`col-6 ${style.viewCounteye}`}>
                                                {/* <AiFillEye></AiFillEye>  <span>{breakingnews?.ViewCount} view</span> */}
                                            </div>
                                            <div className={`col-6 ${style.ViewCountDate}`}>
                                                <p >{breakingnews.created.slice(0, 10)}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                }
                <div className={`${'row'} ${style.BreakingButton}`}>
                    <div className='col-12 ' id='Buttongap'>
                        {next < props?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < props?.length && (
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