import React from 'react';
import parse from 'html-react-parser';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
const Breakingnews = ({ latestnews }) => {

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
    const imageLoader = ({ src, width, quality }) => {
        return `https://grand11.in/g11/${src}?w=${width}&q=${quality || 75}`
      }
    
    return (
        <div className={`${'container-fluid'} ${style.LatestNewsSection}`} >
            <div className={style.latest_bottem}>
                <div className="row border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                            <h3><span className={style.hadding}> Latest</span> <span className="latest_n hadd">News</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={` col ${style.box}`}>
                <div className={`${style.imageCenter} col`}>
                    <Image loader={imageLoader} width={600} height={500} src={`${latestnews[0].image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                </div>
                <div className='col'>
                    <Link href={`/cricket-news/${latestnews[0].title.replace(/\s+/g, '-')}/${latestnews[0].id}`}>   <div><h3> {latestnews[0].title.substr(0, 55)}</h3></div></Link>
                    <div><span className={`${style.text}`}>{parse(latestnews[0].content.substr(0, 1000))}</span></div>      
                    <Link href={`/cricket-news/${latestnews[0].title.replace(/\s+/g, '-')}/${latestnews[0].id}`}><button className="btn primary hovereffect" >Read Full News</button></Link>
                </div>


            </div>


        </div>



    );
};

export default Breakingnews;