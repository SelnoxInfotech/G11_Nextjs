
import React from "react";
import axios from 'axios';
import style from "../../../styles/Style.module.scss"
import ScrollContainer from 'react-indiana-drag-scroll';
import Image from "next/image";
export default function Teams() {
  const [teams, setTeams] = React.useState([])
  const imageLoader = ({ src, width, quality }) => {
    return `https://g11fantasy.com${src}?w=${width}&q=${quality || 75}`
  }

  React.useEffect(() => {
    axios("https://g11fantasy.com/NewsSection/Get-AllTeamImage/").then((res) => {
    setTeams(res.data)
    
    })
  }, [])
  return (

    <div className={`${'container-fluid'} ${style.teams_color}`}>
      {/* <div className="row  ">
        <h2>Teams</h2>
      </div> */}
      <div className="row">
        <div className="col-12">
          <ScrollContainer className={style.BreakingnewsScroll}>
            {/* <div className={`col-12 `}> */}
            <div className={`${style.teams_image_box}`}>
              {
                teams?.map((data, index) => {
                  return (
                    <div key={index} className={`${style.teams_image_container}`}>
                      <div >
                        <Image
                          loader={imageLoader}
                          className={style.team_img}
                          width={128}
                          height={127}
                          layout="fixed" 
                          onError={(e) => {
                            e.target.onerror = null; // Reset the error handler to prevent infinite loop
                            e.target.srcset = "https://g11fantasy.com/image/images/download/media/Static/G11.png"; // Set the default image source
                          }}
                          src={data.image || "/G11.png"}
                          alt="G11-Fantasy Cricket Prediction for Today's Match"
                        />
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
