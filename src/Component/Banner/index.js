'use client'
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Link from 'next/link'
import style from "../../styles/Style.module.scss"
function Index({match}) {
    var settings = {
        infinite: false,
        slidesToScroll: 1,
        autoplay: true  ,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        asNavFor: null,
        arrows: false
    };
    return (

        <div className={style.Banner_img}>
            <div className={`container ${style.center} `}>
                <div className='row '>
                    <div className={`${style.col} col-12`}><h1>{"Fantasy Cricket Prediction Today's Match"}</h1></div>
                </div>
            </div>
            <div className={style.top}>
                <Slider {...settings}  >
                    {
                        match?.result?.map((match, index) => {

                            return (
                                <div className={` ${style.banner_field}`} key={index} >

                                    <div className='row '>

                                        <div className='col-12'>
                                            <Link href={`cricket-prediction/${match.id}/${match.title.replace(/\s+/g, '-')}`} >
                                                <div className='col-sm'>
                                                    <span style={{ color: "white" }}>{match.first_team}</span>
                                                </div>
                                                <div className='col-sm'>
                                                    <span style={{ color: "red" }}> Vs </span>
                                                </div>
                                                <div className='col-sm'>
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