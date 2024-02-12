import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import ScrollContainer from 'react-indiana-drag-scroll';
import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
import Image from 'next/image';
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
    return (
        <div className={`${'container-fluid'} ${style.BreakingNewsSectionHomepage}`} >
            <div className={style.latest_bottem}>
                <div className="row border  ">
                    <div className="col-md-12 View_All_link">
                        <div>
                            <h3>   <span className={style.hadding}> Breaking</span> <span className="latest_n hadd">News</span></h3>
                            {/* <span className="  position-absolute end-0 view_all"><Link to="/BreakingNews"> View All  </Link></span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={` ${style.Breaking} `}>

                <ScrollContainer className={style.BreakingnewsScroll}>

                    <div className='col-12 d-flex gap-4'>
                        {Breaking !== undefined && Breaking?.map((data, index) => {

                            return (
                                <div key={index}   >
                                    <div className={'col'} style={{ width: "450px" }}>
                                        <Image src={`https://www.g11fantasy.com/${data?.Image}`} alt="G11-Fantasy Cricket Prediction for Today's Match"  width={400} height={100} />
                                        <div className="col" style={{ height: "50px" }} >
                                            <Link href={`/cricket-breakingnews/${data?.id}/${modifystr(data?.Title?.replace(/\s+/g, '-').toLowerCase())}`} >
                                                {data?.Title.substr(0, 100)}
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col ">
                                        <span className="BreakingNews_date d-flex" >
                                            <span className="ClenderIcon"> <CiCalendarDate></CiCalendarDate></span>
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