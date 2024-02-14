import React from 'react';
import parse from 'html-react-parser';
import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
const HightLight = ({ latestnews }) => {
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
    return (
        <div className={`${'container-fluid'} ${style.HightLight}`} >
            <div className={style.latest_bottem}>
                <div className=" border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                            <h3><span className={style.hadding}> HighLight</span> </h3>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollContainer className={style.BreakingnewsScroll}>
                <div className='col-12 d-flex '>
                    {
                        latestnews.map((data, index) => {
                            return (
                                <>
                                    <div className={`${style.HightCol} col-6 col gap-3`} key={index}>
                                        <div className='col' >
                                            <Image loader={imageLoader} className="hight_news" width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: '90%' }} src={`${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                        </div>
                                        <div className='col'>
                                            {/* <Link href={`/cricket-news/${data.id}/${data.title.replace(/\s+/g, '-')}`}>    */}
                                            <div className="hedding hovereffect text"><h3> {data.title.substr(0, 55)}</h3></div>
                                            {/* </Link> */}
                                            <div><span className="content text">{parse(data.content.substr(0, 1000))}</span></div>
                                            {/* <Link href={`/cricket-news/${data.id}/${data.title.replace(/\s+/g, '-')}`}> */}
                                            <button className="btn primary hovereffect" >Read Full News</button>
                                            {/* </Link> */}
                                        </div>
                                    </div>
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