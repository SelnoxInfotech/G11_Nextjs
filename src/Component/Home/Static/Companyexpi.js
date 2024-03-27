import React from 'react'
import style from "../../../styles/Style.module.scss"
import { FaUser } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { FaCalendar } from "react-icons/fa";

export default function Company_expri_detail() {
    return (
        <div className='container-fluid ' style={{marginTop:"10px"}}>
            <div className={style.Company_expri_detail_wrapper}>
               <div className={`${style.Company_expri_detail}`}>
               <div className={`${style.box}`}>
                    <span><FaUser  /></span>
                    <p className=''>5K+</p>
                    <p>PRIME USER</p>
              </div>
               </div> 
               <div className={`${style.Company_expri_detail}`}>
                  <div className={`${style.box}`}>
                        <span><GrUserExpert  /></span>
                        <p className=''>20+</p>
                        <p>EXPERTS</p>
                  </div>
               </div>
               <div className={` ${style.Company_expri_detail}`}>
                  <div className={`${style.box}`}>
                        <FaCalendar  />
                        <p className=''>4+</p>
                        <p>YEARS EXPERIENCE</p>
                  </div>
               </div>
            </div>
        </div>
    )
}

