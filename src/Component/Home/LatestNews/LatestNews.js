import React from 'react';
import parse from 'html-react-parser';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
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
            <div className={` row `}>
                <div className={`${style.imageCenter} col-6`}>
                    <img className="hight_news  " src={`https://grand11.in/g11/${latestnews[0].image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                </div>
                <div className='col-6'>
                    <Link href={`/cricket-news/${latestnews[0].id}/${latestnews[0].title.replace(/\s+/g, '-')}`}>   <div><h3> {latestnews[0].title.substr(0, 55)}</h3></div></Link>
                    <div><span className={`${style.text}`}>{parse(latestnews[0].content.substr(0, 1000))}</span></div>      
                    <Link href={`/cricket-news/${latestnews[0].id}/${latestnews[0].title.replace(/\s+/g, '-')}`}><button className="btn primary hovereffect" >Read Full News</button></Link>
                </div>


            </div>


        </div>



    );
};

export default Breakingnews;