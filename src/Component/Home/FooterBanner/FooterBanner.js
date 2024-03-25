"use client"
import React from 'react'
import style from "../../../styles/Style.module.scss"
import Image from 'next/image'
export default function Footer() {
  const urlAndriod = "https://play.google.com/store/apps/details?id=com.g11.g11&pli"
  const UrlApple = " https://apps.apple.com/in/app/g11-dream11-prediction/id1618742298"
  const imageLoader = ({ src, width, quality }) => {
    return `https://www.g11fantasy.com${src}?w=${width}&q=${quality || 75}`
  }
  return (

    <div className={`${'container-fluid'} ${style.footer_head}`}>

      <div className={`${style.footer_text}`}>

        <span>OFFICAL APP    </span>
        <p>G11 SPORT  </p>
        <p>FANTASY PREDICTION</p>
        <a href={urlAndriod}><button type="button" className="btn btn-light">DOWNLOAD NOW</button></a>

      </div>
      <div className='container-fluid '>
        <div className='row '>
          <div className='col-12 '>
            <div className='position-absolute bottom-50 end-50 ' id={`${style.end}`}>
            <Image   loader={imageLoader} width={600} height={500}   src="/image/images/download/media/Static/screen.jpg" alt="G11-Fantasy Cricket Prediction for Today's Match" className={`${'img-responsive'} ${style.size}`} />
            </div>
       
          </div>
        </div>
      </div>


      <div className='position-absolute bottom-0 end-0 d-flex' style={{  alignContent: 'center'}}>
        {/* <a href={urlAndriod}> <img className={style.andriod_logo} src='/Image/google-play-badge.png' alt='Andriod' /></a>
        <a href={UrlApple}><img className={style.apple_logo} src='/Image/app-store.png' alt='apple' /></a> */}
      </div>
    </div>

  )
}