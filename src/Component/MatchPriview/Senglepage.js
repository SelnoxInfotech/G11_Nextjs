"use client"
import React from 'react';
import Link from 'next/link'
import style from "../../styles/Style.module.scss"
import Image from 'next/image';
import { useRouter } from 'next/router'
import { Seo } from "../../Component/Seo/Seo";
function Senglepage({ props }) {
    const router = useRouter()
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

    const imageLoader1 = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
    }

    const styling = {
        backgroundImage: `url('${"https://www.g11fantasy.com/image/images/download/media/Static/matchBackground.jpg"}')`,
        padding: "0",
        //   font-family: 'Segoe UI',
        backgroundSize: "100% 100%",
        /* filter: brightness(150%); */
        width: '300px',
        height: '300px',
        borderRadius: '20px',
    }

    const imageLoader = ({ src, width, height, quality }) => {
        return `https://grand11.in/g11/${src}?w=${width}&h=${50}&q=${quality || 75}`
    }

    // const handleClick = (event, data) => {
    //     event.preventDefault();
    //     router.push(
    //                  `/latest-match/cricket-prediction/${'match-preview'}/${modifystr(data.title)}/${data.id}`);
    // };   
    // console.log(window?.location?.host)
    return (

        <>
            {/* <Seo
                image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title="Today's Match | G11 | Fantasy Cricket Betting Prediction"
                description={"Today's Match updates, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and Many More apps"}
                keywords={"Dream11 team prediction, My11Circle prediction, cricket betting tips, Dream 11 prediction, howzat today team prediction, Playerzpot prediction, prediction for today match, My11Circle cricket team prediction, Dream11 prediction today match, howzat team prediction today match, Playerzpot Fantasy Cricket prediction, Dream11 cricket team prediction, My11Circle prediction today match, Playerzpot Circle team prediction, howzat team prediction, Today Match Prediction, howzat prediction today's match"}
                canonical={"https://g11prediction.com/latest-match"}
            ></Seo> */}
            <section id={style.team} className={style.team}>
                <div className="container">
                    <h1 className={style.section_title}>Today Match Predictions - Cricket Betting Tips from Experts (100% Free)</h1>
                    <div className={`row ${style.team}`} id="team_data" >
                        {
                            props?.slice(0, next)?.map((data, index) => {

                                return (
                                    <div className="col-sm-4 bottom" key={index}>

                                        <div className="container-fluid"

                                            style={styling}
                                        >

                                            <Link href={`/cricket-match-predictions/${'match-preview'}/${modifystr(data.title)}/${data.id}`}>


                                                <div className={` "row" ${style.grid_row} `}>
                                                    <div className="col-12 center color">
                                                        <p>  {data.title}</p>
                                                    </div>
                                                    <div className="col-12 center fonting font" >
                                                        <p>{data.first_team} vs {data.second_team}</p>

                                                    </div>
                                                    <div className="col-12 center fonting">
                                                        <span>{data.date}</span> |<span>{data.time}</span>
                                                    </div>
                                                    <div className={`${"col-12"} ${style.image}`}>
                                                        <Image style={{ height: '50px' }} loader={imageLoader} src={`${data.team_one_img}`} width={50} height={60} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                        <span className="vs" >VS</span>
                                                        <Image style={{ height: '50px' }} loader={imageLoader} src={`${data.team_two_img}`} width={50} height={50} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                    </div>
                                                    <div className="col-12 center">

                                                    </div>

                                                    <div className={`col-12 ${style.location_match}`}>
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
                    <div className='row '>
                        <div className={`col-12 ${style.loadingButton}`}>
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

        </>

    );
}

export default Senglepage;