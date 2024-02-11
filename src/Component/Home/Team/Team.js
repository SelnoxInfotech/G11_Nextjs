
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import style from "../../../styles/Style.module.scss"
import ScrollContainer from 'react-indiana-drag-scroll';
export default function Teams() {
  const [Teamlog, SetTeamlogo] = useState([]);

  useEffect(() => {

    axios(" https://grand11.in/g11/api/teams", {
      method: 'GET',

    }).then(response => {
      if (response.status === 200) {
        SetTeamlogo(response.data.result)
      }
    })
  }, [])

  return (

    <div className={`${'container-fluid'} ${style.teams_color}`}>
      <div className="row  ">
        <h2>Teams</h2>
      </div>
      <div className="row">
        <div className="col-12">
          <ScrollContainer className={style.BreakingnewsScroll}>
            {/* <div className={`col-12 `}> */}
              <div className= {`d-flex`}>
                {
                  Teamlog.map((data, index) => {
                    return (
                      <div className={`${style.teams_image_container}`}>
                        <img className={style.team_img} src={`https://grand11.in/g11/${data.image}`} alt="G11-Fantasy Cricket Prediction for Today's Match" />
                        <p >{data.name}</p>
                      </div>
                      // <div className="col-12  team_text">
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
