import React from 'react'
import Link from 'next/link'
import style from "../../../src/styles/Style.module.scss"

export default function BraekingNewsSlider({props}) {


  console.log(props)

  return (
    <>
        
     <div className="container-fluid">


   <div className="row ">
     <div className={`col-4 ${style.braking_news}`}>

       <p className="align-middle">BREAKING NEWS</p>

     </div>
     <div className={`${style.scroll_container}  col`}>
       <span className={style.scroll_text}>
         <Link href={`/cricket-breakingnews/${props[0]?.id}/${props[0]?.Title?.replace(/\s+/g, '-')}`} className={style.hovereffect} > {props[0]?.Title} </Link>
       </span>
     </div>


   </div>



 </div>
      
    </>
  )
}











        // <div className="container-fluid">


        //   <div className="row ">
        //     <div className={`col-4 ${style.braking_news}`}>

        //       <p className="align-middle">BREAKING NEWS</p>

        //     </div>
        //     <div className={`${style.scroll_container}  col`}>
        //       <span className={style.scroll_text}>
        //         {/* {data[0].Title}  */}

        //         <Link href={`/cricket-breakingnews/${breakingnews[0]?.id}/${breakingnews[0]?.Title?.replace(/\s+/g, '-')}`} className={style.hovereffect} > {breakingnews[0]?.Title} </Link>
        //       </span>
        //     </div>


        //   </div>



        // </div>