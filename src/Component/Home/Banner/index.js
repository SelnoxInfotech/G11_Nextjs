
import React from 'react';
import Slider from "react-slick";
import Link from 'next/link';
import style from "../../../styles/Style.module.scss"
import Image from 'next/image';
import image1 from "./converted_banner.webp";

function Index({ match ,image }) {
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


    var settings = {
        infinite: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        asNavFor: null,
        arrows: false
    };
    const imageLoader = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com${src}?w=${width}&q=${quality || 75}`
    }
    return (
        // style={{backgroundImage: `url(${'/Image/banner.jpg'})`}}
        <div className={style.Banner_img}  >
            <Image
                alt="G11Banner"
                src={image1}
                // loader={imageLoader}
                quality={70}
                width={100}
                height={100}
                sizes="90vw"
                style={{
                    width: '100%',
                    height: '469px',
                    position: "absolute",
                    zIndex: "-1"
                }}
            ></Image>
            <div className={`container ${style.center} `}>
                <div className='row '>
                    <div className={`${style.col} col-12`}><h1>{"Fantasy Cricket Prediction Today's Match"}</h1></div>
                </div>
            </div>
            <div className={style.homepagebannertext}>
                <Slider {...settings}  >
                    {
                        match?.map((match, index) => {

                            return (
                                <div className={` ${style.banner_field}`} key={index} >

                                    <div className='row '>

                                        <div className='col-12'>
                                        
                                            <Link href={`/cricket-match-predictions/${match.id}`} className='row ' >
                                                <div className='col-sm-12 '>
                                                    <span style={{ color: "white" }}>{match.first_team}</span>
                                                </div>
                                                <div className='col-sm-12 '>
                                                    <span style={{ color: "red" }}> Vs </span>
                                                </div>
                                                <div className='col-sm-12 '>
                                                    <span style={{ color: "white" }}>{match.second_team}</span>
                                                </div>
                                            </Link>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>

    );
}

export default Index;