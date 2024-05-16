"use client"
import React from 'react';
// import Slider from "react-slick";
import Link from 'next/link';
import style from "../../../styles/Style.module.scss"
import Image from 'next/image';
// import image1 from "./g11BannerDesign.webp";
import Slider from "./slider"
function Index({ match, image }) {

    const slides =  match?.map((match, index) => (
        <div className={style.banner_field} key={index}>
          <Link href={`/cricket-match-predictions/${match.id}`}>
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
      ));
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