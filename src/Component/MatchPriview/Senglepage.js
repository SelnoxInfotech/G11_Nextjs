"use client"
import React from 'react';
import Link from 'next/link';
import style from "../../styles/Style.module.scss"
import Image from 'next/image';
function Senglepage({ props, image }) {
    const imagePerRow = 6
    const [next, setNext] = React.useState(imagePerRow);


    const handleMoreImage = () => {
        setNext(next + imagePerRow);
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
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

    console.log(image[7]?.image, "asfafs")
    const imageLoader1 = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
    }
    return (

        <section id={style.team} className="pb-5">
            <div className="container">
                <h1 className={style.section_title}>Today Match Predictions - Cricket Betting Tips from Experts (100% Free)</h1>
                <div className="row" id="team_data" >
                    {
                        props?.slice(0, next)?.map((data, index) => {
                            return (
                                <div className="col-sm-4 bottom" key={index}>

                                    <div className="container-fluid  ">

                                                <Image
                                                    style={{
                                                        width: '22rem',
                                                        borderRadius: '20px',
                                                        height: '100%',
                                                        objectFit: 'cover',
                                                        zIndex: 0
                                                    }}
                                                    sizes="100vw" loader={imageLoader1} src={image[7].image} width={'100'} height={'100'} alt="G11-Fantasy " />
                                        <Link href={`/latest-match/cricket-prediction/[[...id]]`} as={`/latest-match/cricket-prediction/${`match-preview`}/${encodeURIComponent(data.title.replace(/\s+/g, '-'))}/${encodeURIComponent(data.id)}`} >

                                            <div className="row center grid_row">
                                                <div className="col-12 center color">
                                                    {data.title}
                                                </div>
                                                <div className="col-12 center fonting font" >
                                                    <p>{data.first_team} vs {data.second_team}</p>

                                                </div>
                                                <div className="col-12 center fonting">
                                                    <span>{data.date}</span> |<span>{data.time}</span>
                                                </div>
                                                <div className="col-12 center">
                                                    {/* <img src={`https://grand11.in/g11/${data.team_one_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" /> */}
                                                    <span className="vs" >VS</span>
                                                    {/* <img src={`https://grand11.in/g11/${data.team_two_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" /> */}
                                                </div>
                                                <div className="col-12 center">

                                                </div>

                                                <div className="col-12 center location_match">
                                                    <p className="city_location"><span className="location">match Location-</span>{data.city}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
                <div className='row'>
                    <div className='col-12 center '>
                        {next < props?.length && (
                            <button className="btn readleft" onClick={handleMoreImage}
                            >
                                Load more
                            </button>
                        )}
                        {next < props?.length && (
                            <button className={next <= 6 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
                            >
                                Read Less
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </section>


    );
}

export default Senglepage;