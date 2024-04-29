import React from 'react';
import parse from 'html-react-parser';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
const Breakingnews = ({ latestnews }) => {



    const imageLoader = ({ src, width, quality }) => {
        return `https://www.g11fantasy.com${src}?w=${width}&q=${quality || 75}`
      }
    
    return (
        <div className={`${'container'} ${style.LatestNewsSection}`} >
            <h2 className={style.sectionMainTitle}>Ipl 2024  Latest News</h2>
                     
           
            <div className={`row ${style.box}`}>
                <div className={`${style.imageCenter} col`}>
                   
                  <Link href={`/cricket-breaking-news/${latestnews[0].Title.replace(/\s+/g, '-')}/${latestnews[0].id}`}>
                  <Image className={style.latestnews_image} loader={imageLoader} width={600} height={500} src={`${latestnews[0].Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                  </Link>
                </div>
                <div className={`${style.latestnewshomepage} col`}>
                    <Link href={`/cricket-breaking-news/${latestnews[0].Title.replace(/\s+/g, '-')}/${latestnews[0].id}`}>   <div><h3> {latestnews[0].Title.substr(0, 55)}</h3></div></Link>
                    <div className={style.latestnewsTextdesc}><span className={`${style.text}`}>{parse(latestnews[0].Description.substr(0, 1000))}</span></div>      
                    <Link href={`/cricket-breaking-news/${latestnews[0].Title.replace(/\s+/g, '-')}/${latestnews[0].id}`}><button className={`${style.highlightcardbtn} ${style.hoverSlideRight}`}>Read Full News</button></Link>
                </div>
            </div>


        </div>



    );
};

export default Breakingnews;