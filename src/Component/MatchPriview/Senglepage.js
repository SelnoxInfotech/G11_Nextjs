"use client"
import React from 'react';
import Link from 'next/link'
import style from "../../styles/Style.module.scss"
import Image from 'next/image';
import { useRouter } from 'next/router'
import useSWR from 'swr';
import Cardskeleton from "../../Component/skeleton/cardskeleton";
import axios from 'axios';
const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

function Senglepage(props) {
    const imagePerRow = 6

    const [data, setPropsData] = React.useState(props.props || [])
    const [next, setNext] = React.useState(imagePerRow);
    const [dataLoad, setdataLoading] = React.useState(false)
    // const { data: fetchedData, error } = useSWR('https://www.g11fantasy.com/NewsSection/Get-revesetbl_matchApi/', fetcher,);

    // let data = props.props
    // https://www.g11fantasy.com/NewsSection/Get-All_matchApiWithLimit/?limit=10
    // React.useEffect(() => {
    //     axios("https://www.g11fantasy.com/NewsSection/Get-All_matchApiWithLimit/?limit=10", {
    //         method: 'GET',

    //     }).then(response => {
    //         if (response.status === 200) {
    //   console.log(response.data)
    //             // data=response?.data
    //         }

    //     })
    // }, [])



    const handleMoreImage = () => {
        setdataLoading(true)
        setNext(next + imagePerRow);
        axios(`https://www.g11fantasy.com/NewsSection/Get-All_matchApiWithLimit/?limit=${data.length + 10}`, {
            method: 'GET',

        }).then(response => {
            if (response.status === 200) {
                // console.log(response.data)
                setdataLoading(false)
                setPropsData(response.data);
                // data=response?.data
            }

        })
    };
    const handlelessImage = () => {
        setNext(next - imagePerRow);
    };
    function modifystr(str) {

        try {
            str = str.replaceAll(/[^a-zA-Z0-9/ ]/g, "-");
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

            return str.toLowerCase()
        } catch (error) {
            return ""
        }
    }



    const imageLoader1 = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com${src}?w=${width}&q=${quality || 75}`
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
    if (!data) {
        return (
            <div className='container '>
                <div className={style.Breaking_new}>
                    <div className={style.Breaking_newCardWrapper}>
                        {
                            [1, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((e, i) => {
                                return < Cardskeleton key={i} />
                            })
                        }
                    </div>
                </div>

            </div>
        )
    }
    else {
        // if (Boolean(error)) {

        //     data = props.data
        // }
    }

    return (

        <>

            <section id={style.team} className={style.team}>
                <div className="container">
                    {/* <h2 className={style.section_title}>Today Match Predictions - Cricket Betting Tips from Experts (100% Free)</h2> */}
                    <div className={`row ${style.team} ${style.matchcardwrapper}`} id="team_data" >
                        {
                            data?.slice(0, next)?.map((data, index) => {
                                const matchesObject = {};
                                const l = data.match_discription?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
                                [l].forEach((match, index) => {
                                    matchesObject[`Match_${index + 1}`] = match.replace(/&ndash;/g, '-');
                                });
                                return (
                                    <div className={style.matchcard} key={index} >
                                        <div className='d-flex align-items-center h-100 w-100'>
                                            <Link href={`/cricket-match-predictions/${modifystr(matchesObject?.Match_1?.split(/:|-/)[1]?.replace(/&nbsp;/g, '')) + "-dream11-prediction-today-match"}/${data.id}/`} className='w-100'>


                                                <div className={` "row" ${style.grid_row} `}>
                                                    <div className="col-12 center color">
                                                        <p>  {data.title}</p>
                                                    </div>
                                                    <div className="col-12 center fonting font" >
                                                        <p className={style.matchcardteamname}>{data.first_team} vs {data.second_team}</p>

                                                    </div>
                                                    <div className="col-12 center fonting">
                                                        <span>{data.date}</span> |<span>{data.time}</span>
                                                    </div>
                                                    <div className={`${"col-12 gap-2"} ${style.image}`}>
                                                        <Image style={{ height: '50px' }} loader={imageLoader} src={`${data.team_one_img}`} className='rounded-circle' width={50} height={60} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                        <span className="vs" >VS</span>
                                                        <Image style={{ height: '50px' }} loader={imageLoader} src={`${data.team_two_img}`} className='rounded-circle' width={50} height={50} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                                                    </div>

                                                    <div className={`col-12 ${style.location_match}`}>
                                                        <p className={`${style.city_location} m-0 py-1`}>View Match Prediction</p>
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
                        {
                            dataLoad ?
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>

                                :
                                <div className={`col-12 d-flex gap-2 justify-content-center ${style.loadingButton}`}>
                                    {next < data?.length && (
                                        <button className={style.loadmorebtm} onClick={handleMoreImage}
                                        >
                                            Load more
                                        </button>
                                    )}
                                    {next < data?.length && (
                                        <button className={next <= 6 ? 'hidden' : style.loadmorebtm} onClick={handlelessImage}
                                        >
                                            Read Less
                                        </button>
                                    )}
                                </div>
                        }

                    </div>
                </div>
            </section>

        </>

    );
}

export default Senglepage;


