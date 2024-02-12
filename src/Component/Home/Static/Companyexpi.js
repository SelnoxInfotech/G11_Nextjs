import React from 'react'
import style from "../../../styles/Style.module.scss"
export default function Company_expri_detail() {
    return (
        <div className='container-fluid ' style={{marginTop:"10px"}}>
             <div className='row  '>
               <div className={`${"col-sm"} ${style.Company_expri_detail}`}>
               <div className={`${style.box}`}>
              <p className=''>5K+</p>
                    <p>PRIME USER</p>
              </div>
                 </div> 
               <div className={`${"col-sm"} ${style.Company_expri_detail}`}>
              <div className={`${style.box}`}>
              <p className=''>20+</p>
                    <p>EXPERTS</p>
              </div>
                </div>
         
                 <div className={`${"col-sm"} ${style.Company_expri_detail}`}>
                 <div className={`${style.box}`}>
              <p className=''>4+</p>
                    <p>YEARS EXPERIENCE</p>
              </div>
                 </div>
            </div>
           
        </div>
    )
}

