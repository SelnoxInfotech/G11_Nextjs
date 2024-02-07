import React from 'react';

import style from "../../../styles/Style.module.scss"
import Link from 'next/link';
const Breakingnews = ({ latestnews }) => {
    console.log(latestnews)
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
                            <h3>   <span className={style.hadding}> Latest</span> <span className="latest_n hadd">News</span></h3>
                            {/* <span className="  position-absolute end-0 view_all"><Link to="/BreakingNews"> View All  </Link></span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={` ${style} `}>

        

            </div>


        </div>



    );
};

export default Breakingnews;