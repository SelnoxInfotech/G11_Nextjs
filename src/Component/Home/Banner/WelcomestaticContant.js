import React from 'react'
import style from "../../../styles/Style.module.scss"
export default function Static_Content() {
    return (
        <div className={`${ style.Static} container-fluid`}>
            <div className={`${style.Static_row} `}>
                <div className='col-12' >
                    <h2 className={style.welcome}>Welcome to G11</h2>
                </div>
                <div className='col-12 latest_n  center '>
                    <h2>Fantasy Cricket Prediction Site</h2>
                </div>
                <div className='col-12 center font '>
                    <p>We really aim to give you the best cricket prediction. Our team experts analyze all the
                        conditions for winning chances and all the factors like pitch reports, recent performances,
                        weather conditions, and statistics that can affect a player&#39;s performance.</p>
                </div>
                <div className='col-12 center font' >
                    <p>Many of our guides are excellent resources for online betting in general as many of our tips
                        can be used to place bets on a variety of platforms including Dream11, MyTeam11,
                        MyCircle11, Gamezy, FanFight, Playerzpot, MyFab11, 11Wickets, BalleBaazi, Howzat,
                        Fanspole, HalaPlay and a lot more.</p>
                </div>
                <div className='col-12 center font'>
                    <p>After cross-checking and analyzing all the data, we provide the best tips and previews for
                        Grand League (GL), Small League (SL), and H2H teams.</p>
                </div>
            </div>
        </div>
    )
}
