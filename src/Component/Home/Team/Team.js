
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import style from "../../../styles/Style.module.scss"
import ScrollContainer from 'react-indiana-drag-scroll';
import Image from "next/image";
export default function Teams({Teamsdata}) {
  const imageLoader = ({ src, width, quality }) => {
    return `https://grand11.in/g11/${src}?w=${width}&q=${quality || 75}`
  }

  return (

    <div className={`${'container-fluid'} ${style.teams_color}`}>
      <div className="row  ">
        <h2>Teams</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <ScrollContainer className={style.BreakingnewsScroll}>
            {/* <div className={`col-12 `}> */}
              <div className= {`${style.teams_image_box}`}>
                {
                  Teamsdata.map((data, index) => {
                    return (
                      <div key={index} className={`${style.teams_image_container}`}>
                       <div >
                       <Image loader={imageLoader} className={style.team_img} width={100} height={20} src={`${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                        <p className={style.teamNametitle} >{data.name}</p>
                       </div>
                      </div>
                    );
                  })
                }
              {/* </div> */}
            </div>

          </ScrollContainer>

          <div className="row  fot_slider_teams ">
            <div className="col-12 center ">
              <p>We also have G11 Fantasy Cricket Prediction application. Download G11 app now and earn
                more profit and more money.</p>
            </div>
          </div>
        </div>
      </div>

    </div>



  )
}
