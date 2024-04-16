import React from 'react';
import style from "../styles/Style.module.scss"
import Seo from '../Component/Seo/Seo';
const Faq = () => {
    return (
        <div className={`${"container"} ${style.aboutus}`}>
                 <Seo
                      Breadcrumlist={[{Home:"https://g11prediction.com/" } , {FAQ: "/faq/"}]}
             image={"https://www.g11fantasy.com/image/images/download/media/Static/favicon.jpg"}
                title={" FAQs | G11 | Fantasy Cricket  Prediction Today's Match |  "}
                description={"FAQs, G11 Fantasy Cricket Betting Prediction Site and Application. Dream11, My11Circle, Playerzpot, Howzat, Gamezy and more. Dream11 Betting Tips. "}
                keywords={"IPL 2024,IPL schedule 2024, IPL teams 2024, IPL venues 2024, Dream11 prediction, IPL 2024 match prediction, IPL 2024"}
                canonical={"https://g11prediction.com/faq/"}
           ></Seo>
        <div className='row'>
            <div className={`${'col-12'} ${style.hedding}`}>
                <h1>    What is G11 App?</h1>
            </div>

            <hr></hr>

        </div >
        <div className='container'>
            <div className='row '>
                <div className={`${"col-12"} ${style.text}`}>
                    <p>{`G11 - fantasy Prediction and tips is a newly launched Fantasy Sports Prediction app that provides Match Analysis, Pitch Report, Weather Report, Player's, cheat sheet , match preview, recent stat, Probable XI and Teams for playing on Various Fantasy Sports apps like Dream11, My11Circle, MyTeam11, FanFight, PayTM First Game etc.`}</p>

                </div>
            </div>
        </div>
        <div className='row center'>
            <div className={`${'col-12'} ${style.hedding}`}>
                <h1>  Do you guys upade match analysis regularly?</h1>
            </div>
            <hr></hr>
        </div>
        <div className='container'>
            <div className='row '>
                <div className='col-12 textSize '>
                    <p>
                        yes from past 5 years. every day. we have been updating match previews regularly and on time . thatswhy pwople love us
                    </p>

                </div>
            </div>
        </div>


        <div className='container'>
            <div className='row'>
                <div className={`${'col-12'} ${style.hedding}`}>
                    <h1>   What makes you special from others?</h1>
                </div>

                <hr></hr>

                <div className='container'>
                    <div className='row '>
                        <div className={`${"col-12"} ${style.text}`}>
                            <p> Our Unique Research Analysis, Team Guide and Team Blueprint for each match helps users to make their own team in less time.</p>
                            <p>{`If you are always busy with your work and don't get enough time to Research for a match, then you are at right place.`}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Faq;