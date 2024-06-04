"use client"
import React from 'react';
// import Slider from "react-slick";
import Link from 'next/link';
import style from "../../../styles/Style.module.scss"
import Image from 'next/image';
// import image1 from "./g11BannerDesign.webp";
import Slider from "./slider"
function Index({ match }) {
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

    return str.toLowerCase()
  }

  const slides = match?.map((match, index) => {
    const matchesObject = {};
    const l = match.match_discription?.split('</p>')[0].replace(/(<([^>]+)>)/gi, "");
    [l].forEach((match, index) => {
      matchesObject[`Match_${index + 1}`] = match.replace(/&ndash;/g, '-');
    });
    return (
      <div className={style.banner_field} key={index}>
        <Link href={`/cricket-match-predictions/${modifystr(matchesObject?.Match_1?.split(/:|-/)[1]?.replace(/&nbsp;/g, '')) + "-dream11-prediction-today-match"}/${match.id}`}>
          <div className='row'>
            <div className='col-12'>
              <div className='row'>
                <div className='col-sm-12'>
                  <span className={style.match_Title}>{match.first_team}</span>
                </div>
                <div className='col-sm-12'>
                  <span style={{ color: "red" }}> Vs </span>
                </div>
                <div className='col-sm-12'>
                  <span style={{ color: "white" }}>{match.second_team}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    )
  });
  return (

    <div className={style.Banner_img}  >
      <div className={`container ${style.center} `}>
        <div className='row '>
          <div className={`${style.col} col-12`}><h1>{"Fantasy Cricket Prediction Today's Match"}</h1></div>
        </div>
      </div>
      <div className={style.homepagebannertext}>
        <Slider slides={slides} />
      </div>



    </div>

  );
}

export default Index;