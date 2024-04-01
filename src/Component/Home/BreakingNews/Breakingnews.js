import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
import { IoMdEye } from "react-icons/io";

const Breakingnews = ({ Breaking }) => {
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
        return `https://www.g11fantasy.com${src}?w=${width}&q=${quality || 75}`
      }

    return (
        <div className={`${'container'} ${style.BreakingNewsSectionHomepage}`} >
         
                 <h2 className={style.sectionMainTitle}> Breaking News</h2>  
                <div className={` ${style.Breaking} `}>

                    <ScrollContainer className={style.BreakingnewsScroll}>

                        <div className='col-12 d-flex gap-4 py-3'>
                            {Breaking !== undefined && Breaking?.map((data, index) => {
                                console.log(data ,'data')
                                return (
                                    <div key={index} className={style.homepagebreakingness} >
                                        <div className={'col'} >
                                                <Link href={`/cricket-breaking-news/${modifystr(data?.Title?.replace(/\s+/g, '-').toLowerCase())}/${data?.id}`} >
                                                    <div className={style.breakingnewshomeimage}><Image loader={imageLoader} src={`${data?.Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match"  width={400} height={100} /></div>
                                                    <h4 className={style.breakingnewshometitle}> {data?.Title.substr(0, 100)}</h4> 
                                                </Link>
                                        
                                        </div>
                                        <div className="col d-flex w-100 align-items-center justify-content-between ">
                                               <span className={style.BreakingNews_view}><IoMdEye /> {data?.ViewCount} </span>
                                                <span className={`${style.BreakingNews_date}`} >
                                                    <span className="ClenderIcon"> <CiCalendarDate color='#c2121c'></CiCalendarDate></span>
                                                    {data?.created.slice(0, 10)}
                                                </span>

                                        </div>
                                    </div >
                                )
                            })}
                        </div>
                    </ScrollContainer>

                </div>


        </div>



    );
};




// 
export default Breakingnews;