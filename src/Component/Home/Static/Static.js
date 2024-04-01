import React from 'react'
import style from "../../../styles/Style.module.scss"
export default function Static_todaymatch() {
    return (
        <div className={`${'container-fluid' } ${style.Static}`}>
         
            <div className={`row mt-2  ${style.staticsectioncontent}`}>
                <div className={`${'col-12'}  ${style.latest_n} ${style.todaymatchli}`}>
                  <h2 className={style.StaticTitle}>#1 Dream11 Fantasy Cricket Prediction Today Match</h2>
                </div>
                <div className='col-12'>
                    <ul>
                        <li>G11 provides the most accurate updated Dream11 cricket prediction for today&#39;s
                            match. Our experts provide our users with the best teams that increase their chances
                            of winning Dream11 matches and earning more money.
                        </li>
                        <li>We offer the most precise information on Dream11 cricket team forecasts and team
                            selection including the captain, Vice-captain, and predicted playing 1.
                        </li>
                        <li>G11 also gives the best team prediction for Grand League teams and small league
                            teams.
                        </li>
                    </ul>

                </div>
             </div>
             <div className={style.bgelle}></div>
        </div >
    )
}
