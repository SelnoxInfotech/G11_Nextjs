import React from 'react';
import parse from 'html-react-parser';
import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
const HightLight = ({post}) => {
    const [latestnews, setlatestnews] = React.useState([])
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

    const imageLoader = ({ src, width, quality }) => {
        return `https://grand11.in/g11/${src}?w=${width}&q=${quality || 75}`
    }

    // React.useEffect(() => {
    //     axios("https://grand11.in/g11/api/post").then((res) => {
    //         setlatestnews(res.data.result)
    //     })
    // }, [])

    return (
        <div className={`${'container-fluid'} ${style.HightLight}`} >
            <h2 className={style.sectionMainTitle}> HighLight</h2>
            <div className={style.highlightCardWrapper}>
                <ScrollContainer vertical={false} className={style.BreakingnewsScroll}>
                    <div className={`${'col-12'} ${style.BreakingnewsScrollInside}`}>
                        {
                            post?.map((data, index) => {
                                return (
                                    <div className={`${style.HightCol} col-lg-6  col-sm-4 col-6  gap-3`} key={index}>
                                        <div className='col-lg-6 col-12 overflow-hidden' >
                                            <Image loader={imageLoader} width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '275px' }} src={`${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                        </div>
                                        <div className='col-lg-6 col-12'>
                                            <Link href={`/cricket-news/${modifystr(data.title)}/${data.id}`}>   
                                             <h3 className={style.highlightcardtitle}> {data?.title?.substr(0, 55)}</h3>
                                            </Link>
                                            <span className={style.highlightcarddescription}>{parse(data?.content) ? parse(data?.content) : ""}</span>
                                            <Link href={`/cricket-news/${modifystr(data.title)}/${data.id}`}>
                                                <button className={`${style.highlightcardbtn} ${style.hoverSlideRight}`} >Read Full News</button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </ScrollContainer>
            </div>
        </div>



    );
};





export default HightLight;