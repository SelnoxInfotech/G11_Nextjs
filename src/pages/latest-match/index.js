import React, { useState } from "react";
import Link from "next/link";
import axios from "axios"
import style from "../../styles/Style.module.scss"
import Senglepage from "@/Component/MatchPriview/Senglepage";
export default function UpdateMatch({props , ImageData}) {
    // React.useEffect(() => {
    //     axios(" https://grand11.in/g11/all_matches_api.php", {
    //         method: 'GET',

    //     }).then(response => {
    //         if (response.status === 200) {

    //             setnewmatch(response.data.reverse())
    //         }


    //     })
    // }, [])
    // const handleMoreImage = () => {
    //     setNext(next + imagePerRow);
    // };
    // const handlelessImage = () => {
    //     setNext(next - imagePerRow);
    // };
    // function modifystr(str) {
    //     str = str.replace(/[^a-zA-Z0-9/ ]/g, "-");
    //     str = str.trim().replaceAll(' ', "-");
    //     let a = 0;
    //     while (a < 1) {
    //         if (str.includes("--")) {
    //             str = str.replaceAll("--", "-")
    //         } else if (str.includes("//")) {
    //             str = str.replaceAll("//", "/")
    //         } else if (str.includes("//")) {
    //             str = str.replaceAll("-/", "/")
    //         } else if (str.includes("//")) {
    //             str = str.replaceAll("/-", "/")
    //         } else {
    //             a++
    //         }
    //     }

    //     return str
    // }



    return (
        <Senglepage props ={props} image={ImageData}></Senglepage>

        // <section id="team" className="pb-5">
        //     <div className="container">
        //         <h1 className="section-title ">Today Match Predictions - Cricket Betting Tips from Experts (100% Free)</h1>
        //         <div className="row" id="team_data" >
        //             {
        //                 newMatch?.slice(0, next)?.map((data, index) => {
        //                     return (
        //                         <div className="col-sm-4 bottom" key={index}>

        //                             <div className="container-fluid updatematch ">
        //                                 <Link to={location.pathname !== "/latest-match" ? `${data.id}/${modifystr(data.title.toLowerCase())}` : `cricket-prediction/${data.id}/${modifystr(data.title.toLowerCase())}    `} >

        //                                     <div className="row center grid_row">
        //                                         <div className="col-12 center color">
        //                                             {data.title}
        //                                         </div>
        //                                         <div className="col-12 center fonting font" >
        //                                             <p>{data.first_team} vs {data.second_team}</p>

        //                                         </div>
        //                                         <div className="col-12 center fonting">
        //                                             <span>{data.date}</span> |<span>{data.time}</span>
        //                                         </div>
        //                                         <div className="col-12 center">
        //                                             <img src={`https://grand11.in/g11/${data.team_one_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
        //                                             <span className="vs" >VS</span>
        //                                             <img src={`https://grand11.in/g11/${data.team_two_img}`} width="50" height="50" alt="G11-Fantasy Cricket Prediction for Today's Match" />
        //                                         </div>
        //                                         <div className="col-12 center">

        //                                         </div>

        //                                         <div className="col-12 center location_match">
        //                                             <p className="city_location"><span className="location">match Location-</span>{data.city}</p>
        //                                         </div>
        //                                     </div>
        //                                 </Link>
        //                             </div>
        //                         </div>
        //                     )
        //                 })
        //             }


        //         </div>
        //         <div className='row'>
        //             <div className='col-12 center '>
        //                 {next < newMatch?.length && (
        //                     <button className="btn readleft" onClick={handleMoreImage}
        //                     >
        //                         Load more
        //                     </button>
        //                 )}
        //                 {next < newMatch?.length && (
        //                     <button className={next <= 6 ? 'hidden' : "btn readleft"} onClick={handlelessImage}
        //                     >
        //                         Read Less
        //                     </button>
        //                 )}
        //             </div>

        //         </div>
        //     </div>
        // </section>
    );
}

export async function getServerSideProps(ctx) {

    const url = "https://grand11.in/g11/all_matches_api.php"
    const Image = await fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    const Imageprops = await Image.json()
    const ImageData = Imageprops
  
    try {
        const response = await axios.get(url);
        const props = response.data;
        return { props: { props , ImageData} };
    } catch (error) {
        console.error("Error fetching data:", error);
        return { props: { error: "Failed to fetch data" } };
    }
}

