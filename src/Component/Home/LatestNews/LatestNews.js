import React from 'react';
import parse from 'html-react-parser';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
const Breakingnews = ({ latestnews }) => {

 console.log(latestnews )

    const imageLoader = ({ src, width, quality }) => {
        console.log(src)
        return `https://www.g11fantasy.com/${src}?w=${width}&q=${quality || 75}`
      }
    
    return (
        <div className={`${'container-fluid'} ${style.LatestNewsSection}`} >
            <div className={style.latest_bottem}>
                <div className="row border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                            <h3><span className={style.hadding}> Ipl 2024  Latest</span> <span className="latest_n hadd">News</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` col ${style.box}`}>
                <div className={`${style.imageCenter} col`}>
                    <Image loader={imageLoader} width={600} height={500} src={`${latestnews[0].Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                </div>
                <div className='col'>
                    <Link href={`/cricket-breaking-news/${latestnews[0].Title.replace(/\s+/g, '-')}/${latestnews[0].id}`}>   <div><h3> {latestnews[0].Title.substr(0, 55)}</h3></div></Link>
                    <div><span className={`${style.text}`}>{parse(latestnews[0].Description.substr(0, 1000))}</span></div>      
                    <Link href={`/cricket-breaking-news/${latestnews[0].Title.replace(/\s+/g, '-')}/${latestnews[0].id}`}><button className="btn primary hovereffect" >Read Full News</button></Link>
                </div>


            </div>


        </div>



    );
};

export default Breakingnews;